<template>
  <div class="">
      <div class="flex items-center justify-end gap-2 m-6 pl-12">
        <button @click="openDialog()" class="bg-yellow-400 p-3 rounded-md">
          سعر توصيل السيارة
        </button> 
        <button @click="openDialog2()" class="bg-yellow-400 p-3  rounded-md">
          سعر إضافة سائق
        </button>
        <NuxtLink to="/dashboard/my-cars/car-price"> 
          <button class="bg-yellow-400 p-2 font-bold text-2xl h-12 rounded-md w-12">+</button>
        </NuxtLink>
      
      </div>
      <div class="bg-white rounded-md m-4 p-4 ">
    <table class="w-full m-4 p-4  text-center">
      <thead>
        <tr>
          <th class="p-3 font-bold">صورة السيارة</th>
          <th class="p-3 font-bold">طراز السيارة</th>
          <th class="p-3 font-bold"> رقم اللوحة</th>
          <th class="p-3 font-bold"> سعر إيجار السيارة اليومي </th>
        </tr>
      </thead>
      <tbody >
          <tr v-for="item in cars" :key="item.cars">
            <td class="flex items-center justify-center gap-2 p-3">
            <img 
              :src="item.Image" 
              :alt="item.name || 'صورة السيارة'">
            </td>
            <td> {{ item.model }} </td>
            <td> {{ item.num }} </td>
            <td> {{ item.cost }} </td>
          </tr>
      </tbody>
    </table>
  </div>
  <teleport to="body">
        <div
          v-show="showDialog"
          class="fixed inset-0 z-[60] grid place-items-center"
          role="alertdialog"
          aria-modal="true"
        >
        <div class="absolute inset-0 bg-black/40" ></div>
        
          <div class="relative z-10 w-[min(92%,420px)] rounded-2xl bg-white shadow-xl p-6 text-center">
          <h2 class=" font-bold text-xl  mb-4">سعر الكيلومتر لتوصيل السيارة للعميل</h2>
          <div class="w-full h-px bg-gray-300 mb-6 flex items-center justify-center gap-2"></div>

            <h3 class="text-xl font-bold flex justify-start m-4">سعر الكيلومتر</h3>
            <input
              id="price-input"
              type="number"
              v-model="pricePerKm"
              placeholder="الرجاء إدخال السعر"
              class="rounded-md p-4 w-full border border-black/50 text-end bg-white"
            />
            <button
              @click="navigateTo('/')"
              class="w-[120px] p-2 m-4 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-bold">حفظ 
            </button>
          </div>
        </div>
      </teleport>
      <teleport to="body">
            <div
              v-show="showDialog2"
              class="fixed inset-0 z-[60] grid place-items-center"
              role="alertdialog"
              aria-modal="true"
            >
            <div class="absolute inset-0 bg-black/40"></div>
            
              <div class="relative z-10 w-[min(92%,420px)] rounded-2xl bg-white shadow-xl p-6 text-center">
              <h2 class=" font-bold text-xl  mb-4">سعر إضاقة السائق</h2>
              <div class="w-full h-px bg-gray-300 mb-6 flex items-center justify-center gap-2"></div>

                <h3 class="text-xl font-bold flex justify-start m-4">اليوم</h3>
                <input
                  id="price-input"
                  type="number"
                  v-model="pricePerKm"
                  placeholder="اليوم"
                  class="rounded-md p-4 w-full border border-black/50 text-end bg-white"
                />
                <h3 class="text-xl font-bold flex justify-start m-4">الشهر</h3>
                <input
                  id="price-input"
                  type="number"
                  v-model="pricePerKm"
                  placeholder="الشهر"
                  class="rounded-md p-4 w-full border border-black/50 text-end bg-white"
                />
                <h3 class="text-xl font-bold flex justify-start m-4">السنة</h3>
                <input
                  id="price-input"
                  type="number"
                  v-model="pricePerKm"
                  placeholder="السنة"
                  class="rounded-md p-4 w-full border border-black/50 text-end bg-white"
                />
                <button
                  @click="navigateTo('/')"
                  class="w-[120px] p-2 m-4 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-bold">إضافة 
                </button>
              </div>
            </div>
          </teleport>    
  </div>
</template>

<script setup>
import CarImage from '~/assets/images/car.png';


const cars = ref([
  {
    Image : CarImage,
    model : "E200",
    num : "24879",
    cost : "100 ر.س",
  },
  {
    Image : CarImage,
    model : "E200",
    num : "24879",
    cost : "100 ر.س",
  },
  {
    Image : CarImage,
    model : "E200",
    num : "24879",
    cost : "100 ر.س",
  },
  {
    Image : CarImage,
    model : "E200",
    num : "24879",
    cost : "100 ر.س",
  },
  {
    Image : CarImage,
    model : "E200",
    num : "24879",
    cost : "100 ر.س",
  },
]); 
const showDialog = ref(false);
const showDialog2 = ref(false);
const save = ref('');    


const openDialog = () => {
    showDialog.value = true
    
}

const openDialog2 = () => {
    showDialog2.value = true
    
}
 
</script>
