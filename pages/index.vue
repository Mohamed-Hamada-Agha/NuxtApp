<!-- /pages/index.vue -->
<template>
  <div dir="rtl" class="m-4 p-4 ">
    
      <h2 class="text-3xl font-bold mb-4">الرئيسية</h2>

    <div class="grid grid-cols-4 gap-1 ">

     <div class="bg-yellow-200 opacity-75 w-[222px] h-[135px] rounded-xl p-4"> 
      <div class="flex items-center gap-3">  

       <div class="flex justify-center items-center w-[47px] h-[47px] bg-yellow-400 rounded-md">
         <img 
        src="/assets/images/Group1.png" />
       </div>
        <span class="flex font-bold text-3xl">172</span>

      </div>
      <p class="font-bold text-xl">الطلبات  المجدولة</p>
     </div>  

      <div class="bg-blue-200 w-100 opacity-75 w-[222px] h-[135px] rounded-xl p-4"> 
      <div class="flex items-center gap-3">  

       <div class="flex justify-center items-center w-[47px] h-[47px] bg-blue-400 rounded-md">
         <img 
        src="/assets/images/Group2.png" />
       </div>
        <span class="flex font-bold text-3xl">172</span>
  
      </div>
      <p class="font-bold text-xl">الطلبات الحالية</p>
     </div>  

     <div class="bg-green-200 w-100 opacity-75 w-[222px] h-[135px] rounded-xl p-4"> 
      <div class="flex items-center gap-3">  

       <div class="flex justify-center items-center w-[47px] h-[47px] bg-green-400 rounded-md">
         <img 
        src="/assets/images/Group3.png" />
       </div>
        <span class="flex font-bold text-3xl">172</span>
  
      </div>
      <p class="font-bold text-xl">الطلبات المنتهية</p>
     </div> 

      <div class="bg-rose-200 w-100 opacity-75 w-[222px] h-[135px]  rounded-xl p-4"> 
      <div class="flex items-center gap-3">  

       <div class="flex justify-center items-center w-[47px] h-[47px] bg-rose-400 rounded-md">
         <img 
        src="/assets/images/Group4.png" />
       </div>
        <span class="flex font-bold text-3xl">172</span>
  
      </div>
      <p class="font-bold text-xl">الطلبات الملغية</p>
     </div> 
  </div>
 <h2 class="text-2xl font-bold m-4 pt-4">الطلبات الحالية</h2>
 <!--  الجدول -->
<div class=" bg-white rounded-md w-[1105px] m-4 p-4">
   <table class="w-full m-4 p-4  text-center">
    <thead>
      <tr>
        <th class="p-3 font-bold">رقم الطلب</th>
        <th class="p-3 font-bold">اسم العميل</th>
        <th class="p-3 font-bold">اسم السيارة</th>
        <th class="p-3 font-bold">تاريخ الطلب </th>
      </tr>
    </thead>
    <tbody>
        <tr v-for="item in cars" :key="item.id">
          <td class="flex items-center justify-center gap-2 p-3"> {{ item.num }} </td>
          <td> {{ item.name }} </td>
          <td> {{ item.car }} </td>
          <td> {{ item.date }} </td>
        </tr>
    </tbody>
   </table>
</div>

</div>
</template>

<script setup>
// import { navigateTo } from '#app'
// navigateTo('/auth/login')

const cars = ref([
  {
    id : '1',
    num : "3213",
    name : "Ahmed mohamed",
    car : "Honda",
    date : "17/4/2025"
  },
  {
    id : '2',
    num : "76792",
    name : "Ali Mousa",
    car : "BMW",
    date : "23/6/2024"
  },
  {
    id : '3',
    num : "9087",
    name : "wael Mohamed",
    car : "Boursh",
    date : "5/2/2021"
  },
  {
    id : '4',
    num : "5678",
    name : "Omer Ali",
    car : "Toyota",
    date : "15/11/2020"
  },
]); 
</script>

