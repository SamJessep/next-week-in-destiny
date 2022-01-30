<template>
  <div class="stat-grid">
    <h1>Stats</h1>
    <div class="stats">
      <div class="labels column">
        <label v-for="stat in display_stats" :key="stat.name+'_label'">
          {{stat.name}}
        </label>
      </div>
      <div class="meters column">
        <socketStatMeter class="stat-bar" v-for="stat in display_stats" :key="stat.name+'_bar'" :value="stat.value" :max="stat.max" min="0" :bonus="getBonus(stat.name)"/>
      </div>
      <div class="amounts column">
        <p class="amount" v-for="stat in display_stats" :key="stat.name+'_amount'">
            {{stat.value}}
            <span :class="'modifier '+(bonus_text[stat.name]>0?'perk':'nerf')">
              {{bonus_text[stat.name]}}
              <span v-if="bonus_text[stat.name]!=0">({{clamp(stat.max,0,(stat.value+bonus_text[stat.name]))}})</span>
            </span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:["stats","plugsSocketed"],
  computed:{
    display_stats(){
      const returnStats = {}
      Object.keys(this.stats).forEach(statName=>{
        if(!this.hiddenStats.includes(statName)){
          returnStats[statName]=this.stats[statName]
        }
      })
      return returnStats
    },
    bonus_text(){
      const returnObj = {}
      Object.keys(this.stats).map(name=>
        this.bonuses[name] + this.bonuses[name]>0 ? 
          this.bonuses[name] : 
            (this.bonuses[name] < 0) ? 
            this.bonuses[name] : ''
      ).forEach((text,index)=>{
        const name = Object.keys(this.stats)[index]
        returnObj[name]=text
      })
      return returnObj
    }
  },
  data(){
    return {
      bonuses:this.getBonuses(),
      hiddenStats:["Attack", "Power",]
    }
  },
  methods:{
    getBonuses(){
      let extraStats={}
      for(const statName in this.stats){
        extraStats[statName] = 0
      }
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
    },
    clamp(max,min,number){
      if(number>max) return max
      if(number<min) return min
      return number
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

  .modifier{
    margin-left: 5px;
  }

  .perk{
    color:$goodColor;
    &::before{
      content: "+";
    }
  }

  .nerf{
    color:$badColor;
  }

</style>