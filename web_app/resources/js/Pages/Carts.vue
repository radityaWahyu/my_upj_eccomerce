<script lang="ts">
import Frontend from "@/Layouts/Frontend.vue";
import NoImage from "@/Assets/images/no-image.jpg";

export default {
    layout: Frontend,
};
</script>
<script setup lang="ts">
import { Head } from "@inertiajs/vue3";

type TCart = {
    id: string;
    image: string;
    name: string;
    price: string;
    quantity: string;
    shop: string;
    total: string;
};

const props = defineProps<{
    carts: { data: TCart[] };
}>();
</script>
<template>
    <Head title="Keranjang Belanja" />
    <div class="lg:container p-4">
        <div class="lg:w-1/2 mx-auto space-y-4">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
                Keranjang Belanja
            </h2>
            <div class="space-y-2">
                <div
                    v-for="(cart, index) in carts.data"
                    :key="index"
                    class="rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
                >
                    <div class="flex items-center gap-2">
                        <div class="h-12 w-14 overflow-hidden rounded-sm">
                            <img
                                class="h-full w-full object-cover object-center"
                                :src="
                                    cart.image === null ? NoImage : cart.image
                                "
                                :alt="cart.name"
                            />
                        </div>
                        <div class="w-full min-w-0 space-y-4">
                            <a
                                href="#"
                                class="text-sm font-medium text-gray-900 hover:underline dark:text-white"
                            >
                                {{ cart.name }}
                            </a>
                        </div>

                        <div class="flex items-center justify-between">
                            <div class="text-end">
                                <p
                                    class="text-base font-bold text-gray-900 dark:text-white"
                                >
                                    {{ cart.total }}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
