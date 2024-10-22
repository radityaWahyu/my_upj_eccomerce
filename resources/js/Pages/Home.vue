<script lang="ts">
import Frontend from "@/Layouts/Frontend.vue";

export default {
    layout: Frontend,
};
</script>
<script setup lang="ts">
import { Head, Link } from "@inertiajs/vue3";
import { OctagonAlert } from "lucide-vue-next";
import Product from "@/Components/app/Product.vue";
import Shop from "@/Components/app/Shop.vue";
import Banner from "@/Components/home/Banner.vue";

type TBanner = {
    title: string;
    image: string;
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
type TShop = {
    id: string;
    name: string;
    image: string;
    slug: string;
};

const props = defineProps<{
    banners: { data: TBanner[] };
    products: { data: TProduct[] };
    shops: { data: TShop[] };
    shop_count: number;
    product_count: number;
}>();
</script>

<template>
    <Head title="MY UPJ SMKN 1 Purwosari" />
    <div>
        <div>
            <Banner :banners="banners.data" />
            <div class="px-2 space-y-4 lg:space-y-6 lg:container py-2">
                <div class="space-y-3">
                    <div class="flex items-center justify-between">
                        <h2
                            class="text-sm lg:text-lg font-semibold text-tomato"
                        >
                            Produk atau Jasa Terbaru
                        </h2>
                        <Link
                            :href="route('frontend.products')"
                            class="text-xs lg:text-sm text-tomato font-semibold"
                        >
                            lainnya...
                        </Link>
                    </div>
                    <div class="w-full text-center">
                        <div
                            class="grid grid-cols-[10%_90%] items-center bg-blue-100 py-2 rounded text-blue-800"
                            v-if="products.data.length === 0"
                        >
                            <div>
                                <OctagonAlert class="h-8 w-8 m-auto" />
                            </div>
                            <p class="text-left">
                                <strong class="block">Keterangan :</strong>
                                Tidak terdapat data produk dan jasa yang
                                tersimpan pada aplikasi.
                            </p>
                        </div>
                        <div
                            class="w-full grid grid-cols-2 lg:grid-cols-6 gap-3 mb-10 items-stretch h-[200px]"
                            v-if="products.data.length > 0"
                        >
                            <Product
                                :product="product"
                                v-for="(product, index) in products.data"
                                :key="index"
                            />
                        </div>
                        <Link
                            v-if="products.data.length > 0"
                            :href="route('frontend.products')"
                            class="block lg:w-1/4 lg:mx-auto text-gray-900 bg-white border-[2px] border-gray-300 focus:outline-none hover:bg-nasplesyellow hover:text-white hover:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-semibold rounded text-sm lg:text-lg px-5 py-2.5 mb-2"
                            replace
                        >
                            Produk lainnya...
                        </Link>
                    </div>
                </div>
                <div class="space-y-2">
                    <div class="flex items-center justify-between">
                        <h2
                            class="text-sm lg:text-lg font-semibold text-tomato"
                        >
                            Unit Layanan
                        </h2>
                        <Link
                            :href="route('frontend.shops')"
                            class="text-xs lg:text-sm text-tomato font-semibold"
                        >
                            lainnya...
                        </Link>
                    </div>
                    <div>
                        <div
                            class="grid grid-cols-[10%_90%] items-center bg-blue-100 py-2 rounded text-blue-800"
                            v-if="shops.data.length === 0"
                        >
                            <div>
                                <OctagonAlert class="h-8 w-8 m-auto" />
                            </div>
                            <p class="text-left">
                                <strong class="block">Keterangan :</strong>
                                Tidak terdapat data unit layanan yang tersimpan
                                pada aplikasi.
                            </p>
                        </div>
                        <div class="w-full flex overflow-x-scroll gap-2">
                            <shop
                                :shop="shop"
                                v-for="(shop, index) in shops.data"
                                :key="index"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="information" class="relative mt-2 w-full h-[500px]">
            <img
                src="@/Assets/images/paralax_home.jpg"
                alt=""
                srcset=""
                class="object-cover w-full h-full backdrop-blur-lg"
            />
            <div
                class="h-full w-full backdrop-blur-sm backdrop-grayscale absolute top-0"
            ></div>

            <div
                class="bg-slate-800/20 w-full h-full top-0 absolute p-2 flex flex-col justify-center"
            >
                <div class="container text-center py-2">
                    <h1 class="text-2xl font-medium text-nasplesyellow">
                        INFORMASI SINGKAT
                    </h1>
                </div>
                <div
                    class="container h-[400px] lg:h-[380px] border-nasplesyellow border-4 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 p-2"
                >
                    <div class="text-nasplesyellow text-center font-bold">
                        <h1 class="text-4xl">{{ product_count }}</h1>
                        <p
                            class="font-semibold text-XL border-t-2 border-nasplesyellow"
                        >
                            PRODUK dan JASA
                        </p>
                    </div>
                    <div class="text-nasplesyellow text-center font-bold">
                        <h1 class="text-4xl">{{ shop_count }}</h1>
                        <p
                            class="font-semibold text-lg border-t-2 border-nasplesyellow"
                        >
                            UNIT LAYANAN JASA
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
