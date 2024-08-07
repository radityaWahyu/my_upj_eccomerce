<script setup lang="ts">
import { ref } from "vue";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/shadcn/ui/dialog";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/shadcn/ui/form";
import { useField, useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";
import { router, usePage } from "@inertiajs/vue3";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";

type TServerValidation = {
    names: string;
};

type TCategory = {
    id: string;
    name: string;
};

const props = withDefaults(
    defineProps<{
        open: boolean;
        title: string;
        category?: TCategory;
    }>(),
    {
        open: true,
        title: "Tambah Kategori",
    }
);

const emits = defineEmits<{
    (e: "closed", value: boolean): void;
    (e: "saved", value: boolean): void;
}>();

const validationSchema = toTypedSchema(
    zod.object({
        name: zod
            .string({ message: "Data Kategori harus diisi" })
            .min(1, { message: "Data Kategori harus diisi." }),
        _token: zod.string(),
    })
);
const isLoading = ref<boolean>(false);
const serverValidation = ref<any>();
const form = useForm({
    validationSchema,
});
const page = usePage();

form.setFieldValue("_token", page.props.csrf_token as string);
form.setFieldValue("name", props.category?.name);

const closeForm = () => {
    serverValidation.value = null;
    if (!props.category) {
        emits("closed", true);
    } else {
        window.history.back();
    }
};

const onSubmit = form.handleSubmit((formData) => {
    if (!props.category) {
        router.post(route("backoffice.category.store"), formData, {
            onStart: () => (isLoading.value = true),
            onError: (errors) => {
                serverValidation.value = errors;
            },
            onSuccess: () => {
                emits("saved", true);
            },
            onFinish: () => (isLoading.value = false),
        });
    } else {
        router.put(
            route("backoffice.category.update", props.category.id),
            formData,
            {
                preserveState: true,
                onStart: () => (isLoading.value = true),
                onError: (errors) => {
                    serverValidation.value = errors;
                },
                onSuccess: () => {
                    emits("saved", true);
                },
                onFinish: () => (isLoading.value = false),
            }
        );
    }
});
</script>
<template>
    <Dialog :open="open">
        <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>{{ title }}</DialogTitle>
                <DialogDescription class="text-sm">
                    Data kategori dipergunakan untuk memanajemen data produk
                    atau jasa pada sistem. Silahkan menginputkan data dengan
                    benar.
                </DialogDescription>
            </DialogHeader>
            <form @submit="onSubmit">
                <FormField v-slot="{ componentField }" name="name">
                    <FormItem>
                        <FormLabel
                            :class="{
                                'text-red-500':
                                    serverValidation && !!serverValidation.name,
                            }"
                            >Nama Kategori</FormLabel
                        >
                        <FormControl>
                            <Input
                                type="text"
                                placeholder="Input kategori"
                                v-bind="componentField"
                                :class="{
                                    'border border-red-500':
                                        serverValidation &&
                                        !!serverValidation.name,
                                }"
                                :disabled="isLoading"
                                class=""
                            />
                        </FormControl>
                        <div
                            class="text-xs text-red-500 font-medium"
                            v-if="serverValidation"
                        >
                            {{ serverValidation.name }}
                        </div>
                        <FormMessage />
                    </FormItem>
                </FormField>
            </form>
            <DialogFooter>
                <Button
                    type="button"
                    variant="ghost"
                    form="dialogForm"
                    @click="closeForm"
                    :disabled="isLoading"
                >
                    Batal
                </Button>
                <Button type="submit" @click="onSubmit" :disabled="isLoading">
                    <span v-if="isLoading">Menyimpan data...</span>
                    <span v-else>Simpan</span>
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
