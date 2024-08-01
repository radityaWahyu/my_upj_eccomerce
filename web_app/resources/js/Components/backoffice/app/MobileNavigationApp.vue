<script setup lang="ts">
import {
    Home,
    LineChart,
    Menu,
    Package,
    Package2,
    ShoppingCart,
    Users,
} from "lucide-vue-next";
import { Sheet, SheetContent, SheetTrigger } from "@/shadcn/ui/sheet";
import { Button } from "@/shadcn/ui/button";
</script>
<template>
    <Sheet>
        <SheetTrigger as-child>
            <Button variant="outline" size="icon" class="shrink-0 md:hidden">
                <Menu class="h-5 w-5" />
                <span class="sr-only">Toggle navigation menu</span>
            </Button>
        </SheetTrigger>
        <SheetContent side="left" class="flex flex-col">
            <nav class="grid gap-2 text-lg font-medium">
                <a
                    href="#"
                    class="flex items-center gap-2 text-lg font-semibold"
                >
                    <Package2 class="h-6 w-6" />
                    <span>Acme Inc</span>
                </a>
                <a
                    href="#"
                    class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                    <Home class="h-5 w-5" />
                    Dashboard
                </a>
                <a
                    href="#"
                    class="mx-[-0.65rem] flex items-center gap-4 rounded-xl bg-muted px-3 py-2 text-foreground hover:text-foreground"
                >
                    <ShoppingCart class="h-5 w-5" />
                    Orders
                    <Badge
                        class="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full"
                    >
                        6
                    </Badge>
                </a>
                <a
                    href="#"
                    class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                    <Package class="h-5 w-5" />
                    Products
                </a>
                <a
                    href="#"
                    class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                    <Users class="h-5 w-5" />
                    Customers
                </a>
                <a
                    href="#"
                    class="mx-[-0.65rem] flex items-center gap-4 rounded-xl px-3 py-2 text-muted-foreground hover:text-foreground"
                >
                    <LineChart class="h-5 w-5" />
                    Analytics
                </a>
            </nav>
        </SheetContent>
    </Sheet>
</template>
