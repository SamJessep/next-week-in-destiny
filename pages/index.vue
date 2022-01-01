<template>
  <div>
    <Header :hide-back="true" >Next Week</Header>
    <nuxt-link to="/this-week" data-button>This week</nuxt-link>
    <LootPage :weekData="this.thisWeeksData" />
  </div>
</template>

<script>
function getNextWeek(weeks){
  for(const week of weeks){
    const date = new Date(week.date)
    const currentDate = new Date()
    if(date>currentDate) return week
  }
  return weeks[0]
}


export default {
  data(){
    return{
      thisWeeksData:[]
    }
  },
  async fetch() {
    const weeksData = await this.$axios.$get('/weeklyItems.json')
    this.thisWeeksData = getNextWeek(weeksData)
  },
}
</script>