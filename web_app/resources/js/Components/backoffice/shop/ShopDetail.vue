<script setup lang="ts">
type TShop = {
    id: string;
    name: string;
    address: string;
    image: string;
};

defineProps<{
    shop: string;
}>();
</script>
<template>
    <div class="flex items-center gap-2">
        <div class="capitalize font-normal">
            <h4>{{ shop }}</h4>
        </div>
    </div>
</template>
