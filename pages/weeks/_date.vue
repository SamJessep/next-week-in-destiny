<template>
  <div>
    <Header data-header>{{dateString}}</Header>
    <LootPage :weekData="this.thisWeeksData" />
  </div>
</template>

<script>
export default {
  computed:{
    date(){ 
      return new Date(this.$route.params.date)
    },
    dateString(){
      return this.date.toDateString().split(" ").filter((_,index)=>index!==0).join(" ")
    },
  },
  data(){
    return {
      thisWeeksData:{}
    }
  },
  async fetch() {
    const weeksData = await this.$axios.$get('/weeklyItems.json')
    this.thisWeeksData = weeksData.find(w=>new Date(w.date).toString() == new Date(this.date).toString())
  },
}
</script>