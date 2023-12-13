import type { RuleConfig } from 'stylelint-define-config'

export type PythonicOptions = RuleConfig<
  'always' | 'never',
  {
    atblock?: 'always' | 'never'
  }
>
