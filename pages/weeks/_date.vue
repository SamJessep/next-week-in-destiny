<template>
  <WeeklyLoot :weekData="thisWeeksData"/>
</template>

<script>
import {getWeek, getNextWeek, getThisWeek} from "~/util/dateHelpers"
import { mapMutations } from 'vuex';

const getHeaderTitle = (week,weeks) =>{
  const nextWeek = getNextWeek(weeks)
  const thisWeek = getThisWeek(weeks)
  if(week.date == thisWeek.date) return "This Week"
  else if(week.date == nextWeek.date) return "Next Week"
  else return week.date
}


export default {
  middleware:"loadJson",
  methods:{
    ...mapMutations(["SET_HEADER_PROPS"]),
  },
  async asyncData({ store, route }) {
    const date = new Date(route.params.date)
    const dateString = date.toDateString().split(" ").filter((_,index)=>index!==0).join(" ")
    return {
      thisWeeksData: getWeek(store.state.appData.weeks, date),
      date,
      dateString,
      weeks:store.state.appData.weeks
    }
  },
  mounted(){
    console.log(this.thisWeeksData)
    this.SET_HEADER_PROPS({
      week:this.thisWeeksData,
      title:getHeaderTitle(this.thisWeeksData, this.weeks)
    })
  }
}
</script>