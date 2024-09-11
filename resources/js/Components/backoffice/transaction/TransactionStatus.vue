<script setup lang="ts">
import { Badge } from "@/shadcn/ui/badge";
import { ClockArrowUp, RefreshCw, HandCoins, Check } from "lucide-vue-next";

const props = defineProps<{
  status: string;
}>();
</script>
<template>
  <div class="text-center">
    <Badge
      v-if="status === 'pesan'"
      class="bg-yellow-300 hover:bg-yellow-300 py-1 space-x-2 text-yellow-900 shadow-none"
    >
      <ClockArrowUp class="w-4 h-4" />
      <span>menunggu di proses..</span>
    </Badge>
    <Badge
      v-if="status === 'proses'"
      class="bg-green-300 hover:bg-green-300 py-1 space-x-2 text-green-900 shadow-none"
    >
      <RefreshCw class="w-4 h-4 animate-spin" />
      <span>pesanan sedang di proses..</span>
    </Badge>
    <Badge
      v-if="status === 'selesai'"
      class="bg-green-300 hover:bg-green-300 py-1 space-x-2 text-green-900 shadow-none"
    >
      <HandCoins class="w-4 h-4" />
      <span>Menunggu pembayaran..</span>
    </Badge>
    <Badge
      v-if="status === 'dibayar'"
      class="bg-green-300 py-1 space-x-2 text-green-900 hover:bg-green-300 shadow-none"
    >
      <Check class="w-4 h-4" />
      <span>Transaksi Selesai</span>
    </Badge>
  </div>
</template>
