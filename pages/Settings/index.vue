<template>
    <div class="m-6">
     <h2 class="p-2 mx-8 font-bold text-2xl">الإعدادات</h2>
     <div class="p-2 mx-8 mb-6">
       <NuxtLink to="/Settings">
          <button @click="opendialog1()" class="bg-[#F5BE1C] rounded-md p-3 ml-6">عرض بيانات الملف الشخصي</button>  
        </NuxtLink>
        <NuxtLink to="/Settings/edit-data">
          <button @click="opendialog2()" class="bg-white rounded-md p-3 ml-6">تعديل البيانات</button>  
        </NuxtLink>
        <NuxtLink to="/">
          <button @click="opendialog3()" class="bg-white rounded-md p-3 ">تغير رقم الجوال</button>  
        </NuxtLink>
     </div>
     <div class="bg-white mx-10">
        <div class="m-2 p-2">
            <img src="/assets/images/Ellipse 6.png" alt="" class=" object-contain w-[100px] h-[100px]">
        </div>
        <div class="grid grid-cols-2 m-2">
           <div class="p-2 m-2">
             <p class=" text-lg">الاسم</p>
            <span class="m-2 p-2 text-black/50">أحمد عطية</span>
           </div>
           <div class="p-2 m-2">
             <p class=" text-lg">الجول</p>
            <span class="m-2 p-2 text-black/50">123 456 789 966+</span>
           </div>
           <div class="p-2 m-2">
             <p class=" text-lg">المدينة</p>
            <span class="m-2 p-2 text-black/50">الرياض</span>
           </div>
           <div class="p-2 m-2">
             <p class=" text-lg">السجل التجاري</p>
            <span class="m-2 p-2 text-black/50">2894575</span>
           </div>
           <div class="p-2 m-2">
             <p class=" text-lg">الهوية</p>
            <span class="m-2 p-2 text-black/50">8786586956</span>
           </div>
           <div class="p-2 m-2">
             <p class=" text-lg">البريد الإلكتروني</p>
            <span class="m-2 p-2 text-black/50">info@mail.com</span>
           </div>
        </div>
     </div>
    </div>
</template>

<script setup>

import Dropdown from 'primevue/dropdown';

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

</script>