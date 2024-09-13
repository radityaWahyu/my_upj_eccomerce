<script setup lang="ts">
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import ImagesOne from "@/Assets/images/1.webp";
import ImagesTwo from "@/Assets/images/2.webp";
import ImagesThree from "@/Assets/images/3.webp";

// Import Swiper styles
import "swiper/css/bundle";

type TBanner = {
    title: string;
    image: string;
};

const props = defineProps<{
    banners: TBanner[];
}>();
const modules = [Autoplay, Navigation, EffectFade];
</script>
<template>
    <div class="w-screen bg-gray-100 shadow-inner">
        <div class="lg:px-2 lg:py-3 m-auto lg:container text-center">
            <swiper
                :slides-per-view="1"
                :space-between="50"
                class="lg:rounded-lg lg:h-72 h-24 w-full overflow-hidden"
                :modules="modules"
                autoplay
            >
                <swiper-slide v-for="(banner, index) in banners" :key="index">
                    <img
                        :src="banner.image"
                        :alt="banner.title"
                        class="object-cover object-center h-full w-full"
                    />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
