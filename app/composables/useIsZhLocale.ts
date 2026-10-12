// Whether the active locale is a Chinese variant. Centralizes the one-off
// `locale === 'zh'` / `locale.value.startsWith('zh')` checks used to pick
// Chinese-specific content (e.g. `scenarioZh` over `scenario`). `startsWith`
// keeps it correct for any future `zh-TW` / `zh-Hant` codes.
export function useIsZhLocale() {
  const { locale } = useI18n()
  return computed(() => locale.value.startsWith('zh'))
}
