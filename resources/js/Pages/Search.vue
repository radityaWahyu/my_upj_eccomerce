<script lang="ts">
import Frontend from "@/Layouts/Frontend.vue";

export default {
    layout: Frontend,
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";
import { ArrowRight, BadgeInfo } from "lucide-vue-next";
import { Skeleton } from "@/shadcn/ui/skeleton";
import Product from "@/Components/app/Product.vue";

type TProduct = {
    id: string;
    name: string;
    image: string;
    price: number;
    type: string;
    shop: string;
    category: string;
    slug: string;
};
type TCategories = {
    id: string;
    name: string;
    slug: string;
};
type TProductMeta = {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
};
const perPages = ref([
    { label: "10", value: 10 },
    { label: "25", value: 25 },
    { label: "50", value: 50 },
    { label: "75", value: 75 },
    { label: "100", value: 100 },
]);
const props = defineProps<{
    categories: { data: TCategories[] };
    products: {
        data: TProduct[];
        meta: TProductMeta;
    };
    params: {
        category?: string;
        key?: string;
        per_page?: number;
    } | null;
    active: string | null;
}>();

const category = ref(props.params?.category);
const isLoading = ref<boolean>(false);
const perPage = ref(props.products.meta.per_page);

const getProducts = (page: number) => {
    const url = ref({ per_page: perPage.value, key: props.params?.key });
    if (props.params?.category)
        Object.assign(url.value, { category: category.value });

    console.log(page);
    if (page > 1) Object.assign(url.value, { page });

    router.get(route("frontend.search"), url.value, {
        preserveState: true,
        onStart: () => (isLoading.value = true),
        onError: (errors: any) => console.log(errors),
        onFinish: () => (isLoading.value = false),
    });
};
</script>
<template>
    <Head title="Pencarian Produk" />
    <div class="lg:container">
        <div class="px-2 space-y-4 mt-4">
            <select
                id="countries"
                class="bg-nasplesyellow border border-white text-sm rounded-none focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5 lg:hidden"
                v-model="category"
            >
                <option value="all">Semua Kategori</option>
                <option
                    :value="category.id"
                    v-for="(category, index) in categories.data"
                    :key="index"
                >
                    {{ category.name }}
                </option>
            </select>

            <div
                class="lg:flex lg:items-start lg:divide-x-[1px] lg:divide-nasplesyellow gap-2"
            >
                <div class="hidden lg:block lg:w-[200px] space-y-2">
                    <h4 class="text-lg font-medium px-2">Kategori</h4>
                    <ul class="text-sm space-y-1 font-medium w-full">
                        <li>
                            <Link
                                :href="
                                    route('frontend.search', {
                                        category: 'all',
                                        key: params?.key,
                                    })
                                "
                                :class="{
                                    'bg-yellow-400/40': active === 'all',
                                }"
                                class="w-full inline-flex items-center justify-between px-2 py-2 hover:bg-yellow-400/40 rounded-lg capitalize"
                                replace
                            >
                                <span>Semua Kategori</span>
                                <ArrowRight class="h-4 w-4" />
                            </Link>
                        </li>
                        <li
                            v-for="(category, index) in categories.data"
                            :key="index"
                        >
                            <Link
                                :href="route('frontend.search')"
                                :data="{
                                    category: category.slug,
                                    key: params?.key,
                                }"
                                :class="{
                                    'bg-yellow-400/40':
                                        active === category.slug,
                                }"
                                class="w-full inline-flex items-center justify-between px-2 py-2 hover:bg-yellow-400/40 rounded-lg capitalize"
                                replace
                            >
                                <span>{{ category.name }}</span>
                                <ArrowRight class="h-4 w-4" />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div class="space-y-5 lg:px-3 lg:min-h-[600px] lg:w-11/12">
                    <div class="space-y-3">
                        <div class="flex items-start justify-between">
                            <h2
                                class="text-sm font-semibold text-tomato lg:text-lg"
                            >
                                Pencarian "{{ params?.key }}" pada Produk dan
                                jasa
                            </h2>
                            <select
                                v-model="perPage"
                                class="bg-nasplesyellow border border-white text-[12px] font-semibold rounded focus:ring-yellow-500 focus:border-yellow-500 p-1 w-24"
                                @change="getProducts(1)"
                            >
                                <option
                                    v-for="(limit, index) in perPages"
                                    :value="limit.value"
                                    :key="index"
                                >
                                    {{ limit.label }}
                                </option>
                            </select>
                        </div>
                        <div
                            class="grid grid-cols-[20%_80%] gap-4 bg-blue-100 rounded overflow-hidden"
                            v-if="products.data.length === 0"
                        >
                            <div
                                class="bg-blue-200 p-3 h-full flex items-center justify-center"
                            >
                                <BadgeInfo class="w-8 h-8" />
                            </div>
                            <p class="text-sm p-1">
                                <strong>Keterangan :</strong>
                                Data yang anda cari dengan kata kunci
                                <strong>"{{ params?.key }}"</strong> tidak
                                ditemukan dalam produk dan jasa.
                            </p>
                        </div>
                        <div v-else class="space-y-4">
                            <div
                                class="grid grid-cols-[20%_80%] gap-4 bg-blue-100 rounded overflow-hidden"
                            >
                                <div
                                    class="bg-blue-200 p-3 h-full flex items-center justify-center"
                                >
                                    <BadgeInfo class="w-8 h-8" />
                                </div>
                                <p class="text-sm p-1">
                                    <strong>Keterangan :</strong>
                                    ditemukan
                                    <strong
                                        >{{ products.data.length }} produk atau
                                        jasa
                                    </strong>
                                    didalam sistem.
                                </p>
                            </div>
                            <div class="grid grid-cols-2 lg:grid-cols-5 gap-3">
                                <product
                                    v-if="!isLoading"
                                    :product="product"
                                    v-for="product in products.data"
                                />

                                <div
                                    class="space-y-3"
                                    v-for="index in 5"
                                    v-else
                                >
                                    <Skeleton
                                        class="h-[200px] w-full rounded-xl"
                                    />
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
                                    @click="
                                        getProducts(
                                            products.meta.current_page - 1
                                        )
                                    "
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
                                    halaman
                                    {{ products.meta.current_page }} dari
                                    {{ products.meta.total }} Data
                                </div>
                                <button
                                    type="button"
                                    class="bg-white border-[2px] border-gray-300 focus:outline-none hover:bg-nasplesyellow hover:text-white hover:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-semibold rounded text-sm px-4 py-2 me-2 mb-2 disabled disabled:bg-gray-50 disabled:border-gray-200 disabled:text-gray-500"
                                    :disabled="
                                        products.meta.current_page ===
                                        products.meta.last_page
                                    "
                                    @click="
                                        getProducts(
                                            products.meta.current_page + 1
                                        )
                                    "
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
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
