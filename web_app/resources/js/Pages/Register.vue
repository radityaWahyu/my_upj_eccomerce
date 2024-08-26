<script setup lang="ts">
import { ref, watch } from "vue";
import { Link, Head, useForm as useInertiaForm, usePage } from "@inertiajs/vue3";
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

const registerForm = useInertiaForm({
  _token: page.props.csrf_token,
  name: "",
  phone: "",
  whatsapp: "",
  address: "",
  username: "",
  password: "",
});

const props = defineProps<{ flash: any }>();
const showErrorAlert = ref<boolean>(false);

watch(
  () => props.flash,
  (alert) => {
    if (!!alert.error) {
      showErrorAlert.value = !!alert.error;
    } else {
      showErrorAlert.value = false;
    }
  },
  { immediate: true }
);

const onSubmit = form.handleSubmit((formData) => {
  registerForm.post(route("frontend.register.store"), {
    onError: (error) => console.log(error),
  });
});
</script>
<template>
  <Head title="Pendafaran Pelanggan" />
  <div class="relative bg-nasplesyellow/10 max-h-full lg:flex lg:items-start">
    <Transition>
      <div class="absolute z-10 top-0 w-full py-2" v-if="showErrorAlert">
        <div
          class="flex items-center justify-between gap-4 bg-red-100 w-1/2 mx-auto rounded overflow-hidden"
        >
          <div class="flex items-center gap-2">
            <div class="bg-red-200 p-3">
              <BadgeAlert class="w-8 h-8 text-red-400" />
            </div>
            <p class="text-sm">
              <strong class="block">Peringatan :</strong>
              {{ flash.error }}
            </p>
          </div>
          <button
            type="button"
            class="bg-gray-100 p-1 rounded-full mr-2"
            @click="showErrorAlert = false"
          >
            <CircleX class="h-4 w-4" />
          </button>
        </div>
      </div>
    </Transition>
    <div class="lg:w-3/5 hidden h-screen lg:block">
      <Link
        :href="route('frontend.index')"
        class="bg-tomato text-white hover:bg-tomato/80 hover:text-white text-sm font-medium inline-flex items-center px-4 py-2 lg:gap-2 group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          class="fill-current w-6 h-6 o text-white"
        >
          <path
            fill="currentColor"
            d="m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z"
          />
        </svg>
        <span> kembali ke Beranda</span>
      </Link>
      <img
        src="@/Assets/images/signup.svg"
        alt=""
        srcset=""
        class="h-[500px] w-[500px] mx-auto object-cover object-center"
      />
    </div>
    <div
      class="px-6 lg:w-2/5 lg:bg-gray-50 lg:h-full flex flex-col justify-center gap-4 shadow-inner shadow-gray-200"
    >
      <div class="px-4 mt-2">
        <div id="logo" class="flex items-center gap-1">
          <svg
            class="text-tomato fill-current lg:w-20 lg:h-20"
            xmlns="http://www.w3.org/2000/svg"
            width="38"
            height="38"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 21V7h3.5v-.5q0-1.458 1.021-2.479T12 3t2.479 1.021T15.5 6.5V7H19v14zm1-1h12V8h-2.5v3h-1V8h-5v3h-1V8H6zM9.5 7h5v-.5q0-1.056-.722-1.778T12 4t-1.778.722T9.5 6.5zM6 20V8z"
            />
          </svg>
          <div>
            <h4 class="font-semibold text-xl lg:text-3xl text-tomato line">MYUPJ</h4>
            <p class="text-[10px] lg:text-sm font-normal text-tomato mt-[-5px]">
              SMK Mandiri dan Berprestasi
            </p>
          </div>
        </div>
        <div
          class="p-4 mb-4 text-[12px] text-blue-800 rounded-lg bg-blue-50"
          role="alert"
        >
          <span class="font-semibold block">Informasi</span>
          Silahkan mengisi data sesuai dengan pertanyaan yang ada di form pendaftaraan
          dengan benar karena sistem akan meminta verifikasi pendaftar.
        </div>
        <div>
          <form @submit="onSubmit" class="max-w-md mx-auto space-y-3 mb-6">
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
            <div class="space-y-2">
              <button
                type="submit"
                @click="onSubmit"
                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-blue-300 font-semibold rounded text-sm w-full px-5 py-2.5 text-center"
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
                  Mengirim data...
                </span>
                <span v-else>Kirim Data</span>
              </button>
              <Link
                :href="route('frontend.login')"
                as="button"
                class="text-gray-500 bg-gray-200 hover:bg-gray-300 focus:ring-2 focus:outline-none focus:ring-gray-300 font-semibold rounded text-sm w-full px-5 py-2.5 text-center"
                :disabled="registerForm.processing"
              >
                Login Akun
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.3s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
