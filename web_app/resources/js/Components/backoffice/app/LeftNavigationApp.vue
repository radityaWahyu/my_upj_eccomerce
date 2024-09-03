<script setup lang="ts">
import {
    Home,
    ShoppingBasket,
    Contact,
    Package,
    User,
    Layers2,
    Store,
    ShoppingCart,
    Users,
    Settings,
    BetweenHorizonalEnd,
} from "lucide-vue-next";
import { ComputedRef, computed } from "vue";
import LinkNavigation from "./LinkNavigation.vue";
import HeaderLinkNavigation from "./HeaderLinkNavigation.vue";
import { usePage } from "@inertiajs/vue3";

type TUserProfile = {
    user: {
        id: string;
        name: string;
        username: string;
    };
    admin: {
        id: string;
        level: string;
        name: string;
        username: string;
    };
};

const page = usePage();
const userProfile = computed(() => page.props.auth);
</script>
<template>
    <div class="flex-1" id="backoffice-left-navigation">
        <nav class="grid items-start px-2 text-sm font-medium lg:px-4 gap-4">
            <link-navigation
                :to="route('backoffice.dashboard')"
                :is-active="$page.url.startsWith('backoffice/dashboard', 1)"
            >
                <Home class="h-4 w-4" />
                Dashboard
            </link-navigation>

            <div class="space-y-1">
                <header-link-navigation>Master Data</header-link-navigation>
                <link-navigation
                    to="/backoffice/category"
                    :is-active="$page.url.startsWith('backoffice/category', 1)"
                    v-if="userProfile.admin.level === 'administrator'"
                >
                    <Layers2 class="h-4 w-4" />
                    Kategori
                </link-navigation>
                <link-navigation
                    to="/backoffice/unit_layanan"
                    :is-active="
                        $page.url.startsWith('backoffice/unit_layanan', 1)
                    "
                    v-if="userProfile.admin.level === 'administrator'"
                >
                    <Store class="h-4 w-4" />
                    Unit Pelayanan
                </link-navigation>
                <link-navigation
                    :to="route('backoffice.customer.index')"
                    :is-active="$page.url.startsWith('backoffice/pelanggan', 1)"
                    v-if="userProfile.admin.level === 'administrator'"
                >
                    <User class="h-4 w-4" />
                    Pelanggan
                </link-navigation>
                <link-navigation
                    to="/backoffice/pegawai"
                    :is-active="$page.url.startsWith('backoffice/pegawai', 1)"
                    v-if="userProfile.admin.level === 'administrator'"
                >
                    <Contact class="h-4 w-4" />
                    Pegawai
                </link-navigation>
                <link-navigation
                    to="/backoffice/produk"
                    :is-active="$page.url.startsWith('backoffice/produk', 1)"
                >
                    <Package class="h-4 w-4" />
                    Produk dan Jasa
                </link-navigation>
            </div>
            <div class="space-y-1">
                <header-link-navigation>Transaksi</header-link-navigation>
                <link-navigation
                    :to="route('backoffice.transaction.index', 'pesan')"
                    :is-active="
                        $page.url.startsWith('backoffice/transaksi/pesan', 1)
                    "
                >
                    <ShoppingBasket class="h-4 w-4" />
                    Pemesanan
                </link-navigation>
                <link-navigation
                    :to="route('backoffice.transaction.index', 'selesai')"
                    :is-active="
                        $page.url.startsWith('backoffice/transaksi/selesai', 1)
                    "
                >
                    <ShoppingCart class="h-4 w-4" />
                    Penjualan
                </link-navigation>
            </div>
            <div
                class="space-y-1"
                v-if="userProfile.admin.level === 'administrator'"
            >
                <header-link-navigation>Pengaturan</header-link-navigation>
                <link-navigation
                    to="/backoffice/users"
                    :is-active="$page.url.startsWith('backoffice/users', 1)"
                >
                    <Users class="h-4 w-4" />
                    Users
                </link-navigation>
                <link-navigation
                    to="/backoffice/setting"
                    :is-active="$page.url.startsWith('backoffice/setting', 1)"
                >
                    <Settings class="h-4 w-4" />
                    Sistem
                </link-navigation>
                <link-navigation
                    to="/backoffice/banner"
                    :is-active="$page.url.startsWith('backoffice/banner', 1)"
                >
                    <BetweenHorizonalEnd class="h-4 w-4" />
                    Banner
                </link-navigation>
            </div>
        </nav>
    </div>
</template>
