<template>
    <div class="min-h-lvh mb-20 lg:container lg:py-4">
        <div class="lg:grid-cols-2 lg:grid gap-3">
            <banner :images="images" />
            <div class="space-y-2">
                <div
                    class="p-2 m-auto container w-full bg-gray-200/50 rounded-b-lg shadow"
                >
                    <p class="text-sm lg:text-lg font-regular">
                        Produk Aplikasi Kasir (Point Of Sales)
                    </p>
                    <h2 class="text-lg lg:text-sm font-semibold">
                        Rp 2.000.000
                    </h2>
                </div>

                <div
                    class="p-2 m-auto container w-full bg-gray-200/50 rounded-lg shadow space-y-2"
                >
                    <h3 class="text-sm font-semibold">Deskripsi</h3>
                    <p class="text-[11px] font-regular">
                        Kategori :
                        <span class="text-tomato">Makanan Ringan</span>
                    </p>
                    <p class="text-[13px]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Quod beatae corrupti ipsam voluptatibus? Optio
                        omnis ipsum similique obcaecati atque voluptatibus? Nisi
                        rem perferendis repellat labore debitis maxime,
                        accusantium eius quasi!
                    </p>
                </div>
                <div
                    class="p-4 mb-4 text-[12px] text-blue-800 bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                    role="alert"
                >
                    <span class="font-medium text-tomato">Catatan :</span>
                    Silahkan menghubungi daftar kontak di bawah ini untuk
                    kepastian harga dan detail produk.
                </div>
                <div
                    class="p-2 m-auto container w-full bg-gray-200/50 rounded-lg shadow space-y-3"
                >
                    <h3 class="text-sm font-semibold">Kontak Pemesanan</h3>
                    <div class="flex items-start space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            class="fill-current text-tomato w-5 h-5"
                        >
                            <g
                                fill="none"
                                stroke="currentColor"
                                stroke-width="1.5"
                            >
                                <path
                                    d="M3.5 11v3c0 3.771 0 5.657 1.172 6.828C5.843 22 7.729 22 11.5 22h1c3.771 0 5.657 0 6.828-1.172C20.5 19.657 20.5 17.771 20.5 14v-3"
                                />
                                <path
                                    d="M9.5 2h5l.652 6.517a3.167 3.167 0 1 1-6.304 0z"
                                />
                                <path
                                    d="M3.33 5.351c.178-.89.267-1.335.448-1.696a3 3 0 0 1 1.888-1.548C6.056 2 6.51 2 7.418 2H9.5l-.725 7.245a3.06 3.06 0 1 1-6.043-.904zm17.34 0c-.178-.89-.267-1.335-.448-1.696a3 3 0 0 0-1.888-1.548C17.944 2 17.49 2 16.582 2H14.5l.725 7.245a3.06 3.06 0 1 0 6.043-.904z"
                                />
                                <path
                                    stroke-linecap="round"
                                    d="M9.5 21.5v-3c0-.935 0-1.402.201-1.75a1.5 1.5 0 0 1 .549-.549C10.598 16 11.065 16 12 16s1.402 0 1.75.201a1.5 1.5 0 0 1 .549.549c.201.348.201.815.201 1.75v3"
                                />
                            </g>
                        </svg>
                        <p class="text-[12px] font-regular flex flex-col">
                            Nama Unit Pelayanan
                            <span class="text-tomato font-semibold">
                                UPJ AGRIBISNIS TANAMAN PANGAN DAN HORTIKULTURA
                            </span>
                        </p>
                    </div>
                    <div class="flex items-start space-x-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="32"
                            height="32"
                            viewBox="0 0 24 24"
                            class="fill-current text-tomato w-5 h-5"
                        >
                            <path
                                fill="currentColor"
                                d="M11 14h2v-3h3V9h-3V6h-2v3H8v2h3zm1 8q-4.025-3.425-6.012-6.362T4 10.2q0-3.75 2.413-5.975T12 2t5.588 2.225T20 10.2q0 2.5-1.987 5.438T12 22"
                            />
                        </svg>
                        <p class="text-[12px] font-regular flex flex-col">
                            Lokasi Kantor
                            <span class="text-tomato">
                                Gedung kantor instruktur ATPH Belakang Kawasan
                                SMKN 1 Purwosari Pasuruan
                            </span>
                        </p>
                    </div>
                    <div class="divide-y divide-gray-300">
                        <div class="flex items-center gap-2 px-4 py-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                class="w-6 h-6 fill-current text-tomato"
                            >
                                <path
                                    fill="currentColor"
                                    d="m12 23l-3-3H5q-.825 0-1.412-.587T3 18V4q0-.825.588-1.412T5 2h14q.825 0 1.413.588T21 4v14q0 .825-.587 1.413T19 20h-4zm-7-6.15q1.35-1.325 3.138-2.087T12 14t3.863.763T19 16.85V4H5zM12 12q1.45 0 2.475-1.025T15.5 8.5t-1.025-2.475T12 5T9.525 6.025T8.5 8.5t1.025 2.475T12 12m-5 6h10v-.25q-1.05-.875-2.325-1.312T12 16t-2.675.438T7 17.75zm5-8q-.625 0-1.062-.437T10.5 8.5t.438-1.062T12 7t1.063.438T13.5 8.5t-.437 1.063T12 10m0 .425"
                                />
                            </svg>
                            <div>
                                <h3 class="text-tomato text-[12px]">
                                    Raditya Wahyu Sasono
                                </h3>
                                <p class="text-[11px] font-medium">
                                    Whatasapp : <span>085649926667</span>
                                </p>
                            </div>
                            <button
                                type="button"
                                class="focus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-5 py-2.5"
                            >
                                Chat WA
                            </button>
                        </div>
                        <div class="flex items-center gap-2 px-4 py-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                class="w-6 h-6 fill-current text-tomato"
                            >
                                <path
                                    fill="currentColor"
                                    d="m12 23l-3-3H5q-.825 0-1.412-.587T3 18V4q0-.825.588-1.412T5 2h14q.825 0 1.413.588T21 4v14q0 .825-.587 1.413T19 20h-4zm-7-6.15q1.35-1.325 3.138-2.087T12 14t3.863.763T19 16.85V4H5zM12 12q1.45 0 2.475-1.025T15.5 8.5t-1.025-2.475T12 5T9.525 6.025T8.5 8.5t1.025 2.475T12 12m-5 6h10v-.25q-1.05-.875-2.325-1.312T12 16t-2.675.438T7 17.75zm5-8q-.625 0-1.062-.437T10.5 8.5t.438-1.062T12 7t1.063.438T13.5 8.5t-.437 1.063T12 10m0 .425"
                                />
                            </svg>
                            <div>
                                <h3 class="text-tomato text-[12px]">
                                    Erik Setyawan
                                </h3>
                                <p class="text-[11px] font-medium">
                                    Whatasapp : <span>085649926667</span>
                                </p>
                            </div>
                            <button
                                type="button"
                                class="focus:outline-none bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-xs px-5 py-2.5"
                            >
                                Chat WA
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="px-2">
            <div class="space-y-3 mt-10">
                <div class="flex items-center justify-between">
                    <h2 class="text-sm lg:text-lg font-semibold text-tomato">
                        Produk lainya
                    </h2>
                    <p class="text-xs lg:text-sm text-tomato font-semibold">
                        lainnya...
                    </p>
                </div>
                <div class="space-y-4 lg:text-center">
                    <div class="w-full grid grid-cols-2 lg:grid-cols-6 gap-3">
                        <product
                            :product="product"
                            v-for="product in products"
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import ProductDetail from "@/Layouts/ProductDetail.vue";

export default {
    layout: ProductDetail,
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import Banner from "@/Components/productDetails/Banner.vue";
import Product from "@/Components/app/Product.vue";

import ProductOne from "@/Assets/images/product_1.webp";
import ProductTwo from "@/Assets/images/product_2.webp";
import ProductFour from "@/Assets/images/product_4.webp";
import ProductFive from "@/Assets/images/product_5.jpg";
import ProductSix from "@/Assets/images/product_6.jpeg";

const images = ref([
    {
        image: ProductOne,
        alt: "Product One",
    },
    {
        image: ProductTwo,
        alt: "Product Two",
    },
    {
        image: ProductFour,
        alt: "Product Four",
    },
    {
        image: ProductFive,
        alt: "Product Five",
    },
    {
        image: ProductSix,
        alt: "Product Six",
    },
]);

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
