<script setup lang="ts">
import { Link } from "@inertiajs/vue3";

type TTransaction = {
    id: string;
    transaction_code: string;
};

const props = defineProps<{
    transaction: TTransaction;
}>();
</script>
<template>
    <div class="text-muted-foreground">
        <Link
            v-if="transaction.id !== null"
            :href="route('backoffice.transaction.detail', transaction.id)"
            class="font-semibold hover:underline hover:text-primary"
        >
            {{ transaction.transaction_code }}
        </Link>
        <span class="font-semibold" v-else>-</span>
    </div>
</template>
