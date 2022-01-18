<template>
<Section name="Nightfall - Grandmaster">
  <div class="item-box">
    <Item v-for="(item,index) in this.vendor.items" :key="index" :item="item"/>
  </div>
  <sectionMap :map="vendor.map"/>
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
