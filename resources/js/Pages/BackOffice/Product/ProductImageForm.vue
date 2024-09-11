<script setup lang="ts">
import { ref } from "vue";
import {
    Dialog,
    DialogContent,
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

const props = defineProps<{
    id: string;
    open: boolean;
}>();

const emits = defineEmits<{
    (e: "closed", value: boolean): void;
    (e: "saved", value: boolean): void;
}>();

const page = usePage();

const MAX_FILE_SIZE = 1000000;

const checkFile = (file: File) => {
    if (file?.size <= MAX_FILE_SIZE) return true;
};

const shopSchema = () => {
    return toTypedSchema(
        zod.object({
            title: zod
                .string({ message: "Judul Gambar harus diisi" })
                .min(1, { message: "Judul Gambar harus diisi." }),
            image: zod
                .any()
                .refine((file: File) => file, "Gambar harus diisi")
                .refine(
                    (file: File) => checkFile(file),
                    `Ukuran gambar maksimal 1MB.`
                ),
        })
    );
};

const validationSchema = shopSchema();
const form = useForm({
    validationSchema,
});

const imageForm = useInertiaForm({
    title: "",
    _token: page.props.csrf_token,
    image: "",
});

const closeForm = () => {
    imageForm.clearErrors();
    form.resetForm;

    emits("closed", true);
};

const onSubmit = form.handleSubmit((formData) => {
    imageForm.post(route("backoffice.product.images.store", props.id), {
        forceFormData: true,
        onSuccess: () => {
            emits("saved", true);
        },
    });
});
</script>
<template>
    <Dialog :open="open">
        <DialogContent class="sm:max-w-[425px]">
            <DialogHeader>
                <DialogTitle class="font-medium">Tambah Gambar</DialogTitle>
            </DialogHeader>
            <form @submit="onSubmit" class="space-y-2">
                <FormField v-slot="{ componentField }" name="title">
                    <FormItem>
                        <FormLabel
                            :class="{
                                'text-red-500': imageForm.errors.title,
                            }"
                            >Judul Gambar</FormLabel
                        >
                        <FormControl>
                            <Input
                                type="text"
                                placeholder="Input nama unit"
                                v-bind="componentField"
                                v-model="imageForm.title"
                                :class="{
                                    'border border-red-500':
                                        imageForm.errors.title,
                                }"
                                :disabled="imageForm.processing"
                            />
                        </FormControl>
                        <div
                            class="text-xs text-red-500 font-medium"
                            v-if="imageForm.errors.title"
                        >
                            {{ imageForm.errors.title }}
                        </div>
                        <FormMessage />
                    </FormItem>
                </FormField>
                <FormField v-slot="{ componentField, field }" name="image">
                    <FormItem>
                        <FormLabel
                            :class="{
                                'text-red-500': imageForm.errors.image,
                            }"
                            >Gambar</FormLabel
                        >
                        <FormControl>
                            <InputImage
                                class="h-52"
                                v-model="imageForm.image"
                                @change="
                                    (e) => {
                                        imageForm.image = e;
                                        field.onChange(e);
                                    }
                                "
                                :loading="imageForm.processing"
                            />
                        </FormControl>
                        <div
                            class="text-xs text-red-500 font-medium"
                            v-if="imageForm.errors.image"
                        >
                            {{ imageForm.errors.image }}
                        </div>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <Progress
                    v-if="imageForm.progress"
                    :value="imageForm.progress?.percentage"
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
                    :disabled="imageForm.processing"
                >
                    Batal
                </Button>
                <Button
                    type="submit"
                    @click="onSubmit"
                    :disabled="imageForm.processing"
                >
                    <span v-if="imageForm.processing">Upload gambar...</span>
                    <span v-else>Upload</span>
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
</template>
