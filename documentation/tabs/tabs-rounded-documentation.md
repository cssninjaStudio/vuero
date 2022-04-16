---
selected: 'team'
---

### Rounded Toggle Tabs

Tabs can be displayed in exclusive toggle layout.
To display rounded toggle tabs, use the `type="rounded"`
attribute on the element.
Check the markup for more details.

<!--code-->

```vue
<template>
  <VTabs
    type="rounded"
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

<VTabs type="rounded" selected="team" :tabs="[{ label: 'Team', value: 'team' },{ label: 'Projects', value: 'projects' },{ label: 'Tasks', value: 'tasks' }]">
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
