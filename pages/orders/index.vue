<template>
  <div class="w-full px-20">
      <div class="flex items-center justify-start gap-4 m-6 ">
        <NuxtLink to="/orders">
          <button @click="openDialog1()" class="bg-yellow-400 font-bold text-lg -400 w-32 p-3 rounded-md" active-class="!bg-[#F5BE1C]">مجدولة</button> 
        </NuxtLink>
        <NuxtLink to="/orders/imediatly">
          <button @click="openDialog2()" class="bg-yellow-400 font-bold text-lg -400 w-32 p-3 rounded-md">حالية</button> 
        </NuxtLink>
        <NuxtLink to="/orders/fineshed">
          <button @click="openDialog3()" class="bg-yellow-400 font-bold text-lg -400 w-32 p-3 rounded-md">منتهية</button> 
        </NuxtLink>
      </div>
    <div class="bg-white rounded-md">
    <table class="w-full  p-4  text-center">
      <thead>
        <tr>
          <th class="p-3 font-bold">رقم الطلب</th>
          <th class="p-3 font-bold">اسم العميل</th>
          <th class="p-3 font-bold">اسم السيارة</th>
          <th class="p-3 font-bold">تاريخ الطلب</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="item in cars" :key="item.cars">
            <td class="flex items-center justify-center gap-2 p-4"> {{ item.num }} </td>
            <td> {{ item.name }} </td>
            <td> {{ item.model }} </td>
            <td> {{ item.date }} </td>
          </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>

<script setup>
 const showDialog1 = ref(false);
  const showDialog2 = ref(false);
  const showDialog3 = ref(false);

  const openDialog1 = () => {
   showDialog1.value = true    
}

const openDialog2 = () => {
    showDialog2.value = true    
}

const openDialog3 = () => {
    showDialog3.value = true    
}
 
const cars = ref([
  {
    num : '1488',
    name : "أحمد عطية",
    model : "هوندا سيفيك 2020",
    date : "1/9/2024",
  },
  {
    num : '1487',
    name : "محمد رمضان",
    model : "تيوتا فورتنر 2024",
    date : "26/12/2018",
  },
  {
    num : '1486',
    name : "أشرف على",
    model : "فورد تيريتوري 2024",
    date : "15/11/2021",
  },
  {
    num : '1485',
    name : "زياد ياسر",
    model : "سبورتاج 2024",
    date : "21/8/2025",
  },
  {
    num : '1484',
    name : "خالد محمد",
    model : "فولكس جولف 2022",
    date : "26/12/2024",
  },
  {
    num : '1483',
    name : "ساجي أحمد",
    model : "موستنج 2023",
    date : "5/11/2021",
  },
  {
    num : '1482',
    name : "ياسر أبراهيم",
    model : "فورد تورس 2021",
    date : "18/9/2019",
  },
  {
    num : '1481',
    name : "مروان سري",
    model : "فورد تيريتوري 2024",
    date : "18/5/2016",
  },
]);  

</script>
