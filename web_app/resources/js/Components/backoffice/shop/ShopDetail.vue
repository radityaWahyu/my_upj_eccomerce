<script setup lang="ts">
type TShop = {
    id: string;
    name: string;
    address?: string;
    image: string;
};

const props = defineProps<{
    shop: TShop;
}>();
</script>
<template>
    <div class="flex items-center gap-4">
        <div class="w-1/8">
            <div class="h-10 w-10 rounded-lg overflow-hidden">
                <img
                    :src="shop.image"
                    :alt="shop.name"
                    class="object-cover object-top w-full h-full"
                />
            </div>
        </div>
        <div class="capitalize font-normal space-y-1">
            <h4 class="font-semibold text-gray-900 text-sm">{{ shop.name }}</h4>
            <p class="text-xs">
                <span class="block">Alamat :</span>{{ shop.address }}
            </p>
        </div>
    </div>
</template>
