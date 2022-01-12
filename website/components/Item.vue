<template>
<div>

<button class="container link" @click="toggleRollOverlay(true)">
  <img class="icon overlay" :src="'https://www.bungie.net/'+item.overlay_icon" :alt="item.name"/>
  <img class="icon underlay" :src="'https://www.bungie.net/'+item.icon" :alt="item.name"/>
  <p class="name" >{{item.name}}</p>
</button>
  <!-- <ItemPerkOverlay :title="item.name" :open="rollsOpen" :toggleRollOverlay="toggleRollOverlay"/> -->
</div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props:["item"],
  data(){
    return{
      rollsOpen:false
    }
  },
  methods:{

    ...mapMutations(["SHOW_DIALOG","HIDE_DIALOG"]),
    toggleRollOverlay(open){
      this.rollsOpen=open
      this.SHOW_DIALOG({name:"ItemPerkOverlay",props:{title:this.item.name, item:this.item}})
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