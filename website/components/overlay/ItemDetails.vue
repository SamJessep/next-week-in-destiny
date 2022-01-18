<template>    
  <div class="roll-content">
      <div class="header">
        <h2>{{title}}</h2>
        <div class="screenshot-box outer reset-styles" >
          <div class="screenshot-container">
            <img class="screenshot" :src="'https://www.bungie.net/'+item.screenshot" :alt="'screenshot of '+item.name" />
          </div>
        </div>
      </div>
      <button data-button @click="closeModal()" class="close-btn">X</button>
      <div class="contents">
        <SocketGrid :sockets="item.perks"/>
      </div>
  </div>
</template>


<script>
export default {
  props:["title", "closeModal", "item"],
}
</script>

<style scoped>

.close-btn{
  width: 2rem;
  height: 2rem;
  padding: 0;
  margin: auto;
  position: absolute;
  top: 0.5rem;
  right: 0.5rem ;
}

.header>h2{
  position: absolute;
  z-index: 1;
  margin: 0.5rem;
}

.screenshot-box{
  width: 100%;
  height: 100%;
  max-width: 100%;
  position: relative;
}

.screenshot-container{
  height: 0;
  padding-top: 56.25%;
}

.screenshot{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}


.roll-content{
  position: absolute;
  top:50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 80vw;
  height: 90vh;
  background-color: #212833;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
  overflow-x: hidden;
}

.contents{
  flex-grow: 1;
}
</style>