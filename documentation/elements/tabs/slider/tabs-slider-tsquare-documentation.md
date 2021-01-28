---
selected: 'team'
---

### Squared Slider Tabs 3x

Vuero provides special navigation tabs that you can use to build nice
looking and optimized layouts. Tabs work with a javascript implementation.
Check the markup for more details. These tabs only support 3 items.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const selected = ref<'team' | 'projects' | 'tasks'>('team')
</script>

<template>
  <div class="card-inner">
    <div class="tabs-wrapper is-triple-slider is-squared">
      <div class="tabs-inner">
        <div class="tabs">
          <ul>
            <li :class="[selected === 'team' && 'is-active']">
              <a @click="selected = 'team'"><span>Team</span></a>
            </li>
            <li :class="[selected === 'projects' && 'is-active']">
              <a @click="selected = 'projects'"><span>Projects</span></a>
            </li>
            <li :class="[selected === 'tasks' && 'is-active']">
              <a @click="selected = 'tasks'"><span>Tasks</span></a>
            </li>
            <li class="tab-naver"></li>
          </ul>
        </div>
      </div>

      <div class="tab-content" :class="[selected === 'team' && 'is-active']">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
          sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
          abducam, times. Quae diligentissime contra Aristonem dicuntur a
          Chryippo. Duo Reges: constructio interrete.
        </p>
      </div>

      <div
        class="tab-content"
        :class="[selected === 'projects' && 'is-active']"
      >
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
          sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
          abducam, times. Quae diligentissime contra Aristonem dicuntur a
          Chryippo. Duo Reges: constructio interrete.
        </p>
      </div>

      <div class="tab-content" :class="[selected === 'tasks' && 'is-active']">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
          sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
          abducam, times. Quae diligentissime contra Aristonem dicuntur a
          Chryippo. Duo Reges: constructio interrete.
        </p>
      </div>
    </div>
  </div>
</template>
```

<!--/code-->

<!--example-->

<div class="card-inner">
  <div class="tabs-wrapper is-triple-slider is-squared">
    <div class="tabs-inner">
      <div class="tabs">
        <ul>
          <li :class="[frontmatter.selected === 'team' && 'is-active']">
            <a @click="frontmatter.selected = 'team'">
              <span>Team</span>
            </a>
          </li>
          <li :class="[frontmatter.selected === 'projects' && 'is-active']">
            <a @click="frontmatter.selected = 'projects'">
              <span>Projects</span>
            </a>
          </li>
          <li :class="[frontmatter.selected === 'tasks' && 'is-active']">
            <a @click="frontmatter.selected = 'tasks'">
              <span>Tasks</span>
            </a>
          </li>
          <li class="tab-naver"></li>
        </ul>
      </div>
    </div>
    <div
      class="tab-content"
      :class="[frontmatter.selected === 'team' && 'is-active']"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
        sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
        abducam, times. Quae diligentissime contra Aristonem dicuntur a
        Chryippo. Duo Reges: constructio interrete.
      </p>
    </div>
    <div
      class="tab-content"
      :class="[frontmatter.selected === 'projects' && 'is-active']"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
        sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
        abducam, times. Quae diligentissime contra Aristonem dicuntur a
        Chryippo. Duo Reges: constructio interrete.
      </p>
    </div>
    <div
      class="tab-content"
      :class="[frontmatter.selected === 'tasks' && 'is-active']"
    >
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant
        sensus? Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum
        abducam, times. Quae diligentissime contra Aristonem dicuntur a
        Chryippo. Duo Reges: constructio interrete.
      </p>
    </div>
  </div>
</div>

  <!--/example-->
