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

<style>
aside{
  grid-area: menu;
}

.mobile{
  display: none;
}

.desktop{
  display: block;
}

.menu{
    position: sticky;
    top: 80px;
    width: 100%;
    align-self: start;
    left: 0;
}

@media only screen and (max-width: 700px) {
  .mobile{
    display: block;
  }

  .desktop{
    display: none;
  }

  .menu{
    top:0;
    width: auto;
    padding: 0.5rem;
    background-color: #14191e;
    z-index: 10;
  }
}
</style>