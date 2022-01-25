<template>
  <div class="perk" :style="`opacity:${(sunset ? '0.5' : '1')};`">
    <button :class="'plug-icon-box outer reset-styles ' + id" :title="name">
      <div class="plug-icon-container">
        <img :src="'https://www.bungie.net'+icon" :alt="name" class="plug-icon"/>
      </div>
    </button>
    <div ref="popup" :class="`popup ${(sunset?'sunset':'')}`">
      <div class="header container">
        <h1>{{name.toUpperCase()}}</h1>
        <h2>{{columnName}}</h2>
      </div>
      <div class="content container">
        <p>{{description}}</p>
      </div>
        <div v-if="sunset" class="warning">
          This perk is not currently available
        </div>
    </div>
  </div>

</template>

<script>
import tippy from 'tippy.js';
export default {
  props:["name", "description", "icon","iconSequences", "id", "columnName", "sunset"],
  data(){
    return{
      plugPopupOpen:false
    }
  },
  mounted(){
    const popupEl = this.$refs["popup"]
    popupEl.style.display = 'block';

    tippy("."+this.id, {
      theme:"destiny-weapon-perk",
      content:popupEl,
      allowHTML: true,
    })
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
}

.warning{
  background-color: #f44336;
  padding: 0.5rem;
}


</style>