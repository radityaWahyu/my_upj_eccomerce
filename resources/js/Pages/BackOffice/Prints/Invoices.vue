<script setup lang="ts">
import { onMounted } from "vue";
import { Head } from "@inertiajs/vue3";

type TDetails = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    total: number;
};

type TTransaction = {
    id: string;
    transaction_code: string;
    customer_id: string;
    customer_name: string;
    shop: string;
    total: number;
    details: TDetails[];
    finished_at: string;
    created_at: string;
};

defineProps<{
    transaction: TTransaction;
}>();

onMounted(() => {
    window.print();
});

const Rupiah = (price: number) =>
    new Intl.NumberFormat("en-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(price);
</script>
<template>
    <Head title="Cetak Invoice" />
    <div class="sheet-outer A4 bg-gray-100 print:bg-white py-5 print:py-0">
        <div class="py-8 space-y-10 sheet padding-5mm">
            <div class="flex items-center justify-between pb-10">
                <div class="divide-y divide-gray-300">
                    <div class="text-3xl font-semibold text-tomato">
                        APLIKASI MY UPJ
                    </div>
                    <div class="text-gray-500 font-medium text-sm">
                        SMKN 1 PURWOSARI KAB PASURUAN
                    </div>
                </div>
                <div class="divide-y divide-gray-300 text-right">
                    <div class="font-semibold text-tomato">INVOICE</div>
                    <div class="text-gray-500 font-medium text-lg">
                        {{ transaction.transaction_code }}
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2">
                <div>
                    <h4 class="font-semibold">DITERBITKAN ATAS NAMA</h4>
                    <div class="grid grid-cols-[30%_70%] items-center">
                        <p class="text-sm">Penjual</p>
                        <p class="font-semibold">: {{ transaction.shop }}</p>
                    </div>
                </div>
                <div>
                    <h4 class="font-semibold">UNTUK</h4>
                    <div class="grid grid-cols-[30%_70%] items-center">
                        <p class="text-sm">Pembeli</p>
                        <p class="font-medium capitalize">
                            : {{ transaction.customer_name }}
                        </p>
                    </div>
                    <div class="grid grid-cols-[30%_70%] items-center">
                        <p class="text-sm">Tanggal Pesan</p>
                        <p class="font-medium">
                            : {{ transaction.created_at }}
                        </p>
                    </div>
                    <div class="grid grid-cols-[30%_70%] items-center">
                        <p class="text-sm">Tanggal Dibayar</p>
                        <p class="font-medium">
                            : {{ transaction.finished_at }}
                        </p>
                    </div>
                </div>
            </div>

            <div class="relative overflow-x-auto">
                <table class="w-full text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-900 uppercase bg-gray-50">
                        <tr class="border-y-2 border-gray-500">
                            <th scope="col" class="px-2 py-3 text-left">
                                Nama Item
                            </th>
                            <th scope="col" class="px-2 py-3 text-right">
                                Harga Satuan
                            </th>
                            <th scope="col" class="px-2 py-3 text-center">
                                Jumlah
                            </th>
                            <th scope="col" class="px-2 py-3 text-right">
                                Sub Total
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-gray-900"
                            v-for="(product, index) in transaction.details"
                        >
                            <th
                                scope="row"
                                class="px-2 py-2 font-medium whitespace-nowrap text-left text-sm"
                            >
                                {{ product.name }}
                            </th>
                            <td class="px-2 py-2 text-right text-sm">
                                {{ Rupiah(product.price) }}
                            </td>
                            <td class="px-2 py-2 text-center">
                                {{ product.quantity }}
                            </td>
                            <td
                                class="px-2 py-2 text-right font-medium text-sm"
                            >
                                {{ Rupiah(product.total) }}
                            </td>
                        </tr>
                        <tr class="bg-white border-b">
                            <td
                                colspan="3"
                                class="px-2 py-2 text-sm font-semibold text-right text-gray-800"
                            >
                                Total Bayar
                            </td>
                            <td
                                colspan="3"
                                class="px-2 py-2 font-medium text-right text-gray-800 text-sm"
                            >
                                {{ Rupiah(transaction.total) }}
                            </td>
                        </tr>
                        <tr class="bg-white border-b">
                            <td
                                colspan="3"
                                class="px-2 py-2 text-sm font-semibold text-right text-gray-800"
                            >
                                Status Pembayaran
                            </td>
                            <td
                                colspan="3"
                                class="px-2 py-2 font-semibold text-right text-tomato text-sm"
                            >
                                {{
                                    transaction.finished_at !== null
                                        ? "LUNAS"
                                        : "-"
                                }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.sheet-outer {
    margin: 0;
}
.sheet {
    margin: 0;
    overflow: hidden;
    position: relative;
    box-sizing: border-box;
    page-break-after: always;
}

.sheet-outer.A4 .sheet {
    width: 210mm;
    height: 296mm;
}
.sheet.padding-5mm {
    padding: 5mm;
}

@media screen {
    .sheet {
        background: white;
        box-shadow: 0 0.5mm 1mm rgba(0, 0, 0, 0.3);
        margin: auto;
    }
}
@page {
    size: A4;
    margin: auto;
}
@media print {
    .sheet-outer.A4,
    .sheet-outer.A5.landscape {
        width: 210mm;
    }
}
</style>
