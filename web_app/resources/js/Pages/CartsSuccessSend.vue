<script lang="ts">
import Frontend from "@/Layouts/Frontend.vue";

export default {
    layout: Frontend,
};
</script>
<script setup lang="ts">
import { Head, Link } from "@inertiajs/vue3";
import SendCartImage from "@/Assets/images/succes_cart_send.svg";
</script>
<template>
    <Head title="Pesanan berhasil dikirim" />
    <div class="lg:container p-4 min-h-[600px] flex items-center">
        <div class="w-3/4 mx-auto">
            <img
                :src="SendCartImage"
                alt="empty_cart"
                class="w-80 h-80 mx-auto mb-5"
            />
            <h2
                class="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors text-center"
            >
                Pesanan anda berhasil di kirimkan ke Unit Layanan.
            </h2>
            <p class="text-center text-muted-foreground">
                Apabila ingin mengecek status dari setiap transaksi pemesanan
                silahkan mengklik tombol di bawah ini.
                <Link
                    :href="route('frontend.register')"
                    as="button"
                    class="mt-4 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center"
                >
                    Transakasi Saya
                </Link>
            </p>
        </div>
    </div>
</template>
