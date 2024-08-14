<script lang="ts">
import Backoffice from "@/Layouts/Backoffice.vue";

export default {
  layout: Backoffice,
};
</script>
<script setup lang="ts">
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn/ui/select";

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
import { usePage, useForm as useInertiaForm, router, Head } from "@inertiajs/vue3";
import { TriangleAlert, ChevronDown } from "lucide-vue-next";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";

import { Alert, AlertDescription, AlertTitle } from "@/shadcn/ui/alert";

type TEmployee = {
  id: string;
  name: string;
  shop: string;
};
type TUser = {
  username: string;
  employee_id: string;
};

const props = defineProps<{
  employees: TEmployee[];
}>();

const page = usePage();

const userSchema = () => {
  return toTypedSchema(
    zod
      .object({
        username: zod
          .string({ message: "Username harus diisi" })
          .min(1, { message: "Username harus diisi." }),
        password: zod.string({ message: "Password harus diisi" }).min(5, {
          message: "Password harus diisi minimal 5 karakter.",
        }),
        confirmPassword: zod
          .string({ message: "Konfirmasi Password harus diisi" })
          .min(5, {
            message: "Password harus diisi minimal 5 karakter.",
          }),
        employee: zod.string({ message: "Pegawai harus dipilih." }),
      })
      .refine((values) => values.password === values.confirmPassword, {
        message: "Konfirmasi password tidak sama dengan password",
        path: ["confirmPassword"],
      })
  );
};

const validationSchema = userSchema();
const form = useForm({
  validationSchema,
});

const userForm = useInertiaForm({
  _token: page.props.csrf_token,
  username: "",
  password: "",
  employee: "",
  confirm_password: "",
});

const resetForm = () => {
  userForm.reset();
  form.resetForm();
};

const closeForm = () => {
  router.get(route("backoffice.user.index"));
};

const onSubmit = form.handleSubmit((formData) => {
  userForm.post(route("backoffice.user.store"));
});
</script>

<template>
  <Head title="Data User" />
  <div class="block w-1/2 mx-auto space-y-2">
    <div class="space-y-2">
      <div class="flex items-center justify-between">
        <h1 class="text-lg font-semibold md:text-xl">Form User</h1>
        <div class="flex gap-2" v-if="employees.length > 0">
          <Button
            type="button"
            variant="ghost"
            form="dialogForm"
            @click="closeForm"
            :disabled="userForm.processing"
          >
            Batal
          </Button>
          <Button type="submit" @click="onSubmit" :disabled="userForm.processing">
            <span v-if="userForm.processing">Menyimpan data...</span>
            <span v-else class="mx-10">Simpan</span>
          </Button>
        </div>
      </div>
    </div>
    <Alert
      class="bg-orange-200 shadow-inner shadow-orange-300 max-w-2xl"
      v-if="employees.length == 0"
    >
      <TriangleAlert class="w-5 h-5" />
      <AlertTitle>Peringatan</AlertTitle>
      <AlertDescription class="text-xs">
        Data Pegawai masih kosong silahkan mengisi data Pegawai terlebih dahulu.
      </AlertDescription>
    </Alert>
    <Alert class="bg-secondary shadow-inner shadow-gray-100 max-w-2xl" v-else>
      <AlertDescription class="text-xs">
        Silahkan anda mengisi data user sesuai dengan pegawai yang dipilih.
      </AlertDescription>
    </Alert>

    <form @submit="onSubmit" class="space-y-2 w-full" v-if="employees.length > 0">
      <FormField v-slot="{ componentField }" name="employee">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': userForm.errors.employee,
            }"
            >Nama Pegawai</FormLabel
          >
          <FormControl>
            <Select v-bind="componentField" class="bg-white" v-model="userForm.employee">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Pegawai" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    :key="index"
                    :value="employee.id"
                    v-for="(employee, index) in employees"
                    class="bg-white"
                  >
                    {{ employee.name }}-{{ employee.shop }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <div class="text-xs text-red-500 font-medium" v-if="userForm.errors.employee">
            {{ userForm.errors.employee }}
          </div>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="username">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': userForm.errors.username,
            }"
            >Username</FormLabel
          >
          <FormControl>
            <Input
              type="text"
              placeholder="Input username"
              v-bind="componentField"
              v-model="userForm.username"
              class="bg-white"
              :class="{
                'border border-red-500': userForm.errors.username,
              }"
              :disabled="userForm.processing"
            />
          </FormControl>
          <div class="text-xs text-red-500 font-medium" v-if="userForm.errors.username">
            {{ userForm.errors.username }}
          </div>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="password">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': userForm.errors.password,
            }"
            >Password</FormLabel
          >
          <FormControl>
            <Input
              type="password"
              placeholder="Input password"
              v-bind="componentField"
              v-model="userForm.password"
              class="bg-white"
              :class="{
                'border border-red-500': userForm.errors.password,
              }"
              :disabled="userForm.processing"
            />
          </FormControl>
          <div class="text-xs text-red-500 font-medium" v-if="userForm.errors.password">
            {{ userForm.errors.password }}
          </div>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="confirmPassword">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': userForm.errors.confirm_password,
            }"
            >Konfirmasi Password</FormLabel
          >
          <FormControl>
            <Input
              type="password"
              placeholder="Konfirmasi password"
              v-bind="componentField"
              v-model="userForm.confirm_password"
              class="bg-white"
              :class="{
                'border border-red-500': userForm.errors.confirm_password,
              }"
              :disabled="userForm.processing"
            />
          </FormControl>
          <div
            class="text-xs text-red-500 font-medium"
            v-if="userForm.errors.confirm_password"
          >
            {{ userForm.errors.confirm_password }}
          </div>
          <FormMessage />
        </FormItem>
      </FormField>
    </form>
  </div>
</template>
