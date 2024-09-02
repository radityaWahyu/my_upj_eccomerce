<script lang="ts">
import Backoffice from "@/Layouts/Backoffice.vue";
import { object } from "zod";
import { Verified } from "lucide-vue-next";

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
import CustomerEnabledBox from "@/Components/backoffice/customer/CustomerEnabledBox.vue";
import CustomerVerifiedBox from "@/Components/backoffice/customer/CustomerVerifiedBox.vue";

type TCustomer = {
  id: string;
  name: string;
  whatsapp: string;
  phone: string;
  address: string;
  verified: boolean;
  enabled: boolean;
};

type TCustomerMeta = {
  current_page: number;
  from: number;
  last_page: number;
  per_page: number;
  to: number;
  total: number;
};

const props = defineProps<{
  customers: {
    data: TCustomer[];
    meta: TCustomerMeta;
  };
  params: {
    sortName: string;
    sortType: string;
    search: string;
  };
}>();

const columns: ColumnDef<TCustomer>[] = [
  {
    accessorKey: "name",
    header: ({ column }) => {
      return h(
        "h2",
        {
          class: "w-full flex justify-between text-left px-0",
        },
        "Nama Pelanggan"
      );
    },
    cell: ({ row }) => h("h2", {}, row.original.name),
  },
  {
    accessorKey: "phone",
    header: ({ column }) => {
      return h(
        "p",
        {
          class: "w-full flex justify-between text-left px-0",
        },
        "No Telepon"
      );
    },
    cell: ({ row }) => h("h2", {}, row.original.phone),
  },
  {
    accessorKey: "whatsapp",
    header: ({ column }) => {
      return h(
        "p",
        {
          class: "w-full flex justify-between text-left px-0",
        },
        "No Whatsapp"
      );
    },
    cell: ({ row }) => h("h2", {}, row.original.whatsapp),
  },
  {
    accessorKey: "verified",
    header: ({ column }) => {
      return h(
        "p",
        {
          class: "w-full flex justify-between text-left px-0",
        },
        "verified"
      );
    },
    cell: ({ row }) => h(CustomerVerifiedBox, { verified: row.original.verified }),
  },
  {
    accessorKey: "enabled",
    header: ({ column }) => {
      return h(
        "p",
        {
          class: "w-full flex justify-between text-left px-0",
        },
        "status"
      );
    },
    cell: ({ row }) => h(CustomerEnabledBox, { enabled: row.original.enabled }),
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
const search = ref(props.params?.search);
const customersTable = ref<InstanceType<typeof DataTable> | null>(null);
const getCustomers = (page: number) => {
  const url = ref({ page, perPage: props.customers.meta.per_page });

  if (search !== null) Object.assign(url.value, { search });

  router.get(route("backoffice.customer.index"), url.value, {
    only: ["customers", "params"],
    preserveState: true,
    preserveScroll: true,
    onStart: () => (isLoading.value = true),
    onFinish: () => (isLoading.value = false),
  });
};

const changePage = (page: number) => getCustomers(page);
const limitChange = () => getCustomers(1);
watchDebounced(
  search,
  () => {
    getCustomers(props.customers.meta.current_page);
  },
  { debounce: 500, maxWait: 1000 }
);
</script>
<template>
  <Head title="Data Pelanggan" />
  <div class="space-y-2 mx-auto w-full">
    <div class="space-y-2">
      <div class="flex items-center justify-between">
        <h1 class="text-lg font-semibold md:text-xl">Pelanggan</h1>
        <div class="flex gap-2"></div>
      </div>
      <Alert class="bg-secondary shadow-inner shadow-gray-100 max-w-2xl">
        <AlertDescription class="text-xs">
          Halaman untuk memanajemen Pelanggan yang telah mendaftar pada sistem ini.
        </AlertDescription>
      </Alert>
    </div>
    <div class="w-full">
      <div class="flex items-center justify-between py-4">
        <Input placeholder="Cari pelanggan..." v-model="search" class="w-1/2 bg-white" />

        <div class="inline-flex items-center gap-3">
          <p class="text-xs font-medium">Data Perpage :</p>
          <ComboBox
            :lists="PerPage"
            v-model="customers.meta.per_page"
            @change="limitChange"
            class="w-100"
          />
        </div>
      </div>
      <DataTable
        ref="customersTable"
        :columns="columns"
        :data="customers.data"
        :current-page="customers.meta.current_page"
        :last-page="customers.meta.last_page"
        :prev-page="customers.meta.current_page"
        :next-page="customers.meta.to"
        :total="customers.meta.total"
        :loading="isLoading"
        :per-page="customers.meta.per_page"
        @change-page="changePage"
      />
    </div>
  </div>
</template>
