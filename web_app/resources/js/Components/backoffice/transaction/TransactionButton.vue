<script setup lang="ts">
import { ref } from "vue";
import { router } from "@inertiajs/vue3";
import { Button } from "@/shadcn/ui/button";
import { RefreshCw, PackageCheck, Forward, ReceiptText } from "lucide-vue-next";

const props = defineProps<{
    transaction: {
        id: string;
        status: string;
    };
}>();

const emits = defineEmits<{
    (e: "updated", value: boolean): void;
}>();

const isUpdating = ref<boolean>(false);

const updateStatus = (status: string) => {
    router.put(
        route("backoffice.transaction.update", props.transaction.id),
        { status: status },
        {
            onStart: () => (isUpdating.value = true),
            onError: (error) => console.log(error),
            onSuccess: () => emits("updated", true),
            onFinish: () => (isUpdating.value = false),
        }
    );
};
const printInvoice = () => {};
</script>
<template>
    <div class="text-center">
        <Button
            class="text-xs space-x-2"
            size="xs"
            variant="outline"
            v-if="transaction.status === 'pesan'"
            @click="updateStatus('proses')"
        >
            <RefreshCw
                :class="{ 'animate-spin': isUpdating }"
                class="h-3 w-3"
            />
            <span>Proses Pesanan</span>
        </Button>
        <Button
            class="text-xs space-x-2"
            size="xs"
            variant="outline"
            v-if="transaction.status === 'proses'"
            @click="updateStatus('selesai')"
        >
            <PackageCheck class="h-3 w-3" />
            <span>Pesanan Selesai</span>
        </Button>
        <Button
            class="text-xs space-x-2"
            size="xs"
            variant="outline"
            v-if="transaction.status === 'selesai'"
            @click="updateStatus('dibayar')"
        >
            <Forward class="h-3 w-3" />
            <span>Pesanan dibayar</span>
        </Button>
        <Button
            class="text-xs space-x-2"
            size="xs"
            variant="outline"
            v-if="transaction.status === 'dibayar'"
            @click="printInvoice"
        >
            <ReceiptText class="h-3 w-3" />
            <span>Cetak Invoice</span>
        </Button>
    </div>
</template>
