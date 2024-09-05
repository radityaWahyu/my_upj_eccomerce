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
import { Label } from "@/shadcn/ui/label";
import { Button } from "@/shadcn/ui/button";
import DataTable from "@/Components/backoffice/app/DataTable.vue";
import ComboBox from "@/Components/backoffice/app/ComboBox.vue";

type TJurnal = {
    id: string;
    shop: string;
    jurnal_code: string;
    income: number;
    expense: number;
    transaction_id: string;
    transaction_date: string;
    description: string;
};

type TJurnalMeta = {
    current_page: number;
    from: number;
    last_page: number;
    per_page: number;
    to: number;
    total: number;
};

const props = defineProps<{
    jurnals: {
        data: TJurnal[];
    };
    params: {
        sortName: string;
        sortType: string;
        start_date: string;
        end_date: string;
    };
    total_income: number;
    total_expense: number;
}>();

const Rupiah = (price: number) =>
    new Intl.NumberFormat("en-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(price);

const columns: ColumnDef<TJurnal>[] = [
    {
        accessorKey: "jurnal_code",
        header: ({ column }) => {
            return h(
                "h2",
                {
                    class: "w-full flex justify-between text-left px-0",
                },
                "Kode Jurnal"
            );
        },
        cell: ({ row }) => h("div", {}, row.original.jurnal_code),
    },
    {
        accessorKey: "shop",
        header: ({ column }) => {
            return h(
                "h2",
                {
                    class: "w-full flex justify-between text-left px-0",
                },
                "Unit Layanan"
            );
        },
        cell: ({ row }) => h("div", {}, row.original.shop),
    },
    {
        accessorKey: "transaction",
        header: ({ column }) => {
            return h(
                "h2",
                {
                    class: "w-full flex justify-between text-left px-0",
                },
                "Transaksi"
            );
        },
        cell: ({ row }) => h("div", {}, row.original.transaction_id),
    },
    {
        accessorKey: "income",
        header: ({ column }) => {
            return h(
                "h2",
                {
                    class: "text-right px-0",
                },
                "Pemasukan"
            );
        },
        cell: ({ row }) =>
            h("div", { class: "text-right" }, Rupiah(row.original.income)),
    },
    {
        accessorKey: "expense",
        header: ({ column }) => {
            return h(
                "h2",
                {
                    class: "text-right px-0",
                },
                "Pengeluaran"
            );
        },
        cell: ({ row }) =>
            h("div", { class: "text-right" }, Rupiah(row.original.expense)),
    },
    {
        accessorKey: "transaction_date",
        header: ({ column }) => {
            return h(
                "h2",
                {
                    class: "text-right px-0",
                },
                "Tanggal Jurnal"
            );
        },
        cell: ({ row }) =>
            h("div", { class: "text-right" }, row.original.transaction_date),
    },
    {
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const id: string = row.original.id as string;
            return h("div", {}, "");
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
const dateFilter = ref({
    startDate: props.params.start_date,
    endDate: props.params.end_date,
});
const jurnalsTable = ref<InstanceType<typeof DataTable> | null>(null);
const resetDateFilter = () => {
    dateFilter.value.startDate = "";
    dateFilter.value.endDate = "";
    getJurnal();
};
const getJurnal = () => {
    const url = ref({});

    if (
        dateFilter.value.startDate.length > 0 &&
        dateFilter.value.endDate.length > 0
    ) {
        Object.assign(url.value, {
            start_date: dateFilter.value.startDate,
            end_date: dateFilter.value.endDate,
        });
    }

    router.get(route("backoffice.jurnal.index"), url.value, {
        only: ["jurnals", "params", "total_income", "total_expense"],
        preserveState: true,
        preserveScroll: true,
        onStart: () => (isLoading.value = true),
        onFinish: () => (isLoading.value = false),
    });
};
</script>
<template>
    <Head title="Daftar Pemesanan" />
    <div class="space-y-2 mx-auto w-full">
        <div class="space-y-2">
            <div class="flex items-center justify-between">
                <h1 class="text-lg font-semibold md:text-xl">
                    Laporan Keuangan Per Bulan
                </h1>
            </div>
            <Alert class="bg-secondary shadow-inner shadow-gray-100 max-w-2xl">
                <AlertDescription class="text-xs">
                    Halaman untuk melihat laporan keuangan dari setiap transaksi
                    di setiap Unit Layanan di SMKN 1 Purwosari.
                </AlertDescription>
            </Alert>
        </div>
        <div class="w-full space-y-4">
            <div
                class="flex items-center justify-between w-1/2 bg-white border border-gray-20000 rounded-sm p-3"
            >
                <div>
                    <h5 class="text-muted-foreground text-xs font-medium">
                        Total Pemasukan
                    </h5>
                    <h4
                        class="scroll-m-20 text-xl font-semibold tracking-tight"
                    >
                        {{ Rupiah(total_income) }}
                    </h4>
                </div>
                <div>
                    <h5 class="text-muted-foreground text-xs font-medium">
                        Total Pengeluaran
                    </h5>
                    <h4
                        class="scroll-m-20 text-xl font-semibold tracking-tight"
                    >
                        {{ Rupiah(total_expense) }}
                    </h4>
                </div>
            </div>
            <div class="flex items-center py-1 justify-between w-[700px]">
                <div class="inline-flex items-center gap-4">
                    <Label class="text-xs">Tanggal Mulai</Label>
                    <input
                        type="date"
                        name="tanggal_mulai"
                        v-model="dateFilter.startDate"
                        class="text-xs py-1 px-2 border border-gray-300 bg-white rounded"
                    />
                </div>
                <div class="inline-flex items-center gap-3">
                    <Labe class="text-xs">Tanggal Mulai</Labe>
                    <input
                        type="date"
                        name="tanggal_mulai"
                        v-model="dateFilter.endDate"
                        class="text-xs py-1 px-2 border border-gray-300 bg-white rounded"
                    />
                </div>
                <div class="space-x-2">
                    <Button variant="ghost" size="sm" @click="resetDateFilter">
                        Reset
                    </Button>
                    <Button variant="default" size="sm" @click="getJurnal">
                        Tampilkan
                    </Button>
                </div>
            </div>
            <DataTable
                ref="jurnalsTable"
                :columns="columns"
                :data="jurnals.data"
                :current-page="1"
                :last-page="1"
                :prev-page="1"
                :next-page="1"
                :total="jurnals.data.length"
                :loading="isLoading"
                :per-page="10"
                :pagination="false"
            />
        </div>
    </div>
</template>
