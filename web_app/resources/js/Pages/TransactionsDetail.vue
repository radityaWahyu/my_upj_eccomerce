<script lang="ts">
import Frontend from "@/Layouts/Frontend.vue";

export default {
    layout: Frontend,
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { Head } from "@inertiajs/vue3";
import EmptyCart from "@/Assets/images/empty-cart.svg";
import LoginImage from "@/Assets/images/login_two.svg";
import TransactionCard from "@/Components/app/TransactionCard.vue";

type TDetailTransaction = {
    id: string;
    image: string;
    name: string;
    price: number;
    quantity: number;
    total: number;
};

type TTransaction = {
    created_at: string;
    details: {
        data: TDetailTransaction[];
    };
    finished_at: string;
    product_count: number;
    id: string;
    shop: string;
    status: string;
    total: number;
    transaction_code: string;
};

const props = defineProps<{
    transaction: TTransaction;
}>();

const Rupiah = (price: number) =>
    new Intl.NumberFormat("en-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(price);
</script>
<template>
    <Head title="Detail Transaksi" />
    <div class="lg:container p-4 min-h-[600px]">
        <div class="lg:w-3/4 mx-auto space-y-4">
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
                Detail Transaksi
            </h2>
            <div
                class="rounded-lg border border-gray-200 bg-white p-3 shadow-sm"
            >
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
                            <h2
                                class="font-semibold text-lg text-muted-foreground"
                            >
                                No. {{ transaction.transaction_code }}
                            </h2>
                        </div>
                        <div
                            class="divide-x divide-gray-200 w-full flex items-center"
                        >
                            <div class="grow py-3 px-4 text-center">
                                <p
                                    class="text-xs font-medium text-muted-foreground"
                                >
                                    Jumlah produk
                                </p>
                                <h3 class="text-lg font-semibold">
                                    {{ transaction.product_count }} Item
                                </h3>
                            </div>
                            <div class="grow py-3 px-4 text-center">
                                <p
                                    class="text-xs font-medium text-muted-foreground"
                                >
                                    Total :
                                </p>
                                <h3 class="text-lg font-semibold">
                                    {{ Rupiah(transaction.total) }}
                                </h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
                Detail Item
            </h2>
            <div class="overflow-x-auto border border-gray-300">
                <table
                    class="w-full text-sm text-left text-gray-500 dark:text-gray-400"
                >
                    <thead
                        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
                    >
                        <tr>
                            <th scope="col" class="px-4 py-3">Produk</th>
                            <th scope="col" class="px-4 py-3">Harga Satuan</th>
                            <th scope="col" class="px-4 py-3">Jumlah</th>
                            <th scope="col" class="px-4 py-3">Sub Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr
                            class="border-b dark:border-gray-700"
                            v-for="(product, index) in transaction.details.data"
                            :key="index"
                        >
                            <th
                                scope="row"
                                class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {{ product.name }}
                            </th>
                            <td class="px-4 py-3">{{ product.price }}</td>
                            <td class="px-4 py-3">{{ product.quantity }}</td>
                            <td class="px-4 py-3">{{ product.total }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
