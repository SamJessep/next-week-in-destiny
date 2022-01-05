<template>
  <week :week="thisWeeksData" title="This Week"/>
</template>

<script>
import Week from '~/components/Week.vue'
import {getThisWeek} from "~/util/dateHelpers"
export default {
  components: { Week },
  data(){
    return{
      thisWeeksData:[]
    }
  },
  async fetch() {
    const weeksData = await this.$axios.$get('/weeklyItems.json')
    this.thisWeeksData = getThisWeek(weeksData)
  },
}
</script>