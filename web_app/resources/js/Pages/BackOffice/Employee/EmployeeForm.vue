<script lang="ts">
import Backoffice from "@/Layouts/Backoffice.vue";

export default {
  layout: Backoffice,
};
</script>
<script setup lang="ts">
import { watch, ref, reactive } from "vue";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/shadcn/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/shadcn/ui/popover";

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
import { usePage, useForm as useInertiaForm, router, Head } from "@inertiajs/vue3";
import { TriangleAlert, ChevronDown } from "lucide-vue-next";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { Textarea } from "@/shadcn/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/shadcn/ui/alert";

type TEmployee = {
  id: string;
  name: string;
  phone: string;
  whatsapp: string;
  gender: string;
  address: string;
  shop: string;
};
type TShop = {
  id: string;
  name: string;
};

const props = defineProps<{
  employee?: TEmployee;
  shops: TShop[];
}>();

const page = usePage();
const isEdit = ref<boolean>(false);
const id = ref<string>("");
const combobox = reactive({
  openGender: false,
  openShop: false,
});
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

const employeeSchema = () => {
  return toTypedSchema(
    zod.object({
      name: zod
        .string({ message: "Pegawai harus diisi" })
        .min(1, { message: "Pegawai harus diisi." }),
      address: zod
        .string({ message: "Alamat harus diisi" })
        .min(1, { message: "Alamat harus diisi." }),
      gender: zod.string({ message: "Jenis Kelamin harus dipilih." }),
      shop: zod.string({ message: "Unit Layanan harus diisi." }),
      whatsapp: zod
        .string({ message: "No Whatsapp harus diisi dengan angka" })
        .refine(validator.isMobilePhone, {
          message: "No Whatsapp harus diisi dengan angka",
        }),
      phone: zod
        .string({ message: "No Telepon harus diisi dengan angka" })
        .refine(validator.isMobilePhone, {
          message: "No Telepone harus diisi dengan angka",
        }),
    })
  );
};

const validationSchema = employeeSchema();
const form = useForm({
  validationSchema,
});

const employeeForm = useInertiaForm({
  _token: page.props.csrf_token,
  name: "",
  address: "",
  gender: "",
  whatsapp: "",
  phone: "",
  shop: "",
});

watch(
  () => props.employee,
  (values) => {
    if (values) {
      isEdit.value = true;
      id.value = values.id;
      employeeForm.name = values.name;
      employeeForm.address = values.address;
      employeeForm.gender = values.gender;
      employeeForm.whatsapp = values.whatsapp;
      employeeForm.phone = values.phone;
      employeeForm.shop = values.shop;
      form.setFieldValue("name", values.name);
      form.setFieldValue("address", values.address);
      form.setFieldValue("gender", values.gender);
      form.setFieldValue("whatsapp", values.whatsapp);
      form.setFieldValue("phone", values.phone);
      form.setFieldValue("shop", values.shop);
    } else {
      isEdit.value = false;
    }
  },
  { immediate: true }
);

const resetForm = () => {
  employeeForm.reset();
  form.resetForm();
};

const closeForm = () => {
  // employeeForm.clearErrors();
  // form.resetForm();
  router.get(route("backoffice.employee.index"));
};

const onSubmit = form.handleSubmit((formData) => {
  // console.log(shopForm.image);
  if (isEdit.value) {
    // alert("update");
    employeeForm.put(route("backoffice.employee.update", id.value), {
      onSuccess: () => {
        resetForm();
      },
    });
  } else {
    employeeForm.post(route("backoffice.employee.store"));
  }
});
</script>
<template>
  <Head title="Form Pegawai" />
  <div class="block w-1/2 mx-auto space-y-2">
    <div class="space-y-2">
      <div class="flex items-center justify-between">
        <h1 class="text-lg font-semibold md:text-xl">Form Pegawai</h1>
        <div class="flex gap-2" v-if="shops.length > 0">
          <Button
            type="button"
            variant="ghost"
            form="dialogForm"
            @click="closeForm"
            :disabled="employeeForm.processing"
          >
            Batal
          </Button>
          <Button type="submit" @click="onSubmit" :disabled="employeeForm.processing">
            <span v-if="employeeForm.processing">Menyimpan data...</span>
            <span v-else class="mx-10">Simpan</span>
          </Button>
        </div>
      </div>
    </div>
    <Alert
      class="bg-orange-200 shadow-inner shadow-orange-300 max-w-2xl"
      v-if="shops.length == 0"
    >
      <TriangleAlert class="w-5 h-5" />
      <AlertTitle>Peringatan</AlertTitle>
      <AlertDescription class="text-xs">
        Data Unit Layanan masih kosong silahkan mengisi data unit layanan terlebih dahulu.
      </AlertDescription>
    </Alert>
    <Alert class="bg-secondary shadow-inner shadow-gray-100 max-w-2xl" v-else>
      <AlertDescription class="text-xs">
        Silahkan anda mengisi data pegawai sesuai dengan form yang disediakan.
      </AlertDescription>
    </Alert>

    <form @submit="onSubmit" class="space-y-2 w-full" v-if="shops.length > 0">
      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': employeeForm.errors.name,
            }"
            >Nama</FormLabel
          >
          <FormControl>
            <Input
              type="text"
              placeholder="Input nama"
              v-bind="componentField"
              v-model="employeeForm.name"
              class="bg-white"
              :class="{
                'border border-red-500': employeeForm.errors.name,
              }"
              :disabled="employeeForm.processing"
            />
          </FormControl>
          <div class="text-xs text-red-500 font-medium" v-if="employeeForm.errors.name">
            {{ employeeForm.errors.name }}
          </div>
          <FormMessage />
        </FormItem>
      </FormField>
      <div class="grid grid-cols-2 gap-2">
        <FormField v-slot="{ componentField }" name="gender">
          <FormItem>
            <FormLabel
              :class="{
                'text-red-500': employeeForm.errors.gender,
              }"
              >Jenis Kelamin</FormLabel
            >
            <Popover class="w-full" v-model:open="combobox.openGender">
              <PopoverTrigger as-child>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    :class="
                      cn(
                        'w-full justify-between',
                        !form.values.gender && 'text-muted-foreground'
                      )
                    "
                  >
                    {{
                      form.values.gender
                        ? genders.find((gender) => gender.value === form.values.gender)
                            ?.label
                        : "Pilih Jenis Kelamin"
                    }}
                    <ChevronDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent class="w- p-0">
                <Command>
                  <CommandList>
                    <CommandGroup>
                      <CommandItem
                        v-for="gender in genders"
                        :key="gender.value"
                        :value="gender.label"
                        :class="{
                          'font-semibold': gender.value === form.values.gender,
                        }"
                        @select="
                          () => {
                            form.setFieldValue('gender', gender.value);
                            employeeForm.gender = gender.value;
                            combobox.openGender = false;
                          }
                        "
                      >
                        {{ gender.label }}
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <div
              class="text-xs text-red-500 font-medium"
              v-if="employeeForm.errors.gender"
            >
              {{ employeeForm.errors.gender }}
            </div>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="shop">
          <FormItem>
            <FormLabel
              :class="{
                'text-red-500': employeeForm.errors.shop,
              }"
              >Unit Layanan</FormLabel
            >
            <Popover class="w-full" v-model:open="combobox.openShop">
              <PopoverTrigger as-child>
                <FormControl>
                  <Button
                    variant="outline"
                    role="combobox"
                    class="overflow-hidden"
                    :class="
                      cn(
                        'w-full justify-between',
                        !form.values.shop && 'text-muted-foreground'
                      )
                    "
                  >
                    {{
                      form.values.shop
                        ? shops.find((shop) => shop.id === form.values.shop)?.name
                        : "Pilih Unit Layanan"
                    }}
                    <ChevronDown class="ml-2 h-4 w-4 shrink-0 opacity-50" />
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent class="w- p-0">
                <Command>
                  <CommandList>
                    <CommandGroup>
                      <CommandItem
                        v-for="shop in shops"
                        :key="shop.id"
                        :value="shop.name"
                        :class="{
                          'font-semibold': shop.name === form.values.shop,
                        }"
                        @select="
                          () => {
                            form.setFieldValue('shop', shop.id);
                            employeeForm.shop = shop.id;
                            combobox.openShop = false;
                          }
                        "
                      >
                        {{ shop.name }}
                      </CommandItem>
                    </CommandGroup>
                  </CommandList>
                </Command>
              </PopoverContent>
            </Popover>
            <div class="text-xs text-red-500 font-medium" v-if="employeeForm.errors.shop">
              {{ employeeForm.errors.shop }}
            </div>
            <FormMessage />
          </FormItem>
        </FormField>
      </div>
      <div class="grid grid-cols-2 gap-2">
        <FormField v-slot="{ componentField }" name="phone">
          <FormItem>
            <FormLabel
              :class="{
                'text-red-500': employeeForm.errors.phone,
              }"
              >No Telepon</FormLabel
            >
            <FormControl>
              <Input
                type="text"
                placeholder="no telepon"
                v-bind="componentField"
                v-model="employeeForm.phone"
                class="bg-white"
                :class="{
                  'border border-red-500': employeeForm.errors.phone,
                }"
                :disabled="employeeForm.processing"
              />
            </FormControl>
            <div
              class="text-xs text-red-500 font-medium"
              v-if="employeeForm.errors.phone"
            >
              {{ employeeForm.errors.phone }}
            </div>
            <FormMessage />
          </FormItem>
        </FormField>
        <FormField v-slot="{ componentField }" name="whatsapp">
          <FormItem>
            <FormLabel
              :class="{
                'text-red-500': employeeForm.errors.whatsapp,
              }"
              >No. Whatsapp</FormLabel
            >
            <FormControl>
              <Input
                type="text"
                placeholder="Input nama unit"
                v-bind="componentField"
                v-model="employeeForm.whatsapp"
                class="bg-white"
                :class="{
                  'border border-red-500': employeeForm.errors.whatsapp,
                }"
                :disabled="employeeForm.processing"
              />
            </FormControl>
            <div
              class="text-xs text-red-500 font-medium"
              v-if="employeeForm.errors.whatsapp"
            >
              {{ employeeForm.errors.whatsapp }}
            </div>
            <FormMessage />
          </FormItem>
        </FormField>
      </div>
      <FormField v-slot="{ componentField }" name="address">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': employeeForm.errors.address,
            }"
            >Alamat</FormLabel
          >
          <FormControl>
            <Textarea
              placeholder="inputkan alamat kantor"
              v-bind="componentField"
              v-model="employeeForm.address"
              class="w-full bg-white"
              rows="5"
            />
          </FormControl>
          <div
            class="text-xs text-red-500 font-medium"
            v-if="employeeForm.errors.address"
          >
            {{ employeeForm.errors.address }}
          </div>
          <FormMessage />
        </FormItem>
      </FormField>
    </form>
  </div>
</template>
