<script lang="ts">
import Backoffice from "@/Layouts/Backoffice.vue";

export default {
  layout: Backoffice,
};
</script>
<script setup lang="ts">
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcn/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn/ui/select";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";
import validator from "validator";
import { usePage, useForm as useInertiaForm, router, Head } from "@inertiajs/vue3";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { Textarea } from "@/shadcn/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/shadcn/ui/alert";

type TProfil = {
  id: string;
  name: string;
  shop: string;
  phone: string;
  whatsapp: string;
  address: string;
  gender: string;
  username: string;
  level: string;
};

const props = defineProps<{
  profil: TProfil;
}>();

const page = usePage();

const genders = [
  {
    label: "Laki - laki",
    value: "l",
  },
  {
    label: "Perempuan",
    value: "p",
  },
];

const profilSchema = () => {
  return toTypedSchema(
    zod.object({
      name: zod
        .string({ message: "Pegawai harus diisi" })
        .min(1, { message: "Pegawai harus diisi." }),
      address: zod
        .string({ message: "Alamat harus diisi" })
        .min(1, { message: "Alamat harus diisi." }),
      gender: zod.string({ message: "Jenis Kelamin harus dipilih." }),
      whatsapp: zod
        .string({ message: "No Whatsapp harus diisi dengan angka" })
        .refine(validator.isMobilePhone, {
          message: "No Whatsapp harus diisi dengan format yang benar",
        }),
      phone: zod
        .string({ message: "No Telepon harus diisi dengan angka" })
        .refine(validator.isMobilePhone, {
          message: "No Telepone harus diisi dengan format yang benar",
        }),
      username: zod.string({ message: "Username harus diisi" }),
      password: zod.string().optional(),
    })
  );
};

const validationSchema = profilSchema();
const form = useForm({
  validationSchema,
});

form.setFieldValue("name", props.profil.name);
form.setFieldValue("address", props.profil.address);
form.setFieldValue("gender", props.profil.gender);
form.setFieldValue("whatsapp", props.profil.whatsapp);
form.setFieldValue("phone", props.profil.phone);
form.setFieldValue("username", props.profil.username);

const profilForm = useInertiaForm({
  _token: page.props.csrf_token,
  name: props.profil.name,
  address: props.profil.address,
  gender: props.profil.gender,
  whatsapp: props.profil.whatsapp,
  phone: props.profil.phone,
  username: props.profil.username,
  password: "",
});

const onSubmit = form.handleSubmit((formData) => {
  profilForm.put(route("backoffice.profil.update", props.profil.id));
});
</script>
<template>
  <Head title="Profil Saya" />
  <div class="block w-1/2 mx-auto space-y-2">
    <div class="space-y-2">
      <div class="flex items-center justify-between">
        <h1 class="text-lg font-semibold md:text-xl">Profil Saya</h1>
        <div class="flex gap-2">
          <Button type="submit" @click="onSubmit" :disabled="profilForm.processing">
            <span v-if="profilForm.processing">Menyimpan profil...</span>
            <span v-else class="mx-10">Simpan</span>
          </Button>
        </div>
      </div>
    </div>
    <form @submit="onSubmit" class="space-y-2 w-full">
      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': profilForm.errors.name,
            }"
            >Nama</FormLabel
          >
          <FormControl>
            <Input
              type="text"
              placeholder="Input nama"
              v-bind="componentField"
              v-model="profilForm.name"
              class="bg-white"
              :class="{
                'border border-red-500': profilForm.errors.name,
              }"
              :disabled="profilForm.processing"
            />
          </FormControl>
          <div class="text-xs text-red-500 font-medium" v-if="profilForm.errors.name">
            {{ profilForm.errors.name }}
          </div>
          <FormMessage v-else />
        </FormItem>
      </FormField>
      <div class="">
        <FormField v-slot="{ componentField }" name="gender">
          <FormItem>
            <FormLabel
              :class="{
                'text-red-500': profilForm.errors.gender,
              }"
              >Jenis Kelamin</FormLabel
            >
            <Select v-bind="componentField" class="bg-white" v-model="profilForm.gender">
              <FormControl>
                <SelectTrigger class="bg-white">
                  <SelectValue placeholder="Pilih Gender" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    :key="index"
                    :value="gender.value"
                    v-for="(gender, index) in genders"
                    class="bg-white"
                  >
                    {{ gender.label }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <div class="text-xs text-red-500 font-medium" v-if="profilForm.errors.gender">
              {{ profilForm.errors.gender }}
            </div>
            <FormMessage v-else />
          </FormItem>
        </FormField>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <FormField v-slot="{ componentField }" name="phone">
          <FormItem>
            <FormLabel
              :class="{
                'text-red-500': profilForm.errors.phone,
              }"
              >No Telepon</FormLabel
            >
            <FormControl>
              <Input
                type="text"
                placeholder="no telepon"
                v-bind="componentField"
                v-model="profilForm.phone"
                class="bg-white"
                :class="{
                  'border border-red-500': profilForm.errors.phone,
                }"
                :disabled="profilForm.processing"
              />
            </FormControl>
            <div class="text-xs text-red-500 font-medium" v-if="profilForm.errors.phone">
              {{ profilForm.errors.phone }}
            </div>
            <FormMessage v-else />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="whatsapp">
          <FormItem>
            <FormLabel
              :class="{
                'text-red-500': profilForm.errors.whatsapp,
              }"
              >No. Whatsapp</FormLabel
            >
            <FormControl>
              <Input
                type="text"
                placeholder="Input nama unit"
                v-bind="componentField"
                v-model="profilForm.whatsapp"
                class="bg-white"
                :class="{
                  'border border-red-500': profilForm.errors.whatsapp,
                }"
                :disabled="profilForm.processing"
              />
            </FormControl>
            <div
              class="text-xs text-red-500 font-medium"
              v-if="profilForm.errors.whatsapp"
            >
              {{ profilForm.errors.whatsapp }}
            </div>
            <FormMessage v-else />
          </FormItem>
        </FormField>
      </div>
      <FormField v-slot="{ componentField }" name="address">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': profilForm.errors.address,
            }"
            >Alamat</FormLabel
          >
          <FormControl>
            <Textarea
              placeholder="inputkan alamat kantor"
              v-bind="componentField"
              v-model="profilForm.address"
              class="w-full bg-white"
              rows="5"
            />
          </FormControl>
          <div class="text-xs text-red-500 font-medium" v-if="profilForm.errors.address">
            {{ profilForm.errors.address }}
          </div>
          <FormMessage v-else />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="username">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': profilForm.errors.username,
            }"
            >Username</FormLabel
          >
          <FormControl>
            <Input
              type="text"
              placeholder="Input username"
              v-bind="componentField"
              v-model="profilForm.username"
              class="bg-white"
              :class="{
                'border border-red-500': profilForm.errors.username,
              }"
              :disabled="profilForm.processing"
            />
          </FormControl>
          <div class="text-xs text-red-500 font-medium" v-if="profilForm.errors.username">
            {{ profilForm.errors.username }}
          </div>
          <FormMessage v-else />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': profilForm.errors.password,
            }"
            >Password</FormLabel
          >
          <FormControl>
            <Input
              type="password"
              placeholder="Input password"
              v-bind="componentField"
              v-model="profilForm.password"
              class="bg-white"
              :class="{
                'border border-red-500': profilForm.errors.password,
              }"
              :disabled="profilForm.processing"
            />
          </FormControl>
          <div class="text-xs text-red-500 font-medium" v-if="profilForm.errors.password">
            {{ profilForm.errors.password }}
          </div>
          <FormMessage v-else />
        </FormItem>
      </FormField>
    </form>
  </div>
</template>
