<template>
     <div class="m-6">
     <h2 class="p-2 mx-8 font-bold text-2xl">الإعدادات</h2>
     <div class="p-2 mx-8 mb-6">
       <NuxtLink to="/Settings">
          <button @click="opendialog1()" class="bg-white rounded-md p-3 ml-6">عرض بيانات الملف الشخصي</button>  
        </NuxtLink>
        <NuxtLink to="/Settings/edit-data">
          <button @click="opendialog2()" class="bg-[#F5BE1C] rounded-md p-3 ml-6">تعديل البيانات</button>  
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
             <p class="px-3 text-lg">الاسم</p>
            <input type="text" placeholder="ادخل السم" class="m-2 p-4 text-black/50 w-[440px] border border-black rounded-md bg-white">
           </div>
           <div class="p-2 m-2">
             <p class="px-3 text-lg">الجول</p>
            <input type="text" placeholder="123 456 789 966+" class="m-2 p-4 text-black/50 w-[440px] border border-black rounded-md bg-white">
           </div>
           <div class="p-2 m-2">
             <p class="px-3 text-lg">السجل التجاري</p>
            <input type="text" placeholder="رقم السجل التجاري" class="m-2 p-4 text-black/50 w-[440px] border border-black rounded-md bg-white">
           </div>
           <div class="p-2 m-2">
             <p class="px-3 text-lg">الهوية</p>
            <input type="text" placeholder="رقم الهوية" class="m-2 p-4 text-black/50 w-[440px] border border-black rounded-md bg-white">
           </div>
           <div class="p-2 m-2">
             <p class="px-3 text-lg">البريد الإلكتروني</p>
            <input type="text" placeholder="رقم البريد الإلكتروني" class="m-2 p-4 text-black/50 w-[440px] border border-black rounded-md bg-white">
           </div> 
        </div>
     </div>
    </div> 
</template>

<script setup>

</script>
