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
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";
import { router, usePage } from "@inertiajs/vue3";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";

type TServerValidation = {
    names: string;
};

type TShop = {
    id: string;
    name: string;
};

const props = withDefaults(
    defineProps<{
        open: boolean;
        title: string;
        shop?: TShop;
    }>(),
    {
        open: true,
        title: "Tambah Unit Layanan",
    }
);

const emits = defineEmits<{
    (e: "closed", value: boolean): void;
    (e: "saved", value: boolean): void;
}>();

const validationSchema = toTypedSchema(
    zod.object({
        name: zod
            .string({ message: "Unit Layanan harus diisi" })
            .min(1, { message: "Unit Layanan harus diisi." }),
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
form.setFieldValue("name", props.shop?.name);

const closeForm = () => {
    serverValidation.value = null;
    if (!props.shop) {
        emits("closed", true);
    } else {
        window.history.back();
    }
};

const onSubmit = form.handleSubmit((formData) => {
    if (!props.shop) {
        router.post(route("backoffice.shop.store"), formData, {
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
        router.put(route("backoffice.shop.update", props.shop.id), formData, {
            preserveState: true,
            onStart: () => (isLoading.value = true),
            onError: (errors) => {
                serverValidation.value = errors;
            },
            onSuccess: () => {
                emits("saved", true);
            },
            onFinish: () => (isLoading.value = false),
        });
    }
});
</script>
<template>
    <Dialog :open="open">
        <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle>{{ title }}</DialogTitle>
                <DialogDescription class="text-sm">
                    Unit Layanan dipergunakan untuk memanajemen Unit Pelayanan
                    dan Jasa yang terdapat pada SMKN 1 Purwosari. Silahkan
                    menginputkan data dengan benar.
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
                            >Nama Unit</FormLabel
                        >
                        <FormControl>
                            <Input
                                type="text"
                                placeholder="Input nama unit"
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
