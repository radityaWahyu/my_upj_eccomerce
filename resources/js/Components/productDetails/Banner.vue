<template>
    <div class="container text-center py-4 lg:py-0">
        <div class="relative" v-if="images.length > 0">
            <swiper
                :slides-per-view="1"
                :space-between="50"
                class="rounded-lg lg:w-[500px] lg:drop-shadow-md h-[500px] overflow-hidden"
                :modules="modules"
                :scrollbar="{ draggable: true }"
                navigation
                watch-slides-progress
                @slideChange="onSlideChange"
                @swiper="onSwiper"
            >
                <swiper-slide v-for="image in images">
                    <img
                        :src="image.image"
                        :alt="image.title"
                        class="object-cover w-full h-full"
                    />
                </swiper-slide>
            </swiper>
            <div class="absolute bottom-0 mb-5 z-10 text-center w-full">
                <span
                    class="bg-tomato text-white px-2 py-1 text-[12px] font-semibold rounded-full"
                >
                    Gambar ke {{ swipperValue.activeIndex }} /
                    {{ swipperValue.total }}
                </span>
            </div>
        </div>
        <div
            v-else
            class="rounded-lg lg:w-[500px] lg:drop-shadow-md h-[500px] overflow-hidden"
        >
            <img
                :src="NoImage"
                alt="no-image"
                class="object-cover w-full h-full"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
import { Navigation, EffectFade, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import { reactive } from "vue";
import NoImage from "@/Assets/images/no-image.jpg";

// Import Swiper styles
import "swiper/css/bundle";

const modules = [Navigation, EffectFade, Scrollbar];

import { defineProps, PropType } from "vue";
type TImageProducts = {
    image: string;
    title: string;
};

type TSwipperValues = {
    activeIndex: number;
    total: number;
};

const props = defineProps<{
    images: TImageProducts[];
}>();

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
