<template>    
  <div class="roll-content">
      <div class="header">
        <div class="title-bar">
          <h2 class="title">{{title}}</h2>
          <button data-button @click="closeModal()" class="close-btn">X</button>
        </div>
        <div class="screenshot-box outer reset-styles" >
          <div class="screenshot-container">
            <img class="screenshot" :src="'https://www.bungie.net'+item.screenshot" :alt="'screenshot of '+item.name" />
          </div>
        </div>
      </div>
      
      <div class="contents">
        <SocketGrid :sockets="item.perks" :onSocketsChanged="plugsChanged"/>
        <SocketStatGrid :stats="item.stats" :plugsSocketed="socketedPlugs"/>
      </div>
  </div>
</template>


<script>
export default {
  props:["title", "closeModal", "item"],
  mounted(){
    this.socketedPlugs = this.item.perks.map(_=>-1)
  },
  data(){
    return{
      socketedPlugs:[]
    }
  },
  methods:{
    plugsChanged(plugs){
      this.socketedPlugs=[]
      setTimeout(()=>{

        this.socketedPlugs=plugs
      },100)
    }
  }
}
</script>

<style scoped lang="scss">



.close-btn{
  width: 2rem;
  height: 2rem;
  padding: 0;
}

.title-bar{
    position: absolute;
    z-index: 1;
    margin: 0;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    left: 10px;
    right: 10px;
    padding: 0.5rem;
}

.screenshot-box{
  width: 100%;
  max-height: 40vh;
  max-width: 100%;
  position: relative;
}

.screenshot-container{
  height: 0;
  padding-top: 56.25%;
}

.screenshot{
  height: 100%;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
}


.roll-content{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 80vw;
  height: 90vh;
  background-color: $darkGray2;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  overflow-x: hidden;
  @include mobile{
    width: 100%;
    height: 100%;
  }
}

.contents{
  position: relative;
  display: flex;
  justify-content: space-around;
  @include mobile{
    flex-direction: column-reverse;
  }
}
</style>