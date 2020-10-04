<template>
  <div>
    <div class="text-3xl font-bold">
      <span class="font-vue">Vue</span> <span class="font-code">Code Info</span>
    </div>
    <vue-code-info ext="js" path="path/to/index.js">
      <code-example></code-example>
    </vue-code-info>
    <p>
      It's sooo beautiful!
    </p>
  </div>
</template>

<script>
import CodeExample from './code.md'

export default {
  components: {
    CodeExample,
  },
  data() {
    return {
      sourcecode: 'const s = new Date().toString()',
    }
  },
}
</script>

<style scoped>
.font-vue {
  font-family: 'Dosis', sans-serif;
}
.font-code {
  font-family: 'Source Code Pro', monospace;
}
</style>
