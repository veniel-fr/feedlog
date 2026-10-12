// Resolves the active locale's BCP 47 language tag (e.g. 'en-US', 'zh-CN',
// 'fr-FR') from the per-locale `language` field declared in nuxt.config.ts.
// Intl APIs and third-party libraries want the full tag, not the short `code`,
// so this is the single source of truth instead of scattering ternaries like
// `locale === 'zh' ? 'zh-CN' : 'en-US'` across call sites.
export function useLocaleLanguage() {
  const { localeProperties } = useI18n()
  return computed(() => localeProperties.value.language ?? localeProperties.value.code)
}
