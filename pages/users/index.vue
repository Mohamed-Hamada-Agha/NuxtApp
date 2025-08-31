<template>
    <div class="w-full p-8">
     <div class="flex justify-between pt-4 mr-8">
        <h2 class="text-xl font-bold">المستخدمين</h2>
        <NuxtLink to="/users/add-user">
          <button class="w-[150px] bg-yellow-400 rounded-md p-3 ml-8">إضافة مستخدم</button>
        </NuxtLink>
     </div>
    <div class="bg-white rounded-md text-lg m-8">
    <table class="w-full p-4 text-center">
      <thead>
        <tr>
          <th class="p-3 font-bold">اسم المستخدم</th>
          <th class="p-3 font-bold">الصلاحيات</th>
        </tr>
      </thead>
      <tbody >
          <tr v-for="item in users" :key="item.users">
            <td> {{ item.name }} </td>
            <td> {{ item.powers }} </td>
            <td class="flex items-center justify-end gap-2 p-2 pl-8 ">
             <img 
              :src="item.Image" 
              :alt="item.name || 'صورة السيارة'">
             <img 
              :src="item.img" 
              :alt="item.name || 'صورة السيارة'">
            </td>
          </tr>
      </tbody>
    </table>
  </div>
  <div class="flex justify-end mx-8">
      <img src="/assets/images/pagination.png" alt="pagination">
    </div>
  </div>
</template>

<script setup>
import CarImage1 from '~/assets/images/add.png';
import CarImage2 from '~/assets/images/del.png';
 const users = ref([
  {
    name : "أحمد عطية",
    powers : "( سياراتي-طلباتي -الباقات )",
    Image: CarImage1,  
    img: CarImage2,  
  },
  {
    name : "محمد رمضان",
    powers : "( سياراتي -الباقات )",
    Image: CarImage1,  
    img: CarImage2,  
  },
  {
    name : "على محمد",
    powers : "( سياراتي -طلباتي -الباقات -المعاملات المالية )",
    Image: CarImage1,  
    img: CarImage2,  
  },
  {
    name : "محمود أنور",
    powers : "( سياراتي )",
    Image: CarImage1,  
    img: CarImage2,  
  },
  {
    name : "عبد الله راشد",
    powers : "( طلباتي -الباقات )",
    Image: CarImage1,  
    img: CarImage2,  
  },
  {
    name : "مروان على",
    powers : "( طلباتي ) ",
    Image: CarImage1,  
    img: CarImage2,  
  },
]);
</script>
