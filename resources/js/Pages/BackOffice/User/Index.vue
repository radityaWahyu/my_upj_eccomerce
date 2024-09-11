<script lang="ts">
import Backoffice from "@/Layouts/Backoffice.vue";

export default {
    layout: Backoffice,
};
</script>
<script setup lang="ts">
import { h, computed, ref } from "vue";
import { watchDebounced } from "@vueuse/core";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { Alert, AlertDescription } from "@/shadcn/ui/alert";
import { Badge } from "@/shadcn/ui/badge";
import { Plus, ArrowDownUp, ArrowUpDown } from "lucide-vue-next";
import type { ColumnDef } from "@tanstack/vue-table";
import { router, Head } from "@inertiajs/vue3";
import DataTable from "@/Components/backoffice/app/DataTable.vue";
import ButtonAction from "@/Components/backoffice/user/ButtonAction.vue";
import ComboBox from "@/Components/backoffice/app/ComboBox.vue";
import UserNameBox from "@/Components/backoffice/user/UserNameBox.vue";
import UserEnabledBox from "@/Components/backoffice/user/UserEnabledBox.vue";

type TUser = {
    id: string;
    name: string;
    username: string;
    level: string;
    shop: string;
    enabled: boolean;
};

type TUserMeta = {
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
    users: Object,
    params: Object,
});

const search = ref(props.params?.search);
const pageOptions = ref({
    sortName: props.params?.sortName,
    sortType: props.params?.sortType,
    perPage: props.params?.perPage,
});

const usersTable = ref<InstanceType<typeof DataTable> | null>(null);
const columns: ColumnDef<TUser>[] = [
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

                        getUsers(UsersMeta.value.current_page);
                    },
                    class: "w-full flex justify-between text-left px-0",
                },
                () => [
                    h("div", { class: "gap-2 flex items-center " }, [
                        props.params?.sortType == "desc" &&
                        props.params?.sortName == "name"
                            ? h(ArrowUpDown, { class: "h-4 w-4" })
                            : h(ArrowDownUp, { class: "h-4 w-4" }),
                        "Nama Pegawai",
                    ]),
                ]
            );
        },
        cell: ({ row }) =>
            h(UserNameBox, {
                employee: {
                    name: row.original.name,
                    enabled: row.original.enabled,
                },
            }),
    },
    {
        accessorKey: "username",
        header: ({ column }) => {
            return h("div", {}, "Username");
        },
        cell: ({ row }) => h("div", {}, row.original.username),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "shop",
        header: ({ column }) => {
            return h("div", {}, "Unit Layanan");
        },
        cell: ({ row }) =>
            h(Badge, { variant: "secondary" }, row.original.shop),
        enableSorting: false,
        enableHiding: false,
    },
    {
        accessorKey: "enabled",
        header: ({ column }) => {
            return h(
                "p",
                {
                    class: "w-full flex justify-between text-left px-0",
                },
                "Status"
            );
        },
        cell: ({ row }) => h(UserEnabledBox, { enabled: row.original.enabled }),
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
                    onDeleted: (id: string) => deleteUser(id),
                    onUpdated: (id: string) =>
                        router.get(route("backoffice.user.edit", id)),
                })
            );
        },
    },
];

const Users = computed(() => props.users?.data);
const UsersMeta = computed(() => props.users?.meta as TUserMeta);
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
const getUsers = (page: number) => {
    const url = getUrl(page);
    router.get(route("backoffice.user.index"), url.value, {
        only: ["users", "params"],
        preserveState: true,
        preserveScroll: true,
        onStart: () => (isLoading.value = true),
        onFinish: () => (isLoading.value = false),
    });
};
const deleteUser = (id: string) => {
    router.delete(route("backoffice.user.delete", id), {
        onStart: () => (isLoading.value = true),
        onFinish: () => (isLoading.value = false),
    });
};

const changePage = (page: number) => getUsers(page);
const limitChange = () => getUsers(1);

watchDebounced(
    search,
    () => {
        getUsers(UsersMeta.value.current_page);
    },
    { debounce: 500, maxWait: 1000 }
);
</script>
<template>
    <Head title="Data User" />
    <div class="space-y-2 mx-auto w-full">
        <div class="space-y-2">
            <div class="flex items-center justify-between">
                <h1 class="text-lg font-semibold md:text-xl">Data User</h1>
                <div class="flex gap-2">
                    <Button
                        variant="default"
                        @click="router.get(route('backoffice.user.create'))"
                        class="flex items-center gap-2 font-semibold"
                    >
                        <Plus class="w-4 h-4" stroke-width="3px" /> Tambah User
                    </Button>
                </div>
            </div>
            <Alert class="bg-secondary shadow-inner shadow-gray-100 max-w-2xl">
                <AlertDescription class="text-xs">
                    Halaman untuk memanajemen User yang terdapat pada setiap
                    Unit Layanan di SMKN 1 Purwosari. Untuk menambah data baru
                    silahkan mengklik tombol
                    <strong>+ tambah</strong>
                </AlertDescription>
            </Alert>
        </div>
        <div class="w-full">
            <div class="flex items-center justify-between py-4">
                <Input
                    placeholder="Cari user..."
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
                ref="usersTable"
                :columns="columns"
                :data="Users"
                :current-page="UsersMeta.current_page"
                :last-page="UsersMeta.last_page"
                :prev-page="UsersMeta.current_page"
                :next-page="UsersMeta.to"
                :total="UsersMeta.total"
                :loading="isLoading"
                :per-page="UsersMeta.per_page"
                @change-page="changePage"
            />
        </div>
    </div>
</template>
