<script setup lang="ts">
import { defineProps } from "vue";
import { Link } from "@inertiajs/vue3";

type TLink = {
    to: string;
    isActive: boolean;
};

const props = defineProps<TLink>();
</script>

<template>
    <Link
        :href="to"
        :class="{
            'text-primary': isActive,
            'bg-muted': isActive,
        }"
        class="flex text-gray-300 items-center gap-3 rounded px-3 py-1.5 transition-all hover:text-primary hover:bg-muted"
        replace
    >
        <slot />
    </Link>
</template>
