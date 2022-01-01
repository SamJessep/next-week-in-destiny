<template>
<Section name="Trials of osiris - Flawless">
  <div v-if="this.vendor.items[0].name=='IB'">
    <img src="https://www.bungie.net/common/destiny2_content/icons/0ee91b79ba1366243832cf810afc3b75.jpg" alt="Iron banner">
    Lol no trials
  </div>
  <div v-if="this.vendor.items[0].name!='IB'">
    <Item v-for="(item,index) in this.vendor.items" :key="index" :item="item"/>
    <div class="map-box">
      <img :src="mapImage" :alt="this.vendor.map" class="map" @error="this.useFallbackImage"/>
      <p class="map-name">{{this.vendor.map}}</p>
    </div>
  </div>
</Section>
</template>

<script>
export default {
  props:["vendor"],
  data:function(){
    return {
      mapImage:`https://www.bungie.net/img/destiny_content/pgcr/crucible_${this.vendor.map.split(' ').join('').toLowerCase()}.jpg`
    }
  },
  methods:{
    useFallbackImage: function(){
      this.mapImage = `https://www.bungie.net/img/destiny_content/pgcr/pvp_${this.vendor.map.split(' ').join('').toLowerCase()}.jpg`
    }
  }
}
</script>

<style scoped>
  .map-box{
    max-width: 100%;
    position: relative;
  }

  .map{
    max-width: 100%;
  }

  .map-name{
    display: block;
    background-color: hsla(0deg 0deg 0deg 200%);
    width: 100%;
    position: absolute;
    bottom:0;
    margin: 0;
  }
</style>