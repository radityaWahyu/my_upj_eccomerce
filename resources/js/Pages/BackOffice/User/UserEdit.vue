<script lang="ts">
import Backoffice from "@/Layouts/Backoffice.vue";

export default {
  layout: Backoffice,
};
</script>
<script setup lang="ts">
import { computed, watch, ref } from "vue";
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
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";

import { Alert, AlertDescription, AlertTitle } from "@/shadcn/ui/alert";

type TUser = {
  username: string;
  id: string;
  name: string;
  shop: string;
};

const props = defineProps<{
  user: TUser;
}>();

const page = usePage();

const userSchema = () => {
  return toTypedSchema(
    zod
      .object({
        username: zod.string(),
        password: zod.string().optional(),
        employee: zod.string().optional(),
        confirmPassword: zod.string().optional(),
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

form.setFieldValue("employee", props.user.name + "-" + props.user.shop);
form.setFieldValue("username", props.user.username);

const userForm = useInertiaForm({
  _token: page.props.csrf_token,
  username: props.user.username,
  password: "",
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
  userForm.put(route("backoffice.user.update", props.user.id));
});
</script>

<template>
  <Head title="Data User" />
  <div class="block w-1/2 mx-auto space-y-2">
    <div class="space-y-2">
      <div class="flex items-center justify-between">
        <h1 class="text-lg font-semibold md:text-xl">Form User</h1>
        <div class="flex gap-2">
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

    <Alert class="bg-secondary shadow-inner shadow-gray-100 max-w-2xl">
      <AlertDescription class="text-xs">
        Silahkan anda mengisi data user sesuai dengan pegawai yang dipilih.
      </AlertDescription>
    </Alert>

    <form @submit="onSubmit" class="space-y-2 w-full">
      <FormField v-slot="{ componentField }" name="employee">
        <FormItem>
          <FormLabel>Nama Pegawai</FormLabel>
          <FormControl>
            <Input v-bind="componentField" disabled />
          </FormControl>

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
