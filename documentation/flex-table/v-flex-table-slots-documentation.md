---
disable_code: true
---

### VFlexTable Slots

Here is the full slots available for `<VFlexTable />` component:

| Slot           | Properties                                                                                                                             | Description             |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- |
| #header        | <span class="is-null">`null`</span>                                                                                                    | All header area         |
| #header-column | <span class="is-array">`<{ column: VFlexTableColumn }>`</span>                                                                         | The header cell content |
| #body          | <span class="is-null">`null`</span>                                                                                                    | All body area           |
| #body-row      | <span class="is-array">`<{`<br/>` row: any,`<br/>` columns: Record<string, VFlexTableColumn>,`<br/>` index: number,`<br/>`}>`</span>   | The row content         |
| #body-cell     | <span class="is-array">`<{`<br/>` row: any,`<br/>` column: VFlexTableColumn,`<br/>` index: number,`<br/>` value: any,`<br/>`}>`</span> | The cell content        |
