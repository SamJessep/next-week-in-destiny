<template>
<div v-if="isSinglePlug" class="perk-column">
  <socketPlug         
    v-for="(plug,index) in orderedPlugs" :key="index"
    :name="plug.name"
    :description="plug.description"
    :icon="plug.icon"
    :id="'col'+column+'row'+index"
    :columnName="columnName"
    :sunset="!plug.obtainable"
    :selected="selectedIndex == index"
    :onSelect="selectPlug"
    :index="index"
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
  props:['plugs', 'column', 'columnName', 'onSocketChange'],
  data(){
    return {
      singlePlug:this.plugs,
      selectedIndex:-1,
    }
  },
  computed:{
    isSinglePlug(){
      return Array.isArray(this.plugs)
    },
    orderedPlugs(){
      const copyOfPlugs = [...this.plugs]
      return copyOfPlugs.sort((a,b)=>a.obtainable<b.obtainable?1:-1)
    },
  },
  methods:{
    selectPlug(index, selected){
      this.selectedIndex = (selected ? -1 : index)
      this.onSocketChange(this.column,(this.selectedIndex == -1 ? undefined : this.orderedPlugs[index]))
    }
  }
}
</script>

<style lang="scss" scoped>
.perk-column{
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}
</style>