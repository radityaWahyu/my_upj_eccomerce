<script lang="ts">
import Backoffice from "@/Layouts/Backoffice.vue";
import { Combobox } from "radix-vue/namespaced";

export default {
    layout: Backoffice,
};
</script>
<script setup lang="ts">
import { h, computed, ref, reactive } from "vue";
import { Checkbox } from "@/shadcn/ui/checkbox";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";

import { Alert, AlertDescription } from "@/shadcn/ui/alert";
import { SquarePlus, ArrowDownUp, ArrowUpDown } from "lucide-vue-next";
import type { ColumnDef } from "@tanstack/vue-table";
import { router } from "@inertiajs/vue3";
import DataTable from "@/Components/backoffice/app/DataTable.vue";
import ButtonAction from "@/Components/backoffice/category/ButtonAction.vue";
import ComboBox from "@/Components/backoffice/app/ComboBox.vue";

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
    { value: 2, label: "2" },
    { value: 10, label: "10" },
    { value: 25, label: 25 },
    { value: 50, label: 50 },
    { value: 100, label: 100 },
]);
const isLoading = ref(false);

const props = defineProps({ categories: Object, params: Object });
const pageOptions = {
    sortName: props.params?.sortName,
    sortType: props.params?.sortType,
    search: props.params?.search,
    perPage: props.params?.perPage,
};

const columns: ColumnDef<TCategory>[] = [
    {
        id: "select",
        header: ({ table }) =>
            h(Checkbox, {
                checked:
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate"),
                "onUpdate:checked": (value: any) =>
                    table.toggleAllPageRowsSelected(!!value),
                ariaLabel: "Select all",
            }),
        cell: ({ row }) =>
            h(Checkbox, {
                checked: row.getIsSelected(),
                "onUpdate:checked": (value: any) => row.toggleSelected(!!value),
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
                        pageOptions.sortName = "name";
                        if (pageOptions.sortType == "asc") {
                            pageOptions.sortType = "desc";
                        } else {
                            pageOptions.sortType = "asc";
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
                h(ButtonAction, { id: id })
            );
        },
    },
];

const Categories = computed(() => props.categories?.data);
const CategoryMeta = computed(() => props.categories?.meta as TCategoryMeta);
const getCategories = (page: number) => {
    const url = ref({ page, perPage: pageOptions.perPage });

    if (pageOptions.sortName !== null && pageOptions.sortType !== null) {
        Object.assign(url.value, {
            sortName: pageOptions.sortName,
            sortType: pageOptions.sortType,
        });
    }

    if (pageOptions.search !== null)
        Object.assign(url.value, { search: pageOptions.search });

    router.get(route("backoffice.category.index"), url.value, {
        only: ["categories", "params"],
        preserveState: true,
        preserveScroll: true,
        onStart: () => (isLoading.value = true),
        onFinish: () => (isLoading.value = false),
    });
};
const changePage = (page: number) => getCategories(page);
const limitChange = () => getCategories(CategoryMeta.value.current_page);
</script>
<template>
    <div class="space-y-2 mx-auto max-w-2xl">
        <div class="space-y-2">
            <div class="flex items-center justify-between">
                <h1 class="text-lg font-semibold md:text-xl">Data Kategori</h1>
                <Button variant="secondary" size="icon">
                    <SquarePlus class="w3 h3 text-blue-500" />
                </Button>
            </div>
            <Alert class="bg-secondary shadow-inner shadow-gray-100">
                <AlertDescription class="text-xs">
                    Halaman untuk memanjemen data kategori yang di pakai pada
                    produk atau jasa di sistem. Untuk menambah data baru
                    silahkan mengklik tombol <strong>+</strong>
                </AlertDescription>
            </Alert>
        </div>
        <div class="w-full">
            <div class="flex items-center justify-between py-4">
                <Input
                    class="max-w-sm bg-white"
                    placeholder="Cari Kategori..."
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
    </div>
</template>
