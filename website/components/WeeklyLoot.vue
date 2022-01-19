<template>
<main v-if="'vendors' in this.weekData">
  <SectionTrials :vendor="this.weekData.vendors.trials"/>
  <SectionRaid :vendor="this.weekData.vendors.raid"/>
  <SectionGrandMaster :vendor="this.weekData.vendors.gm"/>
</main>
</template>

<script>
export default {
  name:"LootPage",
  props:["weekData"],
}
</script>

<style>
main{
  grid-area: content;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: flex-start;
}
</style>