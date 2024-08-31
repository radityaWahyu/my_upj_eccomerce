<script lang="ts">
import Frontend from "@/Layouts/Frontend.vue";

export default {
  layout: Frontend,
};
</script>
<script setup lang="ts">
import { Head, Link } from "@inertiajs/vue3";
import { MoveLeft } from "lucide-vue-next";

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
  details: TDetailTransaction[];
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
    <div class="lg:w-3/4 mx-auto space-y-2">
      <div class="flex items-center gap-3">
        <Link
          :href="route('frontend.transaction.index')"
          as="button"
          class="py-2.5 px-5 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
        >
          <MoveLeft class="w-6 h-6 text-muted-foreground" />
        </Link>
        <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
          Detail Transaksi
        </h2>
      </div>
      <div class="rounded-lg border border-gray-200 bg-white p-3">
        <div class="space-y-4">
          <div class="flex items-center gap-3">
            <p class="font-normal text-[11px]">
              Dipesan tanggal {{ transaction.created_at }}
            </p>
            <div
              :class="{
                'bg-gray-100 text-gray-900': transaction.status === 'batal',
                'bg-green-300 text-green-600': transaction.status === 'pesan',
              }"
              class="capitalize text-[11px] font-medium px-2 rounded"
            >
              <span v-if="transaction.status === 'pesan'">Dipesan</span>
              <span v-if="transaction.status === 'batal'">Dibatalkan</span>
            </div>
          </div>
          <div class="grid grid-cols-[60%_40%] items-center">
            <div class="flex items-center gap-8">
              <div class="">
                <div class="text-xs font-medium">Unit layanan.</div>
                <div class="font-medium text-muted-foreground">
                  {{ transaction.shop }}
                </div>
              </div>
              <div class="">
                <div class="text-xs font-medium">No Transaksi.</div>
                <div class="font-semibold text-lg text-muted-foreground">
                  {{ transaction.transaction_code }}
                </div>
              </div>
            </div>
            <div class="divide-x divide-gray-200 w-full flex items-center">
              <div class="grow py-3 px-4 text-center">
                <p class="text-xs font-medium text-muted-foreground">Jumlah produk</p>
                <h3 class="text-lg font-semibold">
                  {{ transaction.product_count }} Item
                </h3>
              </div>
              <div class="grow py-3 px-4 text-center">
                <p class="text-xs font-medium text-muted-foreground">Total Dibayar :</p>
                <h3 class="text-lg font-semibold">
                  {{ Rupiah(transaction.total) }}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white">Detail Item</h2>
      <div class="overflow-x-auto border border-gray-300">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead
            class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
          >
            <tr class="border-b">
              <th scope="col" class="px-4 py-3">Produk</th>
              <th scope="col" class="px-4 py-3 text-right">Harga Satuan</th>
              <th scope="col" class="px-4 py-3 text-center">Jumlah</th>
              <th scope="col" class="px-4 py-3 text-right">Sub Total</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-b bg-white"
              v-for="(product, index) in transaction.details"
              :key="index"
            >
              <th
                scope="row"
                class="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {{ product.name }}
              </th>
              <td class="px-4 py-3 text-right">
                {{ Rupiah(product.price) }}
              </td>
              <td class="px-4 py-3 text-center">{{ product.quantity }} Item</td>
              <td class="px-4 py-3 text-right">
                {{ Rupiah(product.total) }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
