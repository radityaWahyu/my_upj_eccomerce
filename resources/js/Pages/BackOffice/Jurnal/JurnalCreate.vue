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
import { Textarea } from "@/shadcn/ui/textarea";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";
import { usePage, useForm as useInertiaForm, router, Head } from "@inertiajs/vue3";
import { Button } from "@/shadcn/ui/button";

const jurnalTypes = [
  {
    label: "Pemasukan",
    value: "income",
  },
  {
    label: "Pengeluaran",
    value: "expense",
  },
];

const page = usePage();

const jurnalSchema = () => {
  return toTypedSchema(
    zod.object({
      description: zod
        .string({ message: "Deskripsi jurnal harusi diisi." })
        .min(1, { message: "Deskripsi jurnal harusi diisi." }),
      type: zod.string({ message: "Jenis jurnal harus dipilih" }).min(1, {
        message: "Jenis Jurnal harus dipilih",
      }),
      total: zod.number({ message: "Total Produk harus diisi" }),
      transaction_date: zod.string({
        message: "Tanggal Input harus diisi",
      }),
    })
  );
};

const validationSchema = jurnalSchema();
const form = useForm({
  validationSchema,
});

const jurnalForm = useInertiaForm({
  _token: page.props.csrf_token,
  description: "",
  type: "",
  total: 0,
  transaction_date: "",
});

const resetForm = () => {
  jurnalForm.reset();
  form.resetForm();
  jurnalForm.clearErrors();
};

const onSubmit = form.handleSubmit((formData) => {
  jurnalForm.post(route("backoffice.jurnal.store"));
});
</script>

<template>
  <Head title="Tambah Jurnal" />
  <div class="block w-1/2 mx-auto space-y-2">
    <div class="space-y-2">
      <div class="flex items-center justify-between">
        <h1 class="text-lg font-semibold md:text-xl">Form Tambah Jurnal</h1>
        <div class="flex gap-2">
          <Button
            type="button"
            variant="ghost"
            form="dialogForm"
            @click="resetForm"
            :disabled="jurnalForm.processing"
          >
            Batal
          </Button>
          <Button type="submit" @click="onSubmit" :disabled="jurnalForm.processing">
            <span v-if="jurnalForm.processing">Menyimpan data...</span>
            <span v-else class="mx-10">Simpan</span>
          </Button>
        </div>
      </div>
    </div>
    <form @submit="onSubmit" class="space-y-2 w-full">
      <FormField v-slot="{ componentField }" name="type">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': jurnalForm.errors.type,
            }"
            >Jenis Jurnal</FormLabel
          >
          <FormControl>
            <Select v-bind="componentField" class="bg-white" v-model="jurnalForm.type">
              <FormControl>
                <SelectTrigger class="bg-white">
                  <SelectValue placeholder="Pilih Jenis" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    :key="index"
                    :value="type.value"
                    v-for="(type, index) in jurnalTypes"
                    class="bg-white"
                  >
                    {{ type.label }}
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </FormControl>
          <div class="text-xs text-red-500 font-medium" v-if="jurnalForm.errors.type">
            {{ jurnalForm.errors.type }}
          </div>
          <FormMessage v-else />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="transaction_date">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': jurnalForm.errors.transaction_date,
            }"
            >Tanggal Transaksi</FormLabel
          >
          <FormControl>
            <input
              type="date"
              v-bind="componentField"
              v-model="jurnalForm.transaction_date"
              class="block text-sm py-1 px-2 border border-gray-200 bg-white rounded w-full"
            />
          </FormControl>
          <div
            class="text-xs text-red-500 font-medium"
            v-if="jurnalForm.errors.transaction_date"
          >
            {{ jurnalForm.errors.transaction_date }}
          </div>
          <FormMessage v-else />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="total">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': jurnalForm.errors.transaction_date,
            }"
            >Total Transaksi</FormLabel
          >
          <FormControl>
            <input
              type="number"
              v-bind="componentField"
              v-model="jurnalForm.total"
              class="block text-sm py-1 px-2 border border-gray-200 bg-white rounded w-full"
            />
          </FormControl>
          <div class="text-xs text-red-500 font-medium" v-if="jurnalForm.errors.total">
            {{ jurnalForm.errors.total }}
          </div>
          <FormMessage v-else />
        </FormItem>
      </FormField>
      <FormField v-slot="{ componentField }" name="description">
        <FormItem>
          <FormLabel
            :class="{
              'text-red-500': jurnalForm.errors.description,
            }"
            >Deskripsi Jurnal</FormLabel
          >
          <FormControl>
            <Textarea
              placeholder="inputkan deskripsi jurnal..."
              v-bind="componentField"
              v-model="jurnalForm.description"
              class="bg-white"
              rows="8"
            />
          </FormControl>
          <div
            class="text-xs text-red-500 font-medium"
            v-if="jurnalForm.errors.description"
          >
            {{ jurnalForm.errors.description }}
          </div>
          <FormMessage v-else />
        </FormItem>
      </FormField>
    </form>
  </div>
</template>
