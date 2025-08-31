<template>
    <div class="">
     <h2 class="p-2 m-2 font-bold text-2xl">المعاملات المالية</h2>
     <div class="p-2">
       <NuxtLink to="/chash-money">
          <button @click="opendialog1()" class="bg-[#F5BE1C] w-[120px] rounded-md p-3 m-2">المستحقة</button>  
        </NuxtLink>
        <NuxtLink to="/chash-money/currant">
          <button @click="opendialog2()" class="bg-white w-[120px] rounded-md p-3 m-2">تسوية حالية</button>  
        </NuxtLink>
        <NuxtLink to="/chash-money/fineshed">
          <button @click="opendialog3()" class="bg-white w-[120px] rounded-md p-3 m-2">تسوية منتهية</button>  
        </NuxtLink>
     </div>
     <div class="w-[50%] bg-white p-2 m-2 rounded-md">
        <h2 class="p-2 text-lg">القيم الإجمالي</h2>
        <hr>
        <div class=" grid grid-cols-2 gap-4 py-4">
        <div class="p-2"> 
            <p class="text-black/60">إجمالي الطلبات</p>
            <span class=" text-lg">2000.00 ر.س</span>
        </div>
        <div class="p-2"> 
            <p class="text-black/60">إجمالي عمولة التطيبق</p>
            <span class=" text-lg">2000.00 ر.س</span>
        </div>
        <div class="p-2"> 
            <p class="text-black/60">إجمالي القيمة المضافة</p>
            <span class=" text-lg">2000.00 ر.س</span>
        </div>
        <div class="p-2"> 
            <p class="text-black/60">ربح مقدم الخدمة</p>
            <span class=" text-lg">2000.00 ر.س</span>
        </div>
      </div>
     </div>
     
    <div class="grid grid-cols-2 gap-1 w-[96%]">
         <div class=" bg-white p-2 m-2 rounded-md">
        <div class="flex justify-between items-center h-[50px]">
            <span class=" font-bold">12549</span>
            <div class="flex justify-end items-center text-black/50">
                <img src="/assets//images/watch.png" class=" object-contain" alt="">
                <span>منذ 5 دقائق</span>
            </div>
        </div>
        <hr>
        <div class="flex justify-between">
             <div class="p-2"> 
            <p class=" text-black/60">قيمة الطلب</p>
            <span class="text-lg">2000.00 ر.س</span>
        </div>
        <div class="text-lg p-2"> 
            <p class="text-black/60 ">العمولة</p>
            <span class="">2000.00 ر.س</span>
        </div>
         <div class="p-2"> 
            <p class="text-black/60">القيمة المضافة</p>
            <span class="text-lg">2000.00 ر.س</span>
        </div>
        </div>
        <hr>
        <div class="p-2"> 
            <p class="text-black/60">ربح مقدم الخدمة</p>
            <span class="text-lg">2000.00 ر.س</span>
        </div>
     </div>
         <div class=" bg-white p-2 m-2 rounded-md">
        <div class="flex justify-between items-center h-[50px]">
            <span class=" font-bold">12549</span>
            <div class="flex justify-end items-center text-black/50">
                <img src="/assets//images/watch.png" class=" object-contain" alt="">
                <span>منذ 5 دقائق</span>
            </div>
        </div>
        <hr>
        <div class="flex justify-between">
             <div class="p-2"> 
            <p class=" text-black/60">قيمة الطلب</p>
            <span class="text-lg">2000.00 ر.س</span>
        </div>
        <div class="text-lg p-2"> 
            <p class="text-black/60 ">العمولة</p>
            <span class="">2000.00 ر.س</span>
        </div>
         <div class="p-2"> 
            <p class="text-black/60">القيمة المضافة</p>
            <span class="text-lg">2000.00 ر.س</span>
        </div>
        </div>
        <hr>
        <div class="p-2"> 
            <p class="text-black/60">ربح مقدم الخدمة</p>
            <span class="text-lg">2000.00 ر.س</span>
        </div>
     </div>
    </div>
    <div class="flex justify-center items-center p-2 pl-16 m-4">
        <button class="bg-[#F5BE1C] w-[200px] h-[50px] rounded-md text-xl font-bold">تسوية</button>
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
]);
</script>
