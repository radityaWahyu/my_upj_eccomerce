<script setup lang="ts">
import Product1 from "@/Assets/images/product_1.webp";
import { Trash } from "lucide-vue-next";

type TImage = {
    id: string;
    title: string;
    image: string;
};

defineProps<{
    image: TImage;
}>();
</script>
<template>
    <div
        class="relative h-44 w-44 rounded-lg overflow-hidden border border-gray-100 shadow-sm shadow-gray-200"
    >
        <img
            :src="image.image"
            :alt="image.title"
            class="object-cover object-top w-full h-full"
        />
        <div
            class="w-full h-full transition-colors duration-300 ease-in-out group hover:bg-gray-900/30 absolute z-10 top-0 flex items-center justify-center"
        >
            <button
                type="button"
                class="rounded-full p-2 invisible group-hover:visible bg-gray-600"
            >
                <Trash class="w-5 h-5 text-white" />
            </button>
        </div>
    </div>
</template>
