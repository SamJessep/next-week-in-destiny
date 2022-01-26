<template>
  <div :class="'background' + (open?' open':'')" v-if="shown" @click="backgroundClicked">
    <component :is="modalComponent.name" v-bind="modalComponent.props" :closeModal="HIDE_DIALOG"/>
  </div>
</template>


<script>
import { mapMutations } from 'vuex';

export default {
  props:["modalProps", "modalComponent", "shown"],
  data(){
    return {
      open:false,
      timeout:null
    }
  },
  methods:{
    ...mapMutations(["HIDE_DIALOG"]),
    backgroundClicked(e){
      if(e.target.className.includes("background"))this.HIDE_DIALOG()
    }
  },
  watch: {
    $props: {
      handler() {
        if(this.shown){
          this.timeout = setTimeout(()=>{
            this.open=true
          },50)
        }else{
          if(this.timeout)clearTimeout(this.timeout)
          this.open = false
        }
      },
      deep: true,
      immediate: true,
    },
  }
}
</script>

<style scoped lang="scss">
.background{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: background-color 1s;
  z-index: 10;
  display: block;
}

.background.open{
  background-color: rgb(0 0 0 / 60%);
}
</style>