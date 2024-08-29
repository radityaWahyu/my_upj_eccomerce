<script setup lang="ts">
import { ref, watch } from "vue";
import {
    Link,
    Head,
    usePage,
    useForm as useInertiaForm,
} from "@inertiajs/vue3";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/shadcn/ui/form";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as zod from "zod";
import validator from "validator";
import { BadgeAlert, CircleX } from "lucide-vue-next";

const page = usePage();

const userSchema = () => {
    return toTypedSchema(
        zod.object({
            username: zod
                .string({ message: "username harus diisi" })
                .min(1, { message: "username harus diisi." }),
            password: zod
                .string({ message: "password harus diisi" })
                .min(1, { message: "password harus diisi" }),
        })
    );
};

const validationSchema = userSchema();
const form = useForm({
    validationSchema,
});

const loginForm = useInertiaForm({
    _token: page.props.csrf_token,
    username: "",
    password: "",
});

const props = defineProps<{ flash: any }>();
const showErrorAlert = ref<boolean>(false);

watch(
    () => props.flash,
    (alert) => {
        if (!!alert.error) {
            showErrorAlert.value = !!alert.error;
        } else {
            showErrorAlert.value = false;
        }
    },
    { immediate: true }
);

const onSubmit = form.handleSubmit((formData) => {
    loginForm.post(route("frontend.login.store"), {
        onError: (error) => console.log(error),
    });
});
</script>
<template>
    <Head title="Login Akun" />
    <div
        class="relative h-screen bg-nasplesyellow/10 flex items-center lg:items-center justify-center lg:justify-normal"
    >
        <Transition>
            <div class="absolute z-10 top-0 w-full py-2" v-if="showErrorAlert">
                <div
                    class="flex items-center justify-between gap-4 bg-red-100 w-1/2 mx-auto rounded overflow-hidden"
                >
                    <div class="flex items-center gap-2">
                        <div class="bg-red-200 p-3">
                            <BadgeAlert class="w-8 h-8 text-red-400" />
                        </div>
                        <p class="text-sm">
                            <strong class="block">Peringatan :</strong>
                            {{ flash.error }}
                        </p>
                    </div>
                    <button
                        type="button"
                        class="bg-gray-100 p-1 rounded-full mr-2"
                        @click="showErrorAlert = false"
                    >
                        <CircleX class="h-4 w-4" />
                    </button>
                </div>
            </div>
        </Transition>
        <div class="lg:w-3/5 hidden h-screen lg:block">
            <Link
                :href="route('frontend.index')"
                class="bg-tomato text-white hover:bg-tomato/80 hover:text-white text-sm font-medium inline-flex items-center px-4 py-2 lg:gap-2 group"
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    class="fill-current w-6 h-6 o text-white"
                >
                    <path
                        fill="currentColor"
                        d="m10 18l-6-6l6-6l1.4 1.45L7.85 11H20v2H7.85l3.55 3.55z"
                    />
                </svg>
                <span> kembali ke Beranda</span>
            </Link>
            <img
                src="@/Assets/images/login.svg"
                alt=""
                srcset=""
                class="h-[500px] w-[500px] mx-auto"
            />
        </div>
        <div
            class="px-6 lg:w-2/5 lg:bg-gray-50 lg:h-full flex flex-col justify-center gap-4 shadow-inner shadow-gray-200"
        >
            <div id="logo" class="flex items-center gap-1">
                <svg
                    class="text-tomato fill-current lg:w-20 lg:h-20"
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
                class="p-4 mb-4 text-[12px] text-blue-800 rounded-lg bg-blue-50"
                role="alert"
            >
                <span class="font-semibold block">Login Akun User</span>
                Silahkan mengisi username dan password yang sesuai dengan data
                akun yang didaftarkan dalam sistem, apabila menemui kesulitan
                silahkan untuk menghubungi adminstrator sistem.
            </div>
            <div>
                <form
                    @submit="onSubmit"
                    class="max-w-md mx-auto space-y-3 mb-6"
                >
                    <div>
                        <FormField v-slot="{ componentField }" name="username">
                            <FormItem>
                                <FormLabel
                                    :class="{
                                        'text-red-500':
                                            loginForm.errors.username,
                                    }"
                                    >Username</FormLabel
                                >
                                <FormControl>
                                    <input
                                        type="text"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                        placeholder="masukkan username"
                                        v-model="loginForm.username"
                                        v-bind="componentField"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                    </div>
                    <div>
                        <FormField v-slot="{ componentField }" name="password">
                            <FormItem>
                                <FormLabel
                                    :class="{
                                        'text-red-500':
                                            loginForm.errors.password,
                                    }"
                                >
                                    Password
                                </FormLabel>
                                <FormControl>
                                    <input
                                        type="password"
                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                        placeholder="masukkan password"
                                        v-model="loginForm.password"
                                        v-bind="componentField"
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        </FormField>
                    </div>

                    <div class="divide-y divide-gray-300 space-y-3">
                        <div>
                            <button
                                @click="onSubmit"
                                type="submit"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full px-5 py-2.5 text-center"
                            >
                                <span
                                    class="flex items-center gap-2 justify-center"
                                    v-if="loginForm.processing"
                                >
                                    <svg
                                        class="h-4 w-4 animate-spin"
                                        viewBox="0 0 100 100"
                                    >
                                        <circle
                                            fill="none"
                                            stroke-width="10"
                                            class="stroke-current opacity-40"
                                            cx="50"
                                            cy="50"
                                            r="40"
                                        />
                                        <circle
                                            fill="none"
                                            stroke-width="10"
                                            class="stroke-current"
                                            stroke-dasharray="250"
                                            stroke-dashoffset="210"
                                            cx="50"
                                            cy="50"
                                            r="40"
                                        />
                                    </svg>
                                    Autentikasi akun...
                                </span>
                                <span>Log In</span>
                            </button>
                        </div>
                        <div class="pt-3">
                            <Link
                                :href="route('frontend.register')"
                                as="button"
                                class="bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full px-5 py-2.5 text-center"
                            >
                                Daftar Akun Baru
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
