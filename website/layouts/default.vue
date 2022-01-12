<template>
<div>
  <Nuxt/>
  <Modal :modalComponent="$store.state.modalComponent" :modalProps="$store.state.modalProps" :shown="$store.state.showModal"/>
  {{$store.state.showModal}}
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
//   created() {
//     this.unsubscribe = this.$store.subscribe((mutation, state) => {
//       if (mutation.type === 'SHOW_DIALOG') {
//         console.log(`Updating to ${state.status}`);       
//       }
//     });
// },
}
</script>