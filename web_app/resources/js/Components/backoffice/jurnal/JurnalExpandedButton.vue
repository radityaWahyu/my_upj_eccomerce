<script setup lang="ts">
import { Button } from "@/shadcn/ui/button";
import { SquarePlus, SquareMinus } from "lucide-vue-next";

const props = defineProps<{
    expanded: any;
}>();
const emits = defineEmits<{
    (e: "expand"): void;
}>();
</script>
<template>
    <Button variant="outline" size="icon" @click="emits('expand')">
        <SquareMinus class="w-4 h-4 text-gray-700" v-if="expanded" />
        <SquarePlus class="w-4 h-4 text-gray-700" v-else />
    </Button>
</template>
