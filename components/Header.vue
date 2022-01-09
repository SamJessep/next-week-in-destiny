<template>
  <div class="container">
    <WeeksDropDown :weeks="$store.state.weeks" :shownWeek="week"/>
    <h1>
      <slot/>
    </h1>
  </div>
</template>

<script>
export default {
  props:["week"]
}
</script>

<style scoped>
.container{
  /* display: flex;
  gap: 1rem; */
  width: 100%;
  top:0;
  position: sticky;
  background-color: #14191e;
  z-index:6;
  margin-bottom: 0.5rem;
}
</style>