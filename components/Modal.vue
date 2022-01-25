<template>
  <div class="background" v-if="shown" @click="backgroundClicked">
    <component :is="modalComponent.name" v-bind="modalComponent.props" :closeModal="HIDE_DIALOG"/>
  </div>
</template>


<script>
import { mapMutations } from 'vuex';

export default {
  props:["modalProps", "modalComponent", "shown"],
  methods:{
    ...mapMutations(["HIDE_DIALOG"]),
    backgroundClicked(e){
      if(e.target.className.includes("background"))this.HIDE_DIALOG()
    }
  },
}
</script>

<style scoped>
.background{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000021;
  z-index: 10;
  display: block;
}
</style>