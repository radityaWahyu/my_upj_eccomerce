<script setup lang="ts">
const comboboxValue = defineModel({ required: true });
const emit = defineEmits<{
    (e: "change", value: any): void;
}>();

const props = withDefaults(
    defineProps<{
        lists: Array<{
            label: any;
            value: any;
        }>;
        placeholder?: string;
    }>(),
    {
        placeholder: "Per Page",
    }
);
</script>
<template>
    <select
        class="whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4"
        v-model="comboboxValue"
        @change="() => emit('change', true)"
    >
        <option v-for="(list, index) in lists" :key="index" :value="list.value">
            {{ list.label }}
        </option>
    </select>
</template>
