<template>
<div>
  <Header :week="$store.state.header.week.date" >{{$store.state.header.title}}</Header>
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
