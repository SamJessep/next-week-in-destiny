<template>
<div class="map-box outer" @click="maximiseMap">
<div class="map-container" >
  <img :src="img" :alt="name" class="map"/>
</div>
<div class="map-overlay"></div>
<p class="map-name">{{name}}</p>
</div>
</template>

<script>
import {BUNGIE_URL} from "~/data/constants.js"
import { mapMutations } from 'vuex';
export default {
  props:["map"],
  computed:{
    name(){
      return this.map.name
    },
    img(){
      return BUNGIE_URL+this.map.backdrop
    }
  },
  methods:{
    ...mapMutations(["SHOW_DIALOG","HIDE_DIALOG"]),
    maximiseMap(e){
      console.log(e)
      this.SHOW_DIALOG({name:"OverlayMap",props:{img:this.img, alt:this.name}})
    }
  }
}
</script>