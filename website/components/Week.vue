<template>
  <div>
    <Header :week="week.date" >{{title}}</Header>
    <LootPage :weekData="week" />
  </div>
</template>

<script>

export default {
  props:["title", "week"]
}
</script>