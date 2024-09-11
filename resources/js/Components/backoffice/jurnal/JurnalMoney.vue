<script setup lang="ts">
defineProps<{
  value: number;
  type: string;
}>();

const Rupiah = (price: number) =>
  new Intl.NumberFormat("en-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(price);
</script>

<template>
  <p>
    <span v-if="value === 0">
      {{ Rupiah(value) }}
    </span>
    <span
      :class="{
        'text-red-500': type === 'expense',
        'text-primary': type === 'income',
      }"
      v-else
    >
      {{ Rupiah(value) }}
    </span>
  </p>
</template>
