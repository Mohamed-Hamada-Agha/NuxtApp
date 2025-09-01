<template>
  <div class="flex h-screen">
    
    <!-- اليمين: الفورم -->
    <main class="flex flex-1 items-center justify-center p-8">
      <div class="w-full max-w-md text-right">
        <h2 class="text-2xl font-bold mb-4">تسجيل الدخول</h2> 
        <p class="mb-4">
          ليس لديك حساب؟
          <NuxtLink to="/auth/register" class="font-medium text-yellow-600 hover:text-yellow-500">إنشاء حساب</NuxtLink> 
        </p>

        <!-- مدخل رقم الجوال -->
          <div>
            <label for="phone" class="block mb-1 font-medium">الجوال</label>
            <div class="flex selectparent border border-black rounded-md">
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                inputmode="tel"
                placeholder="ادخل رقم الجوال"
                dir="rtl"
                class="flex-1 bg-white p-3 "
                required
              />  
      
           <Select
              v-model="selected"
              :options="countries"
              optionLabel="name"
              dir="rtl"
              class="bg-white"
            >
              <!-- العنصر المختار داخل الحقل -->
              <template #value="{ value }">
                <div v-if="value" class="flex items-center gap-2">
                  <img :src="value.flag" class="w-6 h-4 rounded-sm border" alt="" />
                  <span class="text-sm">{{ value.dial }}</span>
                </div>
                <span v-else class="text-black">966+</span>
              </template>

              <!-- عناصر القائمة -->
              <template #option="{ option }">
                <div class="flex items-center gap-2 bg-white">
                  <img :src="option.flag" class="w-6 h-4 rounded-sm border" alt="" />
                  <span class="text-sm text-black">{{ option.name }}</span>
                  <span class="text-xs text-black">({{ option.dial }})</span>
                </div>
              </template>
           </Select>
              
            </div>
          </div>

        <!-- زر تسجيل الدخول (يفتح المودال) -->
        <button
          id="loginBtn"
          @click.prevent="sendVerificationCode" 
          class="bg-yellow-400 hover:bg-yellow-500 text-black font-bold py-2 mt-8 px-6 rounded"
        >
          تسجيل الدخول
        </button>
      </div>
    </main>
   
    <aside class="bg-[#f5e5c8] w-[509px] relative flex items-center justify-center">
    <div class="absolute top-4 left-12 inline-flex p-2 rounded-md text-black">
      <InputGroup>
            <Select v-model="selectedCity" :options="cities" optionLabel="code" placeholder="العربية" dir="rtl"  />
        </InputGroup>
      </div>

      <img 
        src="/assets/images/pngwing 1 (1).png" 
        alt="صورة" 
        class="translate-x-[44%] max-h-[80%] object-contain"
      />
    
    </aside>

    <!-- ====== مودال OTP فوق صفحة الـ Login ====== -->
    <div
      v-show="showVerifyModal" dir="ltr"
      class="fixed inset-0 z-50 grid place-items-center"
      role="dialog"
      aria-modal="true"
    >
      <!-- الخلفية الشفافة -->
      <div class="absolute inset-0 bg-black/40" @click="closeModal"></div>
      <!-- رسالة التحقق -->
      <div class="relative z-10 w-full max-w-lg px-4">
        <div class="bg-white flex flex-col items-center justify-center rounded-xl p-4">
          <!-- الجزء العلوي: كود التفعيل وعلامة X -->
          <div class="w-full max-w-md flex justify-start items-center mb-2">
            <h2 class="text-xl text-center font-bold w-full">كود التفعيل</h2>
            <button 
              @click="navigateTo('/login')" 
              class="bg-red-500 text-white rounded-full hover:opacity-90 p-1.5"
            >
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 font-bold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <!-- الخط الفاصل -->
          <div class="w-full max-w-lg h-px bg-gray-400 mb-6"></div>
          <img 
            src="/assets/images/logo.png" 
            alt="Logo" 
            class="w-32 h-32 mb-6 object-contain"
          />
          <h3 class="text-2xl font-medium mb-1">كود التفعيل</h3>
          <p class="text-gray-500 text-lg mb-6">يرجي إدخال كود التفعيل</p>
          <!-- OTP مربعات  -->
          <div class="flex justify-center gap-4 mb-8">
            <input
              v-for="(digit, index) in otp"
              :key="index"
              type="text"
              v-model="otp[index]"
              @input="handleInput(index, $event)"
              @keydown.delete="handleBackspace(index, $event)"
              maxlength="1"
              ref="otpInputs"
              class="w-16 h-16 text-2xl text-center border-2 border-gray-700 rounded-lg bg-white"
            />
          </div>
          <!-- زر التفعيل الأصفر -->
          <button
            @click="handleSubmit"
            :disabled="isLoading || !isOtpComplete"
            class="w-44 max-w-lg py-3 bg-yellow-400 hover:bg-yellow-600 text-black text-xl font-bold rounded-lg transition"
          >
            {{ isLoading ? 'جاري التفعيل...' : 'تأكيد' }}
          </button>
        </div> 
      </div>
    </div>

    <!-- ====== Dialog التأكيد النهائي ====== -->
    <Teleport to="body">
      <div
        v-show="showDialog"
        class="fixed inset-0 z-[60] grid place-items-center"
        role="alertdialog"
        aria-modal="true"
      >
        <div class="absolute inset-0 bg-black/40" @click="closeDialog"></div>

        <div class="relative z-10 w-[min(92%,420px)] rounded-2xl bg-white shadow-xl p-6 text-center">
          <!-- الدائرة الصفراء بعلامة الصح البيضاء -->
          <div class="mx-auto mb-4 flex items-center justify-center w-20 h-20 rounded-full bg-yellow-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h3 class="text-xl font-bold mb-1">!تم إرسال طلبك</h3>
          <p class="text-gray-800/70 mb-6">فى انتظار موافقة الادارة</p>

          <button 
            @click="navigateTo('/pages/index')"
            class="w-full py-3 rounded-lg bg-yellow-400 hover:bg-yellow-500 text-black font-bold"
          >
            تسجيل الدخول
          </button>
        </div>
      </div>
    </Teleport>
    <!-- ====== /Dialog ====== -->
  </div>
</template>

<script setup>
import { ref } from "vue"
import { useI18n } from "vue-i18n"
const { locale } = useI18n()

// import { navigateTo } from '#app'
//   navigateTo('') 

const selectedCity = ref();
const cities = ref([
  { name: 'ar', code: 'العربية'},
  { name: 'en', code: 'English'}
]);

const countries = [
  { name: 'السعودية', dial: '+966', flag: 'https://flagcdn.com/w40/sa.png' },
  { name: 'مصر',     dial: '+20',  flag: 'https://flagcdn.com/w40/eg.png' },
]

const languages = [
  { code: 'ar', label: 'العربية'},
  { code: 'en', label: 'English'}
]

function switchLanguage() {
  locale.value = selectedLang.value.code
  localStorage.setItem("lang", selectedLang.value.code)
}

const form = reactive({
  phone: '',
  name: '',
  city: '',
  location: '',
  commercialReg: '',
  nationalId: '',
  email: '',
})



definePageMeta({
  layout: "auth"
})



const otp = ref(['', '', '', ''])
const otpInputs = ref([])
const isLoading = ref(false)
const showVerifyModal = ref(false)
const verificationCode = ref(['','','','']) // سيُستبدل عند الإرسال
const lastFourDigits = computed(() => phone.value.slice(-4))

const showDialog = ref(false)

/* إرسال رمز التحقق: توليد كود وفتح مودال OTP */
const sendVerificationCode = async () => {
  if (!phone.value) {
    alert("يجب إدخال رقم الجوال")
    return
  }
  isLoading.value = true
  try {
    verificationCode.value = '1234'
    console.log("تم إرسال الرمز:", verificationCode.value) // للاختبار
    showVerifyModal.value = true
    requestAnimationFrame(() => {
      const inputs = otpInputs.value
      if (inputs && inputs[0] && typeof inputs[0].focus === 'function') inputs[0].focus()
    })
  } catch (e) {
    alert("حدث خطأ في إرسال الرمز")
  } finally {
    isLoading.value = false
  }
}
/* منع تمرير الصفحة أثناء أي طبقة */
watch([showVerifyModal, showDialog], () => {
  const open = showVerifyModal.value || showDialog.value
  document.documentElement.classList.toggle('overflow-hidden', open)
})

/* اكتمال الرمز */
const isOtpComplete = computed(() => otp.value.every(d => d !== ''))

/* إدخال الأرقام في OTP */
const handleInput = (index, event) => {
  const value = (event.target.value || '').replace(/\D/g, '').slice(0, 1)
  otp.value[index] = value
  if (value && index < otp.value.length - 1) {
    otpInputs.value[index + 1]?.focus()
  }
}
/* Backspace */
const handleBackspace = (index, event) => {
  if (event.key === 'Backspace' && !otp.value[index] && index > 0) {
    otpInputs.value[index - 1]?.focus()
  }
}
/* تأكيد الرمز */
const handleSubmit = () => {
  if (!isOtpComplete.value) return
  const enteredCode = otp.value.join('')

  if (enteredCode === verificationCode.value) {
    isLoading.value = true
    setTimeout(() => {
      isLoading.value = false
      showVerifyModal.value = false 
      showDialog.value = true 
    }, 600)
  } else {
    alert("رمز التحقق غير صحيح")
  }
}
/* إغلاق مودال OTP */
const closeModal = () => {
  showVerifyModal.value = false
}
</script>

<style scoped>
.p-select.p-variant-filled {
  background-color: transparent !important;
  color: black;
  border: none
}
.p-select-label.p-placeholder {
    color: var(--p-select-placeholder-color); 
}

</style>