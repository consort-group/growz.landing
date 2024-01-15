<template>
  <div id="mapContainer"></div>
</template>

<script setup>
import { ref, onMounted, defineProps } from 'vue'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import logo from "leaflet/src/images/marker.svg";

const props = defineProps(['data'])


onMounted(() => {
  setTimeout(() => { 
    const myMap = L.map("mapContainer").setView([41.311158, 69.279737], 11);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(myMap);
    
    let customPane = myMap.createPane("customPane");
    customPane.style.zIndex = 399;
    
    let myIcon = L.icon({
      iconUrl: logo,
      iconSize: [38, 95],
      iconAnchor: [22, 94],
      popupAnchor: [-3, -76],
      // shadowUrl: '',
      shadowSize: [68, 95],
      shadowAnchor: [22, 94]
    });
    L.marker([props.data?.lat, props.data?.long], { icon: myIcon }).addTo(myMap);
  }, 1000)
});
</script>

<style lang="scss">
#mapContainer {
  height: 70vh;
  margin: auto;
}
</style>