import type { RuleConfig } from 'stylelint-define-config'

export type HashObjectPropertyCommaOptions = RuleConfig<
  'always' | 'never',
  {
    trailing?: 'always' | 'never'
  }
>
