<template>
<Section name="Nightfall - Grandmaster">
  <Item v-for="(item,index) in this.vendor.items" :key="index" :item="item"/>
</Section>
</template>

<script>
export default {
  props:["vendor"]
}
</script>