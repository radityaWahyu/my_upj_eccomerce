<script lang="ts">
import Backoffice from "@/Layouts/Backoffice.vue";
import { object } from "zod";

export default {
  layout: Backoffice,
};
</script>
<script setup lang="ts">
import { h, computed, ref } from "vue";
import { watchDebounced } from "@vueuse/core";

import { Checkbox } from "@/shadcn/ui/checkbox";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";

import { Alert, AlertDescription } from "@/shadcn/ui/alert";
import { Badge } from "@/shadcn/ui/badge";
import { Plus, ArrowDownUp, ArrowUpDown, Trash } from "lucide-vue-next";
import type { ColumnDef } from "@tanstack/vue-table";
import { router, Head } from "@inertiajs/vue3";
import DataTable from "@/Components/backoffice/app/DataTable.vue";
import ButtonAction from "@/Components/backoffice/employee/ButtonAction.vue";
import ComboBox from "@/Components/backoffice/app/ComboBox.vue";
import ConfirmDialog from "@/Components/backoffice/app/ConfirmDialog.vue";

type TEmployee = {
  id: string;
  name: string;
  shop: string;
  phone: string;
  whatsapp: string;
  created_at: Date;
  updated_at: Date;
};

type TEmployeesMeta = {
  current_page: number;
  from: number;
  to: number;
  last_page: number;
  total: number;
  per_page: number;
  path: string;
};

const PerPage = ref([
  { value: 10, label: 10 },
  { value: 25, label: 25 },
  { value: 50, label: 50 },
  { value: 100, label: 100 },
]);
const isLoading = ref(false);
const props = defineProps({
  employees: Object,
  params: Object,
  employee: { required: false, type: Object },
});
const search = ref(props.params?.search);
const pageOptions = ref({
  sortName: props.params?.sortName,
  sortType: props.params?.sortType,
  perPage: props.params?.perPage,
});

const deleteConfirmDialog = ref({
  open: false,
  cancelText: "Batalkan",
  okText: "Hapus Data",
});
const employeesTable = ref<InstanceType<typeof DataTable> | null>(null);
const columns: ColumnDef<TEmployee>[] = [
  {
    id: "select",
    header: ({ table }) =>
      h(Checkbox, {
        checked:
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate"),
        "onUpdate:checked": (value: any) => {
          console.log(value);
          if (!value) {
            selectedId.value = [];
            table.resetRowSelection();
          } else {
            const row = table.getRowModel();
            row.rows.forEach((rowData) => {
              //console.log(rowData.original.id);
              selectedId.value.push(rowData.original.id);
            });
          }
          table.toggleAllPageRowsSelected(!!value);
        },
        ariaLabel: "Select all",
      }),
    cell: ({ row }) =>
      h(Checkbox, {
        class: "mr-5",
        id: "check",
        checked: row.getIsSelected(),
        "onUpdate:checked": (value: any) => {
          if (value) {
            selectedId.value.push(row.original.id);
          } else {
            selectedId.value = selectedId.value.filter((id) => id !== row.original.id);
          }

          row.toggleSelected(!!value);
        },
        ariaLabel: "Select row",
      }),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => {
            pageOptions.value.sortName = "name";
            if (pageOptions.value.sortType == "asc") {
              pageOptions.value.sortType = "desc";
            } else {
              pageOptions.value.sortType = "asc";
            }

            getEmployees(EmployeesMeta.value.current_page);
          },
          class: "w-full flex justify-between text-left px-0",
        },
        () => [
          h("div", { class: "gap-2 flex items-center " }, [
            props.params?.sortType == "desc" && props.params?.sortName == "name"
              ? h(ArrowUpDown, { class: "h-4 w-4" })
              : h(ArrowDownUp, { class: "h-4 w-4" }),
            "Nama Pegawai",
          ]),
        ]
      );
    },
    cell: ({ row }) => h("div", {}, row.original.name),
  },
  {
    accessorKey: "phone",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => {
            pageOptions.value.sortName = "phone";
            if (pageOptions.value.sortType == "asc") {
              pageOptions.value.sortType = "desc";
            } else {
              pageOptions.value.sortType = "asc";
            }

            getEmployees(EmployeesMeta.value.current_page);
          },
          class: "w-full flex justify-between text-left px-0",
        },
        () => [
          h("div", { class: "gap-2 flex items-center " }, [
            props.params?.sortType == "desc" && props.params?.sortName == "name"
              ? h(ArrowUpDown, { class: "h-4 w-4" })
              : h(ArrowDownUp, { class: "h-4 w-4" }),
            "No Telepon",
          ]),
        ]
      );
    },
    cell: ({ row }) => h("div", {}, row.original.phone),
  },
  {
    accessorKey: "whatsapp",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => {
            pageOptions.value.sortName = "whatsapp";
            if (pageOptions.value.sortType == "asc") {
              pageOptions.value.sortType = "desc";
            } else {
              pageOptions.value.sortType = "asc";
            }

            getEmployees(EmployeesMeta.value.current_page);
          },
          class: "w-full flex justify-between text-left px-0",
        },
        () => [
          h("div", { class: "gap-2 flex items-center " }, [
            props.params?.sortType == "desc" && props.params?.sortName == "name"
              ? h(ArrowUpDown, { class: "h-4 w-4" })
              : h(ArrowDownUp, { class: "h-4 w-4" }),
            "No Whatsapp",
          ]),
        ]
      );
    },
    cell: ({ row }) => h("div", {}, row.original.whatsapp),
  },
  {
    accessorKey: "shop",
    header: ({ column }) => {
      return h(
        Button,
        {
          variant: "ghost",
          onClick: () => {
            pageOptions.value.sortName = "shop";
            if (pageOptions.value.sortType == "asc") {
              pageOptions.value.sortType = "desc";
            } else {
              pageOptions.value.sortType = "asc";
            }

            getEmployees(EmployeesMeta.value.current_page);
          },
          class: "w-full flex justify-between text-left px-0",
        },
        () => [
          h("div", { class: "gap-2 flex items-center " }, [
            props.params?.sortType == "desc" && props.params?.sortName == "name"
              ? h(ArrowUpDown, { class: "h-4 w-4" })
              : h(ArrowDownUp, { class: "h-4 w-4" }),
            "Unit Layanan",
          ]),
        ]
      );
    },
    cell: ({ row }) => h(Badge, { class: "bg-blue-800" }, row.original.shop),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const id: string = row.original.id as string;
      return h(
        "div",
        { class: "relative text-center" },
        h(ButtonAction, {
          id: id,
          onDeleted: (id: string) => deleteEmployee(id),
          onUpdated: (id: string) => router.get(route("backoffice.employee.edit", id)),
        })
      );
    },
  },
];

const selectedId = ref<string[]>([]);
const Employees = computed(() => props.employees?.data);
const EmployeesMeta = computed(() => props.employees?.meta as TEmployeesMeta);
const getUrl = (page: number) => {
  const url = ref({ page, perPage: pageOptions.value.perPage });

  if (pageOptions.value.sortName !== null && pageOptions.value.sortType !== null) {
    Object.assign(url.value, {
      sortName: pageOptions.value.sortName,
      sortType: pageOptions.value.sortType,
    });
  }

  if (search !== null) Object.assign(url.value, { search });

  return url;
};
const getEmployees = (page: number) => {
  const url = getUrl(page);
  router.get(route("backoffice.employee.index"), url.value, {
    only: ["employees", "params"],
    preserveState: true,
    preserveScroll: true,
    onStart: () => (isLoading.value = true),
    onFinish: () => (isLoading.value = false),
  });
};
const deleteEmployee = (id: string) => {
  router.delete(route("backoffice.employee.delete", id), {
    onStart: () => (isLoading.value = true),
    onFinish: () => (isLoading.value = false),
  });
};
const editEmployee = (id: string) => {
  router.get(
    route("backoffice.employee.edit", id),
    {},
    {
      onStart: () => (isLoading.value = true),
      onFinish: () => (isLoading.value = false),
    }
  );
};
const changePage = (page: number) => getEmployees(page);
const limitChange = () => getEmployees(1);
const deleteAll = () => {
  // console.log(selectedId.value);

  router.post(
    route("backoffice.employee.delete-all"),
    {
      ids: selectedId.value,
    },
    {
      onFinish: () => {
        selectedId.value = [];
        employeesTable.value?.resetTable();
        deleteConfirmDialog.value.open = false;
      },
    }
  );
};
const cancelDeleteAll = () => {
  selectedId.value = [];
  employeesTable.value?.resetTable();
};
watchDebounced(
  search,
  () => {
    getEmployees(EmployeesMeta.value.current_page);
  },
  { debounce: 500, maxWait: 1000 }
);
</script>
<template>
  <Head title="Data Pegawai" />
  <div class="space-y-2 mx-auto w-full">
    <div class="space-y-2">
      <div class="flex items-center justify-between">
        <h1 class="text-lg font-semibold md:text-xl">Pegawai</h1>
        <div class="flex gap-2">
          <div class="flex gap-2" v-if="selectedId.length > 0">
            <Button
              variant="secondary"
              class="flex items-center gap-2"
              @click="cancelDeleteAll"
            >
              Batalkan
            </Button>
            <Button
              variant="destructive"
              class="flex items-center gap-2 font-semibold"
              size="icon"
              @click="deleteConfirmDialog.open = true"
            >
              <Trash class="w-4 h-4" stroke-width="3px" />
            </Button>
          </div>
          <Button
            v-else
            variant="default"
            @click="router.get(route('backoffice.employee.create'))"
            class="flex items-center gap-2 font-semibold"
          >
            <Plus class="w-4 h-4" stroke-width="3px" /> Tambah Pegawai
          </Button>
        </div>
      </div>
      <Alert class="bg-secondary shadow-inner shadow-gray-100 max-w-2xl">
        <AlertDescription class="text-xs">
          Halaman untuk memanajemen Pegawai yang terdapat pada setiap Unit Layanan di SMKN
          1 Purwosari. Untuk menambah data baru silahkan mengklik tombol
          <strong>+ tambah</strong>
        </AlertDescription>
      </Alert>
    </div>
    <div class="w-full">
      <div class="flex items-center justify-between py-4">
        <Input placeholder="Cari data..." v-model="search" class="w-1/2 bg-white" />

        <div class="inline-flex items-center gap-3">
          <p class="text-xs font-medium">Data Perpage :</p>
          <ComboBox
            :lists="PerPage"
            v-model="pageOptions.perPage"
            @change="limitChange"
            class="w-100"
          />
        </div>
      </div>
      <DataTable
        ref="employeesTable"
        :columns="columns"
        :data="Employees"
        :current-page="EmployeesMeta.current_page"
        :last-page="EmployeesMeta.last_page"
        :prev-page="EmployeesMeta.current_page"
        :next-page="EmployeesMeta.to"
        :total="EmployeesMeta.total"
        :loading="isLoading"
        :per-page="EmployeesMeta.per_page"
        @change-page="changePage"
      />
    </div>

    <ConfirmDialog
      :open="deleteConfirmDialog.open"
      :cancel-text="deleteConfirmDialog.cancelText"
      :ok-text="deleteConfirmDialog.okText"
      @cancel="deleteConfirmDialog.open = false"
      @ok="deleteAll"
    >
      <template #title>
        Apakah anda ingin menghapus {{ selectedId.length }} Data?
      </template>
      <template #description>
        Data akan dihapus secara permanen dari sistem dan tidak bisa di kembalikan, mohon
        untuk mengecek kembali data yang akan dihapus.
      </template>
    </ConfirmDialog>
  </div>
</template>
