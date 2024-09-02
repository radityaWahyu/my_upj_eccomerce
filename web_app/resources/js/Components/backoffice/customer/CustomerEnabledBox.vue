<script setup lang="ts">
import { Badge } from "@/shadcn/ui/badge";
import { BadgeCheck, BadgeX } from "lucide-vue-next";

defineProps<{
  enabled: boolean;
}>();
</script>
<template>
  <div>
    <Badge v-if="enabled" class="bg-green-300 py-1 space-x-2 text-green-900">
      <BadgeCheck class="w-4 h-4" />
      <span>Aktif</span>
    </Badge>
    <Badge v-else class="bg-yellow-300 py-1 space-x-2 text-yellow-900">
      <BadgeCheck class="w-4 h-4" />
      <span>Tidak Aktif</span>
    </Badge>
  </div>
</template>
