<script setup lang="ts">
import { watch, ref } from "vue";
import { Button } from "@/shadcn/ui/button";
import { usePage, Head, useForm as useInertiaForm } from "@inertiajs/vue3";
import { Input } from "@/shadcn/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/shadcn/ui/form";
import { cn } from "@/shadcn/utils";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";
import validator from "validator";
import { BadgeInfo, TriangleAlert } from "lucide-vue-next";

const props = defineProps<{
  flash: {
    error: string | null;
    success: string | null;
  };
}>();
const showSuccessAlert = ref<boolean>(false);
const showErrorAlert = ref<boolean>(false);

const loginSchema = () => {
  return toTypedSchema(
    zod.object({
      username: zod
        .string({ message: "Username harus diisi" })
        .min(1, { message: "Username harus diisi." }),
      password: zod
        .string({ message: "Password harus diisi" })
        .min(1, { message: "Password harus diisi." }),
    })
  );
};

const page = usePage();
const validationSchema = loginSchema();
const form = useForm({
  validationSchema,
});

const loginForm = useInertiaForm({
  _token: page.props.csrf_token,
  username: "",
  password: "",
});

watch(
  () => props.flash,
  (alert) => {
    console.log(alert.error);
    if (!!alert.success) {
      showSuccessAlert.value = !!alert.success;
      setTimeout(() => (showSuccessAlert.value = false), 3000);
    } else {
      showSuccessAlert.value = false;
    }

    if (!!alert.error) {
      showErrorAlert.value = !!alert.error;
    } else {
      showErrorAlert.value = false;
    }
  },
  { immediate: true }
);

const onSubmit = form.handleSubmit((formData) => {
  loginForm.post(route("backoffice.auth.store"), {
    replace: true,
    onError: (error) => {
      console.log(error);
    },
  });
});
</script>

<template>
  <Head title="Login Operator" />
  <div class="w-full lg:grid lg:grid-cols-2 h-screen">
    <Transition>
      <div
        class="absolute z-10 top-0 w-full inline-flex items-center justify-around py-3 px-4 bg-blue-100 border-b-2 border-blue-200"
        v-if="showSuccessAlert"
      >
        <div class="flex items-center gap-4">
          <BadgeInfo class="w-6 h-6" />
          <div class="text-sm w-[500px]">
            <h1 class="font-normal">Informasi</h1>
            <p class="font-medium">
              {{ flash.success }}
            </p>
          </div>
        </div>
        <Button variant="secondary" size="sm" @click="showSuccessAlert = false">
          Tutup
        </Button>
      </div>
    </Transition>
    <Transition>
      <div
        class="absolute z-10 top-0 w-full inline-flex items-center justify-around py-3 px-4 bg-red-100 border-b-2 border-red-200"
        v-if="showErrorAlert"
      >
        <div class="flex items-center gap-4">
          <TriangleAlert class="w-6 h-6" />
          <div class="text-sm w-[500px]">
            <h1 class="font-normal">Peringatan</h1>
            <p class="font-medium">
              {{ flash.error }}
            </p>
          </div>
        </div>
        <Button variant="secondary" size="sm" @click="showErrorAlert = false">
          Tutup
        </Button>
      </div>
    </Transition>
    <div
      class="flex flex-col items-center gap-4 justify-center py-12 bg-gray-50 border-r-2 border-gray-200"
    >
      <div class="grid gap-2 text-center">
        <h1 class="text-3xl font-bold">Login</h1>
        <p class="text-balance text-blue-400">Masukkan username dan password anda</p>
      </div>
      <div class="mx-auto grid w-[350px] gap-6">
        <form @submit="onSubmit" class="space-y-2 w-full">
          <FormField v-slot="{ componentField }" name="username">
            <FormItem>
              <FormLabel
                :class="{
                  'text-red-500': loginForm.errors.username,
                }"
              >
                Username
              </FormLabel>
              <FormControl>
                <Input
                  type="text"
                  placeholder="Input username"
                  v-bind="componentField"
                  v-model="loginForm.username"
                  class="bg-white"
                  :class="{
                    'border border-red-500': loginForm.errors.username,
                  }"
                  :disabled="loginForm.processing"
                />
              </FormControl>
              <div
                class="text-xs text-red-500 font-medium"
                v-if="loginForm.errors.username"
              >
                {{ loginForm.errors.username }}
              </div>
              <FormMessage />
            </FormItem>
          </FormField>
          <FormField v-slot="{ componentField }" name="password">
            <FormItem>
              <FormLabel
                :class="{
                  'text-red-500': loginForm.errors.password,
                }"
              >
                Password
              </FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="Input password"
                  v-bind="componentField"
                  v-model="loginForm.password"
                  class="bg-white"
                  :class="{
                    'border border-red-500': loginForm.errors.password,
                  }"
                  :disabled="loginForm.processing"
                />
              </FormControl>
              <div
                class="text-xs text-red-500 font-medium"
                v-if="loginForm.errors.password"
              >
                {{ loginForm.errors.password }}
              </div>
              <FormMessage />
            </FormItem>
          </FormField>
          <div>
            <Button
              class="w-full"
              type="submit"
              @click="onSubmit"
              :disabled="loginForm.processing"
            >
              <span v-if="loginForm.processing">Autentikasi User...</span>
              <span v-else class="mx-10">Masuk Sistem</span>
            </Button>
          </div>
        </form>
      </div>
    </div>
    <div class="hidden bg-muted lg:block overflow-hidden">
      <img
        src="@/Assets/images/login_screen.jpg"
        alt="Image"
        class="object-cover dark:brightness-[0.2] dark:grayscale"
      />
    </div>
  </div>
</template>
