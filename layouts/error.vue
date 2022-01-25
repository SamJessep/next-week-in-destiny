<template>
<div class="background">
  <div class="container">
    <div :class="'banner' +(open?' open':'')">
      <div class="banner-center">
        <div class="banner-left">
          <div class="banner-icon">
            !
            <div class="icon-background"></div>
          </div>
        </div>
        <div class="banner-right">
          <div class="top">
            <h1 class="title">Error {{error.statusCode}}!</h1>
            <!-- <h1 v-if="error.statusCode === 404" class="title">Page not found</h1>
            <h1 v-else class="title">An error occurred</h1> -->
          </div>
          <div class="middle">
            <div class="message">{{error.message}}</div>
          </div>
          <div class="bottom">
            <NuxtLink to="/" class="action">Return to home page</NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blank',
  data(){
    return{
      open:false
    }
  },
  mounted(){
    console.error(this.error)
    setTimeout(()=>this.open=true,1000)
  }
}
</script>

<style scoped lang="scss">
.background{
  background-color: black;
  position: absolute;
  width: 100%;
  height: 100%;
}

.container{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.banner{
  background-color: #080808;
  border-top: solid #6e2424 5px;
  width: 100%;
  opacity: 0;
  transform: scaleX(0);
  transition: transform 0.25s ease-in, opactity 0.25s linear;
}

.banner.open{
  opacity: 1;
  transform: scaleX(1);
}

.banner-center{
  display: grid;
  grid-template-columns: 1fr 2fr;
}

.banner-left {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.banner-icon{
  width: 50px;
  height: 50px;
  position: relative;
  font-size: 3rem;
  color: #963030;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  margin-right: 20px;
}

.icon-background{
  width: 40px;
  height: 40px;
  background: #160c0c;
  border-radius: 100%;
  position: absolute;
  z-index: -1;
}

.banner-icon::after{
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    border: 2.5px solid #792829;
    width: 45px;
    height: 45px;
    transform: rotate(45deg);
}

.banner-icon::before{
    content: "";
    width: 53px;
    position: absolute;
    height: 53px;
    left: -3px;
    top: -3px;
    border: 1.5px solid #411818;
    transform: rotate(45deg);
}

.banner-right .top{
  background-color: #180e0e;
}

.banner-right .top h1{
  padding: 1rem;
  margin: 0;
}

.banner-right .middle{
  background-color: #0b0b0b;
}

.banner-right .middle .message{
  padding: 1rem;
}

.banner-right .bottom{
  background-color: #000;
}

.banner-right .bottom .action{
  color:white;
  padding-left: 1rem;
}
</style>