<template>
<div class="container">
  <img class="icon overlay" :src="'https://www.bungie.net/'+item.overlay_icon" :alt="item.name"/>
  <img class="icon underlay" :src="'https://www.bungie.net/'+item.icon" :alt="item.name"/>
  <p class="name" >{{item.name}}</p>
</div>
</template>

<script>
export default {
  props:["item"]
}
</script>

<style scoped>
.container{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
}

.overlay{
  position: absolute;
}

.icon{
  width:80px;
}

.name{
  margin-left: 1rem;
}
</style>