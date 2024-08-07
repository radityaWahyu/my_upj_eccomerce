<script setup lang="ts">
import { CircleUser } from "lucide-vue-next";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/shadcn/ui/dropdown-menu";
import { Button } from "@/shadcn/ui/button";
</script>
<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="secondary" size="icon" class="rounded-full">
                <CircleUser class="h-5 w-5" />
                <span class="sr-only">Toggle user menu</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>Akunku</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit Profil</DropdownMenuItem>
            <DropdownMenuItem>Logout</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
