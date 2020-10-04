# **Vue Code Info**

[![](https://img.shields.io/npm/v/vue-code-info.svg?style=flat-square&color=cb3837&logo=npm&logoColor=ffffff)](https://www.npmjs.com/package/vue-code-info)
[![](https://img.shields.io/github/license/ewilan-riviere/vue-code-info.svg?style=flat-square&color=f05032&logo=git&logoColor=ffffff)](https://github.com/ewilan-riviere/vue-code-info/blob/master/LICENSE)

[![node.js](https://img.shields.io/static/v1?label=Node.js&message=v11.15&color=339933&style=flat-square&logo=node.js&logoColor=ffffff)](https://nodejs.org/en/)
[![vue.js](https://img.shields.io/static/v1?label=Vue.js&message=v2.6&color=4FC08D&style=flat-square&logo=vue.js&logoColor=ffffff)](https://vuejs.org/)

Display a header to code blocks in markdown for example with color of language and option for file path. It's for guides about plugins or frameworks.

![vue-code-info](./lib/vue-code-info-example.jpg)

## **Documentation**

Install it with Yarn or NPM

```bash
yarn add -D vue-code-info
```

**OR**

```bash
npm i vue-code-info --save-dev
```

Import it, ES6 way, in `main.js` / `app.js` file

```js
import VueCodeInfo from 'vue-code-info'

Vue.use(VueCodeInfo)
```

### *Usage*

Use it in a `.vue` file

```vue
<template>
  <div>
    <vue-code-info ext="js" path="index.js">
      <pre><code>import VueCodeInfo from './lib/vue-code-info.vue'

      export default {
        install(Vue) {
          Vue.component('vue-code-info', VueCodeInfo)
        },
      }</pre></code>
    </vue-code-info>
  </div>
</template>
```

Use in `.md` in [vuepress](https://vuepress.vuejs.org/) or [nuxt / content](https://content.nuxtjs.org/)

```md
## Example of code

<vue-code-info ext="js" path="index.js">

```js
import VueCodeInfo from './lib/vue-code-info.vue'

export default {
  install(Vue) {
    Vue.component('vue-code-info', VueCodeInfo)
  },
}
```

</vue-code-info>
```

### *API*

| Props        | Type    | Default | Describe                                                                   |
|--------------|---------|---------|----------------------------------------------------------------------------|
| ext          | String  | ''      | Extension of file, display it on header and get correct color if available |
| path         | String  | ''      | Path of the file, useful if it's guide for a framework                     |
| hasMargin    | Boolean | true    | To get margin top and bottom                               |
| notReachable | Boolean | false   | To apply a layer to prevent user to get code                               |

## **License**

**MIT** &copy; [**@ewilan-riviere**](https://github.com/ewilan-riviere)
