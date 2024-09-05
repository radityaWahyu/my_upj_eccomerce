<script lang="ts">
import Backoffice from "@/Layouts/Backoffice.vue";
import { object } from "zod";

export default {
    layout: Backoffice,
};
</script>
<script setup lang="ts">
import { h, computed, ref } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { watchDebounced } from "@vueuse/core";
import type { ColumnDef } from "@tanstack/vue-table";
import { Alert, AlertDescription } from "@/shadcn/ui/alert";
import { Input } from "@/shadcn/ui/input";
import DataTable from "@/Components/backoffice/app/DataTable.vue";
import ComboBox from "@/Components/backoffice/app/ComboBox.vue";
import TransactionCode from "@/Components/backoffice/transaction/TransactionCode.vue";
import TransactionStatus from "@/Components/backoffice/transaction/TransactionStatus.vue";
import TransactionButton from "@/Components/backoffice/transaction/TransactionButton.vue";

type TTransaction = {
    id: string;
    transaction_code: string;
    customer_id: string;
    customer_name: string;
    shop: string;
    product_count: string;
    status: string;
    total: number;
    created_at: string;
};

type TTransactionMeta = {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
};

const props = defineProps<{
    transactions: {
        data: TTransaction[];
        meta: TTransactionMeta;
    };
    params: {
        sortName: string;
        sortType: string;
        search: string;
        title: string;
    };
}>();

const Rupiah = (price: number) =>
    new Intl.NumberFormat("en-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(price);

const columns: ColumnDef<TTransaction>[] = [
    {
        accessorKey: "transaction_code",
        header: ({ column }) => {
            return h(
                "h2",
                {
                    class: "w-full flex justify-between text-left px-0",
                },
                "Kode Transaksi"
            );
        },
        cell: ({ row }) =>
            h(
                TransactionCode,
                {
                    transaction: {
                        id: row.original.id,
                        transaction_code: row.original.transaction_code,
                        shop: row.original.shop,
                    },
                },
                row.original.transaction_code
            ),
    },
    {
        accessorKey: "customer",
        header: ({ column }) => {
            return h(
                "h2",
                {
                    class: "w-full flex justify-between text-left px-0",
                },
                "Pelanggan"
            );
        },
        cell: ({ row }) =>
            h("div", { class: "capitalize" }, row.original.customer_name),
    },
    {
        accessorKey: "created_at",
        header: ({ column }) => {
            return h(
                "h2",
                {
                    class: "text-center",
                },
                "Tanggal Pesan"
            );
        },
        cell: ({ row }) =>
            h("div", { class: "text-center" }, row.original.created_at),
    },
    {
        accessorKey: "item",
        header: ({ column }) => {
            return h(
                "h2",
                {
                    class: "w-full text-center px-0",
                },
                "Produk/Jasa"
            );
        },
        cell: ({ row }) =>
            h(
                "div",
                { class: "text-center" },
                row.original.product_count + " Item"
            ),
    },

    {
        accessorKey: "status",
        header: ({ column }) => {
            return h(
                "h2",
                {
                    class: "text-center",
                },
                "Status"
            );
        },
        cell: ({ row }) =>
            h(TransactionStatus, { status: row.original.status }),
    },

    {
        accessorKey: "total",
        header: ({ column }) => {
            return h(
                "h2",
                {
                    class: "w-full text-right px-0",
                },
                "Total"
            );
        },
        cell: ({ row }) =>
            h("div", { class: "text-right" }, Rupiah(row.original.total)),
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const id: string = row.original.id as string;
            return h(TransactionButton, {
                transaction: {
                    id: row.original.id,
                    status: row.original.status,
                },
                onUpdated: () =>
                    getTransactions(props.transactions.meta.current_page),
            });
        },
    },
];
const PerPage = ref([
    { value: 10, label: 10 },
    { value: 25, label: 25 },
    { value: 50, label: 50 },
    { value: 100, label: 100 },
]);
const isLoading = ref(false);
const search = ref(props.params?.search);
const transactionsTable = ref<InstanceType<typeof DataTable> | null>(null);
const getTransactions = (page: number) => {
    const url = ref({ page, perPage: props.transactions.meta.per_page });
    router.get(route("backoffice.transaction.index", "pesan"), url.value, {
        only: ["transactions", "params"],
        preserveState: true,
        preserveScroll: true,
        onStart: () => (isLoading.value = true),
        onFinish: () => (isLoading.value = false),
    });
};

const changePage = (page: number) => getTransactions(page);
const limitChange = () => getTransactions(1);
</script>
<template>
    <Head title="Daftar Pemesanan" />
    <div class="space-y-2 mx-auto w-full">
        <div class="space-y-2">
            <div class="flex items-center justify-between">
                <h1 class="text-lg font-semibold md:text-xl">
                    {{ params.title }}
                </h1>
                <div class="flex gap-2"></div>
            </div>
            <Alert class="bg-secondary shadow-inner shadow-gray-100 max-w-2xl">
                <AlertDescription class="text-xs">
                    Halaman untuk memanajemen Pemesanan yang terdapat pada
                    setiap Unit Layanan di SMKN 1 Purwosari.
                </AlertDescription>
            </Alert>
        </div>
        <div class="w-full">
            <div class="flex items-center justify-between py-4">
                <Input
                    placeholder="Cari data..."
                    v-model="search"
                    class="w-1/2 bg-white"
                />

                <div class="inline-flex items-center gap-3">
                    <p class="text-xs font-medium">Data Perpage :</p>
                    <ComboBox
                        :lists="PerPage"
                        v-model="transactions.meta.per_page"
                        @change="limitChange"
                        class="w-100"
                    />
                </div>
            </div>
            <DataTable
                ref="transactionsTable"
                :columns="columns"
                :data="transactions.data"
                :current-page="transactions.meta.current_page"
                :last-page="transactions.meta.last_page"
                :prev-page="transactions.meta.current_page"
                :next-page="transactions.meta.to"
                :total="transactions.meta.total"
                :loading="isLoading"
                :per-page="transactions.meta.per_page"
                @change-page="changePage"
            />
        </div>
    </div>
</template>
