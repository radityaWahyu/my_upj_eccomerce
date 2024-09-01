<script lang="ts">
import Frontend from "@/Layouts/Frontend.vue";

export default {
    layout: Frontend,
};
</script>
<script setup lang="ts">
import { computed } from "vue";
import { usePage } from "@inertiajs/vue3";

type TSettings = {
    instagram: string;
    facebook: string;
    youtube: string;
    alamat: string;
    google_map: string;
};

const { settings } = usePage().props;

const Settings = computed((): TSettings => settings as TSettings);
</script>
<template>
    <div class="lg:container min-h-[500px] flex flex-col justify-center">
        <div class="w-full px-5 mx-auto flex justify-between flex-wrap">
            <div
                class="flex justify-start flex-wrap -mx-4 lg:w-1/2 sm:w-2/3 content-start sm:pr-10"
            >
                <div class="w-full sm:p-4 px-4 mb-6">
                    <h1
                        class="title-font font-medium text-xl mb-2 text-gray-900"
                    >
                        Kontak Kami :
                    </h1>
                    <h1 class="title-font font-medium text-lg text-gray-900">
                        Alamat Kami
                    </h1>
                    <div class="leading-relaxed capitalize">
                        {{ Settings.alamat }}
                    </div>
                </div>
                <!-- <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                        2.7K
                    </h2>
                    <p class="leading-relaxed">Users</p>
                </div>
                <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                        1.8K
                    </h2>
                    <p class="leading-relaxed">Subscribes</p>
                </div>
                <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                        35
                    </h2>
                    <p class="leading-relaxed">Downloads</p>
                </div>
                <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
                    <h2 class="title-font font-medium text-3xl text-gray-900">
                        4
                    </h2>
                    <p class="leading-relaxed">Products</p>
                </div> -->
            </div>
            <div
                class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0"
                v-html="Settings.google_map"
            ></div>
        </div>
    </div>
</template>
