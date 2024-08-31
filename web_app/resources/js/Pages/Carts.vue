<script lang="ts">
import Frontend from "@/Layouts/Frontend.vue";

export default {
    layout: Frontend,
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { Head, router, Link } from "@inertiajs/vue3";
import EmptyCarts from "@/Assets/images/empty-cart.svg";
import LoginImage from "@/Assets/images/login_two.svg";
import ProductCart from "@/Components/app/ProductCart.vue";

type TCart = {
    id: string;
    image: string;
    name: string;
    price: number;
    quantity: number;
    shop: string;
    total: number;
};

const props = defineProps<{
    carts: { data: TCart[] } | null;
}>();

const isEmptyCartLoading = ref<boolean>(false);
const isCheckOutLoading = ref<boolean>(false);

const getCart = () => {
    router.reload({ only: ["carts"] });
};

const emptyCarts = () => {
    router.delete(route("frontend.cart.empty"), {
        onStart: () => (isEmptyCartLoading.value = true),
        onError: (error) => console.log(error),
        onSuccess: () => getCart(),
        onFinish: () => (isEmptyCartLoading.value = false),
    });
};

const sendCarts = () => {
    router.post(
        route("frontend.cart.send"),
        {},
        {
            onStart: () => (isCheckOutLoading.value = true),
            onError: (error) => console.log(error),
            onFinish: () => (isCheckOutLoading.value = false),
        }
    );
};
</script>
<template>
    <Head title="Keranjang Belanja" />
    <div class="lg:container p-4 min-h-[600px]">
        <div class="lg:w-3/4 mx-auto space-y-4">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
                Keranjang Belanja
            </h2>
            <div
                class="space-y-2"
                v-if="carts !== null && carts.data.length > 0"
            >
                <div>
                    <blockquote class="my-6 border-l-2 pl-6 italic text-sm">
                        <strong>Keterangan :</strong> Silahkan cek kembali
                        produk / jasa yang ingin dipesan melalui sistem ini,
                        sebelum melakukan proses selesaikan pemesanan.
                    </blockquote>
                </div>
                <ProductCart
                    v-for="(cart, index) in carts.data"
                    :key="index"
                    :cart="cart"
                    @deleted="getCart"
                />
                <div class="w-full space-x-2 text-center">
                    <button
                        type="button"
                        class="mt-4 bg-orange-400 hover:bg-orange-600 focus:ring-3 focus:outline-none focus:ring-orang-300 font-medium rounded text-sm px-5 py-2.5 text-center text-white"
                        :disabled="isCheckOutLoading || isEmptyCartLoading"
                        @click="emptyCarts"
                    >
                        <span v-if="isEmptyCartLoading"
                            >Mengosongkan Keranjang...</span
                        >
                        <span v-else>Kosongkan Keranjang</span>
                    </button>
                    <button
                        @click="sendCarts"
                        type="button"
                        class="mt-4 bg-blue-400 hover:bg-blue-600 focus:ring-3 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center text-white"
                        :disabled="isCheckOutLoading || isEmptyCartLoading"
                    >
                        <span v-if="isCheckOutLoading"
                            >Mengirim Pesanan...</span
                        >
                        <span v-else>Kirim Pesanan</span>
                    </button>
                </div>
            </div>
            <div
                v-if="carts !== null && carts.data.length === 0"
                class="w-full"
            >
                <img
                    :src="EmptyCarts"
                    alt="empty_cart"
                    class="w-80 h-80 mx-auto"
                />
                <h2
                    class="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors text-center"
                >
                    Tidak terdapat produk dalam keranjang belanja anda
                </h2>
                <p class="text-center text-muted-foreground">
                    Silahkan tambahkan terlebih dahulu produk atau jasa yang
                    kami sediakan di sistem.
                </p>
            </div>
            <div v-if="carts === null" class="w-full">
                <img
                    :src="LoginImage"
                    alt="empty_cart"
                    class="w-80 h-80 mx-auto"
                />
                <h2
                    class="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors text-center"
                >
                    Anda harus LogIn terlebih dahulu agar dapat melihat
                    keranjang belanja anda.
                </h2>
                <p class="text-center text-muted-foreground">
                    Apabila belum punya akun silahkan mendaftar terlebih dahulu
                    dengan mengklik tombol dibawah.
                    <Link
                        :href="route('frontend.register')"
                        as="button"
                        class="mt-4 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center"
                    >
                        Daftar Akun Baru
                    </Link>
                </p>
            </div>
        </div>
    </div>
</template>
