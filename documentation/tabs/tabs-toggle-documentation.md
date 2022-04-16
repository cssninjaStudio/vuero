---
selected: 'team'
---

### Toggle Tabs

Tabs can be displayed in an old school boxed layout.
To display boxed tabs, use the `type="toggle"` attribute on the element.
Check the markup for more details.

<!--code-->

```vue
<template>
  <VTabs
    type="toggle"
    selected="team"
    :tabs="[
      { label: 'Team', value: 'team' },
      { label: 'Projects', value: 'projects' },
      { label: 'Tasks', value: 'tasks' },
    ]"
  >
    <template #tab="{ activeValue }">
      <p v-if="activeValue === 'team'">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus?
        Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae
        diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'projects'">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus?
        Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae
        diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
      <p v-else-if="activeValue === 'tasks'">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid iudicant sensus?
        Primum quid tu dicis breve? Etiam beatissimum? Ne discipulum abducam, times. Quae
        diligentissime contra Aristonem dicuntur a Chryippo. Duo Reges: constructio
        interrete.
      </p>
    </template>
  </VTabs>
</template>
```

<!--/code-->

<!--example-->

<VTabs type="toggle" selected="team" :tabs="[{ label: 'Team', value: 'team' },{ label: 'Projects', value: 'projects' },{ label: 'Tasks', value: 'tasks' }]">
  <template #tab="{ activeValue }">
    <p v-if="activeValue === 'team'">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
      beatissimum? Ne discipulum abducam, times. Quae
      diligentissime contra Aristonem dicuntur a Chryippo. Duo
      Reges: constructio interrete.
    </p>
    <p v-else-if="activeValue === 'projects'">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
      beatissimum? Ne discipulum abducam, times. Quae
      diligentissime contra Aristonem dicuntur a Chryippo. Duo
      Reges: constructio interrete.
    </p>
    <p v-else-if="activeValue === 'tasks'">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Quid iudicant sensus? Primum quid tu dicis breve? Etiam
      beatissimum? Ne discipulum abducam, times. Quae
      diligentissime contra Aristonem dicuntur a Chryippo. Duo
      Reges: constructio interrete.
    </p>
  </template>
</VTabs>

<!--/example-->
