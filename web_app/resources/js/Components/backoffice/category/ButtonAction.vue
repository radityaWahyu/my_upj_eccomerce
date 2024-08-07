<script setup lang="ts">
import { defineProps, defineEmits, ref } from "vue";
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
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
} from "@/shadcn/ui/alert-dialog";

import { Delete, Ellipsis, PenLine, Trash } from "lucide-vue-next";

defineProps({
    id: { type: String, required: true },
});

const emits = defineEmits<{
    (e: "deleted", value: string): void;
    (e: "updated", value: string): void;
}>();

const showConfirmDialog = ref<boolean>(false);

const DeleteCategory = (id: string) => {
    emits("deleted", id);
};
const UpdateCategory = (id: string) => {
    emits("updated", id);
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
                    <DropdownMenuItem @click="showConfirmDialog = true">
                        <span>Hapus Data</span>
                        <DropdownMenuShortcut>
                            <Trash class="w-4 h-4" />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem @click="UpdateCategory(id)">
                        <span>Edit Data</span>
                        <DropdownMenuShortcut>
                            <PenLine class="w-4 h-4" />
                        </DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
        <AlertDialog :open="showConfirmDialog">
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Apakah anda ingin menghapus data ini?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        Aksi ini akan menghapus data permanen dari sistem dan
                        tidak bisa di kembalikan.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel
                        @click="showConfirmDialog = false"
                        class="border-none"
                    >
                        Batalkan
                    </AlertDialogCancel>
                    <AlertDialogAction
                        @click="DeleteCategory(id)"
                        class="bg-tomato"
                    >
                        Hapus Data
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    </div>
</template>
