<script setup lang="ts">
import { computed, ComputedRef } from "vue";
import TopAvatarButton from "./TopAvatarButton.vue";
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
    PlusCircle,
    Banknote,
    Menu,
} from "lucide-vue-next";
import { Sheet, SheetContent, SheetTrigger } from "@/shadcn/ui/sheet";
import { Button } from "@/shadcn/ui/button";
import { usePage } from "@inertiajs/vue3";
import LinkNavigation from "./LinkNavigation.vue";

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
    <header
        class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 shadow-sm shadow-gray-300 py-6"
    >
        <!-- start mobile navigation component -->
        <Sheet>
            <SheetTrigger as-child>
                <Button
                    variant="outline"
                    size="icon"
                    class="shrink-0 md:hidden"
                >
                    <Menu class="h-5 w-5" />
                    <span class="sr-only">Toggle navigation menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent
                side="left"
                class="flex flex-col overflow-y-auto scrollbar pb-2 border-r border-slate-400 bg-slate-800 text-white"
            >
                <nav
                    class="grid items-start px-2 text-sm font-medium lg:px-4 gap-4 pt-8"
                >
                    <link-navigation
                        :to="route('backoffice.dashboard')"
                        :is-active="
                            $page.url.startsWith('backoffice/dashboard', 1)
                        "
                    >
                        <Home class="h-4 w-4" />
                        Dashboard
                    </link-navigation>

                    <div class="space-y-1">
                        <header-link-navigation
                            >Master Data</header-link-navigation
                        >
                        <link-navigation
                            to="/backoffice/category"
                            :is-active="
                                $page.url.startsWith('backoffice/category', 1)
                            "
                            v-if="userProfile.admin.level === 'administrator'"
                        >
                            <Layers2 class="h-4 w-4" />
                            Kategori
                        </link-navigation>
                        <link-navigation
                            to="/backoffice/unit_layanan"
                            :is-active="
                                $page.url.startsWith(
                                    'backoffice/unit_layanan',
                                    1
                                )
                            "
                            v-if="userProfile.admin.level === 'administrator'"
                        >
                            <Store class="h-4 w-4" />
                            Unit Pelayanan
                        </link-navigation>
                        <link-navigation
                            :to="route('backoffice.customer.index')"
                            :is-active="
                                $page.url.startsWith('backoffice/pelanggan', 1)
                            "
                            v-if="userProfile.admin.level === 'administrator'"
                        >
                            <User class="h-4 w-4" />
                            Pelanggan
                        </link-navigation>
                        <link-navigation
                            to="/backoffice/pegawai"
                            :is-active="
                                $page.url.startsWith('backoffice/pegawai', 1)
                            "
                            v-if="userProfile.admin.level === 'administrator'"
                        >
                            <Contact class="h-4 w-4" />
                            Pegawai
                        </link-navigation>
                        <link-navigation
                            to="/backoffice/produk"
                            :is-active="
                                $page.url.startsWith('backoffice/produk', 1)
                            "
                        >
                            <Package class="h-4 w-4" />
                            Produk dan Jasa
                        </link-navigation>
                    </div>
                    <div class="space-y-1">
                        <header-link-navigation
                            >Transaksi</header-link-navigation
                        >
                        <link-navigation
                            :to="route('backoffice.transaction.index', 'pesan')"
                            :is-active="
                                $page.url.startsWith(
                                    'backoffice/transaksi/pesan',
                                    1
                                )
                            "
                        >
                            <ShoppingBasket class="h-4 w-4" />
                            Pemesanan
                        </link-navigation>
                        <link-navigation
                            :to="
                                route('backoffice.transaction.index', 'selesai')
                            "
                            :is-active="
                                $page.url.startsWith(
                                    'backoffice/transaksi/selesai',
                                    1
                                )
                            "
                        >
                            <ShoppingCart class="h-4 w-4" />
                            Penjualan
                        </link-navigation>
                    </div>
                    <div class="space-y-1">
                        <header-link-navigation>Jurnal</header-link-navigation>
                        <link-navigation
                            :to="route('backoffice.jurnal.create')"
                            :is-active="
                                $page.url.startsWith(
                                    'backoffice/jurnal/create',
                                    1
                                )
                            "
                            v-if="userProfile.admin.level === 'operator'"
                        >
                            <PlusCircle class="h-4 w-4" />
                            Tambah Jurnal
                        </link-navigation>
                        <link-navigation
                            :to="route('backoffice.jurnal.index')"
                            :is-active="
                                $page.url.startsWith('backoffice/jurnal/all', 1)
                            "
                        >
                            <Banknote class="h-4 w-4" />
                            Keuangan
                        </link-navigation>
                        <link-navigation
                            :to="route('backoffice.jurnal.unit')"
                            :is-active="
                                $page.url.startsWith(
                                    'backoffice/jurnal/unit',
                                    1
                                )
                            "
                            v-if="userProfile.admin.level === 'administrator'"
                        >
                            <Banknote class="h-4 w-4" />
                            Keuangan Per Unit
                        </link-navigation>
                    </div>
                    <div
                        class="space-y-1"
                        v-if="userProfile.admin.level === 'administrator'"
                    >
                        <header-link-navigation
                            >Pengaturan</header-link-navigation
                        >
                        <link-navigation
                            to="/backoffice/users"
                            :is-active="
                                $page.url.startsWith('backoffice/users', 1)
                            "
                        >
                            <Users class="h-4 w-4" />
                            Users
                        </link-navigation>
                        <link-navigation
                            to="/backoffice/setting"
                            :is-active="
                                $page.url.startsWith('backoffice/setting', 1)
                            "
                        >
                            <Settings class="h-4 w-4" />
                            Sistem
                        </link-navigation>
                        <link-navigation
                            to="/backoffice/banner"
                            :is-active="
                                $page.url.startsWith('backoffice/banner', 1)
                            "
                        >
                            <BetweenHorizonalEnd class="h-4 w-4" />
                            Banner
                        </link-navigation>
                    </div>
                </nav>
            </SheetContent>
        </Sheet>
        <!-- end mobile navigation component -->
        <!-- start top empty component -->
        <div class="w-full flex-1"></div>
        <!-- end top empty component -->
        <!-- start avatar button -->
        <div class="flex items-center gap-4">
            <div>
                <h4 class="font-medium text-sm capitalize">
                    {{ userProfile.admin?.name }}
                </h4>
                <p class="text-xs text-tomato capitalize">
                    {{ userProfile.admin?.level }}
                </p>
            </div>
            <TopAvatarButton />
        </div>

        <!-- end avatar button -->
    </header>
</template>
