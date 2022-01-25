<template>
<aside class="menu">
  <div class="desktop">
    <WeekMenuList :weeks="weeks" :shownWeek="shownWeek"/>
  </div>
  <div class="mobile">
    <WeekMenuDropDown :weeks="weeks" :shownWeek="shownWeek"/>
  </div>
</aside>
</template>

<script>
export default {
  props:["weeks", "shownWeek"]
}
</script>

<style lang="scss">
aside{
  grid-area: menu;
}

.mobile{
  display: none;
  @include mobile{
    display: block;
  }
}

.desktop{
  display: block;
  @include mobile{
    display: none;
  }
}

.menu{
  position: sticky;
  top: 80px;
  width: 100%;
  align-self: start;
  left: 0;
  @include mobile{
    top:0;
    width: auto;
    padding: 0.5rem;
    background-color: $darkGray1;
    z-index: 10;
  }
}
</style>