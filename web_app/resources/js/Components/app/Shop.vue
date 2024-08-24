<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
type TShop = {
    id: string;
    name: string;
    image: string;
    slug: string;
};

const props = defineProps<{
    shop: TShop;
}>();
</script>
<template>
    <Link :href="route('frontend.shops.detail', shop.slug)">
        <div
            class="relative w-[160px] h-[160px] lg:w-[250px] lg:h-[250px] flex-shrink-0 rounded-md overflow-clip shadow-md"
        >
            <img
                :src="shop.image"
                alt="shop-one"
                class="border-lemonchiffon/85 border-[1px] rounded-md object-cover h-full w-full"
            />
            <div
                class="absolute text-[12px] font-semibold bg-gradient-to-tl from-gray-900/90 to-transparent text-white top-0 h-full w-full flex text-center items-center justify-center"
            >
                <p class="break-words text-md lg:text-lg">{{ shop.name }}</p>
            </div>
        </div>
    </Link>
</template>
