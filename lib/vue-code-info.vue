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
.code-default-bg-color {
  background-color: #000000;
}

.code-block {
  .font-sans {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
      'Noto Color Emoji';
  }
  .not-reachable {
    position: absolute;
    z-index: 4;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .copy-it {
    position: absolute;
    display: flex;
    top: 0rem;
    right: 0;
    color: white;
    z-index: 3;
    height: 3rem;
    width: 3rem;
    transition: background-color 0.3s;
    cursor: pointer;
    border-top-right-radius: 0.3rem;
    span {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      z-index: 2;
      margin: auto;
      svg {
        fill: white;
        transition: fill 0.3s;
      }
    }
    &:hover {
      // background-color: rgba(0, 0, 0, .5);
      // svg {
      //   fill: lightgray !important;
      // }
    }
  }
  .code-heading {
    position: relative;
    z-index: 3;
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: -20px;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    text-align: left;
    padding: 0 20px;
    box-sizing: border-box;
    color: white;

    .expand {
      padding: 0 0.5rem;
    }

    $techs: 'js' #f7df1e 'JS' #000000, 'blade' #ff2d20 'BLADE',
      'php' #777bb4 'PHP', 'nginx' #269539 'NGINX', 'json' #000000 'JSON',
      'env' #000000 'DOTENV', 'sh' #000000 'SH', 'apache' #d22128 'APACHE',
      'ini' #000000 'INI', 'output' #000000 'Terminal output',
      'mysql' #4479a1 'MySQL', 'ps' #012456 'PowerShell',
      'psa' #012456 'PowerShell (Admin)', 'json' #000000 'JSON',
      'svg' #000000 'SVG', 'vue' #4fc08d 'VUE', 'md' #000000 'MD',
      'css' #1572b6 'CSS', 'sass' #cc6699 'SASS', 'scss' #cc6699 'SCSS',
      'default' #000000 '';

    @each $name, $color, $content, $textColor in $techs {
      &__#{$name} {
        color: $textColor;
        background-color: $color;
        &::before {
          content: $content;
        }
      }
    }
  }
}
.code-block-margin {
  margin-top: 1.5rem;
}
</style>
