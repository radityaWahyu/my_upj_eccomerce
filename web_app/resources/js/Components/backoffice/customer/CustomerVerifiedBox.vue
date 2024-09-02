<script setup lang="ts">
import { Badge } from "@/shadcn/ui/badge";
import { BadgeCheck, BadgeX } from "lucide-vue-next";

defineProps<{
  verified: boolean;
}>();
</script>
<template>
  <div>
    <Badge v-if="verified" class="bg-green-300 py-1 space-x-2 text-green-900">
      <BadgeCheck class="w-4 h-4" />
      <span>Terverifikasi</span>
    </Badge>
    <Badge v-else class="bg-yellow-300 py-1 space-x-2 text-yellow-900">
      <BadgeCheck class="w-4 h-4" />
      <span>Belum verifikasi</span>
    </Badge>
  </div>
</template>
