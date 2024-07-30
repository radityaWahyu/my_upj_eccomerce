<template>
    <div class="p-2 m-auto container text-center relative">
        <swiper
            :slides-per-view="1"
            :space-between="50"
            class="rounded-lg lg:w-[500px] lg:drop-shadow-md"
            :modules="modules"
            :scrollbar="{ draggable: true }"
            navigation
            watch-slides-progress
            @slideChange="onSlideChange"
            @swiper="onSwiper"
        >
            <swiper-slide v-for="product in props.images">
                <img
                    :src="product.image"
                    :alt="product.alt"
                    class="object-cover w-screen"
                />
            </swiper-slide>
        </swiper>
        <div
            class="absolute bottom-0 mb-5 z-10 mx-auto block bg-tomato text-white px-2 py-1 text-[12px] font-semibold rounded-full left-[40%]"
        >
            Gambar ke {{ swipperValue.activeIndex }} /
            {{ swipperValue.total }}
        </div>
    </div>
</template>
<script setup lang="ts">
import { Navigation, EffectFade, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { reactive } from "vue";

// Import Swiper styles
import "swiper/css/bundle";

const modules = [Navigation, EffectFade, Scrollbar];

import { defineProps, PropType } from "vue";
type TImageProducts = {
    image: any;
    alt: string;
};

type TSwipperValues = {
    activeIndex: number;
    total: number;
};

const props = defineProps({
    images: Array as PropType<TImageProducts[]>,
});

const swipperValue = reactive<TSwipperValues>({
    activeIndex: 1,
    total: props.images?.length as number,
});

const onSwiper = (data: any) => {
    swipperValue.activeIndex = data.activeIndex + 1;
};

const onSlideChange = (data: any) => {
    swipperValue.activeIndex = data.activeIndex + 1;
};
</script>
