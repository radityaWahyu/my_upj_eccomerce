<script setup lang="ts">
import { ref, watch } from "vue";
import { BadgeAlert, CircleX, BadgeInfo } from "lucide-vue-next";
import HeaderApp from "@/Components/app/Header.vue";
import FooterApp from "@/Components/app/Footer.vue";

const props = defineProps<{ flash: any }>();
const showErrorAlert = ref<boolean>(false);
const showSuccessAlert = ref<boolean>(false);

watch(
    () => props.flash,
    (alert) => {
        if (!!alert.error) {
            showErrorAlert.value = !!alert.error;
            setTimeout(() => (showErrorAlert.value = false), 3000);
        } else {
            showErrorAlert.value = false;
        }

        if (!!alert.success) {
            showSuccessAlert.value = !!alert.success;
            setTimeout(() => (showSuccessAlert.value = false), 3000);
        } else {
            showSuccessAlert.value = false;
        }
    },
    { immediate: true }
);
</script>
<template>
    <header-app />

    <!-- <div
        id="product-detail-navigation-top"
        class="h-[50px] p-2 bg-nasplesyellow drop-shadow-md sticky top-0 left-0 w-full flex items-center justify-between z-10 lg:hidden"
    >
        <button
            type="button"
            class="focus:outline-none hover:bg-yellow-500 hover:text-white hover:border-yellow-400 focus:ring-1 focus:ring-yellow-400 font-semibold rounded text-sm px-2 py-2"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                class="w-5 h-5"
            >
                <path
                    fill="currentColor"
                    d="m7.825 13l4.9 4.9q.3.3.288.7t-.313.7q-.3.275-.7.288t-.7-.288l-6.6-6.6q-.15-.15-.213-.325T4.426 12t.063-.375t.212-.325l6.6-6.6q.275-.275.688-.275t.712.275q.3.3.3.713t-.3.712L7.825 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"
                />
            </svg>
        </button>
        <div class="relative w-[calc(100vw/1.6)] items-center mx-auto">
            <Input
                id="search"
                type="text"
                placeholder="cari produk / jasa.."
                class="pl-10 rounded-lg bg-white/90"
            />
            <span
                class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
            >
                <MagnifyingGlassIcon
                    class="size-6 text-muted-foreground text-tomato"
                />
            </span>
        </div>
        <div class="flex items-center space-x-3">
            <a href="#" class="">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    class="text-tomato"
                >
                    <path
                        fill="currentColor"
                        d="M7 22q-.825 0-1.412-.587T5 20t.588-1.412T7 18t1.413.588T9 20t-.587 1.413T7 22m10 0q-.825 0-1.412-.587T15 20t.588-1.412T17 18t1.413.588T19 20t-.587 1.413T17 22M6.15 6l2.4 5h7l2.75-5zM5.2 4h14.75q.575 0 .875.513t.025 1.037l-3.55 6.4q-.275.5-.737.775T15.55 13H8.1L7 15h12v2H7q-1.125 0-1.7-.987t-.05-1.963L6.6 11.6L3 4H1V2h3.25zm3.35 7h7z"
                    />
                </svg>
            </a>
            <a href="http://">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    class="text-tomato"
                >
                    <path
                        fill="currentColor"
                        d="M12 11q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11Zm0 2q-1.65 0-2.825-1.175Q8 10.65 8 9q0-1.65 1.175-2.825Q10.35 5 12 5q1.65 0 2.825 1.175Q16 7.35 16 9q0 1.65-1.175 2.825Q13.65 13 12 13Zm0 11q-2.475 0-4.662-.938q-2.188-.937-3.825-2.574Q1.875 18.85.938 16.663Q0 14.475 0 12t.938-4.663q.937-2.187 2.575-3.825Q5.15 1.875 7.338.938Q9.525 0 12 0t4.663.938q2.187.937 3.825 2.574q1.637 1.638 2.574 3.825Q24 9.525 24 12t-.938 4.663q-.937 2.187-2.574 3.825q-1.638 1.637-3.825 2.574Q14.475 24 12 24Zm0-2q1.8 0 3.375-.575T18.25 19.8q-.825-.925-2.425-1.612q-1.6-.688-3.825-.688t-3.825.688q-1.6.687-2.425 1.612q1.3 1.05 2.875 1.625T12 22Zm-7.7-3.6q1.2-1.3 3.225-2.1q2.025-.8 4.475-.8q2.45 0 4.463.8q2.012.8 3.212 2.1q1.1-1.325 1.713-2.95Q22 13.825 22 12q0-2.075-.788-3.887q-.787-1.813-2.15-3.175q-1.362-1.363-3.175-2.151Q14.075 2 12 2q-2.05 0-3.875.787q-1.825.788-3.187 2.151Q3.575 6.3 2.788 8.113Q2 9.925 2 12q0 1.825.6 3.463q.6 1.637 1.7 2.937Z"
                    />
                </svg>
            </a>
        </div>
    </div> -->
    <div class="relative max-w-full bg-lemonchiffon/30 min-h-screen">
        <Transition>
            <div
                class="absolute z-10 top-0 w-full py-2"
                v-if="showSuccessAlert"
            >
                <div
                    class="flex items-center justify-between gap-4 bg-blue-100 w-1/2 mx-auto rounded overflow-hidden"
                >
                    <div class="flex items-center gap-2">
                        <div class="bg-blue-200 p-3">
                            <BadgeInfo class="w-8 h-8 text-blue-400" />
                        </div>
                        <p class="text-xs">
                            <strong class="block">Informasi :</strong>
                            {{ flash.success }}
                        </p>
                    </div>
                    <button
                        type="button"
                        class="bg-gray-100 p-1 rounded-full mr-2"
                        @click="showSuccessAlert = false"
                    >
                        <CircleX class="h-4 w-4" />
                    </button>
                </div>
            </div>
        </Transition>
        <Transition>
            <div class="absolute z-10 top-0 w-full py-2" v-if="showErrorAlert">
                <div
                    class="flex items-center justify-between gap-4 bg-red-100 w-1/2 mx-auto rounded overflow-hidden"
                >
                    <div class="flex items-center gap-2">
                        <div class="bg-red-200 p-3">
                            <BadgeAlert class="w-8 h-8 text-red-400" />
                        </div>
                        <p class="text-xs">
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
        <section>
            <slot />
        </section>
        <div
            id="bottom-navigation"
            class="fixed bottom-0 left-0 z-10 w-full h-14 bg-nasplesyellow lg:hidden"
        >
            <div class="grid h-full max-w-lg grid-cols-2 mx-auto font-medium">
                <button type="button" class="px-4 gap-1 bg-yellow-500">
                    <span class="text-sm text-tomato">Beli Sekarang</span>
                </button>
                <button
                    type="button"
                    class="inline-flex items-center justify-center px-4 gap-1"
                >
                    <span class="text-sm text-tomato">Tambah ke Keranjang</span>
                </button>
            </div>
        </div>
        <footer-app class="hidden lg:block" />
    </div>
    <div class="lg:hidden mb-[2rem]"></div>
</template>

<style lang="scss">
body {
    @apply text-yaleblue;
    @apply font-poppins;
    @apply antialiased;
}
</style>
