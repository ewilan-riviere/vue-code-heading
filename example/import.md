# Importation

## In Vue component

```vue
<template>
  <div>
    <vue-code-info ext="js" path="path/to/index.js">
      <code-example></code-example>
    </vue-code-info>
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
```

`code.md`

```md
```js
import VueCodeInfo from './lib/vue-code-info-info.vue'

export default {
  install(Vue) {
    Vue.component('code-info', VueCodeInfo)
  },
}
```
