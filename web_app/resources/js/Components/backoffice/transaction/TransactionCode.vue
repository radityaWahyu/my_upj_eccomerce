<script setup lang="ts">
import { Link } from "@inertiajs/vue3";

type TTransaction = {
    id: string;
    transaction_code: string;
    shop: string;
};

const props = defineProps<{
    transaction: TTransaction;
}>();
</script>
<template>
    <div>
        <Link
            :href="route('backoffice.transaction.detail', transaction.id)"
            class="font-semibold hover:underline hover:text-primary"
        >
            {{ transaction.transaction_code }}
        </Link>
        <p class="text-muted-foreground text-xs font-medium">
            Unit Layanan : {{ transaction.shop }}
        </p>
    </div>
</template>
