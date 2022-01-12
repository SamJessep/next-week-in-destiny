<template>
  <div class="perk">
    <button class="plug-icon-box outer reset-styles" :title="name">
      <div class="plug-icon-container">
        <img :src="'https://www.bungie.net/'+icon" :alt="name" class="plug-icon"/>
      </div>
    </button>
    <div class="popup">
      {{description}}
    </div>
  </div>
</template>

<script>
export default {
  props:["name", "description", "icon","iconSequences"],
  data(){
    return{
      plugPopupOpen:false
    }
  }
}
</script>

<style scoped>
  .perk{
    width: 50px;
    height: 50px;
  }
  
  img{
    max-width: 100%;
    max-height: 100%;
  }
  
.plug-icon-box{
  width: 100%;
  height: 100%;
  max-width: 100%;
  position: relative;
  cursor: help;
}

.plug-icon-container{
  height: 0;
  padding-top: 100%;
}

.plug-icon{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.popup{
  display: none;
  position: relative;
  background-color: #212833;
  z-index: 10;
  left:100%;
  width: max-content;
  padding: 0 1rem;
  white-space: pre;
}

.plug-icon-box:focus+.popup{
  display: block;
}

</style>