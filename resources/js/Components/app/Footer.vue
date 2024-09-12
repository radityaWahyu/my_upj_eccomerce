<script setup lang="ts">
import { computed, ComputedRef } from "vue";
import { usePage } from "@inertiajs/vue3";
import LogoSekolah from "@/Assets/images/fav.png";

type TSettings = {
    instagram: string;
    facebook: string;
    youtube: string;
    alamat: string;
    google_map: string;
};

const { settings } = usePage().props;

const Settings = computed((): TSettings => settings as TSettings);
</script>

<template>
    <div class="bg-transparent py-2">
        <div
            id="footer"
            class="lg:container py-3 space-y-4 border-t-[1px] border-t-nasplesyellow"
        >
            <div
                class="flex flex-col lg:flex-row items-start justify-center lg:justify-between flex-wrap px-4 lg:px-2"
            >
                <div id="logo" class="flex items-center gap-1">
                    <svg
                        class="text-tomato fill-current lg:h-20 lg:w-20"
                        xmlns="http://www.w3.org/2000/svg"
                        width="38"
                        height="38"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M5 21V7h3.5v-.5q0-1.458 1.021-2.479T12 3t2.479 1.021T15.5 6.5V7H19v14zm1-1h12V8h-2.5v3h-1V8h-5v3h-1V8H6zM9.5 7h5v-.5q0-1.056-.722-1.778T12 4t-1.778.722T9.5 6.5zM6 20V8z"
                        />
                    </svg>
                    <div>
                        <h4
                            class="font-semibold text-xl lg:text-3xl text-tomato line"
                        >
                            MYUPJ
                        </h4>
                        <p
                            class="text-[10px] lg:text-sm font-normal text-tomato mt-[-5px]"
                        >
                            SMK Mandiri dan Berprestasi
                        </p>
                    </div>
                </div>
                <div
                    class="flex items-center space-x-2 divide-x-2 divide-yaleblue mt-4 lg:mt-0"
                    id="logo-smk"
                >
                    <img
                        :src="LogoSekolah"
                        class="w-[45px] h-[45px] lg:w-[60px] lg:h-[60px] object-cover"
                        alt="Logo SMKN 1 Purwosari"
                    />
                    <div
                        class="font-semibold text-lg lg:text-xl leading-[20px] lg:leading-[18px] pl-2"
                    >
                        <h5>SMK NEGERI 1</h5>
                        <h5>PURWOSARI</h5>
                    </div>
                </div>
                <div
                    id="info"
                    class="w-[300px] text-[12px] font-normal space-y-3 mt-5 lg:mt-0"
                >
                    <p>
                        <strong class="block">Alamat :</strong>
                        {{ Settings.alamat }}
                    </p>

                    <div class="flex space-x-3" id="media sosial">
                        <a
                            :href="Settings.facebook"
                            target="_BLANK"
                            class="bg-gray-200 p-3 rounded-full"
                            ><svg
                                class="fill-current w-6 h-6 text-tomato"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="facebook"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                            >
                                <path
                                    fill="currentColor"
                                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                                ></path></svg
                            ><!-- <i class="fab fa-facebook"></i> --></a
                        >
                        <a
                            :href="Settings.youtube"
                            target="_BLANK"
                            class="bg-gray-200 p-3 rounded-full"
                        >
                            <svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 461.001 461.001"
                                xml:space="preserve"
                                fill="#000000"
                                class="fill-current w-6 h-6 text-tomato"
                            >
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g
                                    id="SVGRepo_tracerCarrier"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                ></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <path
                                            style="fill: #f61c0d"
                                            d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728 c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137 C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607 c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"
                                        ></path>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a
                            :href="Settings.instagram"
                            target="_BLANK"
                            class="bg-gray-200 p-3 rounded-full"
                            ><svg
                                class="fill-current w-6 h-6 text-tomato"
                                aria-hidden="true"
                                focusable="false"
                                data-prefix="fab"
                                data-icon="instagram"
                                role="img"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 448 512"
                                data-fa-i2svg=""
                            >
                                <path
                                    fill="currentColor"
                                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                ></path></svg
                            ><!-- <i class="fab fa-instagram"></i> --></a
                        >
                    </div>
                </div>
            </div>
            <p
                class="lg:text-xs text-[10px] py-2 px-2 font-medium text-center lg:text-left"
            >
                SMKN 1 Purwosari &copy; 2024 | Dibuat Oleh Tim Rekayasa
                Perangkat Lunak
            </p>
        </div>
    </div>
</template>
