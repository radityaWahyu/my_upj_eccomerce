<script setup lang="ts">
import { defineProps } from "vue";

type TLink = {
    to?: string;
    isActive?: boolean;
};

const props = withDefaults(defineProps<TLink>(), {
    isActive: false,
});
</script>

<template>
    <a
        :href="to"
        :class="{ 'text-primary': isActive, 'bg-muted': isActive }"
        class="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary hover:bg-muted"
    >
        <slot />
    </a>
</template>
