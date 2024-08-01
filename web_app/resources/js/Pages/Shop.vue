<template>
    <div class="container py-4 space-y-8 min-h-screen">
        <div
            class="flex items-center justify-between border-[1px] rounded-lg p-3 shadow-sm"
        >
            <div class="flex gap-2 items-center">
                <div
                    class="relative w-[100px] h-[100px] rounded-full overflow-hidden bg-gray-200 p-1"
                >
                    <img
                        src="@/Assets/images/aphp.jpeg"
                        alt="shop-one"
                        class="object-cover h-full rounded-full"
                    />
                </div>
                <div class="space-y-4">
                    <div>
                        <h2 class="font-semibold text-xl">
                            UPJ AGRIBISNIS PENGOLAHAN HASIL PERTANIAN
                        </h2>
                        <p class="text-[12px]">
                            <span class="font-medium text-tomato"
                                >Lokasi kantor
                            </span>
                            Kantor APHP gedung belakang parkiran SMKN 1
                            Purwosari pasuruan
                        </p>
                    </div>
                    <div class="space-y-2 pb-2">
                        <h4 class="text-xs font-medium">Kontak Unit Layanan</h4>
                        <div class="space-x-2">
                            <a
                                href="http://"
                                class="text-white bg-yaleblue hover:bg-blue-950 focus:ring-2 focus:ring-yaleblue font-medium rounded-lg text-[12px] px-5 py-2"
                            >
                                Chat Raditya Wahyu
                            </a>
                            <a
                                href="http://"
                                class="text-white bg-yaleblue hover:bg-blue-950 focus:ring-2 focus:ring-yaleblue font-medium rounded-lg text-[12px] px-5 py-2"
                            >
                                Chat Raditya Wahyu
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="grid grid-cols-3 divide-x-[1px] divide-gray-300 w-[500px]"
            >
                <div class="text-center px-2">
                    <h4 class="font-semibold text-lg">10</h4>
                    <p class="font-normal text-xs">Jasa</p>
                </div>
                <div class="text-center px-2">
                    <h4 class="font-semibold text-lg">10</h4>
                    <p class="font-normal text-xs">Produk</p>
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
                id="countries"
                class="bg-nasplesyellow border border-white text-[12px] font-semibold rounded focus:ring-yellow-500 focus:border-yellow-500 p-1 w-24"
            >
                <option value="10" selected>10 Data</option>
                <option value="US">20 Data</option>
                <option value="CA">20 Data</option>
                <option value="FR">20 Data</option>
                <option value="DE">20 Data</option>
            </select>
        </div>
        <div class="w-full grid grid-cols-2 lg:grid-cols-5 gap-3">
            <product :product="product" v-for="product in products" />
        </div>
        <div class="flex items-center justify-between">
            <button
                type="button"
                class="bg-white border-[2px] border-gray-300 focus:outline-none hover:bg-nasplesyellow hover:text-white hover:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-semibold rounded text-sm px-4 py-2 me-2 mb-2"
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
                halaman 1 dari 100 Data
            </div>
            <button
                type="button"
                class="bg-white border-[2px] border-gray-300 focus:outline-none hover:bg-nasplesyellow hover:text-white hover:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-semibold rounded text-sm px-4 py-2 me-2 mb-2"
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
<script lang="ts">
import Frontend from "@/Layouts/Frontend.vue";

export default {
    layout: Frontend,
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import Product from "@/Components/app/Product.vue";
import ProductOne from "@/Assets/images/product_1.webp";
import ProductTwo from "@/Assets/images/product_2.webp";
import ProductFour from "@/Assets/images/product_4.webp";
import ProductFive from "@/Assets/images/product_5.jpg";
import ProductSix from "@/Assets/images/product_6.jpeg";

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
</script>
