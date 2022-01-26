<template>
<div class="background">
  <div class="inner" :style="`width:${baseStat}%; max-width:100%;`">
    <div :class="`bonus ${this.hasBuff ? 'good':'bad'}`" :style="`left:${baseStat}%; width:${bonusAmount}%`"></div>
  </div>
</div>
</template>

<script>
export default {
  props:['value', 'max', 'min', 'bonus'],
  computed:{
    baseStat(){
      return (this.value/this.max)*100
    },
    hasBuff(){
      return this.bonus>0
    },
    bonusStartPosition(){
      return this.hasBuff ? this.baseStat : this.baseStat-this.bonusAmount
    },
    bonusAmount(){
      const bonusChange = ((Math.abs(this.bonus)/this.max)*100)
      if(this.hasBuff && this.baseStat+bonusChange>this.max) return this.max-this.baseStat
      if(!this.hasBuff && this.baseStat-bonusChange<this.min) return this.baseStat
      return bonusChange
    }
  }
}
</script>

<style lang="scss" scoped>
.background{
  background-color: $darkGray4;
  width: 100px;
  height: 10px;
  position: relative;
}

.inner{
  height: 100%;
  background-color: $lightGray2;
}

.bonus{
  height: 100%;
  position: absolute;
  right: 0;
  &.good{
    background-color: $goodColor;
  }
  &.bad{
     background-color: $badColor;
  }
}
</style>