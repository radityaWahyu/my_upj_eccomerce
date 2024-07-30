<template>
    <div>
        <div>
            <banner />
            <div class="px-2 space-y-4 lg:space-y-6 lg:container py-2">
                <div class="space-y-3">
                    <div class="flex items-center justify-between">
                        <h2
                            class="text-sm lg:text-lg font-semibold text-tomato"
                        >
                            Produk atau Jasa Terbaru
                        </h2>
                        <p class="text-xs lg:text-sm text-tomato font-semibold">
                            lainnya...
                        </p>
                    </div>
                    <div class="space-y-4 lg:text-center">
                        <div
                            class="w-full grid grid-cols-2 lg:grid-cols-6 gap-3"
                        >
                            <product
                                :product="product"
                                v-for="product in products"
                            />
                        </div>
                        <button
                            type="button"
                            class="w-full lg:w-1/4 text-gray-900 bg-white border-[2px] border-gray-300 focus:outline-none hover:bg-nasplesyellow hover:text-white hover:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-semibold rounded text-sm lg:text-lg px-5 py-2.5 me-2 mb-2"
                        >
                            Produk lainnya...
                        </button>
                    </div>
                </div>
                <div class="space-y-2">
                    <div class="flex items-center justify-between">
                        <h2
                            class="text-sm lg:text-lg font-semibold text-tomato"
                        >
                            Unit Layanan
                        </h2>
                        <p class="text-xs lg:text-sm text-tomato font-semibold">
                            lainnya...
                        </p>
                    </div>
                    <div>
                        <div class="w-full flex overflow-x-scroll gap-2">
                            <shop :shop="shop" v-for="shop in shops" />
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
                    class="container h-[400px] lg:h-[380px] border-nasplesyellow border-4 grid grid-cols-1 lg:grid-cols-3 items-center gap-10 p-2"
                >
                    <div class="text-nasplesyellow text-center font-bold">
                        <h1 class="text-4xl">100</h1>
                        <p
                            class="font-semibold text-XL border-t-2 border-nasplesyellow"
                        >
                            PRODUK
                        </p>
                    </div>
                    <div class="text-nasplesyellow text-center font-bold">
                        <h1 class="text-4xl">100</h1>
                        <p
                            class="font-semibold text-lg border-t-2 border-nasplesyellow"
                        >
                            JASA
                        </p>
                    </div>
                    <div class="text-nasplesyellow text-center font-bold">
                        <h1 class="text-4xl">10</h1>
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

<script lang="ts">
import Frontend from "@/Layouts/Frontend.vue";

export default {
    layout: Frontend,
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import Product from "@/Components/app/Product.vue";
import Shop from "@/Components/app/Shop.vue";
import Banner from "@/Components/home/Banner.vue";

import ProductOne from "@/Assets/images/product_1.webp";
import ProductTwo from "@/Assets/images/product_2.webp";
import ProductFour from "@/Assets/images/product_4.webp";
import ProductFive from "@/Assets/images/product_5.jpg";
import ProductSix from "@/Assets/images/product_6.jpeg";
import AphpShop from "@/Assets/images/aphp.jpeg";
import AtphShop from "@/Assets/images/atph.jpeg";
import MktShop from "@/Assets/images/mkt.jpg";
import TkjShop from "@/Assets/images/tkj.jpg";

const products = ref([
    {
        file: ProductOne,
        title: "Product One",
        price: "50000",
        shop: "UPJ Teknik Informatika",
    },
    {
        file: ProductTwo,
        title: "Product Two",
        price: "50000",
        shop: "UPJ Teknik Pengelasa",
    },
    {
        file: ProductFour,
        title: "Product Four",
        price: "50000",
        shop: "UPJ APHP",
    },
    {
        file: ProductFive,
        title: "Product Five",
        price: "50000",
        shop: "UPJ Teknik ATPH",
    },
    {
        file: ProductSix,
        title: "Product Six",
        price: "50000",
        shop: "UPJ Teknik Kendaraan Ringan",
    },
]);

const shops = ref([
    {
        image: AphpShop,
        name: "UPJ APHP",
    },
    {
        image: AtphShop,
        name: "UPJ ATPH",
    },
    {
        image: MktShop,
        name: "UPJ Mekatronika",
    },
    {
        image: TkjShop,
        name: "UPJ Teknik Komputer Jaringan",
    },
]);
</script>
