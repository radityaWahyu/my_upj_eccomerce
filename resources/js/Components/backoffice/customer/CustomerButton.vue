<script setup lang="ts">
import { ref } from "vue";
import { router } from "@inertiajs/vue3";
import { Button } from "@/shadcn/ui/button";
import { Eye, EyeOff } from "lucide-vue-next";

const props = defineProps<{
    customer: {
        id: string;
        enabled: boolean;
    };
}>();

const emits = defineEmits<{
    (e: "updated", value: boolean): void;
}>();

const isLoading = ref<boolean>();
const onDisabled = (status: boolean) => {
    router.put(
        route("backoffice.customer.update", props.customer.id),
        {
            status: status,
        },
        {
            onStart: () => (isLoading.value = true),
            onSuccess: () => emits("updated", true),
            onError: (error) => console.log(error),
            onFinish: () => (isLoading.value = false),
        }
    );
};
</script>
<template>
    <div class="text-center">
        <Button
            type="button"
            variant="secondary"
            size="icon"
            @click="onDisabled(!customer.enabled)"
        >
            <EyeOff class="w-4 h-4 text-blue-600" v-if="customer.enabled" />
            <Eye class="w-4 h-4 text-blue-600" v-else />
        </Button>
    </div>
</template>
