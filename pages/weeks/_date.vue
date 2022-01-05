<template>
  <week :week="thisWeeksData" :title="dateString"/>
</template>

<script>

import {getWeek} from "~/util/dateHelpers"

export default {
  middleware:"loadJson",
  computed:{
    },
  async asyncData({ store, route }) {
    const date = new Date(route.params.date)
    const dateString = date.toDateString().split(" ").filter((_,index)=>index!==0).join(" ")
    return {
      thisWeeksData: getWeek(store.state.weeks, date),
      date,
      dateString
    }
  }
}
</script>