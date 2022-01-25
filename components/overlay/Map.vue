<template>
  <div class="map-container-max" @click="containerClick">
    <img :src="img" :alt="alt" class="map-max">
  </div>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props:["img", "alt"],
  methods:{
    ...mapMutations(["HIDE_DIALOG"]),
    containerClick(e){
      if(e.target.classList.contains("map-container-max")) this.HIDE_DIALOG()
    }
  }
}
</script>

<style scoped>
.map-container-max{
  width:100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.map-max{
  max-width: 97%;
}
</style>