<template>
  <div class="map-container-max" @click="containerClick">
    <div class="map-box outer" >
      <div class="map-container">
        <img :src="img" :alt="alt" class="map">
      </div>
    </div>
    <h1>{{alt}}</h1>
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

<style scoped lang="scss">
.map-container-max{
  width:100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem
}

.map-max{
  max-width: 97%;
}

.map-box{
  width: 100%;
  max-height: 80%;
}

.map{
  width: auto;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}

</style>