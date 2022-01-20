<template>
<main v-if="'vendors' in this.weekData">
  <component v-for="vendorName in cleanedWeekData" :is="'section'+vendorName" :key="vendorName" :vendor="weekData.vendors[vendorName.toLowerCase()]" />
</main>
</template>

<script>
export default {
  name:"LootPage",
  props:["weekData"],
  computed:{
    cleanedWeekData(){
      console.log(Object.keys(this.weekData.vendors).filter(vendorName=>this.weekData.vendors[vendorName] != null))
      return Object.keys(this.weekData.vendors).filter(vendorName=>this.weekData.vendors[vendorName] != null).map(n=>{
        var newName = n[0].toUpperCase()+n.slice(1)
        return newName 
      })
    }
  }
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