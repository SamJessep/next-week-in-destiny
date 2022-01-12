<template>
    <div :class="'roll-overlay' + (rollsOpen ? ' open' : '')">
        <div class="roll-content">
            <div class="header">
                <h2>{{title}}</h2>
                <button data-button @click="toggleRollOverlay(false)">X</button>
            </div>

        </div>
    </div>
</template>


<script>
export default {
  props:["title", "open"],
  data(){
    return{
      rollsOpen:this.open
    }
  },
  methods:{
    toggleRollOverlay(open){
      this.rollsOpen=open
    }
  }
}
</script>

<style scoped>
.roll-overlay{
  display: none;
}

.roll-overlay.open{
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000021;
  z-index: 10;
  display: block;
}

.roll-content{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 80vw;
  height: 70vh;
  background-color: #212833;
  padding: 0.5rem;
}

.roll-content .header{
  display: flex;
  justify-content: space-between;
}
</style>