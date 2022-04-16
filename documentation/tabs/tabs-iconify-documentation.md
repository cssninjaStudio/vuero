---
selected: 'team'
---

### Icons

You can mix `Iconify`, `Font Awesome` and `Line Icons` in your tab elements.
The styling is already taken care of, just add the icons you want.
Check the markup for more details.

<!--code-->

```vue
<template>
  <VTabs
    selected="team"
    :tabs="[
      { label: 'Team', value: 'team', icon: 'fas fa-users' },
      { label: 'Projects', value: 'projects', icon: 'feather:box' },
      { label: 'Tasks', value: 'tasks', icon: 'lnil lnil-licencse' },
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

<VTabs selected="team" :tabs="[{ label: 'Team', value: 'team', icon: 'fas fa-users' },{ label: 'Projects', value: 'projects', icon: 'feather:box' },{ label: 'Tasks', value: 'tasks', icon: 'lnil lnil-licencse' }]">
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
