---
state:
  selected: 'team'
---

### Tabs

Vuero provides styled navigation tabs that you can use to build nice
looking and optimized layouts. Tabs work with a javascript implementation.
Check the markup for more details.

<!--code-->

```vue
<script setup lang="ts">
import { ref } from 'vue'

const selected = ref<'team' | 'projects' | 'tasks'>('team')
</script>

<template>
  <div class="card-inner">
    <div class="tabs-wrapper">
      <div class="tabs-inner">
        <div class="tabs">
          <ul>
            <li :class="[selected === 'team' && 'is-active']">
              <a @click="selected = 'team'">Team</a>
            </li>
            <li :class="[selected === 'projects' && 'is-active']">
              <a @click="selected = 'projects'">Projects</a>
            </li>
            <li :class="[selected === 'tasks' && 'is-active']">
              <a @click="selected = 'tasks'">Tasks</a>
            </li>
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

<div class="tabs-inner">
  <div class="tabs">
    <ul>
      <li :class="[frontmatter.state.selected === 'team' && 'is-active']">
        <a @click="frontmatter.state.selected = 'team'">Team</a>
      </li>
      <li :class="[frontmatter.state.selected === 'projects' && 'is-active']">
        <a @click="frontmatter.state.selected = 'projects'">Projects</a>
      </li>
      <li :class="[frontmatter.state.selected === 'tasks' && 'is-active']">
        <a @click="frontmatter.state.selected = 'tasks'">Tasks</a>
      </li>
    </ul>
  </div>
</div>

<div
  class="tab-content"
  :class="[frontmatter.state.selected === 'team' && 'is-active']"
>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
    beatissimum? Ne discipulum abducam, times. Quae
    diligentissime contra Aristonem dicuntur a Chryippo. Duo
    Reges: constructio interrete.
  </p>
</div>

<div
  class="tab-content"
  :class="[frontmatter.state.selected === 'projects' && 'is-active']"
>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
    beatissimum? Ne discipulum abducam, times. Quae
    diligentissime contra Aristonem dicuntur a Chryippo. Duo
    Reges: constructio interrete.
  </p>
</div>

<div
  class="tab-content"
  :class="[frontmatter.state.selected === 'tasks' && 'is-active']"
>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    Quid iudicant sensus? Primum quid tu dicis breve? Etiam
    beatissimum? Ne discipulum abducam, times. Quae
    diligentissime contra Aristonem dicuntur a Chryippo. Duo
    Reges: constructio interrete.
  </p>
</div>

<!--/example-->
