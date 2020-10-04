<template>
  <div>
    <div class="text-3xl font-bold">
      <span class="font-vue mr-2">Vue</span>
      <span class="font-code">&lt;Code-Info/&gt;</span>
    </div>
    <vue-code-info ext="js" path="path/to/index.js">
      <code-example></code-example>
    </vue-code-info>
    <!-- <vue-code-info ext="js" path="path/to/index.js">
      <pre
        v-highlightjs
      ><code class="javascript">import VueCodeInfo from './lib/vue-code-info-info.vue'

export default {
  install(Vue) {
    Vue.component('code-info', VueCodeInfo)
  },
}</code></pre>
    </vue-code-info> -->
    <p class="mt-5">
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
