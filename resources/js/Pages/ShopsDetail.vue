<script lang="ts">
import Frontend from "@/Layouts/Frontend.vue";

export default {
    layout: Frontend,
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { router, Head } from "@inertiajs/vue3";
import { Skeleton } from "@/shadcn/ui/skeleton";
import { ArrowLeft } from "lucide-vue-next";
import Product from "@/Components/app/Product.vue";

type TShop = {
    id: string;
    name: string;
    image: string;
    address: string;
    slug: string;
    product_count: string;
};

type TProduct = {
    id: string;
    name: string;
    image: string;
    price: number;
    type: string;
    shop: string;
    slug: string;
    category: string;
};
type TProductMeta = {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
};

type TEmployee = {
    id: string;
    name: string;
    whatsapp: number;
};

const perPages = ref([
    { label: "10", value: 10 },
    { label: "25", value: 25 },
    { label: "50", value: 50 },
    { label: "75", value: 75 },
    { label: "100", value: 100 },
]);

const props = defineProps<{
    employees: { data: TEmployee[] };
    products: {
        data: TProduct[];
        meta: TProductMeta;
    };
    shop: TShop;
}>();

const isLoading = ref<boolean>(false);
const perPage = ref(props.products.meta.per_page);

const getProducts = (page: number) => {
    const url = ref({ per_page: perPage.value });

    if (page > 1) Object.assign(url.value, { page });

    router.get(route("frontend.shops.detail", props.shop.slug), url.value, {
        preserveState: true,
        onStart: () => (isLoading.value = true),
        onError: (errors: any) => console.log(errors),
        onFinish: () => (isLoading.value = false),
    });
};
const backToShops = () => router.get(route("frontend.shops"));
const chatWhatsapp = (whatsapp: number) =>
    `https://wa.me/${whatsapp}?text=Saya%20tertarik%20dengan%20produk%20anda`;
</script>
<template>
    <Head :title="shop.name" />
    <div class="container py-4 space-y-8 min-h-screen">
        <div
            class="flex items-center justify-between border-[1px] rounded-lg p-3 shadow-sm"
        >
            <div class="flex gap-4 items-center">
                <button
                    type="button"
                    class="bg-gray-100 p-3 rounded-full border border-gray-200 hover:bg-gray-300"
                    @click="backToShops"
                >
                    <ArrowLeft class="h-5 w-5" />
                </button>
                <div
                    class="relative w-[100px] h-[100px] rounded-full overflow-hidden bg-gray-200 p-1"
                >
                    <img
                        :src="shop.image"
                        :alt="shop.slug"
                        class="object-cover h-full rounded-full"
                    />
                </div>
                <div class="space-y-4">
                    <div>
                        <h2 class="font-semibold text-xl">
                            {{ shop.name }}
                        </h2>
                        <p class="text-[12px]">
                            <span class="font-medium text-tomato">
                                Alamat :
                            </span>
                            {{ shop.address }}
                        </p>
                    </div>
                    <div class="space-y-2 pb-2">
                        <h4 class="text-xs font-medium">Kontak Unit Layanan</h4>
                        <div class="space-x-2">
                            <a
                                :href="chatWhatsapp(employee.whatsapp)"
                                class="text-white bg-yaleblue hover:bg-blue-950 focus:ring-2 focus:ring-yaleblue font-medium rounded-lg text-[12px] px-5 py-2"
                                v-for="(employee, index) in employees.data"
                                :key="index"
                            >
                                {{ employee.name }}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="grid grid-cols-3 divide-x-[1px] divide-gray-300 w-[500px]"
            >
                <div class="text-center px-2">
                    <h4 class="font-semibold text-lg">
                        {{ shop.product_count }}
                    </h4>
                    <p class="font-normal text-xs">Produk dan Jasa</p>
                </div>
                <div class="text-center px-2">
                    <h4 class="font-semibold text-lg">08.00 - 15.00</h4>
                    <p class="font-normal text-xs">Jam Operasional UPJ</p>
                </div>
            </div>
        </div>
        <div class="flex items-start justify-between">
            <h2 class="text-sm font-semibold text-tomato lg:text-lg">
                Daftar Produk dan Jasa
            </h2>
            <select
                class="bg-nasplesyellow border border-white text-[12px] font-semibold rounded focus:ring-yellow-500 focus:border-yellow-500 p-1 w-24"
                v-model="perPage"
                @change="getProducts(1)"
            >
                <option
                    :value="limit.value"
                    v-for="(limit, index) in perPages"
                    :key="index"
                >
                    {{ limit.label }} data
                </option>
            </select>
        </div>
        <div class="w-full grid grid-cols-2 lg:grid-cols-5 gap-3">
            <Product
                :product="product"
                v-for="(product, index) in products.data"
                :key="index"
                v-if="!isLoading"
            />
            <div class="space-y-3" v-for="index in 5" v-else>
                <Skeleton class="h-[200px] w-full rounded-xl" />
                <div class="space-y-2">
                    <Skeleton class="h-4 w-full" />
                    <Skeleton class="h-4 w-full" />
                </div>
            </div>
        </div>
        <div class="flex items-center justify-between">
            <button
                type="button"
                class="bg-white border-[2px] border-gray-300 focus:outline-none hover:bg-nasplesyellow hover:text-white hover:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-semibold rounded text-sm px-4 py-2 me-2 mb-2 disabled disabled:bg-gray-50 disabled:border-gray-200 disabled:text-gray-500"
                :disabled="products.meta.current_page === 1"
                @click="getProducts(products.meta.current_page - 1)"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    class="w-6 h-6"
                >
                    <path
                        fill="currentColor"
                        d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"
                    />
                </svg>
            </button>
            <div class="text-sm font-medium lg:font-normal">
                halaman {{ products.meta.current_page }} dari
                {{ products.meta.total }} Data
            </div>
            <button
                type="button"
                class="bg-white border-[2px] border-gray-300 focus:outline-none hover:bg-nasplesyellow hover:text-white hover:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-semibold rounded text-sm px-4 py-2 me-2 mb-2 disabled disabled:bg-gray-50 disabled:border-gray-200 disabled:text-gray-500"
                :disabled="
                    products.meta.current_page === products.meta.last_page
                "
                @click="getProducts(products.meta.current_page + 1)"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    class="w-6 h-6"
                >
                    <path
                        fill="currentColor"
                        d="M16.175 13H4v-2h12.175l-5.6-5.6L12 4l8 8l-8 8l-1.425-1.4z"
                    />
                </svg>
            </button>
        </div>
    </div>
</template>
