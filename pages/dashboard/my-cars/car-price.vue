<template>
    <div class="w-full h-screen p-4 ">
     <div class="font-bold pb-4 m-2">
      <span class="text-xl">
       سياراتي / <span class="text-black/50">إضافة سيارات </span>
    </span>
    </div>
    <div class="grid grid-cols-2 gap-x-8 gap-y-4 bg-white p-4 ml-16">
      <div>
        <label for="city" class="block mb-1 font-medium pb-2">رقم لوحة السيارة</label>
        <input
          type="text"
          v-model="carNumber"
          placeholder="رقم لوحة السيارة"
          class="w-full border rounded p-3 outline-none text-right  border-black bg-white"
        />
      </div>

      <div>
        <label for="city" class="block mb-1 font-medium pb-2">حجم السيارة</label>
        <input
          type="text"
          v-model="carSize"
          placeholder="حجم السيارة"
          class="w-full border rounded p-3 outline-none text-right  border-black bg-white"
        />
      </div>
      
        <div>
        <label for="city" class="block mb-1 font-medium pb-2">ماركة السيارة</label>
        <input
          type="text"
          v-model="carBrand"
          placeholder="ماركةالسيارة"
          class="w-full border rounded p-3 outline-none text-right  border-black bg-white"
        />
      </div>

        <div>
        <label for="city" class="block mb-1 font-medium pb-2">نوع السيارة</label>
        <input
          type="text"
          v-model="carKind"
          placeholder="نوع السيارة"
          class="w-full border rounded p-3 outline-none text-right  border-black bg-white"
        />
      </div>

          <div>
        <label for="city" class="block mb-1 font-medium pb-2">لون السيارة</label>
        <input
          type="text"
          v-model="carColor"
          placeholder="لون السيارة"
          class="w-full border rounded p-3 outline-none text-right  border-black bg-white"
        />
      </div>

          <div>
        <label for="city" class="block mb-1 font-medium pb-2">حمولة السيارة</label>
        <input
          type="text"
          v-model="carload"
          placeholder="حمولة السيارة"
          class="w-full border rounded p-3 outline-none text-right  border-black bg-white"
        />
      </div>

          <div>
        <label for="city" class="block mb-1 font-medium pb-2">موديل السيارة</label>
        <input
          type="text"
          v-model="carModel"
          placeholder="موديل السيارة"
          class="w-full border rounded p-3 outline-none text-right  border-black bg-white"
        />
      </div>

          <div>
        <label for="city" class="block mb-1 font-medium pb-2">فئةالسيارة</label>
        <input
          type="text"
          v-model="carClass"
          placeholder="فئةالسيارة"
          class="w-full border rounded p-3 outline-none text-right  border-black bg-white"
        />
      </div>

          <div>
        <label for="city" class="block mb-1 font-medium pb-2">طرازالسيارة</label>
        <input
          type="text"
          v-model="carClasic"
          placeholder="طرازالسيارة"
          class="w-full border rounded p-3 outline-none text-right  border-black bg-white"
        />
      </div>

          <div>
        <label for="city" class="block mb-1 font-medium pb-2">سنة الصنع</label>
        <input
          type="text"
          v-model="carَAge"
          placeholder="سنة الصنع"
          class="w-full border rounded p-3 outline-none text-right  border-black bg-white"
        />
      </div>

          <div>
        <label for="city" class="block mb-1 font-medium pb-2">الكيلومتر المجاني فى اليوم</label>
        <input
          type="text"
          v-model="kilometer"
          placeholder="تحديد عدد الكيلومتر المجاني فى اليوم"
          class="w-full border rounded p-3 outline-none text-right  border-black bg-white"
        />
      </div>

          <div>
        <label for="city" class="block mb-1 font-medium pb-2">نسبة الخصم</label>
        <input
          type="text"
          v-model="discount"
          placeholder="تحديد نسبة الخصم"
          class="w-full border rounded p-3 outline-none text-right  border-black bg-white"
        />
      </div>

          <div>
        <label for="city" class="block mb-1 font-medium pb-2">سعر الإيجار اليومي</label>
        <input
          type="text"
          v-model="dailyRent"
          placeholder="سعر إيجار السيارة اليومي"
          class="w-full border rounded p-3 outline-none text-right  border-black bg-white"
        />
      </div>

          <div>
        <label for="city" class="block mb-1 font-medium pb-2">سعر الإيجار الشهري</label>
        <input
          type="text"
          v-model="monthlyRent"
          placeholder="سعر إيجار السيارة الشهري"
          class="w-full border rounded p-3 outline-none text-right  border-black bg-white"
        />
      </div>

    <div>
      <label for="city" class="block mb-1 font-medium pb-2">سعر الإيجار السنوي</label>
      <input
        type="text"
        v-model="annaualRent"
        placeholder="سعر إيجار السيارة السنوي"
        class="w-[206%] border rounded p-3 outline-none text-right  border-black bg-white"
      />
    </div>
    <hr>
    <div>
      <label for="city" class="block mb-1 font-medium pb-2">وصف السيارة</label>
      <input
        type="text"
        v-model="annaualRent"
        placeholder="وصف السيارة"
        class="w-[206%] border rounded h-[100px] p-3 outline-none text-right  border-black bg-white"
      />
    </div>
    <hr> 
    <div>
      <label for="city" class="block mb-1 font-medium pb-2">سعر الكم الإضافي عن الحد اليومي</label>
      <input
        type="text"
        v-model="annaualRent"
        placeholder="سعر الكم الإضافي عن الحد اليومي"
        class="w-[206%] border rounded p-3 outline-none text-right  border-black bg-white"
      />
    </div>

  </div>
    <div class="w-[1125px] bg-white p-2">
    <div class=" font-bold text-xl py-4">
      <h2 class="p-3">السيارة محجوزة خارج اتطبيق</h2>
      <h2 class="p-3">صورة السيارة</h2>
    </div>
   
   
    <div class="w-[200px] h-[200px] flex flex-col items-center justify-center border border-black p-4 m-4">
      <img src="/assets/images/Vector.png" alt="">
      <span class="text-center">إرفاق صورة السيارة</span>
    </div>
      <div class="flex justify-center items-center p-4">
          <button id="loginBtn" @click="addedCar"
          class=" w-[300px] ml-32 p-3 rounded-md bg-yellow-500 hover:bg-yellow-600 text-black font-bold text-xl">إضافة السيارة 
          </button>
       </div>
    </div> 
    <Teleport to="body">
      <div
        v-show="showDialog"
        class="fixed inset-0 z-[60] grid place-items-center"
        role="alertdialog"
        aria-modal="true"
      >
        <div class="absolute inset-0 bg-black/40" @click="closeDialog"></div>

        <div class="relative z-10 w-[min(92%,420px)] rounded-2xl bg-white shadow-xl p-6 text-center">
          <!-- الدائرة الصفراء بعلامة الصح البيضاء -->
          <div class="mx-auto mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-1">تم إضافة السيارة بنجاح!</h3>
        </div>
      </div>
    </Teleport>
  </div>
 </template>

<script setup>
  import { ref } from 'vue';
  import ToggleSwitch from 'primevue/toggleswitch';

   const carNumber = ref("");
   const carSize = ref("");
   const carBrand = ref("");
   const carKind = ref("");
   const carColor = ref("");
   const carload = ref("");
   const carModel = ref("");
   const carClass = ref("");
   const carClasic = ref("");
   const carَAge = ref("");
   const kilometer = ref("");
   const discount = ref("");
   const dailyRent = ref("");
   const monthlyRent = ref("");
   const annaualRent = ref("");

   const checked = ref(false);

   const showDialog = ref(false);

  const addedCar = () => {
    showDialog.value = true;
    setTimeout(() => {
      showDialog.value = false;
    }, 3000);
  }
  
</script>
