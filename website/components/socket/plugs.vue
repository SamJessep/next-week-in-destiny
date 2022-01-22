<template>
<div v-if="isSinglePlug">
  <socketPlug         
    v-for="(plug,index) in orderedPlugs" :key="index"
    :name="plug.name"
    :description="plug.description"
    :icon="plug.icon"
    :id="'col'+column+'row'+index"
    :columnName="columnName"
    :sunset="!plug.obtainable"
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
    },
    orderedPlugs(){
      const copyOfPlugs = [...this.plugs]
      return copyOfPlugs.sort((a,b)=>a.obtainable<b.obtainable?1:-1)
    }
  }
}
</script>