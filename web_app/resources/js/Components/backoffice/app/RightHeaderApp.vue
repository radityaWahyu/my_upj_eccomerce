<script setup lang="ts">
import TopAvatarButton from "./TopAvatarButton.vue";
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
    <header
        class="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6 shadow-sm shadow-gray-300"
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
        <!-- end mobile navigation component -->
        <!-- start top empty component -->
        <div class="w-full flex-1"></div>
        <!-- end top empty component -->
        <!-- start avatar button -->
        <div class="flex items-center gap-4">
            <div>
                <h4 class="font-medium text-sm">Raditya Wahyu Sasono</h4>
                <p class="text-xs text-tomato">Administrator</p>
            </div>
            <top-avatar-button />
        </div>

        <!-- end avatar button -->
    </header>
</template>
