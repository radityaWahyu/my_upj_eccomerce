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

type TShops = {
    id: string;
    name: string;
    total_income: number;
    total_expense: number;
};

const props = defineProps<{
    shops: {
        data: TShops[];
    };
    params: {
        sortName: string;
        sortType: string;
        start_date: string;
        end_date: string;
    };
}>();

const Rupiah = (price: number) =>
    new Intl.NumberFormat("en-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(price);

const columns: ColumnDef<TShops>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return h(
                "h2",
                {
                    class: "w-full flex justify-between text-left px-0",
                },
                "Unit Layanan"
            );
        },
        cell: ({ row }) => h("div", {}, row.original.name),
    },
    {
        accessorKey: "income",
        header: ({ column }) => {
            return h(
                "h2",
                {
                    class: "w-full flex justify-between text-left px-0",
                },
                "Pemasukan"
            );
        },
        cell: ({ row }) => h("div", {}, row.original.total_income),
    },
    {
        accessorKey: "expense",
        header: ({ column }) => {
            return h(
                "h2",
                {
                    class: "w-full flex justify-between text-left px-0",
                },
                "Pengeluaran"
            );
        },
        cell: ({ row }) => h("div", {}, row.original.total_expense),
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

const isLoading = ref(false);
const dateFilter = ref({
    startDate: props.params.start_date,
    endDate: props.params.end_date,
});
const shopsTable = ref<InstanceType<typeof DataTable> | null>(null);
const resetDateFilter = () => {
    dateFilter.value.startDate = "";
    dateFilter.value.endDate = "";
    getShops();
};
const getShops = () => {
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
            <!-- <div
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
            </div> -->
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
                ref="shopsTable"
                :columns="columns"
                :data="shops.data"
                :current-page="1"
                :last-page="1"
                :prev-page="1"
                :next-page="1"
                :total="shops.data.length"
                :loading="isLoading"
                :per-page="10"
                :pagination="false"
            />
        </div>
    </div>
</template>
