<template>
<div>

<button class="container link" @click="toggleRollOverlay(true)">
  <img class="icon overlay" :src="'https://www.bungie.net/'+item.overlay_icon" :alt="item.name"/>
  <img class="icon underlay" :src="'https://www.bungie.net/'+item.icon" :alt="item.name"/>
  <p class="name" >{{item.name}}</p>
</button>
  <ItemPerkOverlay :title="item.name" :open="rollsOpen"/>
</div>
</template>

<script>
export default {
  props:["item"],
  data(){
    return{
      rollsOpen:false
    }
  },
  methods:{
    toggleRollOverlay(open){
      this.rollsOpen=open
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  cursor: pointer;
  background-color: transparent;
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