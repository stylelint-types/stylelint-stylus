import type { RuleConfig } from 'stylelint-define-config'

export type SelectorTypeNoUnknownOptions = RuleConfig<
  true,
  {
    ignore?: ('custom-elements' | 'default-namespace')[]
    ignoreNamespaces?: (string | RegExp)[]
    ignoreTypes?: (string | RegExp)[]
  }
>
