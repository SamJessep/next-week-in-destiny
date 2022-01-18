<template>
<div v-if="isSinglePlug">
  <socketPlug         
    v-for="(plug,index) in plugs" :key="index"
    :name="plug.name"
    :description="plug.description"
    :icon="plug.icon"
    :id="'col'+column+'row'+index"
    :columnName="columnName"
  />
</div>
<div v-else>
  <socketPlug         
    :name="singlePlug.name"
    :description="singlePlug.description"
    :icon="singlePlug.icon"
    :id="'col'+column+'row'+1"
    :columnName="columnName"
  />
</div>
</template>

<script>
export default {
  props:['plugs', 'column', 'columnName'],
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