<script setup lang="ts">
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'

// Thin forwarding wrapper around md-editor's MdEditor that binds `theme` to the
// global `<html>.dark` contract and `language` to the active locale, so every
// editor follows the app theme (incl. live OS changes) and locale without each
// call site remembering to pass them. All other props/listeners flow through
// via $attrs; v-model and named slots (#defToolbars / #defFooters) are
// forwarded.
defineOptions({ inheritAttrs: false })
const model = defineModel<string>()
const theme = useEditorTheme()
const language = useMdLanguage()
</script>

<template>
  <MdEditor v-model="model" :theme="theme" :language="language" v-bind="$attrs">
    <template v-for="(_, name) in $slots" #[name]="slotProps">
      <slot :name="name" v-bind="slotProps ?? {}" />
    </template>
  </MdEditor>
</template>
