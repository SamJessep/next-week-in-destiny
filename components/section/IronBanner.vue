<template>
<Section name="Iron Banner" className="section">
  <div>
    <img src="https://www.bungie.net/common/destiny2_content/icons/0ee91b79ba1366243832cf810afc3b75.jpg" alt="Iron banner">
    <Section name="Weapons">
      <Item v-for="(item,index) in this.$store.state.appData.ironBannerItems" :key="index" :item="item"/>
    </Section>
  </div>
</Section>
</template>

<script>
export default {
  props:["vendor"],
}
</script>

