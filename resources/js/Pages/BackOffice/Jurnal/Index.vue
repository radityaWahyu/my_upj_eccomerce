<script lang="ts">
import Backoffice from "@/Layouts/Backoffice.vue";
import { object } from "zod";

export default {
    layout: Backoffice,
};
</script>
<script setup lang="ts">
import { h, ref, computed } from "vue";
import { Head, router } from "@inertiajs/vue3";
import type { ColumnDef } from "@tanstack/vue-table";
import { Alert, AlertDescription } from "@/shadcn/ui/alert";
import { OctagonAlert } from "lucide-vue-next";
import { ChevronsDown } from "lucide-vue-next";
import { Label } from "@/shadcn/ui/label";
import { Button } from "@/shadcn/ui/button";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/shadcn/ui/select";
import DataTable from "@/Components/backoffice/app/DataTable.vue";
import JurnalMoney from "@/Components/backoffice/jurnal/JurnalMoney.vue";
import JurnalTransactionCode from "@/Components/backoffice/jurnal/JurnalTransactionCode.vue";
import JurnalExpandedButton from "@/Components/backoffice/jurnal/JurnalExpandedButton.vue";

type TShop = {
    id: string;
    name: string;
};

type TJurnal = {
    id: string;
    shop: string;
    jurnal_code: string;
    income: number;
    expense: number;
    transaction_id: string;
    transaction_code: string;
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
    shops: TShop[];
    jurnals: {
        data: TJurnal[];
    };
    params: {
        sortName: string;
        sortType: string;
        start_date: string;
        end_date: string;
        filter_by_shop: string;
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
        id: "actions",
        enableHiding: false,
        cell: ({ row }) => {
            const id: string = row.original.id as string;
            return h(
                "div",
                { class: "text-center" },
                h(JurnalExpandedButton, {
                    onExpand: row.toggleExpanded,
                    expanded: row.getIsExpanded(),
                })
            );
        },
    },
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
        cell: ({ row }) =>
            h(
                "div",
                { class: "font-semibold text-muted-foreground" },
                row.original.jurnal_code
            ),
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
        cell: ({ row }) =>
            h(
                "div",
                { class: "font-semibold text-muted-foreground" },
                row.original.shop
            ),
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
        cell: ({ row }) =>
            h(JurnalTransactionCode, {
                transaction: {
                    id: row.original.transaction_id,
                    transaction_code: row.original.transaction_code,
                },
            }),
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
            h(JurnalMoney, {
                value: row.original.income,
                type: "income",
                class: "text-right",
            }),
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
            h(JurnalMoney, {
                value: row.original.expense,
                type: "expense",
                class: "text-right",
            }),
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
];
const PerPage = ref([
    { value: 10, label: 10 },
    { value: 25, label: 25 },
    { value: 50, label: 50 },
    { value: 100, label: 100 },
]);
const isLoading = ref(false);
const totalSaldo = computed(() => props.total_income - props.total_expense);
const filterShop = ref<string>(props.params.filter_by_shop);
const dateFilter = ref({
    startDate: props.params.start_date,
    endDate: props.params.end_date,
});
const jurnalsTable = ref<InstanceType<typeof DataTable> | null>(null);
const resetDateFilter = () => {
    dateFilter.value.startDate = "";
    dateFilter.value.endDate = "";
    filterShop.value = "";
    getJurnal();
};
const getJurnal = () => {
    const url = ref({});

    if (
        dateFilter.value.startDate !== null &&
        dateFilter.value.endDate !== null &&
        dateFilter.value.startDate.length > 0 &&
        dateFilter.value.endDate.length > 0
    ) {
        Object.assign(url.value, {
            start_date: dateFilter.value.startDate,
            end_date: dateFilter.value.endDate,
        });
    }

    if (filterShop.value !== null && filterShop.value.length > 0) {
        Object.assign(url.value, {
            filter_by_shop: filterShop.value,
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
            <Alert class="bg-secondary shadow-inner shadow-gray-100 w-1/2">
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
                        class="scroll-m-20 text-xl font-semibold tracking-tight text-primary"
                    >
                        {{ Rupiah(total_income) }}
                    </h4>
                </div>
                <div>
                    <h5 class="text-muted-foreground text-xs font-medium">
                        Total Pengeluaran
                    </h5>
                    <h4
                        class="scroll-m-20 text-xl font-semibold tracking-tight text-red-500"
                    >
                        {{ Rupiah(total_expense) }}
                    </h4>
                </div>
                <div>
                    <h5 class="text-muted-foreground text-xs font-medium">
                        Saldo
                    </h5>
                    <h4
                        class="scroll-m-20 text-xl font-semibold tracking-tight"
                    >
                        {{ Rupiah(totalSaldo) }}
                    </h4>
                </div>
            </div>
            <div class="flex items-center py-1 justify-between w-full">
                <div class="space-x-2">
                    <div class="inline-flex items-center gap-4">
                        <Label class="text-sm">Tanggal Mulai</Label>
                        <input
                            type="date"
                            name="tanggal_mulai"
                            v-model="dateFilter.startDate"
                            class="text-sm py-1 px-2 border border-gray-300 bg-white rounded"
                        />
                    </div>
                    <div class="inline-flex items-center gap-3">
                        <Label class="text-sm">Tanggal Akhir</Label>
                        <input
                            type="date"
                            name="tanggal_mulai"
                            v-model="dateFilter.endDate"
                            class="text-sm py-1 px-2 border border-gray-300 bg-white rounded"
                        />
                    </div>
                </div>
                <div class="flex items-center gap-3">
                    <div>
                        <Select
                            v-model:model-value="filterShop"
                            v-if="
                                $page.props.auth.admin.level === 'administrator'
                            "
                        >
                            <SelectTrigger class="w-[300px] bg-white">
                                <SelectValue
                                    placeholder="Filter Unit Layanan"
                                />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectItem
                                        v-for="(shop, index) in shops"
                                        :key="index"
                                        :value="shop.id"
                                    >
                                        {{ shop.name }}
                                    </SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    <Button variant="outline" @click="resetDateFilter">
                        Reset
                    </Button>
                    <Button variant="default" @click="getJurnal">
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
            >
                <template v-slot:expanded="{ row }">
                    <div class="text-sm">
                        <span class="font-semibold">Deksripsi Jurnal : </span>
                        {{ row.original.description }}
                    </div>
                </template>
                <template #empty>
                    <div
                        class="grid grid-cols-[10%_90%] items-center bg-blue-200 py-2 rounded text-blue-800"
                    >
                        <div>
                            <OctagonAlert class="h-8 w-8 m-auto" />
                        </div>
                        <p class="text-left">
                            <strong class="block">Keterangan :</strong>
                            Tidak terdapat transaksi jurnal pada mulai dari
                            transaksi pemasukan dan transaksi pengeluaran
                        </p>
                    </div>
                </template>
            </DataTable>
        </div>
    </div>
</template>
