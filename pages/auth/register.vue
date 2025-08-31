<template>

  <div class="min-h-screen lg:h-dvh lg:overflow-hidden flex">

    <section class="flex-1 lg:h-dvh lg:overflow-y-auto overflow-hidden no-scrollbar">
      <div  class="max-w-lg ml-auto w-full p-6 lg:p-16 text-right">
        <h2 class="text-2xl font-bold mb-2">إنشاء حساب جديد</h2>
        <p class="mb-6">
          لديك حساب بالفعل؟
          <NuxtLink class="text-yellow-400 hover:underline" to="/login">سجّل الدخول</NuxtLink>
        </p>
        <div class="flex items-center justify-center p-2">
       <img src="/assets/images/register.png" alt="">
      </div>

        <form class="space-y-4 rounded-md" @submit.prevent="onSubmit">

          <div>
            <label for="name" class="block mb-1 font-medium">الاسم</label>
            <input
              id="name"
              v-model="form.name"
              type="text"
              placeholder="ادخل الاسم"
              class="w-full rounded p-3 text-right border border-black bg-white"
              required
            />
          </div>

          <div>
            <label for="phone" class="block mb-1 font-medium">الجوال</label>
            <div class="flex border overflow-hidden rounded-md">
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                inputmode="tel"
                placeholder="ادخل رقم الجوال"
                class="flex-1 p-3 outline-none text-right border border-black bg-white"
                required
              />  
              <div class="flex items-center bg-white">
                <Dropdown
              v-model="selectedCountry"
              :options="countries"
              optionLabel="code"
              :itemTemplate="countryTemplate"
              dir="ltr"
              class="p-1 bg-transparent"
            />
              </div>    
            </div>
          </div>

          <div>
            <label for="city" class="block mb-1 font-medium">المدينة</label>
            <input
              id="city"
              v-model="form.city"
              type="text"
              placeholder="اختر المدينة"
              class="w-full border rounded p-3 outline-none text-right  border-black bg-white"
            />
          </div>

          <div>
            <label for="location" class="block mb-1 font-medium">الموقع</label>
            <input
              id="location"
              v-model="form.location"
              type="text"
              placeholder="السعودية - الرياض - حي العتيبي"
              class="w-full border rounded p-3 outline-none text-right border-black bg-transparent bg-white"
            />
          </div>

          <div>
            <label for="cr" class="block mb-1 font-medium">السجل التجاري</label>
            <input
              id="cr"
              v-model="form.commercialReg"
              type="text"
              placeholder="رقم السجل التجاري"
              class="w-full border rounded p-3 outline-none text-right border-black bg-white"
            />
          </div>

          <div>
            <label for="nid" class="block mb-1 font-medium">الهوية</label>
            <input
              id="nid"
              v-model="form.nationalId"
              type="text"
              placeholder="رقم الهوية"
              class="w-full border rounded p-3 outline-none text-right border-black bg-white"
            />
          </div>

          <div>
            <label for="email" class="block mb-1 font-medium">البريد الإلكتروني</label>
            <input
              id="email"
              v-model="form.email"
              type="email"
              placeholder="ادخل البريد الإلكتروني"
              class="w-full border rounded p-3 outline-none text-right border-black bg-white"
              autocomplete="email"
            />
          </div>

        <button
          @click="login"
          class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 px-6 rounded"
        >
          تسجيل الدخول
        </button>
        </form>
      </div>
    </section>
    <aside class="hidden lg:flex bg-[#f5e5c8] lg:w-[509px] relative items-center justify-center">

      <div class="sticky top-0 h-dvh w-full flex items-center justify-center">
      
        <img
          src="/assets/images/pngwing 1 (1).png"
          alt="صورة"
          class="translate-x-[44%] max-h-[55%] object-contain"
        />

        <div class=" absolute top-4 left-12 inline-flex p-2 rounded-md">
      <InputGroup>
            <Select v-model="selectedCity" :options="cities" optionLabel="label" placeholder="العربية" dir="rtl"
             class="bg-transparent text-white" />
        </InputGroup>
      </div>
      </div>
    </aside>

  </div>
</template>

<script setup >
import { reactive } from 'vue'
const selectedCity = ref();
const cities = ref([
  { name: 'ar', label: 'العربية'},
  { name: 'en', label: 'English'}
]);

const countries = [
  {code: '+966', flag: 'https://flagcdn.com/w40/sa.png'},
  {code: '+20', flag: 'https://flagcdn.com/w40/gb.png' }
]

definePageMeta({
  layout: "auth"
})

const form = reactive({
  phone: '',
  name: '',
  city: '',
  location: '',
  commercialReg: '',
  nationalId: '',
  email: '',
})

function onSubmit() {
  console.log('Form Submit =>', { ...form })
}
</script>
