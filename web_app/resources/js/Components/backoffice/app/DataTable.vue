<script setup lang="ts">
import type { ColumnDef } from "@tanstack/vue-table";
import { Skeleton } from "@/shadcn/ui/skeleton";
import { defineEmits, useSlots, defineExpose } from "vue";
import { OctagonAlert } from "lucide-vue-next";
import { Alert, AlertDescription, AlertTitle } from "@/shadcn/ui/alert";
import {
    FlexRender,
    getCoreRowModel,
    getPaginationRowModel,
    useVueTable,
} from "@tanstack/vue-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/shadcn/ui/table";
import { Button } from "@/shadcn/ui/button";

const props = defineProps<{
    columns: ColumnDef<any>[];
    data: any[];
    currentPage: number;
    lastPage: number;
    total: number;
    perPage: number;
    nextPage: number;
    prevPage: number;
    loading: boolean;
}>();
const slots = useSlots();
const emits = defineEmits<{
    (e: "changePage", page: number): void;
}>();

const changePage = (page: number) => emits("changePage", page);

const table = useVueTable({
    get data() {
        return props.data;
    },
    get columns() {
        return props.columns;
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
});

const resetTable = () => {
    table.resetRowSelection();
};

defineExpose({
    resetTable,
});
</script>

<template>
    <div>
        <div class="border rounded-md bg-white">
            <Table>
                <TableHeader class="bg-gray-100">
                    <TableRow
                        v-for="headerGroup in table.getHeaderGroups()"
                        :key="headerGroup.id"
                    >
                        <TableHead
                            v-for="header in headerGroup.headers"
                            :key="header.id"
                        >
                            <FlexRender
                                v-if="!header.isPlaceholder"
                                :render="header.column.columnDef.header"
                                :props="header.getContext()"
                            />
                        </TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody v-if="loading">
                    <template v-if="table.getRowModel().rows?.length">
                        <TableRow v-for="index in perPage" :key="index">
                            <TableCell
                                v-for="index in columns.length"
                                class="h-10"
                                :key="index"
                            >
                                <Skeleton class="h-2 w-1/2" />
                            </TableCell>
                        </TableRow>
                    </template>
                    <template v-else>
                        <TableRow>
                            <TableCell
                                v-for="index in columns.length"
                                class="h-10"
                                :key="index"
                            >
                                <Skeleton class="h-2 w-1/2" />
                            </TableCell>
                        </TableRow>
                    </template>
                </TableBody>
                <TableBody v-else>
                    <template v-if="table.getRowModel().rows?.length">
                        <TableRow
                            v-for="row in table.getRowModel().rows"
                            :key="row.id"
                            :data-state="
                                row.getIsSelected() ? 'selected' : undefined
                            "
                        >
                            <TableCell
                                v-for="cell in row.getVisibleCells()"
                                :key="cell.id"
                            >
                                <FlexRender
                                    :render="cell.column.columnDef.cell"
                                    :props="cell.getContext()"
                                />
                            </TableCell>
                        </TableRow>
                    </template>
                    <template v-else>
                        <TableRow>
                            <TableCell
                                :colspan="columns.length"
                                class="h-24 text-center"
                            >
                                <div v-if="slots.empty">
                                    <slot name="empty" />
                                </div>
                                <div v-else class="text-left">
                                    <Alert class="bg-orange-100">
                                        <OctagonAlert class="h-4 w-4" />
                                        <AlertTitle>Peringatan</AlertTitle>
                                        <AlertDescription>
                                            Tidak terdapat data pada fitur ini
                                            silahkan menambahkan terlebih dahulu
                                        </AlertDescription>
                                    </Alert>
                                </div>
                            </TableCell>
                        </TableRow>
                    </template>
                </TableBody>
            </Table>
        </div>
        <div class="flex items-center justify-end space-x-2 py-4">
            <div class="flex-1 text-sm text-muted-foreground">
                <span v-if="loading">
                    <Skeleton class="h-2 w-1/4" />
                </span>
                <span v-else>
                    Page {{ currentPage }} of {{ lastPage }} From
                    {{ total }} Data.
                </span>
            </div>
            <div class="space-x-2">
                <Button
                    variant="outline"
                    size="sm"
                    :disabled="currentPage == 1 || loading"
                    @click="changePage(currentPage - 1)"
                >
                    <span>Previous</span>
                </Button>
                <Button
                    variant="outline"
                    size="sm"
                    :disabled="currentPage == lastPage || loading"
                    @click="changePage(currentPage + 1)"
                >
                    <span>Next</span>
                </Button>
            </div>
        </div>
    </div>
</template>
