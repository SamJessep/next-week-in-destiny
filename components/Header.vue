<template>
  <div class="container">
    <nuxt-link to="/weeks" data-button>Weeks</nuxt-link>
    <h1>
      <slot/>
    </h1>
  </div>
</template>
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