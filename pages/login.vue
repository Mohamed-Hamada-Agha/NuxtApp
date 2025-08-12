<template>
  <div class="flex h-screen">
    <!-- الجزء البيج -->
    <div class="bg-[#f5e5c8] w-[509px] relative flex items-center justify-center">
      <!-- الصورة -->
      <img 
        src="/assets/images/pngwing 1 (1).png" 
        alt="صورة" 
        class="translate-x-[40%] max-h-[80%] object-contain"
      />
      <!-- اللغة -->
      <div class="absolute top-[35px] left-20 flex items-center gap-1 text-lg font-bold">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2"
            viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"/>
        </svg> 
        <span>العربية</span>
      </div>
    </div>

    <!-- الجزء الخاص بالفورم -->
    <div class="flex flex-1 items-center justify-center p-8">
      <div class="w-full max-w-md text-right">
        <h2 class="text-2xl font-bold mb-4">تسجيل الدخول</h2>
        <p class="mb-4">
          ليس لديك حساب؟
          <NuxtLink class="text-yellow-500 underline">إنشاء حساب</NuxtLink>
        </p>

        <!-- مدخل رقم الجوال -->
        <div class="mb-4">
          <label class="block mb-1 font-medium">الجوال</label>
          <div class="flex border rounded overflow-hidden">
            <div class="flex items-center space-x-2 p-4 border rounded-md">
            <span class="fi fi-sa"></span>
            <span>+966</span>
         </div>  
            <!-- حقل الإدخال -->
            <input 
              v-model="phone"
              type="text"
              placeholder="ادخل رقم الجوال"
              class="flex-1 p-2 outline-none text-right"
            />
          </div>
        </div>

        <!-- زر تسجيل الدخول -->
        <button
          @click="login"
          class="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-2 px-6 rounded"
        >
          تسجيل الدخول
        </button>
      </div>
    </div>
  </div>
</template>


<script setup>
import { ref } from "vue";
const phone = ref("");
const login = () => {
  console.log("Logging in with phone:", phone.value);
};
</script>

<style>
.bg-beige {
  background-color: #f5f5dc; /* لون بيج */
}
</style>
