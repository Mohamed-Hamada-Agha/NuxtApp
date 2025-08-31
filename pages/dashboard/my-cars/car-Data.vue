<template>
    <div class="w-full h-screen p-4 ">
     <div class="font-bold pb-4 m-2">
      <span class="text-xl">
       سياراتي / <span class="text-black/50">بيانات السيارة</span>
    </span>
    </div>
    <div class="grid grid-cols-2 gap-x-8 gap-y-4 bg-white p-4 ml-16">
      <div>
        <label for="city" class="block mb-1 font-bold pb-2">رقم لوحة السيارة</label>
        <p class="pb-2">345768</p>
      </div>

      <div>
        <label for="city" class="block mb-1 font-bold pb-2">حجم السيارة</label>
        <p class="pb-2">صغيرة</p>
      </div>
      
        <div>
        <label for="city" class="block mb-1 font-bold pb-2">ماركة السيارة</label>
        <p class="pb-2">هوندا</p>
      </div>

        <div>
        <label for="city" class="block mb-1 font-bold pb-2">فئة السيارة</label>
        <p class="pb-2">فارهه</p>
      </div>

          <div>
        <label for="city" class="block mb-1 font-bold pb-2">موديل السيارة</label>
        <p class="pb-2">مديل</p>
      </div>

          <div>
        <label for="city" class="block mb-1 font-bold pb-2">لون السيارة</label>
        <p class="pb-2">أحمر</p>
      </div>

          <div>
        <label for="city" class="block mb-1 font-bold pb-2">نوع السيارة</label>
        <p class="pb-2">نوع</p>
      </div>

          <div>
        <label for="city" class="block mb-1 font-bold pb-2">سنة التصنيع</label>
        <p class="pb-2">2024</p>
      </div>

          <div>
        <label for="city" class="block mb-1 font-bold pb-2">طرازالسيارة</label>
        <p class="pb-2">طراز السيارة</p>
      </div>

      <div>
        <label for="city" class="block mb-1 font-bold pb-2">الكيلومتر المجاني فى اليوم</label>
        <p class="pb-2">10</p>
      </div>

          <div>
        <label for="city" class="block mb-1 font-bold pb-2">حمولة السيارة</label>
        <p class="pb-2">4</p>
      </div>

          <div>
        <label for="city" class="block mb-1 font-bold pb-2">نسبة الخصم</label>
        <p class="pb-2">25%</p>
      </div>

          <div>
        <label for="city" class="block mb-1 font-bold pb-2">سعر الإيجار اليومي</label>
        <p class="pb-2">100 ر.س</p>
      </div>

    <div>
      <label for="city" class="block mb-1 font-bold pb-2">سعر الإيجار الشهري</label>
      <p class="pb-2">3000 ر.س</p>
    </div>

    <div>
      <label for="city" class="block mb-1 font-bold pb-2">سعر الإيجار السنوي</label>
      <p class="pb-2">30000 ر.س</p>
    </div>
    <hr>
    <div>
      <label for="city" class=" block mb-1 font-bold pb-2">وصف السيارة</label>
      <p class="w-[206%] pb-2 text-lg">هنا نص ممكن ان يستبدل هنا نص ممكن ان يستبدلهنا نص ممكن ان يستبدل
        هنا نص ممكن ان يستبدلهنا نص ممكن ان يستبدلهنا نص ممكن ان يستبدلهنا نص ممكن ان يستبدلهنا نص ممكن ان يستبدل
      </p>
    </div>
    <hr>
    <div>
      <label for="city" class=" block mb-1 font-bold pb-2">سعر الكم الإضافي عن الحد اليومي</label>
      <p class="w-[206%] pb-2 text-lg">20 ر.س</p>
    </div>
    <hr>
    <div class="">
      <h2 class="font-bold">صور السيارة</h2>
      <div class=" p-4">
        <img src="/assets/images/car-images.png" alt="">
      </div>
    </div>

    <div class="">
      <h2 class="font-bold p-2">تقيمات السيارة</h2>
      <button @click="click" class="bg-yellow-400 w-[150px] h-14 hover:bg-yellow-500 text-lg font-medium rounded-lg">التقيمات</button>
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

   const showDialog = ref(false);

  const addedCar = () => {
    showDialog.value = true;
    setTimeout(() => {
      showDialog.value = false;
    }, 3000);
  }
  
</script>
