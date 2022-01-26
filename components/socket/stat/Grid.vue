<template>
  <div class="stat-grid">
    <h1>Stats</h1>
    <div class="stats">
      <div class="labels column">
        <label v-for="stat in stats" :key="stat.name+'_label'">
          {{stat.name}}
        </label>
      </div>
      <div class="meters column">
        <socketStatMeter class="stat-bar" v-for="stat in stats" :key="stat.name+'_bar'" :value="stat.value" :max="stat.max" min="0" :bonus="getBonus(stat.name)"/>
      </div>
      <div class="amounts column">
        <p class="amount" v-for="stat in stats" :key="stat.name+'_amount'">
            {{stat.value+getBonus(stat.name)}}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["stats","plugsSocketed"],
  data(){
    return {
      bonuses:this.getBonuses()
    }
  },
  methods:{
    getBonuses(){
      let extraStats={}
      for(let plug of this.plugsSocketed){
        if(!plug) continue
        for(const stat in plug.perkBonuses){
          if(stat in extraStats) extraStats[stat]+=plug.perkBonuses[stat].value
          else extraStats[stat]=plug.perkBonuses[stat].value
        }
      }
      return extraStats
    },
    getBonus(statName){
      if(statName in this.bonuses) return this.bonuses[statName]
      return 0
    }
  },
  watch: {
    plugsSocketed(){
        this.bonuses = this.getBonuses()
    }
  }
}
</script>

<style lang="scss" scoped>

  .stats{
    display:flex;
    flex-direction:row;
    gap:0.5rem;
  }

  .column{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

</style>