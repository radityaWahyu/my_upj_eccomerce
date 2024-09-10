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
import { router } from "@inertiajs/vue3";

function logout() {
    router.post(route("backoffice.auth.logout"), {}, { replace: true });
}

function editProfil() {
    router.get(route("backoffice.profil.index"));
}
</script>
<template>
    <DropdownMenu>
        <DropdownMenuTrigger as-child>
            <Button variant="default" size="icon" class="rounded-full">
                <CircleUser class="h-5 w-5 text-gray-50" />
                <span class="sr-only">Toggle user menu</span>
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
            <DropdownMenuLabel>Akunku</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem @click="editProfil">Edit Profil</DropdownMenuItem>
            <DropdownMenuItem @click="logout">Logout</DropdownMenuItem>
        </DropdownMenuContent>
    </DropdownMenu>
</template>
