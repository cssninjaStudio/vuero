---
disable_code: true
slimscroll: true
---

### VTabs Slots

Here is the full slots available for `<VTabs />` component:

| Slot                   | Properties                                                                                                                                                   | Description               |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------- |
| #tab<br />**required** | <span class="is-array">`<{ activeValue: string }>`</span>                                                                                                    | Inner tab content         |
| #tab-link              | <span class="is-array">`<{`<br/>` tab: VTabsItem,`<br/>` index: number,`<br/>` activeValue: string,`<br/>` toggle: (value: string) => void,`<br/>`}>`</span> | The full tab link content |
| #tab-link-label        | <span class="is-array">`<{`<br/>` tab: VTabsItem,`<br/>` index: number,`<br/>` activeValue: string,`<br/>` toggle: (value: string) => void,`<br/>`}>`</span> | The tab link label        |
