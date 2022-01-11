<template>
<div class="weeks-container">
  <div class="weeks-holder" :style="'top:'+ (open? '0' : '-110vh')" >
    <button @click="()=>setOpenState(false)" data-button class="close-btn">
      <span class="arrow up"/>
      <span class="btn-title">Close</span>
      <span class="arrow up"/>
    </button>
    <h2>Weeks</h2>
    <nuxt-link 
      class="week-item"
      v-for="week in $store.state.weeks" 
      :key="week.date" 
      :to="week == thisReset ? '/this-week' : '/weeks/'+week.date"
    >
        {{week == thisReset ? "This Week" : week.date}}
    </nuxt-link>
  </div>
  <div class="controls-container">
    <nuxt-link :to="'/weeks/'+getLastWeek().date" data-button data-page-control>◄</nuxt-link>
    <button class="open-btn" data-button @click="toggleOpenState">
      <span class="arrow down"/>
      <span class="btn-title">Weeks</span>
      <span class="arrow down"/>
    </button>
    <nuxt-link :to="'/weeks/'+getNextWeek().date" data-button data-page-control>►</nuxt-link>
  </div>
</div>
</template>

<script>
import {getThisWeek, getWeekWithOffset} from "~/util/dateHelpers"

export default {
  props:["weeks", "shownWeek"],
  computed:{
    thisReset(){
        return getThisWeek(this.weeks)
      }
  },
  data(){
    return{
      open:false
    }
  },
  methods:{
    toggleOpenState(){
      this.open=!this.open
    },
    setOpenState(state){
      this.open=state
    },
    getLastWeek(){
      return getWeekWithOffset(this.weeks,this.shownWeek, 0)
    },
    getNextWeek(){
      return getWeekWithOffset(this.weeks,this.shownWeek, 2)
    }
  },
}
</script>

<style scoped>
[data-button]{
  /* height: min-content; */
  margin: auto 0;
  display: flex;
  justify-content: space-between;
}

.controls-container{
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.close-btn{
  width: 100%;
}

.open-btn{
  /* width: 50vw; */
  flex-grow: 1;
  max-width: 450px;
}

.weeks-container{
  width: 100%;
  display: flex;
  justify-content: center;
}

.weeks-holder{
  background-color: #212833;
  position: absolute;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 10;
  padding-bottom: 2rem;
  padding-top:0.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
	transition: top 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}


.weeks-holder h2{
  color: rgb(242 193 97);
  margin: 0 auto;
  margin-bottom: 1.5rem;
}

.week-item{
  margin: 0 auto;
  font-size: 2rem;
}


.arrow, .arrow::after, .arrow::before{
  width: 1rem;
  height: 1rem;
  border-top: solid #212833 5px;
  border-left: solid #212833 5px;
  content: "";
  transition: transform 1s;
}

.arrow.up{
  transform: rotate(45deg);
}

.arrow.down{
  transform: rotate(225deg);
}



.arrow::before{
  position: absolute;
  transform: rotate(0) translate(0, 0.5rem);
}

.arrow::after{
  position: absolute;
  transform: rotate(0)  translate(-0.4rem, 0.1rem);
}

[data-button]:hover>.arrow::after, [data-button]:hover>.arrow::before{
  transform: rotate(0) translate(-0.8rem, -0.3rem);
}

[data-button]:hover>.arrow, [data-button]:hover>.arrow::after, [data-button]:hover>.arrow::before{
  border-color:rgb(240 221 184);
}

[data-page-control]{
  font-size: 2rem;
}

.btn-title{
  padding: 0 10px;
}
</style>
