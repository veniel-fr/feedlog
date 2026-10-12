import { useNow } from '@vueuse/core'
import { formatConversationTime } from '#layers/feedlog/shared/utils/conversation-time'

export function useConversationTime() {
  const { t } = useI18n()
  const language = useLocaleLanguage()
  const now = useNow({ interval: 30000 })
  return (value: string | Date) => formatConversationTime(value, language.value, t('time.justNow'), now.value.getTime())
}
