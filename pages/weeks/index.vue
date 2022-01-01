<template>
<div>
  <div v-if="loaded">
    <nuxt-link to="/this-week">This week</nuxt-link>
    <nuxt-link v-for="week in weeks" :key="week.date" :to="'/weeks/'+week.date" style="display:block" >{{week.date}}</nuxt-link>
  </div>
  <div v-else>
    <Loader/>
  </div>
</div>
</template>

<script>
export default {
  name: 'IndexPage',
  async fetch() {
    const weekData = await this.$axios.$get('/weeklyItems.json')
    this.weeks = weekData
    this.loaded=true
  },
  fetchOnServer:false,
  data(){
    return{
      weeks:[],
      loaded:false
    }
  }
}
</script>
