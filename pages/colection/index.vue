<template>
  <div class="">
   <h2 class=" font-bold py-4 text-2xl my-2">الباقات</h2>
    <div class="grid grid-cols-3 gap-4"> 
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
      <button @click="openDialog()" id="loginBtn" class=" bg-[#FBE5A4] w-full rounded-md p-3 text-lg text-center">اشتراك</button>
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
          <img src="/assets/images/$logo$.png" alt="" class="flex justify-center items-center">
          <h3 class="text-xl font-bold mb-1">هل تريد الباقة</h3>
          <p class="text-gray-800/70 mb-6">250 ر.س</p>
          </div>
           <button
            @click="navigateTo('/colection/counter')"
            class="w-full py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-bold">
            تأكيد
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

</script>