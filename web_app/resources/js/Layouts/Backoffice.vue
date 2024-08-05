<script setup lang="ts">
import LogoApp from "@/Components/backoffice/app/LogoApp.vue";
import LeftNavigationApp from "@/Components/backoffice/app/LeftNavigationApp.vue";
import RightHeaderApp from "@/Components/backoffice/app/RightHeaderApp.vue";
</script>

<template>
    <div
        class="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[220px_1fr] font-poppins antialiased"
    >
        <!-- start left component -->
        <div class="hidden border-r-2 border-slate-400 bg-slate-800 md:block">
            <div class="flex h-full max-h-screen flex-col gap-2">
                <!-- start logo component -->
                <logo-app />
                <!-- end logo component -->
                <!-- start left navigation component -->
                <left-navigation-app />
                <!-- end left navigation component -->
            </div>
        </div>
        <!-- end left component -->
        <!-- start right component -->
        <div class="flex flex-col">
            <!-- start header right component -->
            <right-header-app />
            <!-- end header right component -->
            <!-- start main content component -->
            <main
                class="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-gray-50"
            >
                <slot />
            </main>
            <!-- end main content component -->
        </div>
        <!-- end right component -->
    </div>
</template>
