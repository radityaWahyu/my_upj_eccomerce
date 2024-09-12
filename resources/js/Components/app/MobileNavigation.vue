<script setup lang="ts">
import { Link } from "@inertiajs/vue3";
</script>
<template>
    <div
        id="bottom-navigation"
        class="fixed bottom-0 left-0 z-50 w-full h-14 bg-nasplesyellow border-yellow-500 border-t-2"
    >
        <div class="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
            <Link
                :href="route('frontend.index')"
                type="button"
                class="inline-flex flex-col items-center justify-center px-4"
            >
                <svg
                    class="w-6 h-6 text-tomato group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="currentColor"
                        d="M4 21v-9.375L2.2 13L1 11.4L12 3l11 8.4l-1.2 1.575l-1.8-1.35V21zm2-2h12v-8.9l-6-4.575L6 10.1zm0 0h12zm2-4q-.425 0-.712-.288T7 14t.288-.712T8 13t.713.288T9 14t-.288.713T8 15m4 0q-.425 0-.712-.288T11 14t.288-.712T12 13t.713.288T13 14t-.288.713T12 15m4 0q-.425 0-.712-.288T15 14t.288-.712T16 13t.713.288T17 14t-.288.713T16 15"
                    />
                </svg>
                <span
                    class="text-[14px] text-tomato"
                    :class="{ 'font-bold': $page.component === 'Home' }"
                    >Home</span
                >
            </Link>
            <Link
                :href="route('frontend.products')"
                type="button"
                class="inline-flex flex-col items-center justify-center px-4"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    class="w-5 h-5 text-tomato group-hover:text-white"
                >
                    <path
                        fill="currentColor"
                        d="M7 2H3a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1M5 21a2 2 0 1 1 2-2a2 2 0 0 1-2 2m2-9H3V3h4Z"
                    />
                    <circle cx="5.01" cy="19.01" r="1" fill="currentColor" />
                    <path
                        fill="currentColor"
                        d="M10.01 2v9.01h5V2zM17 2v9.01h5V2zm-6.99 11v9h5v-9zM17 13v9h5v-9z"
                    />
                </svg>
                <span
                    class="text-[14px] text-tomato"
                    :class="{
                        'font-bold':
                            $page.url.startsWith('products', 1) ||
                            $page.url.startsWith('search', 1),
                    }"
                    >Produk</span
                >
            </Link>
            <Link
                :href="route('frontend.shops')"
                type="button"
                class="inline-flex flex-col items-center justify-center px-4"
            >
                <svg
                    class="w-6 h-6 text-tomato group-hover:text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                >
                    <path
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4 4h6v6H4zm10 0h6v6h-6zM4 14h6v6H4zm10 3a3 3 0 1 0 6 0a3 3 0 1 0-6 0"
                    />
                </svg>

                <span
                    class="text-[14px] text-tomato"
                    :class="{
                        'font-bold': $page.url.startsWith('unit-layanan', 1),
                    }"
                    >UPJ</span
                >
            </Link>
            <Link
                :href="route('frontend.contact')"
                type="button"
                class="inline-flex flex-col items-center justify-center px-4"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    class="w-6 h-6 text-tomato group-hover:text-white"
                >
                    <path
                        fill="currentColor"
                        d="M12 7q.425 0 .713-.288T13 6t-.288-.712T12 5t-.712.288T11 6t.288.713T12 7m0 8q.425 0 .713-.288T13 14v-4q0-.425-.288-.712T12 9t-.712.288T11 10v4q0 .425.288.713T12 15m-6 3l-2.3 2.3q-.475.475-1.088.213T2 19.575V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v12q0 .825-.587 1.413T20 18zm-.85-2H20V4H4v13.125zM4 16V4z"
                    />
                </svg>
                <span
                    class="text-[14px] text-tomato"
                    :class="{
                        'font-bold': $page.url.startsWith('contact-us', 1),
                    }"
                    >Kontak</span
                >
            </Link>
        </div>
    </div>
</template>
