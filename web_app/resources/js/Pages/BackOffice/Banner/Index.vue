<script lang="ts">
import Backoffice from "@/Layouts/Backoffice.vue";

export default {
    layout: Backoffice,
};
</script>
<script setup lang="ts">
import { ref, h, computed } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { Alert, AlertDescription } from "@/shadcn/ui/alert";
import { Button } from "@/shadcn/ui/button";
import { Plus } from "lucide-vue-next";
import type { ColumnDef } from "@tanstack/vue-table";
import DataTable from "@/Components/backoffice/app/DataTable.vue";
import BannerDetail from "@/Components/backoffice/banner/BannerDetail.vue";
import ComboBox from "@/Components/backoffice/app/ComboBox.vue";
import BannerForm from "./BannerForm.vue";

type TShop = {
    id: string;
    title: string;
    image: string;
    active: boolean;
};

type TBannersMeta = {
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
const props = defineProps<{
    banners: {
        data: TShop[];
        meta: TBannersMeta;
    };
}>();

const formOpen = ref<boolean>(false);

const bannerTable = ref<InstanceType<typeof DataTable> | null>(null);
const columns: ColumnDef<TShop>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return h("div", {}, "Banner");
        },
        cell: ({ row }) =>
            h(BannerDetail, {
                class: "w-full",
                banner: row.original,
                onDeleted: () => getBanners(props.banners.meta.current_page),
                onUpdated: () => getBanners(props.banners.meta.current_page),
            }),
    },
];

const getBanners = (page: number) => {
    const url = ref({ page, perPage: props.banners.meta.per_page });
    router.get(route("backoffice.banner.index"), url.value, {
        only: ["banners"],
        preserveState: true,
        preserveScroll: true,
        onStart: () => (isLoading.value = true),
        onFinish: () => (isLoading.value = false),
    });
};

const changePage = (page: number) => getBanners(page);
const limitChange = () => getBanners(1);
const onSaved = () => {
    formOpen.value = false;
    getBanners(props.banners.meta.current_page);
};
</script>
<template>
    <Head title="Data Banner" />
    <div class="space-y-2 mx-auto max-w-2xl">
        <div class="space-y-2">
            <div class="flex items-center justify-between">
                <h1 class="text-lg font-semibold md:text-xl">Data Banner</h1>
                <div class="flex gap-2">
                    <Button
                        variant="default"
                        @click="formOpen = true"
                        class="flex items-center gap-2 font-semibold"
                    >
                        <Plus class="w-4 h-4" stroke-width="3px" /> Tambah
                    </Button>
                </div>
            </div>
            <Alert class="bg-secondary shadow-inner shadow-gray-100">
                <AlertDescription class="text-xs">
                    Halaman untuk memanjemen banner yang di pakai pada halaman
                    awal website. Untuk menambah data baru silahkan mengklik
                    tombol
                    <strong>+ tambah</strong>
                </AlertDescription>
            </Alert>
        </div>
        <div class="w-full">
            <div class="flex items-center justify-between py-4">
                <div class="inline-flex items-center gap-3">
                    <p class="text-xs font-medium">Data Perpage :</p>
                    <ComboBox
                        :lists="PerPage"
                        v-model="banners.meta.per_page"
                        @change="limitChange"
                        class="w-100"
                    />
                </div>
            </div>
            <DataTable
                ref="bannerTable"
                :columns="columns"
                :data="banners.data"
                :current-page="banners.meta.current_page"
                :last-page="banners.meta.last_page"
                :prev-page="banners.meta.current_page"
                :next-page="banners.meta.to"
                :total="banners.meta.total"
                :loading="isLoading"
                :per-page="banners.meta.per_page"
                @change-page="changePage"
            />
        </div>
        <BannerForm
            :open="formOpen"
            @closed="formOpen = false"
            @saved="onSaved"
        />
    </div>
</template>
