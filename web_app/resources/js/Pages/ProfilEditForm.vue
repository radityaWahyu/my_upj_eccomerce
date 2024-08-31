<script lang="ts">
import Frontend from "@/Layouts/Frontend.vue";

export default {
  layout: Frontend,
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import { Head, Link, useForm as useInertiaForm, usePage } from "@inertiajs/vue3";
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
  username: string;
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
      username: zod
        .string({ message: "username harus diisi" })
        .min(1, { message: "username harus diisi." }),
      password: zod
        .string({ message: "password harus diisi" })
        .min(8, { message: "password minimal 8 digit." }),
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
form.setFieldValue("username", props.customer.username);

const registerForm = useInertiaForm({
  _token: page.props.csrf_token,
  name: props.customer.name,
  phone: props.customer.phone,
  whatsapp: props.customer.whatsapp,
  address: props.customer.address,
  username: props.customer.username,
  password: "",
});

const onSubmit = form.handleSubmit((formData) => {
  registerForm.post(route("frontend.register.store"), {
    onError: (error) => console.log(error),
  });
});
</script>
<template>
  <Head title="Daftar Transaksi" />
  <div class="lg:container p-4 min-h-[600px]">
    <div class="w-3/4 px-4 mt-2 mx-auto">
      <div class="p-4 mb-4 text-[12px] text-blue-800 rounded-lg bg-blue-50" role="alert">
        <span class="font-semibold block">Informasi</span>
        Silahkan mengisi data sesuai dengan pertanyaan yang ada di form pendaftaraan
        dengan benar karena sistem akan meminta verifikasi pendaftar.
      </div>
      <div>
        <form @submit="onSubmit" class="space-y-3 mb-6">
          <div>
            <FormField v-slot="{ componentField }" name="name">
              <FormItem>
                <FormLabel
                  :class="{
                    'text-red-500': registerForm.errors.name,
                  }"
                  >Nama Lengkap</FormLabel
                >
                <FormControl>
                  <input
                    type="text"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    placeholder="ex:radit"
                    v-bind="componentField"
                    v-model="registerForm.name"
                    :disabled="registerForm.processing"
                  />
                </FormControl>
                <p
                  class="text-xs text-red-500 font-medium"
                  v-if="registerForm.errors.name"
                >
                  {{ registerForm.errors.name }}
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
                      'text-red-500': registerForm.errors.phone,
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
                      v-model="registerForm.phone"
                      :disabled="registerForm.processing"
                    />
                  </FormControl>
                  <p
                    class="text-xs text-red-500 font-medium"
                    v-if="registerForm.errors.phone"
                  >
                    {{ registerForm.errors.phone }}
                  </p>
                  <FormMessage v-else />
                </FormItem>
              </FormField>
            </div>
            <div class="grow">
              <FormField v-slot="{ componentField }" name="whatsapp" class="grow">
                <FormItem>
                  <FormLabel
                    :class="{
                      'text-red-500': registerForm.errors.whatsapp,
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
                      v-model="registerForm.whatsapp"
                      :disabled="registerForm.processing"
                    />
                  </FormControl>
                  <p
                    class="text-xs text-red-500 font-medium"
                    v-if="registerForm.errors.whatsapp"
                  >
                    {{ registerForm.errors.whatsapp }}
                  </p>
                  <FormMessage v-else />
                </FormItem>
              </FormField>
            </div>
          </div>
          <div>
            <FormField v-slot="{ componentField }" name="address" class="grow-0">
              <FormItem>
                <FormLabel
                  :class="{
                    'text-red-500': registerForm.errors.address,
                  }"
                >
                  Alamat
                </FormLabel>
                <FormControl>
                  <textarea
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                    placeholder="ex: alamat lengkap"
                    v-model="registerForm.address"
                    v-bind="componentField"
                    :disabled="registerForm.processing"
                  ></textarea>
                </FormControl>
                <p
                  class="text-xs text-red-500 font-medium"
                  v-if="registerForm.errors.address"
                >
                  {{ registerForm.errors.address }}
                </p>
                <FormMessage v-else />
              </FormItem>
            </FormField>
          </div>
          <div class="flex items-center gap-2">
            <div class="grow">
              <FormField v-slot="{ componentField }" name="username" class="grow">
                <FormItem>
                  <FormLabel
                    :class="{
                      'text-red-500': registerForm.errors.username,
                    }"
                  >
                    Username
                  </FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                      placeholder="ex: username"
                      v-model="registerForm.username"
                      v-bind="componentField"
                      :disabled="registerForm.processing"
                    />
                  </FormControl>
                  <p
                    class="text-xs text-red-500 font-medium"
                    v-if="registerForm.errors.username"
                  >
                    {{ registerForm.errors.username }}
                  </p>
                  <FormMessage v-else />
                </FormItem>
              </FormField>
            </div>
            <div class="grow">
              <FormField v-slot="{ componentField }" name="password" class="grow">
                <FormItem>
                  <FormLabel
                    :class="{
                      'text-red-500': registerForm.errors.password,
                    }"
                  >
                    Password
                  </FormLabel>
                  <FormControl>
                    <input
                      type="password"
                      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                      placeholder="ex: password"
                      v-model="registerForm.password"
                      v-bind="componentField"
                      :disabled="registerForm.processing"
                    />
                  </FormControl>
                  <p
                    class="text-xs text-red-500 font-medium"
                    v-if="registerForm.errors.password"
                  >
                    {{ registerForm.errors.password }}
                  </p>
                  <FormMessage v-else />
                </FormItem>
              </FormField>
            </div>
          </div>

          <div>
            <button
              type="submit"
              @click="onSubmit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-blue-300 font-semibold rounded text-sm px-5 py-2.5 text-center"
              :disabled="registerForm.processing"
            >
              <span
                class="flex items-center gap-2 justify-center"
                v-if="registerForm.processing"
              >
                <svg class="h-4 w-4 animate-spin" viewBox="0 0 100 100">
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
                Mengupdate Profil...
              </span>
              <span v-else>Update Profil Saya</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
