<template>
    <div class="w-screen bg-gray-100 shadow-inner">
        <div class="px-2 py-3 m-auto container text-center">
            <swiper
                :slides-per-view="1"
                :space-between="50"
                class="rounded-lg"
                :modules="modules"
                autoplay
            >
                <swiper-slide>
                    <img
                        :src="ImagesOne"
                        alt="images-one"
                        class="object-cover w-screen"
                    />
                </swiper-slide>
                <swiper-slide>
                    <img
                        :src="ImagesTwo"
                        alt="images-two"
                        class="object-cover w-screen"
                    />
                </swiper-slide>
                <swiper-slide>
                    <img
                        :src="ImagesThree"
                        alt="images-theree"
                        class="object-cover w-screen"
                    />
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script setup lang="ts">
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import ImagesOne from "@/Assets/images/1.webp";
import ImagesTwo from "@/Assets/images/2.webp";
import ImagesThree from "@/Assets/images/3.webp";

// Import Swiper styles
import "swiper/css/bundle";

const modules = [Autoplay, Navigation, EffectFade];

// const onSwiper = (swiper) => {
//     console.log(swiper);
// };
// const onSlideChange = () => {
//     console.log("slide change");
// };
</script>
