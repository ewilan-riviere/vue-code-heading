<template>
  <div
    :class="{ 'code-block-margin': hasMargin }"
    class="code-block"
    style="position: relative;"
  >
    <div v-if="notReachable" class="not-reachable"></div>
    <div :class="['code-heading', colorClass]" class="code-default-bg-color">
      <span v-if="!validExt">
        {{ ext }}
      </span>
      <span v-if="path">
        <span class="expand">·</span><i>{{ path }}</i>
      </span>
    </div>
    <slot></slot>
    <div class="copy-it forward-head"></div>
  </div>
</template>

<script>
export default {
  name: 'VueCodeInfo',
  props: {
    ext: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },
    hasMargin: {
      type: Boolean,
      default: true,
    },
    notReachable: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      validExt: false,
    }
  },
  computed: {
    colorClass() {
      let exts = [
        'nginx',
        'json',
        'js',
        'env',
        'sh',
        'apache',
        'ini',
        'output',
        'mysql',
        'psa',
        'ps',
        'php',
        'blade',
        'svg',
        'vue',
        'md',
        'css',
        'sass',
        'scss',
      ]
      exts.forEach((ext) => {
        if (ext === this.ext) {
          this.validExt = true
        }
      })

      let bgColor = this.validExt
        ? this.ext
          ? `code-heading__${this.ext}`
          : 'code-heading__default'
        : 'code-heading__default'
      return bgColor
    },
  },
}
</script>

<style lang="scss">
@import './assets/style.scss';
</style>
