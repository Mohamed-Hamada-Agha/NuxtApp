<template>
  <div class="w-full h-[400px]">
    <GMapMap
      :center="center"
      :zoom="12"
      map-type-id="roadmap"
      style="width: 100%; height: 100%"
      :options="mapOptions"
    >
      <GMapMarker
        :position="center"
        :clickable="true"
        :draggable="false"
        @click="openInfo = !openInfo"
      />
      <GMapInfoWindow :options="{maxWidth: 240}" :opened="openInfo" :position="center">
        <div class="text-sm">
          <b>موقعي</b><br>
          أهلاً بك هنا 👋
        </div>
      </GMapInfoWindow>
    </GMapMap>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const center = ref({ lat: 24.7136, lng: 46.6753 }) 
const openInfo = ref(false)

const mapOptions = {
  fullscreenControl: false,
  streetViewControl: false,
  mapTypeControl: false,
  zoomControl: true,
  gestureHandling: 'greedy', 
  styles: [] 
}
</script>
