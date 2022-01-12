<template>
<Section name="Trials of osiris - Flawless">
  <div v-if="this.vendor.items[0].name=='IB'">
    <img src="https://www.bungie.net/common/destiny2_content/icons/0ee91b79ba1366243832cf810afc3b75.jpg" alt="Iron banner">
    Lol no trials
  </div>
  <div v-if="this.vendor.items[0].name!='IB'">
    <div class="item-box">
      <Item v-for="(item,index) in this.vendor.items" :key="index" :item="item"/>
    </div>
    <div class="map-box outer">
      <div class="map-container">
        <img :src="mapImage" :alt="this.vendor.map" class="map"/>
      </div>
      <div class="map-overlay"></div>
      <p class="map-name">{{this.vendor.map.name}}</p>
    </div>
  </div>
</Section>
</template>

<script>
export default {
  props:["vendor"],
  data:function(){
    return {
      mapImage:`https://www.bungie.net/${this.vendor.map.backdrop}`
    }
  },
}
</script>

