<template>
<div class="layout-container">
  <Header :week="$store.state.header.week.date" >{{$store.state.header.title}}</Header>
  <WeekMenu :weeks="$store.state.appData.weeks" :shownWeek="$store.state.header.week.date"/>
  <Nuxt/>
  <Modal :modalComponent="$store.state.modalComponent" :modalProps="$store.state.modalProps" :shown="$store.state.showModal"/>
</div>
</template>


<script>
import { mapState, mapMutations } from 'vuex';

export default {
  data(){
    return{
      modalOpen:true
    }
  },
  methods:{
    toggleModal(open){
      this.modalOpen=open
    }
  }
}
</script>


<style lang="scss">
.layout-container{
  display: grid;
  grid-template:
    "header header"
    "menu content"
    auto/minmax(200px, 12vw)
}

@include mobile {
  .layout-container{
    grid-template:
      "menu"
      "header"
      "content"
  }
}
</style>