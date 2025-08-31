<template>
  <Select
    v-model="selected"
    :options="countries"
    optionLabel="name"
    class="w-56"
    inputClass="bg-transparent"
    panelClass="bg-white rounded-lg shadow-lg"
    placeholder="اختر الدولة"
    dir="rtl"
  >
    <!-- العنصر المختار داخل الحقل -->
    <template #value="{ value }">
      <div v-if="value" class="flex items-center gap-2">
        <img :src="value.flag" class="w-6 h-4 rounded-sm border" alt="" />
        <span class="text-sm">{{ value.dial }}</span>
      </div>
      <span v-else class="text-gray-400">اختر الدولة</span>
    </template>

    <!-- عناصر القائمة -->
    <template #option="{ option }">
      <div class="flex items-center gap-2">
        <img :src="option.flag" class="w-6 h-4 rounded-sm border" alt="" />
        <span class="text-sm">{{ option.name }}</span>
        <span class="text-xs text-gray-500">({{ option.dial }})</span>
      </div>
    </template>
  </Select>
</template>

<script setup>
import { ref } from 'vue'

const countries = [
  { name: 'السعودية', dial: '+966', flag: 'https://flagcdn.com/w40/sa.png' },
  { name: 'مصر',     dial: '+20',  flag: 'https://flagcdn.com/w40/eg.png' },
  { name: 'الإمارات', dial: '+971', flag: 'https://flagcdn.com/w40/ae.png' },
  { name: 'الأردن',   dial: '+962', flag: 'https://flagcdn.com/w40/jo.png' },
  { name: 'المغرب',   dial: '+212', flag: 'https://flagcdn.com/w40/ma.png' }
]
const selected = ref(countries[0]) // افتراضيًا السعودية
</script>
