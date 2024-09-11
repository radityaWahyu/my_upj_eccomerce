<script lang="ts">
import Frontend from "@/Layouts/Frontend.vue";

export default {
    layout: Frontend,
};
</script>
<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
import LoginImage from "@/Assets/images/login_two.svg";
</script>
<template>
    <div class="lg:container p-4 min-h-[600px]">
        <div class="w-full text-center">
            <img :src="LoginImage" alt="empty_cart" class="w-80 h-80 mx-auto" />
            <h2
                class="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors text-center"
            >
                Anda harus LogIn terlebih dahulu untuk mengakses halaman ini.
            </h2>
            <p class="text-center text-muted-foreground">
                Apabila belum punya akun silahkan mendaftar terlebih dahulu
                dengan mengklik tombol dibawah.
            </p>
            <div class="space-x-2">
                <Link
                    :href="route('frontend.login')"
                    as="button"
                    class="mt-4 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center"
                >
                    Login
                </Link>
                <Link
                    :href="route('frontend.register')"
                    as="button"
                    class="mt-4 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center"
                >
                    Daftar Akun Baru
                </Link>
            </div>
        </div>
    </div>
</template>
