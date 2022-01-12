<template>
<div>
    <nuxt-link 
      v-for="week in $store.state.weeks" 
      :key="week.date" 
      :to="week == thisReset ? '/this-week' : '/weeks/'+week.date" 
      style="display:block" >
        {{week == thisReset ? "This Week" : week.date}}
    </nuxt-link>
</div>
</template>

<script>
import {getThisWeek} from "~/util/dateHelpers"

export default {
  middleware:"loadJson",
  async asyncData({store}){
    return{
      thisReset:getThisWeek(store.state.weeks)
    }
  }
}
</script>
