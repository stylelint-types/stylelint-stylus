import type { RuleConfig } from 'stylelint-define-config'

export type IndentationOptions = RuleConfig<
  number | 'tab',
  {
    baseIndentLevel?: number | 'auto'
    except?: ('block' | 'value' | 'param')[]
    ignore?: ('value' | 'param' | 'inside-parens')[]
    indentInsideParens?: 'twice' | 'once-at-root-twice-in-block'
    indentClosingBrace?: boolean
  }
>
