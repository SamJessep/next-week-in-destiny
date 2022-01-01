<template>
<div v-if="'vendors' in this.weekData">
  <SectionTrials :vendor="this.weekData.vendors.trials"/>
  <SectionRaid :vendor="this.weekData.vendors.raid"/>
  <SectionGrandMaster :vendor="this.weekData.vendors.gm"/>
</div>
</template>

<script>
export default {
  name:"LootPage",
  props:["weekData"],
}
</script>