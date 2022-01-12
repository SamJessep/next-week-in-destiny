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
      :to="'/weeks/'+week.date"
    >
        {{week.date}}
    </nuxt-link>

    <div class="quick-bar">
      <nuxt-link data-button
        class="sticky-button"
        :to="'/weeks/'+nextReset.date"
      >
        This Week
      </nuxt-link>
      <nuxt-link data-button
        class="sticky-button"
        :to="'/weeks/'+thisReset.date"
      >
        Next Week
      </nuxt-link>
    </div>
  </div>
  <div class="controls-container">
    <nuxt-link :to="lastWeek? ('/weeks/'+lastWeek.date) : '#'" data-button data-page-control :class="'left'+(lastWeek?'':' disabled')" >◄</nuxt-link>
    <button class="open-btn" data-button @click="toggleOpenState">
      <span class="arrow down"/>
      <span class="btn-title">Weeks</span>
      <span class="arrow down"/>
    </button>
    <nuxt-link :to="nextWeek?('/weeks/'+nextWeek.date):'#'" data-button data-page-control :class="'right'+(nextWeek?'':' disabled')" >►</nuxt-link>
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
    },
    nextReset(){
      return getWeekWithOffset(this.weeks,new Date(), 1)
    },
    nextWeek(){
      console.log("NEXT", getWeekWithOffset(this.weeks,this.shownWeek, 1))
      return getWeekWithOffset(this.weeks,this.shownWeek, 1)
    },
    lastWeek(){
      console.log("LAST", getWeekWithOffset(this.weeks,this.shownWeek, -1))
      return getWeekWithOffset(this.weeks,this.shownWeek, -1)
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
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  z-index: 10;
  padding-top:0.5rem;
  border-radius: 0 0 0.5rem 0.5rem;
	transition: top 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  overflow-y: scroll;
  overflow-x: hidden;
  height: 100%;
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
  transition: top 1s cubic-bezier(0.34, 1.56, 0.64, 1), left 1s cubic-bezier(0.34, 1.56, 0.64, 1),border-color 1s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: block;
}

.arrow.up{
  transform: rotate(45deg);
}

.arrow.down{
  transform: rotate(225deg);
}



.arrow::before{
  position: absolute;
  top:9px;
  left:9px;
}

.arrow::after{
  position: absolute;
  top:2px;
  left:2px;
}

[data-button]:hover>.arrow::after, [data-button]:hover>.arrow::before{
  top:-5px;
  left:-5px;
}

[data-button]:hover>.arrow, [data-button]:hover>.arrow::after, [data-button]:hover>.arrow::before{
  border-color:rgb(240 221 184);
}

[data-page-control]{
  font-size: 2rem;
}

[data-page-control].right{
  margin-left: 0.7rem;
}

[data-page-control].left{
  margin-right: 0.7rem;
}

.btn-title{
  padding: 0 10px;
}

.quick-bar{
  position: sticky;
  bottom: 0;
  background-color: #212833;
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap:2rem;
  text-align: center;
}

[data-button].sticky-button{
  font-size: 1rem;
  padding: 0.25rem 0.5rem;
  flex-grow:1;
  display: flex;
  justify-content: center;
  margin: 1rem;
}

[data-button].sticky-button.nuxt-link-active{
  background-color: #626262;
  color: #a1a1a1;
  cursor: auto;
  pointer-events: none;
}

[data-button].sticky-button.nuxt-link-active::after{
  border: transparent;
}
</style>
