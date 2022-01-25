<template>
  <header>
    <h1>
      <slot/>
    </h1>
  </header>
</template>

<script>
export default {
}
</script>

<style scoped>
header{
  grid-area: header;
  width: 100%;
  top:0;
  position: sticky;
  background-color: #14191e;
  z-index:6;
  margin-bottom: 0.5rem;
  height: 80px;
}


@media only screen and (max-width: 700px) {
  header{
    top:72px;
  }
}

</style>