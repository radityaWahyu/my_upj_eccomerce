<script setup lang="ts">
import { Head, Link } from "@inertiajs/vue3";
import Footer from "@/Components/app/Footer.vue";
import SuccessRegistrationImage from "@/Assets/images/success_registration.svg";
</script>
<template>
    <Head title="Registrasi Berhasil" />
    <div class="w-screen h-screen">
        <div class="min-w-max bg-nasplesyellow lg:sticky lg:z-20 lg:top-0">
            <div
                class="sm:container px-2 h-[55px] flex items-center justify-center"
            >
                <div id="logo" class="flex items-center gap-1">
                    <svg
                        class="text-tomato fill-current"
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
                        <h4 class="font-semibold text-xl text-tomato line">
                            MYUPJ
                        </h4>
                        <p
                            class="text-[10px] font-normal text-tomato mt-[-5px]"
                        >
                            SMK Mandiri dan Berprestasi
                        </p>
                    </div>
                </div>
            </div>
        </div>

        <div
            class="min-h-[500px] container flex flex-col items-center justify-center space-y-5"
        >
            <img
                :src="SuccessRegistrationImage"
                alt="success-images"
                class="w-[350px] h-[250px]"
            />
            <h1
                class="scroll-m-20 border-b pb-2 text-2xl font-medium tracking-tight transition-colors first:mt-0"
            >
                Selamat Pendaftaran Anda Berhasil
            </h1>
            <p
                class="text-sm text-muted-foreground w-1/2 bg-gray-100 p-2 rounded"
            >
                Anda dapat memanfaatkan semua fasilitas aplikasi MY UPJ SMKN 1
                PURWOSARI, silahkan anda login dengan mengklik tombol ke halaman
                login dengan mengunakan username dan password yang telah
                didaftarkan.
            </p>
            <Link
                :href="route('frontend.login')"
                as="button"
                class="text-gray-900 bg-blue-200 hover:bg-blue-300 focus:ring-2 focus:outline-none focus:ring-blue-300 font-semibold rounded text-sm w-1/2 px-5 py-2.5 text-center"
            >
                Login Akun
            </Link>
        </div>
        <Footer />
    </div>
</template>
