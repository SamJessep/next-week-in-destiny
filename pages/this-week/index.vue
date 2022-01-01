<template>
  <div>
    <Header>This week</Header>
    <LootPage :weekData="this.thisWeeksData" />
  </div>
</template>

<script>
function getToday(weeks){
  for(let i = 0; i<weeks.length; i++){
    const week = weeks[i]
    const date = new Date(week.date)
    const currentDate = new Date()
    if(date>currentDate) return weeks[i-1]
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
    this.thisWeeksData = getToday(weeksData)
  },
}
</script>