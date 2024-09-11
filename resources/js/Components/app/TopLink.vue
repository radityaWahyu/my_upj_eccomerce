<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
defineProps<{
    to: any;
    active?: boolean;
}>();
</script>
<template>
    <Link
        :href="to"
        :class="{ 'bg-yellow-500 text-white': active }"
        class="hover:bg-yellow-500 hover:text-white px-3 py-1 rounded transition-colors duration-500 ease-in-out"
    >
        <slot />
    </Link>
</template>
