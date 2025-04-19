import type { AtExtendStyleOptions } from './rules/at-extend-style'
import type { AtRuleEmptyLineBeforeOptions } from './rules/at-rule-empty-line-before'
import type { AtRuleNameSpaceAfterOptions } from './rules/at-rule-name-space-after'
import type { AtRuleNoUnknownOptions } from './rules/at-rule-no-unknown'
import type { BlockClosingBraceEmptyLineBeforeOptions } from './rules/block-closing-brace-empty-line-before'
import type { BlockClosingBraceNewlineAfterOptions } from './rules/block-closing-brace-newline-after'
import type { BlockClosingBraceNewlineBeforeOptions } from './rules/block-closing-brace-newline-before'
import type { BlockClosingBraceSpaceAfterOptions } from './rules/block-closing-brace-space-after'
import type { BlockClosingBraceSpaceBeforeOptions } from './rules/block-closing-brace-space-before'
import type { BlockOpeningBraceNewlineAfterOptions } from './rules/block-opening-brace-newline-after'
import type { BlockOpeningBraceSpaceAfterOptions } from './rules/block-opening-brace-space-after'
import type { BlockOpeningBraceSpaceBeforeOptions } from './rules/block-opening-brace-space-before'
import type { ColorHexCaseOptions } from './rules/color-hex-case'
import type { DeclarationColonOptions } from './rules/declaration-colon'
import type { HashObjectPropertyCommaOptions } from './rules/hash-object-property-comma'
import type { IndentationOptions } from './rules/indentation'
import type { MediaFeatureColonOptions } from './rules/media-feature-colon'
import type { NoAtRequireOptions } from './rules/no-at-require'
import type { NoEolWhitespaceOptions } from './rules/no-eol-whitespace'
import type { NumberLeadingZeroOptions } from './rules/number-leading-zero'
import type { NumberNoTrailingZerosOptions } from './rules/number-no-trailing-zeros'
import type { PropertyNoUnknownOptions } from './rules/property-no-unknown'
import type { PythonicOptions } from './rules/pythonic'
import type { SelectorListCommaOptions } from './rules/selector-list-comma'
import type { SelectorListCommaNewlineAfterOptions } from './rules/selector-list-comma-newline-after'
import type { SelectorListCommaNewlineBeforeOptions } from './rules/selector-list-comma-newline-before'
import type { SelectorListCommaSpaceAfterOptions } from './rules/selector-list-comma-space-after'
import type { SelectorListCommaSpaceBeforeOptions } from './rules/selector-list-comma-space-before'
import type { SelectorPseudoClassCaseOptions } from './rules/selector-pseudo-class-case'
import type { SelectorTypeNoUnknownOptions } from './rules/selector-type-no-unknown'
import type { SemicolonOptions } from './rules/semicolon'
import type { SingleLineCommentOptions } from './rules/single-line-comment'
import type { SingleLineCommentDoubleSlashSpaceAfterOptions } from './rules/single-line-comment-double-slash-space-after'
import type { SingleLineCommentNoEmptyOptions } from './rules/single-line-comment-no-empty'

export interface Extends {
  'stylelint-stylus/standard': void
  'stylelint-stylus/recommended': void
  'stylelint-stylus/no-stylus': void
}

export interface Plugins {
  'stylelint-stylus': void
}

export interface Syntax {
  'stylelint-stylus/custom-syntax': void
}

export interface RuleOptions {
  /**
   * enforces `@extend` style.
   *
   * @see [at-extend-style](https://stylus.github.io/stylelint-stylus/rules/at-extend-style.html)
   */
  'stylus/at-extend-style': AtExtendStyleOptions

  /**
   * require or disallow an empty line before at-rules.
   *
   * @see [at-rule-empty-line-before](https://stylus.github.io/stylelint-stylus/rules/at-rule-empty-line-before.html)
   */
  'stylus/at-rule-empty-line-before': AtRuleEmptyLineBeforeOptions

  /**
   * require a single space after at-rule names.
   *
   * @see [at-rule-name-space-after](https://stylus.github.io/stylelint-stylus/rules/at-rule-name-space-after.html)
   */
  'stylus/at-rule-name-space-after': AtRuleNameSpaceAfterOptions

  /**
   * disallow unknown at-rules.
   *
   * @see [at-rule-no-unknown](https://stylus.github.io/stylelint-stylus/rules/at-rule-no-unknown.html)
   */
  'stylus/at-rule-no-unknown': AtRuleNoUnknownOptions

  /**
   * require or disallow an empty line before the closing brace of blocks.
   *
   * @see [block-closing-brace-empty-line-before](https://stylus.github.io/stylelint-stylus/rules/block-closing-brace-empty-line-before.html)
   */
  'stylus/block-closing-brace-empty-line-before': BlockClosingBraceEmptyLineBeforeOptions

  /**
   * require a newline or disallow whitespace after the closing brace of blocks.
   *
   * @see [block-closing-brace-newline-after](https://stylus.github.io/stylelint-stylus/rules/block-closing-brace-newline-after.html)
   */
  'stylus/block-closing-brace-newline-after': BlockClosingBraceNewlineAfterOptions

  /**
   * require a newline or disallow whitespace before the closing brace of blocks.
   *
   * @see [block-closing-brace-newline-before](https://stylus.github.io/stylelint-stylus/rules/block-closing-brace-newline-before.html)
   */
  'stylus/block-closing-brace-newline-before': BlockClosingBraceNewlineBeforeOptions

  /**
   * require a single space or disallow whitespace after the closing brace of blocks.
   *
   * @see [block-closing-brace-space-after](https://stylus.github.io/stylelint-stylus/rules/block-closing-brace-space-after.html)
   */
  'stylus/block-closing-brace-space-after': BlockClosingBraceSpaceAfterOptions

  /**
   * require a single space or disallow whitespace before the closing brace of blocks.
   *
   * @see [block-closing-brace-space-before](https://stylus.github.io/stylelint-stylus/rules/block-closing-brace-space-before.html)
   */
  'stylus/block-closing-brace-space-before': BlockClosingBraceSpaceBeforeOptions

  /**
   * require a newline after the opening brace of blocks.
   *
   * @see [block-opening-brace-newline-after](https://stylus.github.io/stylelint-stylus/rules/block-opening-brace-newline-after.html)
   */
  'stylus/block-opening-brace-newline-after': BlockOpeningBraceNewlineAfterOptions

  /**
   * require a single space or disallow whitespace after the opening brace of blocks.
   *
   * @see [block-opening-brace-space-after](https://stylus.github.io/stylelint-stylus/rules/block-opening-brace-space-after.html)
   */
  'stylus/block-opening-brace-space-after': BlockOpeningBraceSpaceAfterOptions

  /**
   * require a single space or disallow whitespace before the opening brace of blocks.
   *
   * @see [block-opening-brace-space-before](https://stylus.github.io/stylelint-stylus/rules/block-opening-brace-space-before.html)
   */
  'stylus/block-opening-brace-space-before': BlockOpeningBraceSpaceBeforeOptions

  /**
   * enforce lowercase or uppercase for hex colors.
   *
   * @see [color-hex-case](https://stylus.github.io/stylelint-stylus/rules/color-hex-case.html)
   */
  'stylus/color-hex-case': ColorHexCaseOptions

  /**
   * require or disallow declaration colons.
   *
   * @see [declaration-colon](https://stylus.github.io/stylelint-stylus/rules/declaration-colon.html)
   */
  'stylus/declaration-colon': DeclarationColonOptions

  /**
   * require or disallow commas in hash object properties.
   *
   * @see [hash-object-property-comma](https://stylus.github.io/stylelint-stylus/rules/hash-object-property-comma.html)
   */
  'stylus/hash-object-property-comma': HashObjectPropertyCommaOptions

  /**
   * enforces indentation.
   *
   * @see [indentation](https://stylus.github.io/stylelint-stylus/rules/indentation.html)
   */
  'stylus/indentation': IndentationOptions

  /**
   * require or disallow media feature colons.
   *
   * @see [media-feature-colon](https://stylus.github.io/stylelint-stylus/rules/media-feature-colon.html)
   */
  'stylus/media-feature-colon': MediaFeatureColonOptions

  /**
   * disallow `@require`, use `@import` instead.
   *
   * @see [no-at-require](https://stylus.github.io/stylelint-stylus/rules/no-at-require.html)
   */
  'stylus/no-at-require': NoAtRequireOptions

  /**
   * disallow end-of-line whitespace.
   *
   * @see [no-eol-whitespace](https://stylus.github.io/stylelint-stylus/rules/no-eol-whitespace.html)
   */
  'stylus/no-eol-whitespace': NoEolWhitespaceOptions

  /**
   * require or disallow a leading zero for fractional numbers less than 1.
   *
   * @see [number-leading-zero](https://stylus.github.io/stylelint-stylus/rules/number-leading-zero.html)
   */
  'stylus/number-leading-zero': NumberLeadingZeroOptions

  /**
   * disallow trailing zeros in numbers.
   *
   * @see [number-no-trailing-zeros](https://stylus.github.io/stylelint-stylus/rules/number-no-trailing-zeros.html)
   */
  'stylus/number-no-trailing-zeros': NumberNoTrailingZerosOptions

  /**
   * disallow unknown properties.
   *
   * @see [property-no-unknown](https://stylus.github.io/stylelint-stylus/rules/property-no-unknown.html)
   */
  'stylus/property-no-unknown': PropertyNoUnknownOptions

  /**
   * enforces pythonic or brace style.
   *
   * @see [pythonic](https://stylus.github.io/stylelint-stylus/rules/pythonic.html)
   */
  'stylus/pythonic': PythonicOptions

  /**
   * require a newline or disallow whitespace after the commas of selector lists.
   *
   * @see [selector-list-comma-newline-after](https://stylus.github.io/stylelint-stylus/rules/selector-list-comma-newline-after.html)
   */
  'stylus/selector-list-comma-newline-after': SelectorListCommaNewlineAfterOptions

  /**
   * require a newline or disallow whitespace before the commas of selector lists.
   *
   * @see [selector-list-comma-newline-before](https://stylus.github.io/stylelint-stylus/rules/selector-list-comma-newline-before.html)
   */
  'stylus/selector-list-comma-newline-before': SelectorListCommaNewlineBeforeOptions

  /**
   * require a single space or disallow whitespace after the commas of selector lists.
   *
   * @see [selector-list-comma-space-after](https://stylus.github.io/stylelint-stylus/rules/selector-list-comma-space-after.html)
   */
  'stylus/selector-list-comma-space-after': SelectorListCommaSpaceAfterOptions

  /**
   * require a single space or disallow whitespace before the commas of selector lists.
   *
   * @see [selector-list-comma-space-before](https://stylus.github.io/stylelint-stylus/rules/selector-list-comma-space-before.html)
   */
  'stylus/selector-list-comma-space-before': SelectorListCommaSpaceBeforeOptions

  /**
   * require or disallow selector list comma.
   *
   * @see [selector-list-comma](https://stylus.github.io/stylelint-stylus/rules/selector-list-comma.html)
   */
  'stylus/selector-list-comma': SelectorListCommaOptions

  /**
   * enforce lowercase or uppercase for pseudo-class selectors.
   *
   * @see [selector-pseudo-class-case](https://stylus.github.io/stylelint-stylus/rules/selector-pseudo-class-case.html)
   */
  'stylus/selector-pseudo-class-case': SelectorPseudoClassCaseOptions

  /**
   * disallow unknown type selectors.
   *
   * @see [selector-type-no-unknown](https://stylus.github.io/stylelint-stylus/rules/selector-type-no-unknown.html)
   */
  'stylus/selector-type-no-unknown': SelectorTypeNoUnknownOptions

  /**
   * require or disallow semicolon.
   *
   * @see [semicolon](https://stylus.github.io/stylelint-stylus/rules/semicolon.html)
   */
  'stylus/semicolon': SemicolonOptions

  /**
   * require or disallow whitespace after the double-slash of single-line comments.
   *
   * @see [single-line-comment-double-slash-space-after](https://stylus.github.io/stylelint-stylus/rules/single-line-comment-double-slash-space-after.html)
   */
  'stylus/single-line-comment-double-slash-space-after': SingleLineCommentDoubleSlashSpaceAfterOptions

  /**
   * disallow empty single-line comments.
   *
   * @see [single-line-comment-no-empty](https://stylus.github.io/stylelint-stylus/rules/single-line-comment-no-empty.html)
   */
  'stylus/single-line-comment-no-empty': SingleLineCommentNoEmptyOptions

  /**
   * enforces comment style where single-line comments are allowed.
   *
   * @see [single-line-comment](https://stylus.github.io/stylelint-stylus/rules/single-line-comment.html)
   */
  'stylus/single-line-comment': SingleLineCommentOptions
}
