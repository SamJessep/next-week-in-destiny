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

<style scoped lang="scss">

header{
  grid-area: header;
  width: 100%;
  top:0;
  position: sticky;
  background-color: $darkGray1;
  z-index:6;
  margin-bottom: 0.5rem;
  height: 80px;
  display: flex;
  align-items: center;
}


@include mobile {
  header{
    top:71px;
  }
}

</style>