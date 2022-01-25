<template>
<pre>
    {{description}}
</pre>
</template>

<script>
import tippy from 'tippy.js';
import 'tippy.js/dist/tippy.css';
export default {
  props:["name", "description"],

}
</script>
