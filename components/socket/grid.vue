<template>
  <div class="grid">
    <div class="column" v-for="(socket,index) in sockets" :key="index">
      <socketPlugs :plugs="socket.plugs" v-if="socket.name" :column="index" :columnName="socket.name"/>
    </div>
  </div>
</template>

<script>
export default {
  props:['sockets']
}
</script>

<style scoped lang="scss">
.grid,.column{
  display: flex;
}

.grid{
  padding-top: 0.5rem;
  flex-direction: row;
}

.column{
  flex-direction: column;
}
</style>