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

// const Deleted = (id: string) => {
//   emits("deleted", id);
// };
</script>
<template>
  <div class="space-x-2 w-15">
    <Button type="button" variant="secondary" size="icon" @click="emits('updated', id)">
      <PenLine class="w-4 h-4 text-blue-600" />
    </Button>
    <Button
      type="button"
      variant="secondary"
      size="icon"
      @click="showConfirmDialog = true"
    >
      <Trash class="w-4 h-4 text-tomato" />
    </Button>

    <AlertDialog :open="showConfirmDialog">
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle> Apakah anda ingin menghapus data ini? </AlertDialogTitle>
          <AlertDialogDescription>
            Aksi ini akan menghapus data permanen dari sistem dan tidak bisa di
            kembalikan.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel @click="showConfirmDialog = false" class="border-none">
            Batalkan
          </AlertDialogCancel>
          <AlertDialogAction @click="emits('deleted', id)" class="bg-tomato">
            Hapus Data
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  </div>
</template>
