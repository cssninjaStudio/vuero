---
disable_code: true
slimscroll: true
---

### VFlexTable Slots

Here is the full slots available for `<VFlexTable />` component:

| Slot           | Properties                                                                                                                             | Description                    |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------ |
| #header        | <span class="is-null">`null`</span>                                                                                                    | All header area                |
| #header-column | <span class="is-array">`<{ column: VFlexTableColumn }>`</span>                                                                         | The header cell content        |
| #body          | <span class="is-null">`null`</span>                                                                                                    | All body area                  |
| #body-row-pre  | <span class="is-array">`<{`<br/>` row: any,`<br/>` columns: Record<string, VFlexTableColumn>,`<br/>` index: number,`<br/>`}>`</span>   | Display content before the row |
| #body-row      | <span class="is-array">`<{`<br/>` row: any,`<br/>` columns: Record<string, VFlexTableColumn>,`<br/>` index: number,`<br/>`}>`</span>   | The row content                |
| #body-row-post | <span class="is-array">`<{`<br/>` row: any,`<br/>` columns: Record<string, VFlexTableColumn>,`<br/>` index: number,`<br/>`}>`</span>   | Display content after the row  |
| #body-cell     | <span class="is-array">`<{`<br/>` row: any,`<br/>` column: VFlexTableColumn,`<br/>` index: number,`<br/>` value: any,`<br/>`}>`</span> | The cell content               |
