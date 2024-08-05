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
} from "lucide-vue-next";
import LinkNavigation from "./LinkNavigation.vue";
import HeaderLinkNavigation from "./HeaderLinkNavigation.vue";
</script>
<template>
    <div class="flex-1" id="backoffice-left-navigation">
        <nav class="grid items-start px-2 text-sm font-medium lg:px-4 gap-4">
            <link-navigation to="coba">
                <Home class="h-4 w-4" />
                Dashboard
            </link-navigation>

            <div>
                <header-link-navigation>Master Data</header-link-navigation>
                <link-navigation to="coba">
                    <Layers2 class="h-4 w-4" />
                    Kategori
                </link-navigation>
                <link-navigation to="coba">
                    <Store class="h-4 w-4" />
                    Unit Pelayanan
                </link-navigation>
                <link-navigation to="coba">
                    <User class="h-4 w-4" />
                    Pelanggan
                </link-navigation>
                <link-navigation to="coba">
                    <Contact class="h-4 w-4" />
                    Pegawai
                </link-navigation>
                <link-navigation to="coba">
                    <Package class="h-4 w-4" />
                    Produk dan Jasa
                </link-navigation>
            </div>
            <div>
                <header-link-navigation>Transaksi</header-link-navigation>
                <link-navigation to="coba">
                    <ShoppingBasket class="h-4 w-4" />
                    Pemesanan
                </link-navigation>
                <link-navigation to="coba">
                    <ShoppingCart class="h-4 w-4" />
                    Penjualan
                </link-navigation>
            </div>
            <div>
                <header-link-navigation>Pengaturan</header-link-navigation>
                <link-navigation to="coba">
                    <Users class="h-4 w-4" />
                    Users
                </link-navigation>
                <link-navigation to="coba">
                    <Settings class="h-4 w-4" />
                    Sistem
                </link-navigation>
            </div>
        </nav>
    </div>
</template>
