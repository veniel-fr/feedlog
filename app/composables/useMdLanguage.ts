// Language tag for md-editor-v3. The editor ships only two built-in UI
// languages — 'zh-CN' and 'en-US' — so non-Chinese locales (French included,
// until a `languageUserDefined` pack is registered via md-editor's `config`)
// fall back to English. Kept in one place so every editor follows the active
// locale without each call site reimplementing the mapping.
export function useMdLanguage() {
  const isZh = useIsZhLocale()
  return computed(() => (isZh.value ? 'zh-CN' : 'en-US'))
}
