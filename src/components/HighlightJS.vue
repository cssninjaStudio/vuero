<script setup lang="ts">
import type { PropType } from 'vue'
import { defineProps, onMounted, ref, watch } from 'vue'
import hljs from 'highlight.js/lib/core'
import typescript from 'highlight.js/lib/languages/typescript'
import javascript from 'highlight.js/lib/languages/javascript'
import css from 'highlight.js/lib/languages/css'
import scss from 'highlight.js/lib/languages/scss'
import json from 'highlight.js/lib/languages/json'
import bash from 'highlight.js/lib/languages/bash'
import markdown from 'highlight.js/lib/languages/markdown'
import xml from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('scss', scss)
hljs.registerLanguage('css', css)
hljs.registerLanguage('json', json)
hljs.registerLanguage('bash', bash)
hljs.registerLanguage('markdown', markdown)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('vue', () => { 
  return {
    subLanguage: "xml",
    contains: [
      hljs.COMMENT("<!--", "-->", {
        relevance: 10,
      }),
      {
        begin: /^(\s*)(<script>)/gm,
        end: /^(\s*)(<\/script>)/gm,
        subLanguage: "javascript",
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /^(\s*)(<script lang=["']ts["']>)/gm,
        end: /^(\s*)(<\/script>)/gm,
        subLanguage: "typescript",
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /^(\s*)(<style(\sscoped)?>)/gm,
        end: /^(\s*)(<\/style>)/gm,
        subLanguage: "css",
        excludeBegin: true,
        excludeEnd: true,
      },
      {
        begin: /^(\s*)(<style lang=["'](scss|sass)["'](\sscoped)?>)/gm,
        end: /^(\s*)(<\/style>)/gm,
        subLanguage: "scss",
        excludeBegin: true,
        excludeEnd: true,
      },
    ],
  }
})

const props = defineProps({
  code: {
    type: String,
    required: true,
  },
  language: {
    type: String as PropType<'auto' | 'typescript' | 'javascript' | 'scss' | 'json' | 'bash' | 'markdown'>,
    default: 'auto'
  },
})
const codeElement = ref<HTMLElement | null>(null)
const highlight = () => {
  if (props.code && codeElement.value !== null) {
    if (props.language === 'auto') {
      const highlighted = hljs.highlightAuto(props.code)
      codeElement.value.innerHTML = highlighted.value
      codeElement.value.classList.add(highlighted.language)
    } else {
      const highlighted = hljs.highlight(props.language, props.code)
      codeElement.value.innerHTML = highlighted.value
      codeElement.value.classList.add(props.language)
    }
  }
}

watch(props, () => {
  highlight()
}, { immediate: true, deep: true })

onMounted(() => {
  highlight()
})
</script>


<template>
  <div>
    <pre><code ref="codeElement" class="hljs"></code></pre>
  </div>
</template>

<style lang="scss">
.hljs {
  display: block;
  overflow-x: auto;
  padding: 0.5em 1em;
  color: #383a42;
  background: #fafafa;
}

.hljs-comment,
.hljs-quote {
  color: #a0a1a7;
  font-style: italic;
}

.hljs-doctag,
.hljs-keyword,
.hljs-formula {
  color: #a626a4;
}

.hljs-section,
.hljs-name,
.hljs-selector-tag,
.hljs-deletion,
.hljs-subst {
  color: #e45649;
}

.hljs-literal {
  color: #0184bb;
}

.hljs-string,
.hljs-regexp,
.hljs-addition,
.hljs-attribute,
.hljs-meta-string {
  color: #50a14f;
}

.hljs-built_in,
.hljs-class .hljs-title {
  color: #c18401;
}

.hljs-attr,
.hljs-variable,
.hljs-template-variable,
.hljs-type,
.hljs-selector-class,
.hljs-selector-attr,
.hljs-selector-pseudo,
.hljs-number {
  color: #986801;
}

.hljs-symbol,
.hljs-bullet,
.hljs-link,
.hljs-meta,
.hljs-selector-id,
.hljs-title {
  color: #4078f2;
}

.hljs-emphasis {
  font-style: italic;
}

.hljs-strong {
  font-weight: bold;
}

.hljs-link {
  text-decoration: underline;
}

.is-dark {
  .hljs {
    background: #474949;
    color: #d1d9e1;
  }

  .hljs-comment,
  .hljs-quote {
    color: #969896;
    font-style: italic;
  }

  .hljs-keyword,
  .hljs-selector-tag,
  .hljs-literal,
  .hljs-type,
  .hljs-addition {
    color: #c9c;
  }

  .hljs-number,
  .hljs-selector-attr,
  .hljs-selector-pseudo {
    color: #f99157;
  }

  .hljs-string,
  .hljs-doctag,
  .hljs-regexp {
    color: #8abeb7;
  }

  .hljs-title,
  .hljs-name,
  .hljs-section,
  .hljs-built_in {
    color: #b5bd68;
  }

  .hljs-variable,
  .hljs-template-variable,
  .hljs-selector-id,
  .hljs-class .hljs-title {
    color: #fc6;
  }

  .hljs-section,
  .hljs-name,
  .hljs-strong {
    font-weight: bold;
    // color: #f99157;
  }

  .hljs-symbol,
  .hljs-bullet,
  .hljs-subst,
  .hljs-meta,
  .hljs-link {
    color: #f99157;
  }

  .hljs-deletion {
    color: #dc322f;
  }

  .hljs-formula {
    background: #eee8d5;
  }

  .hljs-attr,
  .hljs-attribute {
    color: #81a2be;
  }

  .hljs-emphasis {
    font-style: italic;
  }
}
</style>