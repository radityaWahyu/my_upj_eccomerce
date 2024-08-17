<script lang="ts">
import Backoffice from "@/Layouts/Backoffice.vue";

export default {
  layout: Backoffice,
};
</script>
<script setup lang="ts">
import { ref, watch } from "vue";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/shadcn/ui/select";

import { TriangleAlert } from "lucide-vue-next";
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

type TProduct = {
  id: string;
  name: string;
  type: string;
  category_id: string;
  shop_id: string;
  price: number;
};

type TShops = {
  id: string;
  name: string;
};
type TCategories = {
  id: string;
  name: string;
};

const props = defineProps<{
  product: TProduct;
  shops: TShops[];
  categories: TCategories[];
}>();

const page = usePage();

const productSchema = () => {
  if (props.shops) {
    return toTypedSchema(
      zod.object({
        name: zod
          .string({ message: "Nama Produk harus diisi" })
          .min(1, { message: "Nama Produk harus diisi." }),
        type: zod.string({ message: "Jenis Produk harus dipilih" }),
        category: zod.string({
          message: "Kategori Produk harus dipilih",
        }),
        price: zod.number({ message: "Harga Produk harus diisi" }),
      })
    );
  }
  return toTypedSchema(
    zod.object({
      name: zod
        .string({ message: "Nama Produk harus diisi" })
        .min(1, { message: "Nama Produk harus diisi." }),
      type: zod.string({ message: "Jenis Produk harus dipilih" }),
      category: zod.string({ message: "Kategori Produk harus dipilih" }),
      price: zod.number({ message: "Harga Produk harus diisi" }),
      shop: zod.string({ message: "Unit Layanan harus dipilih" }),
    })
  );
};

const validationSchema = productSchema();
const form = useForm({
  validationSchema,
});

const productTypes = ref([
  { label: "Jasa", value: "jasa" },
  { label: "Produk Jadi", value: "produk" },
]);

const productForm = useInertiaForm({
  _token: page.props.csrf_token,
  name: "",
  type: "",
  category: "",
  price: 0,
  shop: "",
});

const resetForm = () => {
  productForm.reset();
  form.resetForm();
};

const closeForm = () => {
  router.get(route("backoffice.product.index"));
};

const onSubmit = form.handleSubmit((formData) => {
  productForm.put(route("backoffice.product.update", props.product.id));
});

watch(
  () => props.product,
  (product: TProduct) => {
    form.setFieldValue("name", product.name);
    form.setFieldValue("type", product.type);
    form.setFieldValue("price", product.price);
    form.setFieldValue("category", product.category_id);
    productForm.name = product.name;
    productForm.type = product.type;
    productForm.category = product.category_id;
    productForm.price = product.price;
    productForm.shop = product.shop_id;
  },
  { immediate: true }
);
</script>

<template>
  <Head title="Edit Produk" />
  <div class="block w-1/2 mx-auto space-y-2">
    <div class="space-y-2">
      <div class="flex items-center justify-between">
        <h1 class="text-lg font-semibold md:text-xl">Edit Produk</h1>
        <div class="flex gap-2">
          <Button
            type="button"
            variant="ghost"
            form="dialogForm"
            @click="closeForm"
            :disabled="productForm.processing"
          >
            Batal
          </Button>
          <Button type="submit" @click="onSubmit" :disabled="productForm.processing">
            <span v-if="productForm.processing">Menyimpan data...</span>
            <span v-else class="mx-10">Simpan</span>
          </Button>
        </div>
      </div>
    </div>
    <Alert class="bg-secondary shadow-inner shadow-gray-100 max-w-2xl">
      <AlertDescription class="text-xs">
        Silahkan anda mengisi data produk atau jasa yang akan disediakan dalam siste MY
        UPJ.
      </AlertDescription>
    </Alert>

    <form @submit="onSubmit" class="space-y-2 w-full">
      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': productForm.errors.name,
            }"
            >Nama Produk / Jasa</FormLabel
          >
          <FormControl>
            <Input
              type="text"
              placeholder="nama produk / jasa"
              v-bind="componentField"
              v-model="productForm.name"
              class="bg-white"
              :class="{
                'border border-red-500': productForm.errors.name,
              }"
              :disabled="productForm.processing"
            />
          </FormControl>
          <div class="text-xs text-red-500 font-medium" v-if="productForm.errors.name">
            {{ productForm.errors.name }}
          </div>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="type">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': productForm.errors.type,
            }"
          >
            Jenis Produk
          </FormLabel>
          <FormControl>
            <Select v-bind="componentField" class="bg-white" v-model="productForm.type">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Jenis" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    :key="index"
                    :value="type.value"
                    v-for="(type, index) in productTypes"
                    class="bg-white"
                  >
                    {{ type.label }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <div class="text-xs text-red-500 font-medium" v-if="productForm.errors.type">
            {{ productForm.errors.type }}
          </div>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="category">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': productForm.errors.category,
            }"
          >
            Kategori Produk
          </FormLabel>
          <FormControl>
            <Select
              v-bind="componentField"
              class="bg-white"
              v-model="productForm.category"
              v-if="categories.length > 0"
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Pilih Kategori" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    :key="index"
                    :value="category.id"
                    v-for="(category, index) in categories"
                    class="bg-white"
                  >
                    {{ category.name }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <Alert class="bg-yellow-100" v-else>
              <TriangleAlert class="w-4 h-4" />
              <AlertTitle>Peringatan</AlertTitle>
              <AlertDescription>
                Data Kategori tidak ditemukan dalam sistem, silahkan ditambahkan terlebih
                dahulu
              </AlertDescription>
            </Alert>
          </FormControl>

          <div
            class="text-xs text-red-500 font-medium"
            v-if="productForm.errors.category"
          >
            {{ productForm.errors.category }}
          </div>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="shop" v-if="shops !== null">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': productForm.errors.shop,
            }"
          >
            Unit Layanan
          </FormLabel>
          <FormControl>
            <Select v-bind="componentField" class="bg-white" v-model="productForm.shop">
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Unit Layanan" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    :key="index"
                    :value="shop.id"
                    v-for="(shop, index) in shops"
                    class="bg-white"
                  >
                    {{ shop.name }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <div class="text-xs text-red-500 font-medium" v-if="productForm.errors.shop">
            {{ productForm.errors.shop }}
          </div>
          <FormMessage />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="price">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': productForm.errors.price,
            }"
          >
            Harga
          </FormLabel>
          <FormControl>
            <Input
              type="number"
              v-bind="componentField"
              v-model="productForm.price"
              class="bg-white"
              :class="{
                'border border-red-500': productForm.errors.price,
              }"
              :disabled="productForm.processing"
            />
          </FormControl>
          <div class="text-xs text-red-500 font-medium" v-if="productForm.errors.price">
            {{ productForm.errors.price }}
          </div>
          <FormMessage />
        </FormItem>
      </FormField>
    </form>
  </div>
</template>
