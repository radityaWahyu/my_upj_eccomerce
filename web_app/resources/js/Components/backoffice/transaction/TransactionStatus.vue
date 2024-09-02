<script setup lang="ts">
import { Badge } from "@/shadcn/ui/badge";
import { ClockArrowUp, RefreshCw } from "lucide-vue-next";

const props = defineProps<{
    status: string;
}>();
</script>
<template>
    <div class="text-center">
        <Badge
            v-if="status === 'pesan'"
            class="bg-yellow-300 py-1 space-x-2 text-yellow-900"
        >
            <ClockArrowUp class="w-4 h-4" />
            <span>menunggu di proses..</span>
        </Badge>
        <Badge
            v-if="status === 'proses'"
            class="bg-green-300 py-1 space-x-2 text-green-900"
        >
            <RefreshCw class="w-4 h-4 animate-spin" />
            <span>pesanan sedang di proses..</span>
        </Badge>
    </div>
</template>
