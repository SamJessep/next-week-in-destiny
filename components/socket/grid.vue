<template>
  <div class="grid">
    <div class="column" v-for="(socket,index) in sockets" :key="index">
      <socketPlugs :plugs="socket.plugs" v-if="socket.name" :column="index" :columnName="socket.name" :onSocketChange="socketChanged"/>
    </div>
  </div>
</template>

<script>
export default {
  props:['sockets','onSocketsChanged'],
  computed:{
    selectedPlugs(){
      return this.sockets.map(_=>-1)
    }
  },
  methods:{
    socketChanged(column,plug){
      this.selectedPlugs[column]=plug
      const selectedPlugPerks = this.selectedPlugs.map((plugIndex,socketIndex)=>this.sockets[socketIndex].plugs[plugIndex])
      this.onSocketsChanged(this.selectedPlugs)
    }
  }
}
</script>

<style scoped lang="scss">
.grid,.column{
  display: flex;
}

.grid{
  padding-top: 0.5rem;
  flex-direction: row;
  gap:0.1rem;
}

.column{
  flex-direction: column;
}
</style>