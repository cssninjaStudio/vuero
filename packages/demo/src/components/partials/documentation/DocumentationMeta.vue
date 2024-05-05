<script setup lang="ts">
import { kebabCase } from 'scule'
import type { ComponentMeta } from 'vue-component-meta'
const props = defineProps<{
  meta: ComponentMeta
  name: string
}>()
</script>

<template>
  <div>
    <DocumentationDemoCard v-if="props.meta.props.length">
      <div class="demo-title">
        <div class="content">
          <h3 :id="`${props.name}Props`">
            &lt;{{ props.name }}&gt; Props
            <a :href="`#${props.name}Props`">
              <VIcon
                class="toc-link-anchor"
                icon="lucide:link"
              />
            </a>
          </h3>
        </div>
      </div>
      <div class="content has-slimscroll-x">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Default</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="prop in props.meta.props"
              :key="prop.name"
            >
              <td>
                <span class="has-text-primary">:{{ kebabCase(prop.name) }}</span>
                <span
                  v-if="prop.required"
                  class="has-text-danger"
                > required </span>
                <div
                  v-if="prop.description"
                  class="has-text-muted"
                >
                  {{ prop.description }}
                </div>
                <div v-if="prop.tags.length">
                  <VTag
                    v-for="tag in prop.tags"
                    :key="tag.name"
                    class="mt-1"
                    color="solid"
                  >
                    @{{ tag.name }} {{ tag.text }}
                  </VTag>
                </div>
              </td>
              <td>
                <VMarkdownPreview
                  size="small"
                  :source="'```ts\n' + prop.default + '\n```'"
                />
              </td>
              <td>
                <VMarkdownPreview
                  size="small"
                  :source="'```ts\n' + prop.type + '\n```'"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocumentationDemoCard>
    <DocumentationDemoCard v-if="props.meta.events.length">
      <div class="demo-title">
        <div class="content">
          <h3 :id="`${props.name}Events`">
            &lt;{{ props.name }}&gt; Events
            <a :href="`#${props.name}Events`">
              <VIcon
                class="toc-link-anchor"
                icon="lucide:link"
              />
            </a>
          </h3>
        </div>
      </div>
      <div class="content has-slimscroll-x">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="prop in props.meta.events"
              :key="prop.name"
            >
              <td>
                <span class="has-text-primary">@{{ kebabCase(prop.name) }}</span>
              </td>
              <td>
                <VMarkdownPreview
                  size="small"
                  :source="'```ts\n' + prop.type + '\n```'"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocumentationDemoCard>
    <DocumentationDemoCard v-if="props.meta.exposed.length">
      <div class="demo-title">
        <div class="content">
          <h3 :id="`${props.name}Exposed`">
            &lt;{{ props.name }}&gt; Exposed
            <a :href="`#${props.name}Exposed`">
              <VIcon
                class="toc-link-anchor"
                icon="lucide:link"
              />
            </a>
          </h3>
        </div>
      </div>
      <div class="content has-slimscroll-x">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="prop in props.meta.exposed"
              :key="prop.name"
            >
              <td>
                <span class="has-text-primary">{{ prop.name }}</span>
              </td>
              <td>
                <VMarkdownPreview
                  size="small"
                  :source="'```ts\n' + prop.type + '\n```'"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocumentationDemoCard>
    <DocumentationDemoCard v-if="props.meta.slots.length">
      <div class="demo-title">
        <div class="content">
          <h3 :id="`${props.name}Slots`">
            &lt;{{ props.name }}&gt; Slots
            <a :href="`#${props.name}Slots`">
              <VIcon
                class="toc-link-anchor"
                icon="lucide:link"
              />
            </a>
          </h3>
        </div>
      </div>
      <div class="content has-slimscroll-x">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="prop in props.meta.slots"
              :key="prop.name"
            >
              <td>
                <span class="has-text-primary">#{{ prop.name }}</span>
              </td>
              <td>
                <VMarkdownPreview
                  size="small"
                  :source="'```ts\n' + prop.type + '\n```'"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </DocumentationDemoCard>
  </div>
</template>

<style scoped>
.toc-link-anchor {
  color: var(--light-text);
  margin-inline-start: 0.5rem;
  width: 1rem;
  height: 1rem;
  transition: color 0.2s;
  outline: none;

  &:hover,
  &:focus {
    color: var(--primary);
  }
}
</style>
