<template>
  <details open data-panel>
  <summary>{{name}}</summary>
    <slot></slot>
  </details>
</template>

<script>
export default {
  props:["name"]
}
</script>