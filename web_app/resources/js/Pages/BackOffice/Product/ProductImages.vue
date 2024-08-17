<script lang="ts">
import Backoffice from "@/Layouts/Backoffice.vue";

export default {
    layout: Backoffice,
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { Head, router } from "@inertiajs/vue3";
import { Button } from "@/shadcn/ui/button";
import { Badge } from "@/shadcn/ui/badge";
import { Alert, AlertDescription, AlertTitle } from "@/shadcn/ui/alert";
import { MoveLeft, Plus, BadgeInfo } from "lucide-vue-next";
import ImageBox from "@/Components/backoffice/product/ImageBox.vue";
import ProductImageForm from "./ProductImageForm.vue";

type TProduct = {
    id: string;
    name: string;
    shop: string;
    category: string;
    type: string;
    user: string;
};
type TImage = {
    id: string;
    title: string;
    image: string;
};

const props = defineProps<{
    product: { data: TProduct };
    images: { data: TImage[] };
}>();

const formOpen = ref<boolean>(false);
const onSaved = () => {
    formOpen.value = false;
    getImages();
};
const getImages = () => {
    router.get(
        route("backoffice.product.images", props.product.data.id),
        {},
        { only: ["images"] }
    );
};
</script>
<template>
    <Head title="Produk dan Jasa" />
    <div class="space-y-5 mx-auto w-9/12">
        <div class="flex items-center justify-between">
            <div class="inline-flex items-center gap-2">
                <h1 class="text-lg font-semibold md:text-xl">
                    Gambar {{ product.data.name }}
                </h1>
                <Badge variant="secondary" class="text-primary capitalize">{{
                    product.data.type
                }}</Badge>
            </div>

            <Button
                variant="default"
                @click="router.get(route('backoffice.product.index'))"
                class="flex items-center gap-2 font-semibold"
            >
                <MoveLeft class="w-4 h-4" stroke-width="3px" /> Kembali
            </Button>
        </div>
        <div
            class="flex items-center justify-between bg-white p-6 rounded-lg border border-gray-200"
        >
            <div>
                <h4 class="font-semibold text-sm text-gray-500">Kategori :</h4>
                <p class="text-sm">{{ product.data.category }}</p>
            </div>
            <div>
                <h4 class="font-semibold text-sm text-gray-500">
                    Unit Layanan :
                </h4>
                <p class="text-sm">{{ product.data.shop }}</p>
            </div>
            <div>
                <h4 class="font-semibold text-sm text-gray-500">
                    Dibuat Oleh :
                </h4>
                <p class="text-sm">{{ product.data.user }}</p>
            </div>
        </div>
        <div class="space-y-2">
            <h3 class="text-lg font-medium text-gray-600">Manajemen Gambar</h3>
            <Alert class="bg-blue-50">
                <BadgeInfo class="h-5 w-5" />
                <AlertTitle>Keterangan</AlertTitle>
                <AlertDescription>
                    Silahkan tambahkan gambar produk atau jasa yang dijual dalam
                    sistem. Gambar yang dimasukkan harus berukuran maksimal 1Mb
                    dan berbentuk square.
                </AlertDescription>
            </Alert>
            <div
                class="min-h-[250px] w-full border border-gray-100 rounded-lg p-5 bg-white flex items-start flex-wrap gap-5"
            >
                <button
                    type="button"
                    class="flex flex-col items-center justify-center h-44 w-44 rounded-lg border bg-gray-200 border-gray-100 shadow-sm shadow-gray-200 gap-2 text-xs"
                    @click="formOpen = true"
                >
                    <div type="button" class="rounded-full p-2 bg-gray-400">
                        <Plus class="w-5 h-5 text-white" />
                    </div>
                    Tambah Gambar
                </button>
                <template v-if="images.data.length > 0">
                    <ImageBox
                        v-for="image in images.data"
                        :key="image.id"
                        :image="image"
                    />
                </template>
                <Alert class="bg-yellow-100 w-1/2" v-else>
                    <BadgeInfo class="h-5 w-5" />
                    <AlertTitle>Keterangan</AlertTitle>
                    <AlertDescription>
                        Gambar masih kosong, silahkan tambahkan gambar baru.
                    </AlertDescription>
                </Alert>
            </div>
        </div>
        <ProductImageForm
            :open="formOpen"
            @closed="formOpen = false"
            :id="product.data.id"
            @saved="onSaved"
        />
    </div>
</template>
