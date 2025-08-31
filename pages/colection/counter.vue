<template>
  <div class="">
   <h2 class=" font-bold py-2 text-2xl">الباقات</h2>
   <div class=" bg-green-300 opacity-4 h-[100px] w-[665px] p-2 my-4 rounded-lg font-bold">
    <h3 class="pb-4">اسم الباقة</h3>
    <div class="flex justify-between text-black/50 pt-2">
        <div class="flex">
            <img src="/assets/images/r-car.png" alt="" class="pl-2 object-contain">
        <span>عدد السيارات المتبقية: <span class=" font-bold text-black">14</span></span>
        </div>
        <span>عدد الايام المتبقية: <span class=" font-bold text-black">24 يوم</span></span>
    </div>
   </div>
    <div class="grid grid-cols-3 gap-2 p-2"> 
     <div class="bg-white w-[330px] h-[210px] rounded-xl p-3 text-md"> 
      <div class="flex justify-between">  
        <span>اسم الباقة</span>
        <span>250 ر.س</span>
      </div>  
       <div class="flex justify-between py-8">
        <div class="flex pb-4">
        <img 
        src="/assets/images/r-car.png" class="pl-2 text-black/50 object-contain"/>
        <spapn class=" text-black/50">عدد السيارات:<span class="text-black"> 25</span></spapn>
        </div>
        <span class="">30 يوم</span>
       </div>
      <button @click="openDialog()" class=" bg-[#FBE5A4] w-full rounded-md p-3 text-lg text-center">اشتراك</button>
     </div>  
    
     <div class="bg-white w-[330px] h-[210px] rounded-xl p-3 text-md"> 
      <div class="flex justify-between ">  
        <span>اسم الباقة</span>
        <span>120 ر.س</span>
      </div>  
       <div class="flex justify-between py-8">
        <div class="flex pb-4">
        <img 
        src="/assets/images/r-car.png" class="pl-2 text-black/50 object-contain"/>
        <spapn class=" text-black/50">عدد السيارات:<span class="text-black"> 15</span></spapn>
        </div>
        <span class="">21 يوم</span>
       </div>
      <button @click="openDialog()" class=" bg-[#FBE5A4] w-full rounded-md p-3 text-lg text-center">اشتراك</button>
     </div> 
     
     <div class="bg-white w-[330px] h-[210px] rounded-xl p-3 text-md"> 
      <div class="flex justify-between ">  
        <span>اسم الباقة</span>
        <span>135 ر.س</span>
      </div>  
       <div class="flex justify-between py-8">
        <div class="flex pb-4">
        <img 
        src="/assets/images/r-car.png" class="pl-2 text-black/50 object-contain"/>
        <spapn class=" text-black/50">عدد السيارات:<span class="text-black"> 40</span></spapn>
        </div>
        <span class="">33 يوم</span>
       </div>
      <button @click="openDialog()" class=" bg-[#FBE5A4] w-full rounded-md p-3 text-lg text-center">اشتراك</button>
     </div> 

     <div class="bg-white w-[330px] h-[210px] rounded-xl p-3 text-md"> 
      <div class="flex justify-between ">  
        <span>اسم الباقة</span>
        <span>225 ر.س</span>
      </div>  
       <div class="flex justify-between py-8">
        <div class="flex pb-4">
        <img 
        src="/assets/images/r-car.png" class="pl-2 text-black/50 object-contain"/>
        <spapn class=" text-black/50">عدد السيارات:<span class="text-black"> 30</span></spapn>
        </div>
        <span class="">15 يوم</span>
       </div>
      <button @click="openDialog()" class=" bg-[#FBE5A4] w-full rounded-md p-3 text-lg text-center">اشتراك</button>
     </div> 

     <div class="bg-white w-[330px] h-[210px] rounded-xl p-3 text-md"> 
      <div class="flex justify-between ">  
        <span>اسم الباقة</span>
        <span>420 ر.س</span>
      </div>  
       <div class="flex justify-between py-8">
        <div class="flex pb-4">
        <img 
        src="/assets/images/r-car.png" class="pl-2 text-black/50 object-contain"/>
        <spapn class=" text-black/50">عدد السيارات:<span class="text-black"> 27</span></spapn>
        </div>
        <span class="">40 يوم</span>
       </div>
      <button @click="openDialog()" class=" bg-[#FBE5A4] w-full rounded-md p-3 text-lg text-center">اشتراك</button>
     </div> 

     <div class="bg-white w-[330px] h-[210px] rounded-xl p-3 text-md"> 
      <div class="flex justify-between ">  
        <span>اسم الباقة</span>
        <span>360 ر.س</span>
      </div>  
       <div class="flex justify-between py-8">
        <div class="flex pb-4">
        <img 
        src="/assets/images/r-car.png" class="pl-2 text-black/50 object-contain"/>
        <spapn class=" text-black/50">عدد السيارات:<span class="text-black"> 30</span></spapn>
        </div>
        <span class="">42 يوم</span>
       </div>
      <button @click="openDialog()" class=" bg-[#FBE5A4] w-full rounded-md p-3 text-lg text-center">اشتراك</button>
     </div> 

     <div class="bg-white w-[330px] h-[210px] rounded-xl p-3 text-md"> 
      <div class="flex justify-between ">  
        <span>اسم الباقة</span>
        <span>150 ر.س</span>
      </div>  
       <div class="flex justify-between py-8">
        <div class="flex pb-4">
        <img 
        src="/assets/images/r-car.png" class="pl-2 text-black/50 object-contain"/>
        <spapn class=" text-black/50">عدد السيارات:<span class="text-black"> 12</span></spapn>
        </div>
        <span class="">20 يوم</span>
       </div>
      <button @click="openDialog()" class=" bg-[#FBE5A4] w-full rounded-md p-3 text-lg text-center">اشتراك</button>
     </div> 

     <div class="bg-white w-[330px] h-[210px] rounded-xl p-3 text-md"> 
      <div class="flex justify-between ">  
        <span>اسم الباقة</span>
        <span>650 ر.س</span>
      </div>  
       <div class="flex justify-between py-8">
        <div class="flex pb-4">
        <img 
        src="/assets/images/r-car.png" class="pl-2 text-black/50 object-contain"/>
        <spapn class=" text-black/50">عدد السيارات:<span class="text-black"> 31</span></spapn>
        </div>
        <span class="">50 يوم</span>
       </div>
      <button @click="openDialog()" class=" bg-[#FBE5A4] w-full rounded-md p-3 text-lg text-center">اشتراك</button>
     </div> 

     <div class="bg-white w-[330px] h-[210px] rounded-xl p-3 text-md"> 
      <div class="flex justify-between ">  
        <span>اسم الباقة</span>
        <span>280 ر.س</span>
      </div>  
       <div class="flex justify-between py-8">
        <div class="flex pb-4">
        <img 
        src="/assets/images/r-car.png" class="pl-2 text-black/50 object-contain"/>
        <spapn class=" text-black/50">عدد السيارات:<span class="text-black"> 20</span></spapn>
        </div>
        <span class="">35 يوم</span>
       </div>
      <button @click="openDialog()" class=" bg-[#FBE5A4] w-full rounded-md p-3 text-lg text-center">اشتراك</button>
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
        <div class="flex flex-col items-center">
          <img src="/assets/images/logo3.png" alt="" class="flex justify-center">
          <h3 class="text-xl font-bold mb-1">تسديد قيمة الاشتراك</h3>
          <p class="text-gray-800/70 mb-6">250 ر.س</p>
         </div>
          <button
            @click="navigateTo('/colection/counter')"
            class="w-[150px] py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black m-2 font-bold">
            تأكيد
          </button>

           <button
            @click="navigateTo('/')"
            class="w-[150px] py-3 rounded-lg border border-black m-2 text-black font-bold">
            أختيار باقة أخري
          </button>
        </div>
      </div>
    </Teleport>
 </div> 
</template>

<script setup>
 const showDialog = ref (false)

 const openDialog = () => {
      showDialog.value = true
 }

 const navigateTo = () => {
    showDialog.value = true;
  }
</script>