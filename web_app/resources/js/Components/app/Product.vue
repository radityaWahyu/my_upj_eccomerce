<template>
    <div
        class="static w-full flex-shrink-0 bg-lemonchiffon/85 rounded-md drop-shadow-sm"
    >
        <img
            :src="prop.product?.file"
            alt="product-one"
            class="rounded-t-md h-[200px] w-full object-fill"
        />
        <div class="flex flex-col text-left p-2">
            <p class="text-[12px] font-normal">{{ prop.product?.title }}</p>
            <p class="text-sm font-semibold">Rp. {{ prop.product?.price }}</p>
            <p class="text-[10px] font-light">{{ prop.product?.shop }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { defineProps, PropType } from "vue";
type TProduct = {
    file: any;
    title: String;
    price: String;
    shop: String;
};

const prop = defineProps({ product: Object as PropType<TProduct> });
//console.log(prop);
</script>
