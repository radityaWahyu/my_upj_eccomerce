<script setup lang="ts">
import { ref } from "vue";
import { Link } from "@inertiajs/vue3";
import { ClipboardList, X } from "lucide-vue-next";
type TTransaction = {
    created_at: string;
    finished_at: string;
    id: string;
    shop: string;
    status: string;
    total: number;
    transaction_code: string;
    product_count: number;
};

const props = defineProps<{
    transaction: TTransaction;
}>();

const emits = defineEmits<{
    (e: "deleted", value: boolean): void;
}>();

const Rupiah = (price: number) =>
    new Intl.NumberFormat("en-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(price);

const isDeleting = ref<boolean>(false);
</script>
<template>
    <div class="rounded-lg border border-gray-200 bg-white p-3 shadow-sm">
        <div class="space-y-4">
            <div class="flex items-center gap-3">
                <p class="font-normal text-[11px]">
                    Dipesan tanggal {{ transaction.created_at }}
                </p>
                <div
                    class="capitalize bg-green-300 text-[11px] font-medium text-green-600 px-2 rounded"
                >
                    {{ transaction.status }}
                </div>
            </div>
            <div class="grid grid-cols-[60%_40%] items-center">
                <div>
                    <p class="text-xs font-semibold">
                        Unit layanan {{ transaction.shop }}
                    </p>
                    <h2 class="font-semibold text-lg text-muted-foreground">
                        No {{ transaction.transaction_code }}
                    </h2>
                </div>
                <div class="divide-x divide-gray-200 w-full flex items-center">
                    <div class="grow py-3 px-4 text-center">
                        <p class="text-xs font-medium text-muted-foreground">
                            Jumlah produk
                        </p>
                        <h3 class="text-lg font-semibold">
                            {{ transaction.product_count }} Item
                        </h3>
                    </div>
                    <div class="grow py-3 px-4 text-center">
                        <p class="text-xs font-medium text-muted-foreground">
                            Total :
                        </p>
                        <h3 class="text-lg font-semibold">
                            {{ Rupiah(transaction.total) }}
                        </h3>
                    </div>
                </div>
            </div>
            <div class="w-full flex items-center justify-end">
                <Link
                    :href="route('frontend.transaction.detail', transaction.id)"
                    as="button"
                    class="flex items-center gap-2 py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
                >
                    <ClipboardList class="w-5 h-5" />
                    Detail Transaksi
                </Link>
                <button
                    v-if="transaction.status === 'pesan'"
                    type="button"
                    class="flex items-center gap-3 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900"
                >
                    <X class="w-5 h-5" />
                    Batalkan Pemesanan
                </button>
            </div>
        </div>
    </div>
</template>
