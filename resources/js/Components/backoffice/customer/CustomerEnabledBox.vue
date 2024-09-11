<script setup lang="ts">
import { Badge } from "@/shadcn/ui/badge";
import { BadgeCheck, BadgeX } from "lucide-vue-next";

defineProps<{
    enabled: boolean;
}>();
</script>
<template>
    <div>
        <div class="inline-flex items-center justify-start" v-if="enabled">
            <span
                class="inline-flex text-center font-semibold transition-all duration-300 ease-in-out rounded-full text-xs text-green-700 mr-2 size-2 p-0 border border-lime-500 bg-lime-500"
            ></span>
            <span class="text-xs font-medium text-green-700">Aktif</span>
        </div>

        <div class="inline-flex items-center justify-start" v-else>
            <span
                class="inline-flex border text-center font-semibold transition-all duration-300 ease-in-out rounded-full text-xs text-amber-700 mr-2 size-2 p-0 border-yellow-400 bg-yellow-400"
            ></span>
            <span class="text-xs font-medium text-amber-600">Nonaktif</span>
        </div>
    </div>
</template>
