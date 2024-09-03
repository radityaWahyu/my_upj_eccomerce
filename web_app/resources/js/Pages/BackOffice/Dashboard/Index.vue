<script lang="ts">
import Backoffice from "@/Layouts/Backoffice.vue";

export default {
    layout: Backoffice,
};
</script>
<script setup lang="ts">
import { Head, router, Link } from "@inertiajs/vue3";
import {
    User,
    ArrowUpRight,
    Blocks,
    Package,
    Store,
    Users,
} from "lucide-vue-next";
import { Avatar } from "@/shadcn/ui/avatar";
import { Alert, AlertDescription, AlertTitle } from "@/shadcn/ui/alert";
import { Button } from "@/shadcn/ui/button";
import { BadgeInfo } from "lucide-vue-next";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
    CardFooter,
} from "@/shadcn/ui/card";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shadcn/ui/table";

type TCustomer = {
    name: string;
    whatsapp: string;
    address: string;
};

type TTransaction = {
    transaction_code: string;
    shop: string;
    customer_name: string;
    total: number;
    product_count: number;
    created_at: string;
};

const props = defineProps<{
    transactions: { data: TTransaction[] };
    customers: { data: TCustomer[] } | null;
    jasa_count: number;
    produk_count: number;
    shop_count: number | null;
    customer_count: number | null;
}>();

const Rupiah = (price: number) =>
    new Intl.NumberFormat("en-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(price);
</script>

<template>
    <Head title="Dashboard" />
    <div class="flex min-h-screen w-full flex-col">
        <main class="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-8">
            <div class="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
                <Card>
                    <CardHeader
                        class="relative flex flex-row items-center justify-between space-y-0 pb-2"
                    >
                        <CardTitle class="text-sm font-medium">
                            Total Produk
                        </CardTitle>
                        <Package
                            class="absolute right-1 h-12 w-12 text-blue-200"
                        />
                    </CardHeader>
                    <CardContent>
                        <div class="text-2xl font-bold">
                            {{ produk_count }} Item
                        </div>
                        <p class="text-xs text-muted-foreground">
                            Jumlah per unit layanan
                        </p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader
                        class="relative flex flex-row items-center justify-between space-y-0 pb-2"
                    >
                        <CardTitle class="text-sm font-medium">
                            Total Jasa
                        </CardTitle>
                        <Blocks
                            class="absolute right-1 h-12 w-12 text-blue-200"
                        />
                    </CardHeader>
                    <CardContent>
                        <div class="text-2xl font-bold">
                            {{ jasa_count }} Item
                        </div>
                        <p class="text-xs text-muted-foreground">
                            Jumlah per unit layanan
                        </p>
                    </CardContent>
                </Card>
                <Card v-if="shop_count !== null">
                    <CardHeader
                        class="relative flex flex-row items-center justify-between space-y-0 pb-2"
                    >
                        <CardTitle class="text-sm font-medium">
                            Unit Layanan
                        </CardTitle>
                        <Store
                            class="absolute right-1 h-12 w-12 text-blue-200"
                        />
                    </CardHeader>
                    <CardContent>
                        <div class="text-2xl font-bold">
                            {{ shop_count }} Unit
                        </div>
                        <p class="text-xs text-muted-foreground">
                            Jumlah unit layanan
                        </p>
                    </CardContent>
                </Card>
                <Card v-if="customer_count !== null">
                    <CardHeader
                        class="relative flex flex-row items-center justify-between space-y-0 pb-2"
                    >
                        <CardTitle class="text-sm font-medium">
                            Pelanggan
                        </CardTitle>
                        <Users
                            class="absolute right-1 h-12 w-12 text-blue-200"
                        />
                    </CardHeader>
                    <CardContent>
                        <div class="text-2xl font-bold">
                            {{ customer_count }} Pelanggan
                        </div>
                        <p class="text-xs text-muted-foreground">
                            Jumlah pelanggan
                        </p>
                    </CardContent>
                </Card>
            </div>
            <div class="grid gap-4 md:gap-8 lg:grid-cols-2 xl:grid-cols-3">
                <Card class="xl:col-span-2">
                    <CardHeader class="flex flex-row items-center">
                        <div class="grid gap-2">
                            <CardTitle>Daftar Pemesanan</CardTitle>
                            <CardDescription>
                                Daftar pemesanan terbaru dari setiap unit
                                layanan.
                            </CardDescription>
                        </div>
                        <Button as-child size="sm" class="ml-auto gap-1">
                            <Link
                                :href="
                                    route(
                                        'backoffice.transaction.index',
                                        'pesan'
                                    )
                                "
                            >
                                Lebih Detail
                                <ArrowUpRight class="h-4 w-4" />
                            </Link>
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>Transaksi</TableHead>
                                    <TableHead class="">
                                        Unit Layanan
                                    </TableHead>
                                    <TableHead class="text-center">
                                        Produk/Jasa
                                    </TableHead>
                                    <TableHead class="text-right">
                                        Total
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody v-if="transactions.data.length > 0">
                                <TableRow
                                    v-for="(
                                        transaction, index
                                    ) in transactions.data"
                                    :key="index"
                                >
                                    <TableCell class="space-y-1">
                                        <div
                                            class="text-xs text-muted-foreground"
                                        >
                                            Tanggal pesan
                                            {{ transaction.created_at }}
                                        </div>
                                        <div class="font-medium">
                                            {{ transaction.transaction_code }}
                                        </div>
                                        <div
                                            class="text-xs text-muted-foreground md:inline"
                                        >
                                            dipesan oleh
                                            <strong>
                                                {{ transaction.customer_name }}
                                            </strong>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        {{ transaction.shop }}
                                    </TableCell>
                                    <TableCell class="text-center">
                                        {{ transaction.product_count }} Item
                                    </TableCell>
                                    <TableCell class="text-right">
                                        {{ Rupiah(transaction.total) }}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                            <TableBody v-else>
                                <TableRow>
                                    <TableCell colspan="4">
                                        <Alert class="w-full bg-blue-100">
                                            <BadgeInfo class="h-5 w-5" />
                                            <AlertTitle>
                                                Keterangan.
                                            </AlertTitle>
                                            <AlertDescription>
                                                Tidak terdapat pesanan terbaru.
                                            </AlertDescription>
                                        </Alert>
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
                <Card v-if="customers !== null">
                    <CardHeader>
                        <CardTitle>Pelanggan Terbaru</CardTitle>
                    </CardHeader>
                    <CardContent class="grid gap-8">
                        <div
                            class="flex items-center gap-4"
                            v-for="(customer, index) in customers.data"
                            :key="index"
                        >
                            <Avatar
                                class="hidden h-9 w-9 sm:flex bg-primary text-gray-100"
                            >
                                <User class="w-6 h-6" />
                            </Avatar>
                            <div class="grid gap-1">
                                <p
                                    class="text-sm font-medium leading-none capitalize"
                                >
                                    {{ customer.name }} -
                                    <span
                                        class="text-xs text-muted-foreground"
                                        >{{ customer.whatsapp }}</span
                                    >
                                </p>
                                <p class="text-sm text-muted-foreground">
                                    {{ customer.address }}
                                </p>
                            </div>
                        </div>
                        <Button as-child size="sm" class="w-full gap-1">
                            <Link
                                :href="
                                    route(
                                        'backoffice.transaction.index',
                                        'pesan'
                                    )
                                "
                            >
                                Lebih Detail
                                <ArrowUpRight class="h-4 w-4" />
                            </Link>
                        </Button>
                    </CardContent>
                </Card>
            </div>
        </main>
    </div>
</template>
