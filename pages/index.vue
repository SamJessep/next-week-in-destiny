<template>
  <week :week="thisWeeksData" title="Next Week"/>
</template>

<script>

export default {
  middleware:["redirectToNextWeek"]
}
</script>