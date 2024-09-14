<script setup lang="ts">
import { ref } from "vue";
import { Link, router } from "@inertiajs/vue3";
import { ClipboardList, X, ClockArrowUp, RefreshCw } from "lucide-vue-next";
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

const props = withDefaults(
    defineProps<{
        transaction: TTransaction;
        loading?: boolean;
    }>(),
    {
        loading: false,
    }
);

const emits = defineEmits<{
    (e: "cancel", value: boolean): void;
}>();

const Rupiah = (price: number) =>
    new Intl.NumberFormat("en-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(price);

const isCancel = ref<boolean>(false);
const cancelTransaction = () => {
    router.put(
        route("frontend.transaction.cancel", props.transaction.id),
        {},
        {
            onStart: () => (isCancel.value = true),
            onSuccess: () => {
                emits("cancel", true);
            },
            onError: (error) => console.log("error"),
            onFinish: () => (isCancel.value = false),
        }
    );
};
</script>
<template>
    <div
        class="rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
        v-if="loading"
    >
        <div class="space-y-1">
            <div class="w-[300px] animate-pulse">
                <div class="h-2 bg-gray-200 rounded-full mb-2.5"></div>
            </div>
            <div class="grid grid-cols-[60%_40%] items-center">
                <div>
                    <div class="animate-pulse">
                        <div
                            class="h-2 bg-gray-200 rounded-full w-1/2 mb-2.5"
                        ></div>
                    </div>
                    <h2 class="animate-pulse">
                        <div
                            class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
                        ></div>
                    </h2>
                </div>
                <div class="divide-x divide-gray-200 w-full flex items-center">
                    <div class="grow py-3 px-4 text-center">
                        <div class="animate-pulse">
                            <div
                                class="h-2 bg-gray-200 rounded-full mb-2.5"
                            ></div>
                        </div>
                        <div class="text-lg font-semibold">
                            <div
                                class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"
                            ></div>
                        </div>
                    </div>
                    <div class="grow py-3 px-4 text-center">
                        <div class="animate-pulse">
                            <div
                                class="h-2 bg-gray-200 rounded-full mb-2.5"
                            ></div>
                        </div>
                        <div class="text-lg font-semibold">
                            <div
                                class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 mb-4"
                            ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full flex items-center justify-end py-4 gap-4">
                <div
                    class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
                ></div>
                <div
                    class="h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"
                ></div>
            </div>
        </div>
    </div>
    <div
        class="rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
        v-else
    >
        <div class="space-y-1">
            <div class="flex items-center gap-3">
                <p class="font-normal text-[11px]">
                    Dipesan tanggal {{ transaction.created_at }}
                </p>
            </div>
            <div
                class="grid grid-row-2 lg:grid-cols-[60%_40%] items-center gap-2 lg:gap-0"
            >
                <div class="text-center lg:text-left">
                    <p class="text-xs font-semibold">
                        Unit layanan {{ transaction.shop }}
                    </p>
                    <h2 class="font-semibold text-lg text-muted-foreground">
                        No {{ transaction.transaction_code }}
                    </h2>
                </div>
                <div class="divide-x divide-gray-200 w-full flex items-center">
                    <div class="grow py-1 text-center">
                        <p class="text-xs font-medium text-muted-foreground">
                            Jumlah produk
                        </p>
                        <h3 class="text-lg font-semibold">
                            {{ transaction.product_count }} Item
                        </h3>
                    </div>
                    <div class="grow py-1 text-center">
                        <p class="text-xs font-medium text-muted-foreground">
                            Total :
                        </p>
                        <h3 class="text-lg font-semibold">
                            {{ Rupiah(transaction.total) }}
                        </h3>
                    </div>
                </div>
            </div>
            <div
                class="w-full py-2 flex items-center justify-between flex-wrap gap-3 lg:gap-0"
            >
                <div
                    :class="{
                        'bg-gray-100 text-gray-900':
                            transaction.status === 'batal',
                        'bg-yellow-300 text-yellow-900':
                            transaction.status === 'pesan',
                        'bg-green-300 text-green-900':
                            transaction.status === 'proses',
                    }"
                    class="capitalize focus:outline-none font-medium rounded text-xs px-4 py-2 w-full lg:w-auto"
                >
                    <span
                        v-if="transaction.status === 'pesan'"
                        class="flex items-center gap-2"
                    >
                        <ClockArrowUp class="w-4 h-4" />
                        Menunggu di proses..
                    </span>
                    <span v-if="transaction.status === 'batal'"
                        >Pesanan Dibatalkan</span
                    >
                    <span
                        v-if="transaction.status === 'proses'"
                        class="flex items-center gap-2"
                    >
                        <RefreshCw class="w-3 h-3 animate-spin" />
                        Pesanan sedang di proses
                    </span>
                </div>
                <div class="flex items-center justify-end gap-2 flex-wrap">
                    <Link
                        :href="
                            route('frontend.transaction.detail', transaction.id)
                        "
                        as="button"
                        class="flex items-center gap-2 py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 w-full lg:w-auto"
                    >
                        <ClipboardList class="w-5 h-5" />
                        Detail Transaksi
                    </Link>
                    <button
                        v-if="transaction.status === 'pesan'"
                        type="button"
                        class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:focus:ring-yellow-900 w-full lg:w-auto"
                        @click="cancelTransaction"
                        :disabled="isCancel"
                    >
                        <span v-if="isCancel"> Membatalkan Pemesanan... </span>
                        <span class="flex items-center gap-3" v-else>
                            <X class="w-5 h-5" />
                            Batalkan Pemesanan
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
