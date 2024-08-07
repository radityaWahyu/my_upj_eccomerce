<script lang="ts">
import Backoffice from "@/Layouts/Backoffice.vue";
import Table from "@/shadcn/ui/table/Table.vue";

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
import { Plus, ArrowDownUp, ArrowUpDown, Trash } from "lucide-vue-next";
import type { ColumnDef } from "@tanstack/vue-table";
import { router, Head } from "@inertiajs/vue3";
import DataTable from "@/Components/backoffice/app/DataTable.vue";
import ButtonAction from "@/Components/backoffice/category/ButtonAction.vue";
import ComboBox from "@/Components/backoffice/app/ComboBox.vue";
import CategoryForm from "./CategoryForm.vue";
import ConfirmDialog from "@/Components/backoffice/app/ConfirmDialog.vue";

type TCategory = {
    id: string;
    name: string;
    slug: string;
    created_at: Date;
    updated_at: Date;
};

type TCategoryMeta = {
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
    categories: Object,
    params: Object,
    showForm: Boolean,
    category: { required: false, type: Object },
});
const search = ref(props.params?.search);
const pageOptions = ref({
    sortName: props.params?.sortName,
    sortType: props.params?.sortType,
    perPage: props.params?.perPage,
});
const formState = ref<{ open: boolean; title: string }>({
    open: false,
    title: "Tambah Kategori",
});
const deleteConfirmDialog = ref({
    open: false,
    cancelText: "Batalkan",
    okText: "Hapus Data",
});
const categoryTable = ref<InstanceType<typeof DataTable> | null>(null);
const columns: ColumnDef<TCategory>[] = [
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
                        row.rows.forEach(({ id }) => {
                            selectedId.value.push(id);
                        });
                    }
                    table.toggleAllPageRowsSelected(!!value);
                },
                ariaLabel: "Select all",
            }),
        cell: ({ row }) =>
            h(Checkbox, {
                id: "check",
                checked: row.getIsSelected(),
                "onUpdate:checked": (value: any) => {
                    if (value) {
                        selectedId.value.push(row.original.id);
                    } else {
                        selectedId.value = selectedId.value.filter(
                            (id) => id !== row.original.id
                        );
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

                        getCategories(CategoryMeta.value.current_page);
                    },
                    class: "w-full flex justify-between text-left px-0",
                },
                () => [
                    h("div", { class: "gap-2 flex items-center" }, [
                        props.params?.sortType == "desc" &&
                        props.params?.sortName == "name"
                            ? h(ArrowUpDown, { class: "h-4 w-4" })
                            : h(ArrowDownUp, { class: "h-4 w-4" }),
                        "Kategori",
                    ]),
                ]
            );
        },

        cell: ({ row }) =>
            h("div", { class: "capitalize" }, row.getValue("name")),
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
                    onDeleted: (id: string) => deleteCategory(id),
                    onUpdated: (id: string) => {
                        editCategory(id);
                    },
                })
            );
        },
    },
];

const selectedId = ref<string[]>([]);
const Categories = computed(() => props.categories?.data);
const CategoryMeta = computed(() => props.categories?.meta as TCategoryMeta);
const getUrl = (page: number) => {
    const url = ref({ page, perPage: pageOptions.value.perPage });

    if (
        pageOptions.value.sortName !== null &&
        pageOptions.value.sortType !== null
    ) {
        Object.assign(url.value, {
            sortName: pageOptions.value.sortName,
            sortType: pageOptions.value.sortType,
        });
    }

    if (search !== null) Object.assign(url.value, { search });

    return url;
};
const getCategories = (page: number) => {
    const url = getUrl(page);
    router.get(route("backoffice.category.index"), url.value, {
        only: ["categories", "params"],
        preserveState: true,
        preserveScroll: true,
        onStart: () => (isLoading.value = true),
        onFinish: () => (isLoading.value = false),
    });
};
const deleteCategory = (id: string) => {
    router.delete(route("backoffice.category.delete", id), {
        onStart: () => (isLoading.value = true),
        onFinish: () => (isLoading.value = false),
    });
};
const editCategory = (id: string) => {
    router.get(
        route("backoffice.category.edit", id),
        {},
        {
            onStart: () => (isLoading.value = true),
            onFinish: () => (isLoading.value = false),
        }
    );
};
const changePage = (page: number) => getCategories(page);
const limitChange = () => getCategories(1);
const openForm = () => (formState.value.open = true);
const closeForm = (state: boolean) => (formState.value.open = !state);
const savedForm = (state: boolean) => {
    formState.value.open = !state;
};
const deleteAll = () => {
    router.post(
        route("backoffice.category.delete-all"),
        {
            ids: selectedId.value,
        },
        {
            onFinish: () => {
                selectedId.value = [];
                categoryTable.value?.resetTable();
                deleteConfirmDialog.value.open = false;
            },
        }
    );
};
const cancelDeleteAll = () => {
    selectedId.value = [];
    categoryTable.value?.resetTable();
};
watchDebounced(
    search,
    () => {
        getCategories(CategoryMeta.value.current_page);
    },
    { debounce: 500, maxWait: 1000 }
);
</script>
<template>
    <Head title="Data Kategori" />
    <div class="space-y-2 mx-auto max-w-2xl">
        <div class="space-y-2">
            <div class="flex items-center justify-between">
                <h1 class="text-lg font-semibold md:text-xl">Data Kategori</h1>
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
                        @click="openForm"
                        class="flex items-center gap-2 font-semibold"
                    >
                        <Plus class="w-4 h-4" stroke-width="3px" /> Tambah
                    </Button>
                </div>
            </div>
            <Alert class="bg-secondary shadow-inner shadow-gray-100">
                <AlertDescription class="text-xs">
                    Halaman untuk memanjemen data kategori yang di pakai pada
                    produk atau jasa di sistem. Untuk menambah data baru
                    silahkan mengklik tombol <strong>+ tambah</strong>
                </AlertDescription>
            </Alert>
        </div>
        <div class="w-full">
            <div class="flex items-center justify-between py-4">
                <Input
                    placeholder="Cari kategori..."
                    v-model="search"
                    class="w-1/2 bg-white"
                />

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
                ref="categoryTable"
                :columns="columns"
                :data="Categories"
                :current-page="CategoryMeta.current_page"
                :last-page="CategoryMeta.last_page"
                :prev-page="CategoryMeta.current_page"
                :next-page="CategoryMeta.to"
                :total="CategoryMeta.total"
                :loading="isLoading"
                :per-page="CategoryMeta.per_page"
                @change-page="changePage"
            />
        </div>
        <CategoryForm
            :open="formState.open || !!category?.data"
            :title="formState.title"
            @closed="closeForm"
            @saved="savedForm"
            :category="category?.data"
        />
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
                Data akan dihapus secara permanen dari sistem dan tidak bisa di
                kembalikan, mohon untuk mengecek kembali data yang akan dihapus.
            </template>
        </ConfirmDialog>
    </div>
</template>
