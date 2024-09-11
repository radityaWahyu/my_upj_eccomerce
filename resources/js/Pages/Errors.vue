<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
import LoginImage from "@/Assets/images/login_two.svg";
import PageNotFound from "@/Assets/images/page_not_found.svg";
import ServerDown from "@/Assets/images/serrver_error.svg";

type TError = {
    status_code: number;
};

const props = defineProps<TError>();
</script>
<template>
    <div class="lg:container p-4 min-h-[600px]">
        <div class="w-full text-center" v-if="status_code === 404">
            <img
                :src="PageNotFound"
                alt="empty_cart"
                class="w-80 h-80 mx-auto"
            />
            <h2
                class="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors text-center"
            >
                Halaman yang anda cari tidak ditemukan di sistem.
            </h2>
            <p class="text-center text-muted-foreground">
                Silahkan kembali ke halaman depan silahkan mengklik tombol di
                bawah ini.
            </p>
            <Link
                :href="route('frontend.index')"
                as="button"
                class="mt-4 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center"
            >
                Halaman Depan
            </Link>
        </div>
        <div class="w-full text-center" v-if="status_code === 503">
            <img
                :src="PageNotFound"
                alt="empty_cart"
                class="w-80 h-80 mx-auto"
            />
            <h2
                class="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors text-center"
            >
                Service atau fitur yang anda inginkan tidak tersedia.
            </h2>
            <p class="text-center text-muted-foreground">
                Silahkan kembali ke halaman depan silahkan mengklik tombol di
                bawah ini.
            </p>
            <Link
                :href="route('frontend.index')"
                as="button"
                class="mt-4 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center"
            >
                Halaman Depan
            </Link>
        </div>
        <div class="w-full text-center" v-if="status_code === 500">
            <img :src="ServerDown" alt="empty_cart" class="w-80 h-80 mx-auto" />
            <h2
                class="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors text-center"
            >
                Anda harus LogIn terlebih dahulu untuk mengakses halaman ini.
            </h2>
            <p class="text-center text-muted-foreground">
                Apabila belum punya akun silahkan mendaftar terlebih dahulu
                dengan mengklik tombol dibawah.
            </p>
            <Link
                :href="route('frontend.register')"
                as="button"
                class="mt-4 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center"
            >
                Daftar Akun Baru
            </Link>
        </div>
    </div>
</template>
