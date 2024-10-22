<script setup lang="ts">
import { defineProps } from "vue";
import { Link } from "@inertiajs/vue3";
import NoImage from "@/Assets/images/no-image.jpg";
type TProduct = {
    id: string;
    name: string;
    image: string;
    price: number;
    type: string;
    shop: string;
    category: string;
    slug: string;
};

const prop = defineProps<{
    product: TProduct;
}>();

const Rupiah = (price: number) =>
    new Intl.NumberFormat("en-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(price);
</script>
<template>
    <Link
        :href="route('frontend.product.details', product.slug)"
        class="h-[300px]"
    >
        <div
            class="static w-full flex-shrink-0 bg-lemonchiffon/85 rounded-md drop-shadow-sm overflow-hidden group h-[300px]"
        >
            <div class="relative overflow-hidden h-[200px]">
                <div
                    class="absolute top-0 z-10 text-[12px] px-2 py-1 capitalize"
                    :class="{
                        'bg-orange-200': product.type === 'produk',
                        'bg-yellow-200': product.type === 'jasa',
                    }"
                >
                    {{ product.type }}
                </div>
                <img
                    :src="product.image ? product.image : NoImage"
                    alt="product-one"
                    class="rounded-t-md h-full w-full object-cover object-top group-hover:scale-125 transition-all duration-300 ease-in-out transform bg-center"
                />
            </div>
            <div class="flex flex-col text-left p-2">
                <p class="text-[12px] font-normal">{{ product.name }}</p>
                <p class="text-sm font-semibold">{{ Rupiah(product.price) }}</p>
                <p class="text-[10px] font-light">{{ product.shop }}</p>
            </div>
        </div>
    </Link>
</template>
