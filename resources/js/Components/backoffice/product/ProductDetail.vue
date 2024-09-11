<script setup lang="ts">
import { Badge } from "@/shadcn/ui/badge";
import NoImage from "@/Assets/images/no-image.jpg";
type TProduct = {
    name: string;
    type: string;
    image: string;
    user: string;
};

defineProps<{
    product: TProduct;
}>();
</script>
<template>
    <div class="flex items-center gap-4">
        <div class="w-1/8">
            <div class="h-14 w-14 rounded-lg overflow-hidden">
                <img
                    :src="product.image ? product.image : NoImage"
                    :alt="product.name"
                    class="object-cover object-top w-full h-full"
                />
            </div>
        </div>
        <div class="capitalize font-normal space-y-1">
            <h4 class="font-semibold text-gray-900 text-sm space-x-2">
                <span>{{ product.name }}</span>
                <Badge variant="secondary">{{ product.type }}</Badge>
            </h4>
            <p class="text-xs">
                <span>diinputkan oleh : </span>{{ product.user }}
            </p>
        </div>
    </div>
</template>
