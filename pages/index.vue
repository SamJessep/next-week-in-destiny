<template>
  <week :week="thisWeeksData" title="Next Week"/>
</template>

<script>
import {getNextWeek} from "~/util/dateHelpers"

export default {
  middleware:"loadJson",
  async asyncData ({ store }) {
    return {
      thisWeeksData: getNextWeek(store.state.weeks)
    }
  }
}
</script>