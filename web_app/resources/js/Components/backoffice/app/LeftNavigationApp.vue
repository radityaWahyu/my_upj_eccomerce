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
import LinkNavigation from "./LinkNavigation.vue";
import HeaderLinkNavigation from "./HeaderLinkNavigation.vue";
</script>
<template>
    <div class="flex-1" id="backoffice-left-navigation">
        <nav class="grid items-start px-2 text-sm font-medium lg:px-4 gap-4">
            <link-navigation
                to="coba"
                :is-active="$page.url.startsWith('backoffice/unit_layanan', 2)"
            >
                <Home class="h-4 w-4" />
                Dashboard
            </link-navigation>

            <div class="space-y-1">
                <header-link-navigation>Master Data</header-link-navigation>
                <link-navigation
                    to="/backoffice/category"
                    :is-active="$page.url.startsWith('backoffice/category', 1)"
                >
                    <Layers2 class="h-4 w-4" />
                    Kategori
                </link-navigation>
                <link-navigation
                    to="/backoffice/unit_layanan"
                    :is-active="
                        $page.url.startsWith('backoffice/unit_layanan', 1)
                    "
                >
                    <Store class="h-4 w-4" />
                    Unit Pelayanan
                </link-navigation>
                <link-navigation
                    to="coba"
                    :is-active="$page.url.startsWith('backoffice/pelanggan', 1)"
                >
                    <User class="h-4 w-4" />
                    Pelanggan
                </link-navigation>
                <link-navigation
                    to="/backoffice/pegawai"
                    :is-active="$page.url.startsWith('backoffice/pegawai', 1)"
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
                    to="coba"
                    :is-active="$page.url.startsWith('backoffice/pemesanan', 2)"
                >
                    <ShoppingBasket class="h-4 w-4" />
                    Pemesanan
                </link-navigation>
                <link-navigation
                    to="coba"
                    :is-active="$page.url.startsWith('backoffice/transaksi', 2)"
                >
                    <ShoppingCart class="h-4 w-4" />
                    Penjualan
                </link-navigation>
            </div>
            <div class="space-y-1">
                <header-link-navigation>Pengaturan</header-link-navigation>
                <link-navigation
                    to="/backoffice/users"
                    :is-active="$page.url.startsWith('backoffice/users', 1)"
                >
                    <Users class="h-4 w-4" />
                    Users
                </link-navigation>
                <link-navigation
                    to="coba"
                    :is-active="
                        $page.url.startsWith('backoffice/pengaturan', 2)
                    "
                >
                    <Settings class="h-4 w-4" />
                    Sistem
                </link-navigation>
                <link-navigation
                    to="coba"
                    :is-active="$page.url.startsWith('backoffice/banner', 2)"
                >
                    <BetweenHorizonalEnd class="h-4 w-4" />
                    Banner
                </link-navigation>
            </div>
        </nav>
    </div>
</template>
