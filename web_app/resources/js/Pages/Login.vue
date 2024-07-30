<template>
    <div
        class="relative h-full bg-nasplesyellow/10 flex items-center lg:items-start justify-center lg:justify-normal"
    >
        <div class="lg:w-3/5 lg:block hidden max-h-screen">
            <img
                src="@/Assets/images/login.png"
                alt=""
                srcset=""
                class="h-full"
            />
        </div>
        <div class="px-4 lg:w-2/5">
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
                    <p class="text-[10px] font-normal text-tomato mt-[-5px]">
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
                <form class="max-w-md mx-auto space-y-3 mb-6">
                    <div>
                        <label
                            for="username"
                            class="block mb-2 text-xs font-medium text-gray-900"
                        >
                            Username <span class="text-red-400">*</span>
                        </label>
                        <input
                            type="text"
                            id="username"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                            placeholder="masukkan username"
                            required
                        />
                    </div>
                    <div>
                        <label
                            for="password"
                            class="block mb-2 text-xs font-medium text-gray-900"
                        >
                            Password <span class="text-red-400">*</span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                            placeholder="masukkan password"
                            required
                        />
                    </div>

                    <div class="divide-y divide-gray-300 space-y-3">
                        <div>
                            <button
                                type="submit"
                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full px-5 py-2.5 text-center"
                            >
                                Login
                            </button>
                        </div>
                        <div class="pt-3">
                            <button
                                type="submit"
                                class="bg-gray-200 hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded text-sm w-full px-5 py-2.5 text-center"
                            >
                                Daftar Akun Baru
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
