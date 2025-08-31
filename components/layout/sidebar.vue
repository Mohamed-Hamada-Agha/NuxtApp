<template>
  <aside  class="w-[280px] h-full bg-[#fffefb] fixed right-0 top-0 flex flex-col items-center justify-center p-4">

  <div class=" rounded-lg object-content m-6">
    <img src="/assets/images/group.png" alt="logo"  />
   </div>
  <div class="w-full h-[calc(100vh-100px)] p-2 m-2 flex flex-col overflow-auto ">
  <NuxtLink to="/" class="flex items-center gap-3 w-full p-2 rounded-lg" active-class="!bg-[#F5BE1C]">
      <div class="w-10 h-10 grid place-items-center rounded-md bg-white">
        <img 
          src="/assets/images/nav1.png" 
          alt="الرئيسية"
          class="w-6 h-6 object-contain"
        />
      </div>
      <span class="text-base font-medium text-gray-800">الرئيسية</span>
  </NuxtLink>

  <NuxtLink to="/dashboard/my-cars" class="flex items-center gap-3 w-full p-2 rounded-lg" active-class="!bg-[#F5BE1C]">
      <div class="w-10 h-10 grid place-items-center rounded-md bg-yellow-100">
        <img 
          src="/assets/images/nav2.png" 
          alt="سياراتي"
          class="w-6 h-6 object-contain"
        />
      </div>
      <span class="text-base font-medium text-gray-800">سياراتي</span>
  </NuxtLink>

  <NuxtLink to="/orders" class="flex items-center gap-3 w-full p-2 rounded-lg" active-class="!bg-[#F5BE1C]">
      <div class="w-10 h-10 grid place-items-center rounded-md bg-yellow-100">
        <img 
          src="/assets/images/nav3.png" 
          alt="سياراتي"
          class="w-6 h-6 object-contain "
        />
      </div>
      <span class="text-base font-medium text-gray-800">الطلبات</span>
  </NuxtLink>
  <NuxtLink to="/colection" class="flex items-center gap-3 w-full p-2 rounded-lg" active-class="!bg-[#F5BE1C]">
      <div class="w-10 h-10 grid place-items-center rounded-md bg-yellow-100">
        <img 
          src="/assets/images/nav4.png  " 
          alt="الطلبات"
          class="w-6 h-6 object-contain"
        />
      </div>
      <span class="text-base font-medium text-gray-800">الباقات</span>
  </NuxtLink>
  <NuxtLink to="/dashboard/my-cars/car-Rating" class="flex items-center gap-3 w-full p-2 rounded-lg" active-class="!bg-[#F5BE1C]">
      <div class="w-10 h-10 grid place-items-center rounded-md bg-yellow-100">
        <img 
          src="/assets/images/nav5.png" 
          alt="الباقات"
          class="w-6 h-6 object-contain"
        />
      </div>
      <span class="text-base font-medium text-gray-800">التقيمات</span>
  </NuxtLink>
  <NuxtLink to="/chash-money" class="flex items-center gap-3 w-full p-2 rounded-lg" active-class="!bg-[#F5BE1C]">
      <div class="w-10 h-10 grid place-items-center rounded-md bg-yellow-100">
        <img 
          src="/assets/images/nav6.png" 
          alt="التقيمات"
          class="w-6 h-6 object-contain"
        />
      </div>
      <span class="text-base font-medium text-gray-800">المعاملات المالية</span>
  </NuxtLink>
  <NuxtLink to="/users" class="flex items-center gap-3 w-full p-2 rounded-lg" active-class="!bg-[#F5BE1C]">
      <div class="w-10 h-10 grid place-items-center rounded-md bg-yellow-100">
        <img 
          src="/assets/images/nav7.png" 
          alt="المعاملات المالية"
          class="w-6 h-6 object-contain"
        />
      </div>
      <span class="text-base font-medium text-gray-800">المستخدمين</span>
  </NuxtLink>
  <NuxtLink to="/aboutUs" class="flex items-center gap-3 w-full p-2 rounded-lg" active-class="!bg-[#F5BE1C]">
      <div class="w-10 h-10 grid place-items-center rounded-md bg-yellow-100">
        <img 
          src="/assets/images/nav8.png" 
          alt="المستخدمين "
          class="w-6 h-6 object-contain"
        />
      </div>
      <span class="text-base font-medium text-gray-800">عن التطبيق </span>
  </NuxtLink>
  <NuxtLink to="/asked" class="flex items-center gap-3 w-full p-2 rounded-lg" active-class="!bg-[#F5BE1C]">
      <div class="w-10 h-10 grid place-items-center rounded-md bg-yellow-100">
        <img 
          src="/assets/images/nav9.png" 
          alt=" عن التطبيق"
          class="w-6 h-6 object-contain"
        />
      </div>
      <span class="text-base font-medium text-gray-800">أسئلة متكررة </span>
  </NuxtLink>
  <NuxtLink to="/terms-Conditions" class="flex items-center gap-3 w-full p-2 rounded-lg" active-class="!bg-[#F5BE1C]">
      <div class="w-10 h-10 grid place-items-center rounded-md bg-yellow-100">
        <img 
          src="/assets/images/nav10.png" 
          alt="أسئلة متكررة "
          class="w-6 h-6 object-contain"
        />
      </div>
      <span class="text-base font-medium text-gray-800">الشروط والاحكام </span>
  </NuxtLink>
  <NuxtLink to="/contactUs" class="flex items-center gap-3 w-full p-2 rounded-lg" active-class="!bg-[#F5BE1C]">
      <div class="w-10 h-10 grid place-items-center rounded-md bg-yellow-100">
        <img 
          src="/assets/images/nav11.png" 
          alt="الشروط والاحكام"
          class="w-6 h-6 object-contain"
        />
      </div>
      <span class="text-base font-medium text-gray-800">تواصل معنا</span>
  </NuxtLink>
  <NuxtLink to="/settings" class="flex items-center gap-3 w-full p-2 rounded-lg" active-class="!bg-[#F5BE1C]">
      <div class="w-10 h-10 grid place-items-center rounded-md bg-yellow-100">
        <img 
          src="/assets/images/nav12.png" 
          alt=" الاعدادت"
          class="w-6 h-6 object-contain"
        />
      </div>
      <span class="text-base font-medium text-gray-800">الاعدادات</span>
  </NuxtLink>
  
  <NuxtLink to="/auth/login" class="flex items-center gap-3 w-full p-2 rounded-lg">
      <div class="w-10 h-10 grid place-items-center rounded-md bg-rose-200">
        <img 
          src="/assets/images/nav13.png" 
          alt="تسجيل الدخول "
          class="w-6 h-6 object-contain"
        />
      </div>
      <span class="text-base font-medium text-gray-800">تسجيل الدخول</span>
  </NuxtLink>
   </div> 
  </aside>
</template>

<script setup>

</script>

