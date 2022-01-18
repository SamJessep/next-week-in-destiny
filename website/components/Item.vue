<template>
<div>
  <button class="container link" @click="toggleRollOverlay(true)">
    <img class="icon overlay" :src="overlayIcon" :alt="item.name"/>
    <img class="icon underlay" :src="icon" :alt="item.name"/>
    <p class="name" >{{item.name}}</p>
  </button>
</div>
</template>

<script>
import { mapMutations } from 'vuex';
import {BUNGIE_URL} from "~/data/constants.js"
export default {
  props:["item"],
  data(){
    return{
      rollsOpen:false
    }
  },
  computed:{
    overlayIcon(){
      return BUNGIE_URL+ this.item.overlay_icon
    },
    icon(){
      return BUNGIE_URL+this.item.icon
    }
  },
  methods:{

    ...mapMutations(["SHOW_DIALOG","HIDE_DIALOG"]),
    toggleRollOverlay(open){
      this.rollsOpen=open
      this.SHOW_DIALOG({name:"OverlayItemDetails",props:{title:this.item.name, item:this.item}})
    }
  }
}
</script>

<style scoped>
.container{
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.75rem;
  cursor: pointer;
  background-color: transparent;
}

.overlay{
  position: absolute;
}



.name{
  margin-left: 1rem;
}



</style>