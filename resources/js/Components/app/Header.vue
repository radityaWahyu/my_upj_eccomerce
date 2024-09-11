<script setup lang="ts">
import { ref, onMounted, watch, computed, ComputedRef } from "vue";
import { router, usePage, Link } from "@inertiajs/vue3";
import { MagnifyingGlassIcon } from "@radix-icons/vue";
import { Input } from "@/shadcn/ui/input";
import {
    LogIn,
    UserPlus,
    CircleUser,
    UserPen,
    LogOut,
    ClipboardList,
} from "lucide-vue-next";
import TopLink from "./TopLink.vue";

const page = usePage<any>();

const keyString = ref<any>("");
const isUserMenuOpen = ref<boolean>(false);
const search = () => {
    //alert(keyString.value);
    router.get(route("frontend.search"), { key: keyString.value });
};
const customerProfile = computed(() => page.props.auth.user);

onMounted(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.has("key")) {
        keyString.value = urlParams.get("key");
    }
});
watch(
    () => page.url,
    (url) => {
        if (url === "/") keyString.value = "";
    }
);
</script>
<template>
    <div class="min-w-max bg-nasplesyellow lg:sticky lg:z-20 lg:top-0">
        <div
            class="sm:container px-2 h-[55px] flex items-center justify-between"
        >
            <div id="logo" class="flex items-center gap-1">
                <svg
                    class="text-tomato fill-current"
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
                    <h4 class="font-semibold text-xl text-tomato line">
                        MYUPJ
                    </h4>
                    <p class="text-[10px] font-normal text-tomato mt-[-5px]">
                        SMK Mandiri dan Berprestasi
                    </p>
                </div>
            </div>
            <div class="w-[calc(100vw/3.2)] lg:block hidden">
                <div class="relative w-full items-center mx-auto">
                    <Input
                        id="search"
                        type="text"
                        placeholder="cari produk / jasa.."
                        class="pl-10 rounded-none bg-white/90"
                        v-model="keyString"
                        @keyup.enter="search"
                    />
                    <span
                        class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
                    >
                        <MagnifyingGlassIcon
                            class="size-6 text-muted-foreground text-tomato"
                        />
                    </span>
                </div>
            </div>
            <div class="flex items-center lg:divide-x-2 lg:divide-yellow-600">
                <div class="lg:block hidden px-2" id="desktop-navigation">
                    <ul class="inline-flex text-sm font-medium gap-1">
                        <li>
                            <TopLink
                                :to="route('frontend.index')"
                                :active="$page.component === 'Home'"
                            >
                                Beranda
                            </TopLink>
                        </li>
                        <li>
                            <TopLink
                                :to="route('frontend.products')"
                                :active="
                                    $page.url.startsWith('products', 1) ||
                                    $page.url.startsWith('search', 1)
                                "
                            >
                                Produk & Jasa
                            </TopLink>
                        </li>
                        <li>
                            <TopLink
                                :to="route('frontend.shops')"
                                :active="
                                    $page.url.startsWith('unit-layanan', 1)
                                "
                            >
                                Unit Layanan
                            </TopLink>
                        </li>
                        <li>
                            <TopLink
                                :to="route('frontend.contact')"
                                :active="$page.url.startsWith('contact-us', 1)"
                            >
                                Kontak Kami
                            </TopLink>
                        </li>
                    </ul>
                </div>
                <div class="flex items-center gap-3 px-2">
                    <!-- Cart Menu -->
                    <Link :href="route('frontend.cart.index')" method="get">
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
                    </Link>
                    <button
                        type="button"
                        class="group hover:bg-tomato p-1 rounded-full"
                        @click="isUserMenuOpen = !isUserMenuOpen"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="22"
                            height="22"
                            viewBox="0 0 24 24"
                            class="text-tomato group-hover:text-white"
                        >
                            <path
                                fill="currentColor"
                                d="M12 11q.825 0 1.413-.588Q14 9.825 14 9t-.587-1.413Q12.825 7 12 7q-.825 0-1.412.587Q10 8.175 10 9q0 .825.588 1.412Q11.175 11 12 11Zm0 2q-1.65 0-2.825-1.175Q8 10.65 8 9q0-1.65 1.175-2.825Q10.35 5 12 5q1.65 0 2.825 1.175Q16 7.35 16 9q0 1.65-1.175 2.825Q13.65 13 12 13Zm0 11q-2.475 0-4.662-.938q-2.188-.937-3.825-2.574Q1.875 18.85.938 16.663Q0 14.475 0 12t.938-4.663q.937-2.187 2.575-3.825Q5.15 1.875 7.338.938Q9.525 0 12 0t4.663.938q2.187.937 3.825 2.574q1.637 1.638 2.574 3.825Q24 9.525 24 12t-.938 4.663q-.937 2.187-2.574 3.825q-1.638 1.637-3.825 2.574Q14.475 24 12 24Zm0-2q1.8 0 3.375-.575T18.25 19.8q-.825-.925-2.425-1.612q-1.6-.688-3.825-.688t-3.825.688q-1.6.687-2.425 1.612q1.3 1.05 2.875 1.625T12 22Zm-7.7-3.6q1.2-1.3 3.225-2.1q2.025-.8 4.475-.8q2.45 0 4.463.8q2.012.8 3.212 2.1q1.1-1.325 1.713-2.95Q22 13.825 22 12q0-2.075-.788-3.887q-.787-1.813-2.15-3.175q-1.362-1.363-3.175-2.151Q14.075 2 12 2q-2.05 0-3.875.787q-1.825.788-3.187 2.151Q3.575 6.3 2.788 8.113Q2 9.925 2 12q0 1.825.6 3.463q.6 1.637 1.7 2.937Z"
                            />
                        </svg>
                    </button>
                    <div
                        v-if="isUserMenuOpen"
                        class="absolute end-20 z-10 top-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
                    >
                        <div
                            class="w-full divide-y divide-gray-200"
                            v-if="customerProfile === null"
                        >
                            <div class="p-2">
                                <Link
                                    :href="route('frontend.register')"
                                    as="button"
                                    class="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full px-5 py-2.5 text-center"
                                >
                                    <UserPlus class="w-5 h-5" />
                                    Daftar Akun
                                </Link>
                            </div>
                            <div class="p-2">
                                <Link
                                    :href="route('frontend.login')"
                                    as="button"
                                    class="flex items-center justify-center gap-2 bg-blue-200 hover:bg-blue-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full px-5 py-2.5 text-center"
                                >
                                    <LogIn class="w-5 h-5" />
                                    Login Akun
                                </Link>
                            </div>
                        </div>
                        <div class="w-full divide-y divide-gray-200" v-else>
                            <div class="p-3">
                                <strong
                                    class="block p-1 text-xs font-medium uppercase text-gray-400"
                                >
                                    Profil Saya
                                </strong>
                                <div
                                    class="flex items-center justify-start gap-2"
                                >
                                    <div class="p-1 bg-gray-300 rounded-full">
                                        <CircleUser class="w-6 h-6" />
                                    </div>
                                    <div class="text-xs">
                                        <p class="font-semibold capitalize">
                                            {{ customerProfile.name }}
                                        </p>
                                        <p>
                                            {{ customerProfile.username }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="p-2">
                                <Link
                                    :href="route('frontend.transaction.index')"
                                    class="flex items-center justify-start gap-2 px-3 py-2 hover:bg-gray-100 rounded text-sm"
                                >
                                    <ClipboardList class="w-5 h-5" />
                                    Transaksi Saya
                                </Link>
                                <Link
                                    :href="route('frontend.profil.index')"
                                    class="flex items-center justify-start gap-2 px-3 py-2 hover:bg-gray-100 rounded text-sm"
                                >
                                    <UserPen class="w-5 h-5" />
                                    Edit Profil
                                </Link>
                            </div>
                            <div class="p-2">
                                <Link
                                    :href="route('frontend.logout')"
                                    as="button"
                                    method="post"
                                    class="flex items-center justify-center gap-2 bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full px-5 py-2.5 text-center"
                                >
                                    <LogOut class="w-5 h-5" />
                                    Log Out
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div
        id="search-box"
        class="h-[50px] p-2 bg-nasplesyellow drop-shadow-md sticky top-0 left-0 w-full z-20 lg:hidden"
    >
        <div class="relative w-full items-center mx-auto">
            <Input
                id="search"
                type="text"
                placeholder="cari produk / jasa.."
                class="pl-10 rounded-none bg-white/90"
            />
            <span
                class="absolute start-0 inset-y-0 flex items-center justify-center px-2"
            >
                <MagnifyingGlassIcon
                    class="size-6 text-muted-foreground text-tomato"
                />
            </span>
        </div>
    </div>
</template>
