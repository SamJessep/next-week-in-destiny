<template>
  <div class="container">
    <nuxt-link v-if="!this.hideBack" to="/" data-button>Back</nuxt-link>
    <h1>
      <slot/>
    </h1>
  </div>
</template>

<script>
export default {
  props:["hideBack"]
}
</script>

<style scoped>
.container{
  display: flex;
  width: 100%;
  top:0;
  position: sticky;
  background-color: #14191e;
  z-index:6;
  gap: 1rem;
  margin-bottom: 0.5rem;
}

[data-button]{
  height: min-content;
  margin: auto 0;
}
</style>