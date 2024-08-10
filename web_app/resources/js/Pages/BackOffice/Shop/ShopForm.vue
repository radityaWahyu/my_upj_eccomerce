<script setup lang="ts">
import { watch, ref } from "vue";
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
import { usePage, useForm as useInertiaForm } from "@inertiajs/vue3";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { Textarea } from "@/shadcn/ui/textarea";
import { Progress } from "@/shadcn/ui/progress";
import InputImage from "@/Components/backoffice/app/InputImage.vue";

type TShop = {
    id: string;
    name: string;
    address: string;
    image: string;
};

const props = withDefaults(
    defineProps<{
        open: boolean;
        title: string;
        shop: TShop;
        edit: boolean;
    }>(),
    {
        open: true,
        title: "Tambah Unit Layanan",
        edit: false,
    }
);

const emits = defineEmits<{
    (e: "closed", value: boolean): void;
    (e: "saved", value: boolean): void;
}>();

const page = usePage();

const MAX_FILE_SIZE = 1000000;
const isEdit = ref<boolean>(false);

const checkFile = (file: File) => {
    if (file?.size <= MAX_FILE_SIZE) return true;
};

const shopSchema = () => {
    if (props.edit) {
        return toTypedSchema(
            zod.object({
                name: zod
                    .string({ message: "Unit Layanan harus diisi" })
                    .min(1, { message: "Unit Layanan harus diisi." }),
                address: zod
                    .string({ message: "Alamat Kantor harus diisi" })
                    .min(1, { message: "Alamat Kantor harus diisi." }),
                image: zod
                    .any()
                    .refine(
                        (file: File) => checkFile(file),
                        `Ukuran gambar maksimal 1MB.`
                    )
                    .optional(),
            })
        );
    } else {
        return toTypedSchema(
            zod.object({
                name: zod
                    .string({ message: "Unit Layanan harus diisi" })
                    .min(1, { message: "Unit Layanan harus diisi." }),
                address: zod
                    .string({ message: "Alamat Kantor harus diisi" })
                    .min(1, { message: "Alamat Kantor harus diisi." }),
                image: zod
                    .any()
                    .refine((file: File) => file, "Gambar harus diisi")
                    .refine(
                        (file: File) => checkFile(file),
                        `Ukuran gambar maksimal 1MB.`
                    ),
            })
        );
    }
};

const validationSchema = shopSchema();
const form = useForm({
    validationSchema,
});

const shopForm = useInertiaForm({
    id: "",
    name: "",
    address: "",
    _token: page.props.csrf_token,
    image: "",
});

watch(
    () => props.edit,
    (values) => {
        if (values) {
            shopForm.name = props.shop.name;
            shopForm.image = props.shop.image;
            shopForm.address = props.shop.address;
            form.setFieldValue("name", props.shop.name);
            form.setFieldValue("address", props.shop.address);
            //form.setFieldValue("image", values.image);
        }
    },
    { immediate: true }
);

const resetForm = () => {
    shopForm.name = "";
    shopForm.address = "";
    shopForm.image = "";
    form.setFieldValue("name", "");
};

const closeForm = () => {
    shopForm.clearErrors();
    form.resetForm;
    if (!props.shop) {
        emits("closed", true);
    } else {
        window.history.back();
    }
};

const onSubmit = form.handleSubmit((formData) => {
    // console.log(shopForm.image);
    if (props.edit) {
        // alert("update");
        shopForm
            .transform((data) => ({
                ...data,
                _method: "put",
            }))
            .post(route("backoffice.shop.update", props.shop.id), {
                preserveState: true,
                onSuccess: () => {
                    resetForm();
                    emits("saved", true);
                },
            });
    } else {
        shopForm
            .transform((data) => ({
                ...data,
                _method: "post",
            }))
            .post(route("backoffice.shop.store"), {
                forceFormData: true,
                onSuccess: () => {
                    emits("saved", true);
                },
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
            <form @submit="onSubmit" class="space-y-2">
                <FormField v-slot="{ componentField }" name="name">
                    <FormItem>
                        <FormLabel
                            :class="{
                                'text-red-500': shopForm.errors.name,
                            }"
                            >Nama Unit</FormLabel
                        >
                        <FormControl>
                            <Input
                                type="text"
                                placeholder="Input nama unit"
                                v-bind="componentField"
                                v-model="shopForm.name"
                                :class="{
                                    'border border-red-500':
                                        shopForm.errors.name,
                                }"
                                :disabled="shopForm.processing"
                            />
                        </FormControl>
                        <div
                            class="text-xs text-red-500 font-medium"
                            v-if="shopForm.errors.name"
                        >
                            {{ shopForm.errors.name }}
                        </div>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <FormField v-slot="{ componentField }" name="address">
                    <FormItem>
                        <FormLabel
                            :class="{
                                'text-red-500': shopForm.errors.address,
                            }"
                            >Alamat Kantor</FormLabel
                        >
                        <FormControl>
                            <Textarea
                                placeholder="inputkan alamat kantor"
                                v-bind="componentField"
                                v-model="shopForm.address"
                                class="w-full"
                            />
                        </FormControl>
                        <div
                            class="text-xs text-red-500 font-medium"
                            v-if="shopForm.errors.address"
                        >
                            {{ shopForm.errors.address }}
                        </div>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <FormField v-slot="{ componentField, field }" name="image">
                    <FormItem>
                        <FormLabel
                            :class="{
                                'text-red-500': shopForm.errors.image,
                            }"
                            >Gambar atau Logo Unit</FormLabel
                        >
                        <FormControl>
                            <InputImage
                                class="h-52"
                                v-model="shopForm.image"
                                @change="
                                    (e) => {
                                        shopForm.image = e;
                                        field.onChange(e);
                                    }
                                "
                                :loading="shopForm.processing"
                            />
                        </FormControl>
                        <div
                            class="text-xs text-red-500 font-medium"
                            v-if="shopForm.errors.image"
                        >
                            {{ shopForm.errors.image }}
                        </div>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <Progress
                    v-if="shopForm.progress"
                    :value="shopForm.progress?.percentage"
                    :max="100"
                    class="w-full"
                />
            </form>
            <DialogFooter>
                <Button
                    type="button"
                    variant="ghost"
                    form="dialogForm"
                    @click="closeForm"
                    :disabled="shopForm.processing"
                >
                    Batal
                </Button>
                <Button
                    type="submit"
                    @click="onSubmit"
                    :disabled="shopForm.processing"
                >
                    <span v-if="shopForm.processing">Menyimpan data...</span>
                    <span v-else>Simpan</span>
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
