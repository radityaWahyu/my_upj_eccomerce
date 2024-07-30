<template>
    <div class="relative bg-nasplesyellow/10 h-full lg:flex lg:items-center">
        <div class="lg:w-3/5 lg:block hidden">
            <img
                src="@/Assets/images/login.png"
                alt=""
                srcset=""
                class="h-full object-cover"
            />
        </div>
        <div class="lg:w-2/5">
            <div class="px-4 mt-10">
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
                <div
                    class="p-4 mb-4 text-[12px] text-blue-800 rounded-lg bg-blue-50"
                    role="alert"
                >
                    <span class="font-semibold block">Informasi</span>
                    Silahkan mengisi data sesuai dengan pertanyaan yang ada di
                    form pendaftaraan dengan benar karena sistem akan meminta
                    verifikasi pendaftar.
                </div>
                <div>
                    <form class="max-w-md mx-auto space-y-3 mb-6">
                        <div>
                            <label
                                for="nama"
                                class="block mb-2 text-xs font-medium text-gray-900"
                            >
                                Nama
                            </label>
                            <input
                                type="text"
                                id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                placeholder="ex:radit"
                                required
                            />
                        </div>
                        <div>
                            <label
                                for="whatsapp"
                                class="block mb-2 text-xs font-medium text-gray-900"
                            >
                                Whatsapp
                            </label>
                            <input
                                type="text"
                                id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                placeholder="ex: 08534225423"
                                required
                            />
                        </div>
                        <div>
                            <label
                                for="handphone"
                                class="block mb-2 text-xs font-medium text-gray-900"
                            >
                                Handphone
                            </label>
                            <input
                                type="text"
                                id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                placeholder="ex: 08534225423"
                                required
                            />
                        </div>
                        <div>
                            <label
                                for="address"
                                class="block mb-2 text-xs font-medium text-gray-900"
                            >
                                Alamat
                            </label>
                            <textarea
                                id="name"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                placeholder="ex: alamat lengkap"
                                required
                            ></textarea>
                        </div>
                        <div>
                            <label
                                for="username"
                                class="block mb-2 text-xs font-medium text-gray-900"
                            >
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                placeholder="ex: username"
                                required
                            />
                        </div>
                        <div>
                            <label
                                for="username"
                                class="block mb-2 text-xs font-medium text-gray-900"
                            >
                                Password
                            </label>
                            <input
                                type="password"
                                id="username"
                                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
                                placeholder="ex: password"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>
