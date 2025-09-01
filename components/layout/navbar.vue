<template>
  <nav class="h-[80px] w-full bg-white gap-5 flex items-center justify-end px-20">
    <div class="w-12 h-12 bg-white border-2 border-yellow-300  rounded-lg flex items-center justify-center">
        <img src="/assets/images/pell.png" class="">
      </div>

    <div class="  top-4 left-8 inline-flex p-2 rounded-md">
      <InputGroup>
            <Select v-model="selectedCity" :options="cities" optionLabel="code" placeholder="العربية" dir="rtl"
             class="bg-transparent text-white" />
        </InputGroup>
     </div>
    
    <div class="flex gap-2 items-center justify-center">
      <div class="w-12 h-12 bg-white rounded-lg flex items-center justify-">
     <img src="/assets/images/logo2.png">
    </div>
    <span class="font-bold">أحمد عطية</span>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from "vue-i18n"
const { locale } = useI18n()

const selectedCity = ref();
const cities = ref([
  { name: 'ar', code: 'العربية'},
  { name: 'en', code: 'English'}
]);
</script>

<style scoped>
.p-select.p-variant-filled {
  background-color: white !important;
  color: black;
  border: none;
}
.p-select.p-variant-filled {
  background-color: transparent !important;
  color: black;
  border: none
}
.p-select-label.p-placeholder {
    color: var(--p-select-placeholder-color); 
}

</style>