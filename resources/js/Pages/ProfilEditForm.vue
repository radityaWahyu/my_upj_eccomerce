<script lang="ts">
import Frontend from "@/Layouts/Frontend.vue";

export default {
    layout: Frontend,
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import {
    Head,
    Link,
    useForm as useInertiaForm,
    usePage,
} from "@inertiajs/vue3";
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
import validator from "validator";
import { BadgeAlert, CircleX } from "lucide-vue-next";
import LoginImage from "@/Assets/images/login_two.svg";

type TCustomer = {
    id: string;
    name: string;
    whatsapp: string;
    phone: string;
    address: string;
};

const props = defineProps<{
    customer: TCustomer;
}>();

const page = usePage();

const userSchema = () => {
    return toTypedSchema(
        zod.object({
            name: zod
                .string({ message: "Pegawai harus diisi" })
                .min(1, { message: "Pegawai harus diisi." }),
            address: zod
                .string({ message: "Alamat harus diisi" })
                .min(1, { message: "Alamat harus diisi." }),
            whatsapp: zod
                .string({ message: "Whatsapp harus diisi angka" })
                .refine(validator.isMobilePhone, {
                    message: "Whatsapp harus diisi angka",
                }),
            phone: zod
                .string({ message: "Telepon harus diisi angka" })
                .refine(validator.isMobilePhone, {
                    message: "Telepone harus diisi angka",
                }),
        })
    );
};

const validationSchema = userSchema();
const form = useForm({
    validationSchema,
});

form.setFieldValue("name", props.customer.name);
form.setFieldValue("phone", props.customer.phone);
form.setFieldValue("whatsapp", props.customer.whatsapp);
form.setFieldValue("address", props.customer.address);

const editProfilForm = useInertiaForm({
    _token: page.props.csrf_token,
    name: props.customer.name,
    phone: props.customer.phone,
    whatsapp: props.customer.whatsapp,
    address: props.customer.address,
});

const onSubmit = form.handleSubmit((formData) => {
    editProfilForm.put(route("frontend.profil.update"), {
        onError: (error) => console.log(error),
    });
});
</script>
<template>
    <Head title="Daftar Transaksi" />
    <div class="lg:container p-4 min-h-[600px]">
        <div class="w-3/4 px-4 mt-2 mx-auto">
            <blockquote class="my-6 border-l-2 pl-6 italic text-sm">
                <strong>Keterangan :</strong> Halaman ini dipergunakan untuk
                mengupdate profil pelanggan. Pastikan anda memberikan data yang
                valid sesuai dengan yang diminta oleh form isian.
            </blockquote>
            <div>
                <form @submit="onSubmit" class="space-y-3 mb-6">
                    <div>
                        <FormField v-slot="{ componentField }" name="name">
                            <FormItem>
                                <FormLabel
                                    :class="{
                                        'text-red-500':
                                            editProfilForm.errors.name,
                                    }"
                                    >Nama Lengkap</FormLabel
                                >
                                <FormControl>
                                    <input
                                        type="text"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                        placeholder="ex:radit"
                                        v-bind="componentField"
                                        v-model="editProfilForm.name"
                                        :disabled="editProfilForm.processing"
                                    />
                                </FormControl>
                                <p
                                    class="text-xs text-red-500 font-medium"
                                    v-if="editProfilForm.errors.name"
                                >
                                    {{ editProfilForm.errors.name }}
                                </p>
                                <FormMessage v-else />
                            </FormItem>
                        </FormField>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class="grow">
                            <FormField v-slot="{ componentField }" name="phone">
                                <FormItem>
                                    <FormLabel
                                        :class="{
                                            'text-red-500':
                                                editProfilForm.errors.phone,
                                        }"
                                    >
                                        No Telepon
                                    </FormLabel>
                                    <FormControl>
                                        <input
                                            type="text"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                            placeholder="ex: 08534225423"
                                            v-bind="componentField"
                                            v-model="editProfilForm.phone"
                                            :disabled="
                                                editProfilForm.processing
                                            "
                                        />
                                    </FormControl>
                                    <p
                                        class="text-xs text-red-500 font-medium"
                                        v-if="editProfilForm.errors.phone"
                                    >
                                        {{ editProfilForm.errors.phone }}
                                    </p>
                                    <FormMessage v-else />
                                </FormItem>
                            </FormField>
                        </div>
                        <div class="grow">
                            <FormField
                                v-slot="{ componentField }"
                                name="whatsapp"
                                class="grow"
                            >
                                <FormItem>
                                    <FormLabel
                                        :class="{
                                            'text-red-500':
                                                editProfilForm.errors.whatsapp,
                                        }"
                                    >
                                        No. Whatsapp
                                    </FormLabel>
                                    <FormControl>
                                        <input
                                            type="text"
                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                            placeholder="ex: 08534225423"
                                            v-bind="componentField"
                                            v-model="editProfilForm.whatsapp"
                                            :disabled="
                                                editProfilForm.processing
                                            "
                                        />
                                    </FormControl>
                                    <p
                                        class="text-xs text-red-500 font-medium"
                                        v-if="editProfilForm.errors.whatsapp"
                                    >
                                        {{ editProfilForm.errors.whatsapp }}
                                    </p>
                                    <FormMessage v-else />
                                </FormItem>
                            </FormField>
                        </div>
                    </div>
                    <div>
                        <FormField
                            v-slot="{ componentField }"
                            name="address"
                            class="grow-0"
                        >
                            <FormItem>
                                <FormLabel
                                    :class="{
                                        'text-red-500':
                                            editProfilForm.errors.address,
                                    }"
                                >
                                    Alamat
                                </FormLabel>
                                <FormControl>
                                    <textarea
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                        placeholder="ex: alamat lengkap"
                                        v-model="editProfilForm.address"
                                        v-bind="componentField"
                                        rows="8"
                                        :disabled="editProfilForm.processing"
                                    ></textarea>
                                </FormControl>
                                <p
                                    class="text-xs text-red-500 font-medium"
                                    v-if="editProfilForm.errors.address"
                                >
                                    {{ editProfilForm.errors.address }}
                                </p>
                                <FormMessage v-else />
                            </FormItem>
                        </FormField>
                    </div>
                    <div>
                        <button
                            type="submit"
                            @click="onSubmit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-blue-300 font-semibold rounded text-sm px-5 py-2.5 text-center"
                            :disabled="editProfilForm.processing"
                        >
                            <span
                                class="flex items-center gap-2 justify-center"
                                v-if="editProfilForm.processing"
                            >
                                <svg
                                    class="h-4 w-4 animate-spin"
                                    viewBox="0 0 100 100"
                                >
                                    <circle
                                        fill="none"
                                        stroke-width="10"
                                        class="stroke-current opacity-40"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                    />
                                    <circle
                                        fill="none"
                                        stroke-width="10"
                                        class="stroke-current"
                                        stroke-dasharray="250"
                                        stroke-dashoffset="210"
                                        cx="50"
                                        cy="50"
                                        r="40"
                                    />
                                </svg>
                                Mengupdate Profil..
                            </span>
                            <span v-else>Update Profil Saya</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
