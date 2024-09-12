<template>
    <div
        class="relative max-w-full bg-lemonchiffon/30 min-h-screen text-yaleblue font-poppins antialiased"
    >
        <Header />
        <section>
            <slot />
        </section>
        <Footer />
        <div class="lg:hidden mb-[3rem]"></div>
        <MobileNavigation class="lg:hidden" />
    </div>
</template>
<script setup lang="ts">
import Header from "@/Components/app/Header.vue";
import MobileNavigation from "@/Components/app/MobileNavigation.vue";
import Footer from "@/Components/app/Footer.vue";
</script>
