<script setup lang="ts">
import { Badge } from "@/shadcn/ui/badge";
import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-vue-next";
import LinkNavigation from "./LinkNavigation.vue";
</script>
<template>
    <div class="flex-1" id="backoffice-left-navigation">
        <nav class="grid items-start px-2 text-sm font-medium lg:px-4">
            <link-navigation to="coba">
                <Home class="h-4 w-4" />
                Dashboard
            </link-navigation>
            <link-navigation to="coba">
                <ShoppingCart class="h-4 w-4" />
                Orders
                <Badge
                    class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                >
                    6
                </Badge>
            </link-navigation>
            <link-navigation to="coba">
                <Package class="h-4 w-4" />
                Products
            </link-navigation>
            <link-navigation to="coba">
                <Users class="h-4 w-4" />
                Customers
            </link-navigation>
            <link-navigation to="coba">
                <LineChart class="h-4 w-4" />
                Analytics
            </link-navigation>
        </nav>
    </div>
</template>
