<script setup lang="ts">
import { MdPreview } from 'md-editor-v3'
import 'md-editor-v3/lib/preview.css'

// Read-only counterpart of ThemedMdEditor: forwards everything (incl. the
// one-way model-value) via $attrs and binds `theme` to the global `<html>.dark`
// contract and `language` to the active locale so rendered markdown follows the
// app theme and locale automatically.
defineOptions({ inheritAttrs: false })
const theme = useEditorTheme()
const language = useMdLanguage()
</script>

<template>
  <MdPreview :theme="theme" :language="language" v-bind="$attrs" />
</template>
