<script setup lang="ts">
import { Button } from "@/shadcn/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuTrigger,
} from "@/shadcn/ui/dropdown-menu";

import { Ellipsis, PenLine, Trash } from "lucide-vue-next";

defineProps({
    id: { type: String, required: true },
});

const DeleteCategory = (id: string) => {
    alert(id);
};
</script>
<template>
    <div>
        <DropdownMenu>
            <DropdownMenuTrigger as-child>
                <Button variant="outline" size="icon">
                    <Ellipsis class="w-4 h-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent class="w-10">
                <DropdownMenuLabel>Aksi</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem @click="DeleteCategory(id)">
                        <span>Hapus Data</span>
                        <DropdownMenuShortcut>
                            <Trash class="w-4 h-4" />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <span>Edit Data</span>
                        <DropdownMenuShortcut>
                            <PenLine class="w-4 h-4" />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    </div>
</template>
