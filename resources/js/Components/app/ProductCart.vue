<script setup lang="ts">
import { computed, ref } from "vue";
import { useForm, router } from "@inertiajs/vue3";
import { Trash } from "lucide-vue-next";
import NoImage from "@/Assets/images/no-image.jpg";
type TCart = {
    id: string;
    image: string;
    name: string;
    price: number;
    quantity: number;
    shop: string;
    total: number;
};

const props = defineProps<{
    cart: TCart;
}>();

const emits = defineEmits<{
    (e: "deleted", value: boolean): void;
}>();

const productCartForm = useForm({
    qty: props.cart.quantity,
});

const Rupiah = (price: number) =>
    new Intl.NumberFormat("en-ID", {
        style: "currency",
        currency: "IDR",
        maximumFractionDigits: 0,
    }).format(price);

const isDeleting = ref<boolean>(false);

const total = computed(() => {
    if (productCartForm.qty === 0) return Rupiah(0);
    return Rupiah(productCartForm.qty * props.cart.price);
});

const updateQty = () => {
    productCartForm.put(route("frontend.cart.update", props.cart.id), {
        preserveScroll: true,
        onError: (error) => {
            console.log(error);
        },
    });
};

const deleteProduct = (id: string) => {
    router.delete(route("frontend.cart.delete", props.cart.id), {
        onStart: () => (isDeleting.value = true),
        onError: (error) => console.log(error),
        onSuccess: () => emits("deleted", true),
        onFinish: () => (isDeleting.value = false),
    });
};

const decreaseQty = () => {
    if (productCartForm.qty > 1) {
        productCartForm.qty--;
        updateQty();
    }
};
const increaseQty = () => {
    productCartForm.qty++;
    updateQty();
};
</script>
<template>
    <div class="rounded-sm border border-gray-200 bg-white p-3 shadow-sm">
        <div
            class="grid lg:grid-cols-[40%_35%_25%] items-center lg:gap-0 gap-2 px-1"
        >
            <div class="flex items-center gap-2">
                <div class="h-12 w-14 overflow-hidden rounded-sm">
                    <img
                        class="h-full w-full object-cover object-center"
                        :src="cart.image === null ? NoImage : cart.image"
                        :alt="cart.name"
                    />
                </div>
                <a
                    href="#"
                    class="text-sm font-medium text-gray-900 hover:underline dark:text-white"
                >
                    {{ cart.name }}
                    <span
                        class="ml-2 text-xs text-blue-500"
                        v-if="productCartForm.processing"
                    >
                        updating...
                    </span>
                    <span class="ml-2 text-xs text-blue-500" v-if="isDeleting">
                        hapus item...
                    </span>
                    <p class="text-muted-foreground text-xs">
                        {{ cart.shop }}
                    </p>
                </a>
            </div>
            <div class="flex items-center justify-between lg:justify-around">
                <div class="text-sm font-medium text-gray-900 text-left">
                    <p class="text-xs text-muted-foreground font-medium">
                        Harga Satuan
                    </p>
                    {{ Rupiah(cart.price) }}
                </div>
                <div class="flex items-center rounded border border-gray-200">
                    <button
                        type="button"
                        class="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                        @click="decreaseQty"
                        :disabled="productCartForm.processing || isDeleting"
                    >
                        &minus;
                    </button>

                    <input
                        type="number"
                        v-model="productCartForm.qty"
                        class="h-10 w-10 border-transparent text-center [-moz-appearance:_textfield] sm:text-sm [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                        :disabled="productCartForm.processing || isDeleting"
                        @keyup.enter="updateQty"
                    />

                    <button
                        type="button"
                        class="size-10 leading-10 text-gray-600 transition hover:opacity-75"
                        @click="increaseQty"
                        :disabled="productCartForm.processing || isDeleting"
                    >
                        &plus;
                    </button>
                </div>
            </div>
            <div class="flex items-center justify-between lg:justify-around">
                <div
                    class="text-sm font-semibold text-gray-900 dark:text-white text-left"
                >
                    <p class="text-xs text-muted-foreground font-medium">
                        Sub Total
                    </p>
                    {{ total }}
                </div>
                <div class="text-center content-center">
                    <button
                        type="button"
                        class="p-1 bg-red-100 rounded-full"
                        @click="deleteProduct(cart.id)"
                        :disabled="productCartForm.processing || isDeleting"
                    >
                        <Trash class="w-4 h-4 text-red-700" />
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>
