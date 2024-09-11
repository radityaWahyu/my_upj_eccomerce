<script lang="ts">
import Frontend from "@/Layouts/Frontend.vue";

export default {
  layout: Frontend,
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { Head, Link, router } from "@inertiajs/vue3";
import EmptyCart from "@/Assets/images/empty-cart.svg";
import LoginImage from "@/Assets/images/login_two.svg";
import TransactionCard from "@/Components/app/TransactionCard.vue";

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
  } | null;
  params: {
    per_page?: number;
  } | null;
}>();

const isLoading = ref<boolean>(false);

const getTransaction = () => {
  router.reload({
    only: ["transactions", "params"],
    onStart: () => (isLoading.value = true),
    onFinish: () => (isLoading.value = false),
  });
};
</script>
<template>
  <Head title="Daftar Transaksi" />
  <div class="lg:container p-4 min-h-[600px]">
    <div class="lg:w-3/4 mx-auto space-y-4">
      <h2 class="text-lg font-semibold text-gray-900 dark:text-white">
        Daftar Transaksi
      </h2>
      <div class="space-y-4" v-if="transactions !== null && transactions.data.length > 0">
        <div>
          <blockquote class="my-6 border-l-2 pl-6 italic text-sm">
            <strong>Keterangan :</strong> Halaman ini adalah tampilan daftar transaksi
            yang anda lakukan di aplikasi kami.
          </blockquote>
        </div>
        <TransactionCard
          v-for="(transaction, index) in transactions.data"
          :key="index"
          :transaction="transaction"
          :loading="isLoading"
          @cancel="getTransaction"
        />
      </div>
      <div v-if="transactions !== null && transactions.data.length === 0" class="w-full">
        <img :src="EmptyCart" alt="empty_cart" class="w-80 h-80 mx-auto" />
        <h2
          class="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors text-center"
        >
          Tidak terdapat transaksi pada akun anda.
        </h2>
        <p class="text-center text-muted-foreground">
          Silahkan membuat transaksi pemesanan terlebih dahulu dengan memilih produk yang
          tersedia dan mengirim pesanan.
        </p>
      </div>
      <div v-if="transactions === null" class="w-full">
        <img :src="LoginImage" alt="empty_cart" class="w-80 h-80 mx-auto" />
        <h2
          class="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight transition-colors text-center"
        >
          Anda harus LogIn terlebih dahulu agar dapat melihat daftar transaksi anda.
        </h2>
        <p class="text-center text-muted-foreground">
          Apabila belum punya akun silahkan mendaftar terlebih dahulu dengan mengklik
          tombol dibawah.
          <Link
            :href="route('frontend.register')"
            as="button"
            class="mt-4 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5 text-center"
          >
            Daftar Akun Baru
          </Link>
        </p>
      </div>
    </div>
  </div>
</template>
