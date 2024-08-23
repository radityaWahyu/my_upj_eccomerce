<script lang="ts">
import Backoffice from "@/Layouts/Backoffice.vue";

export default {
    layout: Backoffice,
};
</script>
<script setup lang="ts">
import { watch, ref } from "vue";
import { Head, useForm, InertiaForm } from "@inertiajs/vue3";
import { Button } from "@/shadcn/ui/button";
import { Input } from "@/shadcn/ui/input";
import { Textarea } from "@/shadcn/ui/textarea";
import { Alert, AlertDescription } from "@/shadcn/ui/alert";
import { Label } from "@/shadcn/ui/label";

type TSetting = {
    id: number;
    name: string;
    value: string;
};
type TSettingForm = {
    settings: any[];
};

const props = defineProps<{
    settings: { data: TSetting[] };
}>();

const settingForm = useForm<TSettingForm>({
    settings: [],
});

watch(
    () => props.settings,
    (settings) => {
        if (settings.data) {
            settings.data.forEach((setting) => {
                settingForm.settings.push({
                    id: setting.id,
                    name: setting.name,
                    value: setting.value,
                });
            });

            //console.log(settingForm.settings);
        }
    },
    { immediate: true }
);

const onSubmit = () => {
    settingForm.post(route("backoffice.setting.store"), {
        onError: (error) => console.log(error),
    });
};
</script>
<template>
    <Head title="Pengaturan Sistem" />
    <div class="block w-1/2 mx-auto space-y-4">
        <div class="space-y-2">
            <div class="flex items-center justify-between">
                <h1 class="text-lg font-semibold md:text-xl">
                    Pengaturan Sistem
                </h1>
                <div class="flex gap-2">
                    <Button type="submit" @click="onSubmit">
                        <span v-if="settingForm.processing"
                            >Menyimpan data...</span
                        >
                        <span v-else class="mx-10">Simpan</span>
                    </Button>
                </div>
            </div>
        </div>

        <Alert class="bg-secondary shadow-inner shadow-gray-100 max-w-2xl">
            <AlertDescription class="text-xs">
                Silahkan anda mengisi data user sesuai dengan pegawai yang
                dipilih.
            </AlertDescription>
        </Alert>

        <form @submit="onSubmit" class="space-y-4 w-full">
            <div
                v-for="(setting, index) in settings.data"
                :key="setting.id"
                class="space-y-1"
            >
                <Label>{{ setting.name }}</Label>
                <Textarea
                    placeholder="masukkan data..."
                    v-if="setting.id == 5 || setting.id == 4"
                    v-model="settingForm.settings[index].value"
                    :rows="setting.id == 4 ? 4 : 8"
                    :class="{
                        'border-red-400 border':
                            settingForm.errors[`settings.${index}.value`],
                    }"
                    class="focus:border-none"
                    :disabled="settingForm.processing"
                />

                <Input
                    v-else
                    type="url"
                    v-model="settingForm.settings[index].value"
                    :class="{
                        'border-red-400 border':
                            settingForm.errors[`settings.${index}.value`],
                    }"
                    class="bg-white text-slate-950 focus:border-none"
                    :disabled="settingForm.processing"
                />
                <p
                    v-if="settingForm.errors[`settings.${index}.value`]"
                    class="text-xs text-red-400"
                >
                    {{ settingForm.errors[`settings.${index}.value`] }}
                </p>
            </div>
        </form>
    </div>
</template>
