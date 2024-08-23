<script lang="ts">
import Frontend from "@/Layouts/Frontend.vue";

export default {
    layout: Frontend,
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { Store } from "lucide-vue-next";
import Shop from "@/Components/app/Shop.vue";

type TShop = {
    id: string;
    name: string;
    image: string;
    slug: string;
};

defineProps<{
    shops: { data: TShop[] };
}>();
</script>

<template>
    <div class="container py-4 space-y-8 min-h-screen">
        <div class="space-y-4">
            <h2 class="text-xl font-semibold">Daftar Unit Layanan</h2>
            <div
                class="flex items-center gap-6 bg-gray-50 p-4 shadow-sm rounded border border-gray-100"
            >
                <div>
                    <Store class="w-7 h-7 text-gray-400" />
                </div>
                <p class="text-sm">
                    Unit Layanan adalah sebuah divisi dari setiap konsentrasi
                    keahlian yang terdapat di SMKN 1 Purwosari. Tugas dari unit
                    layanan yaitu memberikan pelayanan secara profesional kepada
                    masyarakat umum berkenaan dengan produk atau jasa yang
                    ditawarkan.
                </p>
            </div>
        </div>
        <div class="w-full flex gap-4">
            <Shop
                :shop="shop"
                v-for="(shop, index) in shops.data"
                :key="index"
            />
        </div>
    </div>
</template>
