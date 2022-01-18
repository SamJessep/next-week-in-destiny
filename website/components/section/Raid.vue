<template>
<Section name="Vault of glass - Master">
  <div class="item-box no-map">
    <Item v-for="(item,index) in this.vendor.items" :key="index" :item="item"/>
  </div>
  <Section :name="this.challenge.name">
    {{this.challenge.description}} 
  </Section>
</Section>
</template>

<script>
export default {
  props:["vendor"],
  data(){
    return{
      challenge:{name:"", description:""}
    }
  },
  async fetch() {
    const {challenges} = await this.$axios.$get('/challengeDescriptions.json')
    this.challenge = challenges[this.vendor.challengeIndex]
  },
}
</script>