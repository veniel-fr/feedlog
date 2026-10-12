// `locale` is expected to be a BCP 47 language tag (e.g. 'en-US', 'zh-CN',
// 'fr-FR'). Callers resolve it from the i18n config via useLocaleLanguage();
// this shared util stays locale-agnostic rather than hardcoding any mapping.
export function formatConversationTime(value: string | Date, locale: string, justNow: string, now: number): string {
  const date = new Date(value)
  if (!Number.isFinite(date.getTime())) return ''
  const minutes = Math.floor(Math.max(0, now - date.getTime()) / 60000)
  if (minutes < 1) return justNow
  if (minutes < 60) return `${minutes}m`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours}h`
  const days = Math.floor(hours / 24)
  if (days < 7) return `${days}d`
  return date.toLocaleDateString(locale, {
    month: 'short', day: 'numeric',
    ...(date.getFullYear() !== new Date(now).getFullYear() ? { year: 'numeric' as const } : {}),
  })
}
