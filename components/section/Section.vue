<template>
  <details open data-panel :class="className">
  <summary>{{name}}</summary>
    <slot></slot>
  </details>
</template>

<script>
export default {
  props:["name", "className"]
}
</script>