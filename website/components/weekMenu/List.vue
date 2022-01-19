<template>
  <div class="container">
    <h2 class="title">Weeks</h2>
    <ul>
      <li
        v-for="week in $store.state.weeks" 
        :key="week.date" 
      >
        <nuxt-link 
          class="week-item"
          :to="'/weeks/'+week.date">
            {{week.date}}
        </nuxt-link>
      </li>
    </ul>
    <div class="quick-bar">
      <nuxt-link data-button
        class="sticky-button"
        :to="'/weeks/'+thisReset.date"
      >
        This Week
      </nuxt-link>
      <nuxt-link data-button
        class="sticky-button"
        :to="'/weeks/'+nextReset.date"
      >
        Next Week
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import {getThisWeek, getWeekWithOffset} from "~/util/dateHelpers"

export default {
  props:["weeks", "shownWeek"],
  computed:{
    thisReset(){
      return getThisWeek(this.weeks)
    },
    nextReset(){
      return getWeekWithOffset(this.weeks,new Date(), 1)
    },
  }
}
</script>

<style scoped>
.container{
  background-color: #181c25;
  padding-left: 0.5rem;
  padding-top: 0.85rem;
}

.title{
  color: rgb(242 193 97);
  padding: 0;
  margin: 0;
  margin-bottom: 0.5rem;
}

.quick-bar{
  margin-top: 1rem;
  display: flex;
  justify-content: space-around;
}

.sticky-button{
  padding: 0.5rem;
  font-size: 0.85rem;
}
</style>