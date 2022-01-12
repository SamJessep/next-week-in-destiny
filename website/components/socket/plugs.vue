<template>
<div v-if="isSinglePlug">
  <socketPlug         
    v-for="(plug,index) in plugs" :key="index"
    :name="plug.name"
    :description="plug.description"
    :icon="plug.icon"  
  />
</div>
<div v-else>
  <socketPlug         
    :name="singlePlug.name"
    :description="singlePlug.description"
    :icon="singlePlug.icon"  
  />
</div>
</template>

<script>
export default {
  props:['plugs'],
  data(){
    return {singlePlug:this.plugs}
  },
  computed:{
    isSinglePlug(){
      return Array.isArray(this.plugs)
    }
  }
}
</script>