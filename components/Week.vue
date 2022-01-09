<template>
  <div>
    <Header :week="title" >{{title}}</Header>
    <LootPage :weekData="week" />
  </div>
</template>

<script>

export default {
  props:["title", "week"]
}
</script>