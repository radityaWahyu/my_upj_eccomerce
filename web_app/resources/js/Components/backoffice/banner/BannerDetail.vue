<script setup lang="ts">
import { ref } from "vue";
import { router, usePage } from "@inertiajs/vue3";
import { Button } from "@/shadcn/ui/button";
import { EyeOff, Eye } from "lucide-vue-next";
import NoImage from "@/Assets/images/no-image.jpg";
import ConfirmDialog from "../app/ConfirmDialog.vue";

type TBanner = {
    id: string;
    title: string;
    image: string;
    active: boolean;
};

const props = defineProps<{
    banner: TBanner;
}>();

const emits = defineEmits<{
    (e: "deleted", value: true): void;
    (e: "updated", value: true): void;
}>();

const page = usePage();
const deleteConfirmDialog = ref({
    open: false,
    cancelText: "Batalkan",
    okText: "Hapus Gambar",
});

const isLoading = ref({
    onDelete: false,
    onUpdate: false,
});

const onDelete = () => {
    router.delete(route("backoffice.banner.delete", props.banner.id), {
        onStart: () => {
            deleteConfirmDialog.value.open = false;
            isLoading.value.onDelete = true;
        },
        onSuccess: () => {
            emits("deleted", true);
        },
        onFinish: () => (isLoading.value.onDelete = false),
    });
};

const onUpdate = () => {
    router.post(
        route("backoffice.banner.activated", props.banner.id),
        {
            _token: page.props.csrf_token as string,
            active: !props.banner.active,
        },
        {
            onStart: () => (isLoading.value.onUpdate = true),
            onSuccess: () => {
                emits("updated", true);
            },
            onFinish: () => (isLoading.value.onUpdate = false),
        }
    );
};
</script>
<template>
    <div class="flex items-center gap-4">
        <div class="relative h-32 w-full rounded overflow-hidden">
            <img
                :class="{ grayscale: !banner.active }"
                :src="banner.image ? banner.image : NoImage"
                :alt="banner.title"
                class="object-cover object-center w-full h-full"
            />
            <div
                class="absolute z-10 top-0 w-full h-full flex flex-col justify-end"
            >
                <div
                    class="bg-gray-900/50 px-2 py-2 flex items-center justify-between"
                >
                    <div class="flex items-center gap-3">
                        <h3 class="text-white py-1 capitalize font-medium">
                            {{ banner.title }}
                        </h3>
                    </div>
                    <div class="flex items-center gap-2">
                        <Button
                            type="button"
                            size="icon"
                            variant="default"
                            :disabled="isLoading.onUpdate"
                            @click="onUpdate"
                        >
                            <EyeOff class="h-3 w-3" v-if="banner.active" />
                            <Eye class="h-3 w-3" v-else="banner.active" />
                        </Button>
                        <Button
                            type="button"
                            variant="destructive"
                            @click="deleteConfirmDialog.open = true"
                            :disabled="isLoading.onDelete || isLoading.onUpdate"
                        >
                            <span v-if="!isLoading.onDelete">Hapus</span>
                            <span v-else>Menghapus banner...</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
        <ConfirmDialog
            :open="deleteConfirmDialog.open"
            :cancel-text="deleteConfirmDialog.cancelText"
            :ok-text="deleteConfirmDialog.okText"
            @cancel="deleteConfirmDialog.open = false"
            @ok="onDelete"
        >
            <template #title>
                Apakah anda ingin menghapus Gambar ini?
            </template>
            <template #description>
                Gambar akan dihapus secara permanen dari sistem dan tidak bisa
                di kembalikan, mohon untuk mengecek kembali gambar yang akan
                dihapus.
            </template>
        </ConfirmDialog>
    </div>
</template>
