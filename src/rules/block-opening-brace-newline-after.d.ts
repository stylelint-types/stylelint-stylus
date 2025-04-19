import type { RuleConfig } from 'stylelint-define-config'

export type BlockOpeningBraceNewlineAfterOptions = RuleConfig<
  'always' | 'rules' | 'always-multi-line' | 'never-multi-line',
  {
    ignore?: ('rules')[]
  }
>
