<template>
<Section name="Nightfall - Grandmaster">
  <div class="item-box">
    <Item v-for="(item,index) in this.vendor.items" :key="index" :item="item"/>
  </div>
  <div class="map-box">
    <div class="map-container">

      <img :src="mapImage" :alt="this.vendor.map" class="map"/>
    </div>
    <div class="map-overlay"></div>
    <p class="map-name">{{this.vendor.map.name}}</p>
  </div>
</Section>
</template>

<script>
export default {
  props:["vendor"],
  computed:{
    mapImage(){
      return `https://www.bungie.net/${this.vendor.map.backdrop}`
    }
  }
}
</script>
