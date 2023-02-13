import { css } from '@emotion/react';

import { Breakpoints } from './shared/breakpoints';

import { colors, SPACING, TYPOGRAPHY } from './shared/variables';

export const getGlobalStyles = () => css`
  :root {
    --font-family: 'Monstserrat', system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans',
      'Liberation Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
    --max-width: ${Breakpoints.Desktop};
    --font-color-base: ${colors.fontBase};
    --font-color-hover: ${colors.fontHover};
    --font-color-disabled: ${colors.fontDisabled};
    --font-color-invert: ${colors.fontInvert};
    --font-color-second: ${colors.fontSecond};
    --font-color-error: ${colors.fontError};
    --font-color-warning: ${colors.fontWarning};
    --background-color: ${colors.background};
    --background-color-invert: ${colors.backgroundInvert};
    --background-color-bright: ${colors.backgroundBright};
    --background-color-fields: ${colors.backgroundFields};
    --background-color-warning: ${colors.backgroundWarning};
    --background-color-button: ${colors.backgroundButton};
    --background-color-button-invert: ${colors.backgroundButtonInvert};
    --background-color-button-hover: ${colors.backgroundButtonHover};
    --background-color-button-disabled: ${colors.backgroundButtonDisabled};
    --border-color: ${colors.borderBase};
    --border-color-invert: ${colors.borderInvert};
    --border-color-hover: ${colors.borderHover};
    --border-color-hover-input: ${colors.borderHoverInput};
    --border-color-focused-input: ${colors.borderFocusedInput};
    --border-color-focused: ${colors.borderFocused};
    --border-color-disabled: ${colors.borderDisabled};
    --border-color-warning: ${colors.borderWarning};
    --additional-color: ${colors.additional};
    --body-font-family: var(--font-family);

    --H1-font-size: ${TYPOGRAPHY.desktop.heading1.fontSize};
    --H1-line-height: ${TYPOGRAPHY.desktop.heading1.lineHeight};
    --H1-font-weight: ${TYPOGRAPHY.desktop.heading1.fontWeight};
    --H2-font-size: ${TYPOGRAPHY.desktop.heading2.fontSize};
    --H2-line-height: ${TYPOGRAPHY.desktop.heading2.lineHeight};
    --H2-font-weight: ${TYPOGRAPHY.desktop.heading2.fontWeight};
    --H3-font-size: ${TYPOGRAPHY.desktop.heading3.fontSize};
    --H3-line-height: ${TYPOGRAPHY.desktop.heading3.lineHeight};
    --H3-font-weight: ${TYPOGRAPHY.desktop.heading3.fontWeight};
    --H4-font-size: ${TYPOGRAPHY.desktop.heading4.fontSize};
    --H4-line-height: ${TYPOGRAPHY.desktop.heading4.lineHeight};
    --H4-font-weight: ${TYPOGRAPHY.desktop.heading4.fontWeight};
    --H5-font-size: ${TYPOGRAPHY.desktop.heading5.fontSize};
    --H5-line-height: ${TYPOGRAPHY.desktop.heading5.lineHeight};
    --H5-font-weight: ${TYPOGRAPHY.desktop.heading5.fontWeight};
    --H6-font-size: ${TYPOGRAPHY.desktop.heading6.fontSize};
    --H6-line-height: ${TYPOGRAPHY.desktop.heading6.lineHeight};
    --H6-font-weight: ${TYPOGRAPHY.desktop.heading6.fontWeight};
    --extraLargeBold-font-size: ${TYPOGRAPHY.desktop.extraLargeBold.fontSize};
    --extraLargeBold-line-height: ${TYPOGRAPHY.desktop.extraLargeBold.lineHeight};
    --extraLargeBold-font-weight: ${TYPOGRAPHY.desktop.extraLargeBold.fontWeight};
    --extraLargeRegular-font-size: ${TYPOGRAPHY.desktop.extraLargeRegular.fontSize};
    --extraLargeRegular-line-height: ${TYPOGRAPHY.desktop.extraLargeRegular.lineHeight};
    --extraLargeRegular-font-weight: ${TYPOGRAPHY.desktop.extraLargeRegular.fontWeight};
    --largeBold-font-size: ${TYPOGRAPHY.desktop.largeBold.fontSize};
    --largeBold-line-height: ${TYPOGRAPHY.desktop.largeBold.lineHeight};
    --largeBold-font-weight: ${TYPOGRAPHY.desktop.largeBold.fontWeight};
    --largeRegular-font-size: ${TYPOGRAPHY.desktop.largeRegular.fontSize};
    --largeRegular-line-height: ${TYPOGRAPHY.desktop.largeRegular.lineHeight};
    --largeRegular-font-weight: ${TYPOGRAPHY.desktop.largeRegular.fontWeight};
    --normalBold-font-size: ${TYPOGRAPHY.desktop.normalBold.fontSize};
    --normalBold-line-height: ${TYPOGRAPHY.desktop.normalBold.lineHeight};
    --normalBold-font-weight: ${TYPOGRAPHY.desktop.normalBold.fontWeight};
    --normalRegular-font-size: ${TYPOGRAPHY.desktop.normalRegular.fontSize};
    --normalRegular-line-height: ${TYPOGRAPHY.desktop.normalRegular.lineHeight};
    --normalRegular-font-weight: ${TYPOGRAPHY.desktop.normalRegular.fontWeight};
    --smallBold-font-size: ${TYPOGRAPHY.desktop.smallBold.fontSize};
    --smallBold-line-height: ${TYPOGRAPHY.desktop.smallBold.lineHeight};
    --smallBold-font-weight: ${TYPOGRAPHY.desktop.smallBold.fontWeight};
    --smallRegular-font-size: ${TYPOGRAPHY.desktop.smallRegular.fontSize};
    --smallRegular-line-height: ${TYPOGRAPHY.desktop.smallRegular.lineHeight};
    --smallRegular-font-weight: ${TYPOGRAPHY.desktop.smallRegular.fontWeight};

    --spacing-1: ${SPACING.desktop.L1};
    --spacing-2: ${SPACING.desktop.L2};
    --spacing-3: ${SPACING.desktop.L3};
    --spacing-4: ${SPACING.desktop.L4};
    --spacing-5: ${SPACING.desktop.L5};
    --spacing-6: ${SPACING.desktop.L6};
    --spacing-7: ${SPACING.desktop.L7};
    --spacing-8: ${SPACING.desktop.L8};
    --spacing-9: ${SPACING.desktop.L9};
    --spacing-10: ${SPACING.desktop.L10};
  }
  @media (max-width: ${Breakpoints.Tablet}) {
  }
  @media (max-width: ${Breakpoints.Mobile}) {
  }
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
  @media (prefers-reduced-motion: no-preference) {
    :root {
      scroll-behavior: smooth;
    }
  }
  html {
    min-height: 100vh;
    display: flex;
    justify-content: center;
  }
  body {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-text-size-adjust: 100%;
    font-family: var(--body-font-family);
    font-size: var(--normalRegular-font-size);
    font-weight: var(--normalRegular-font-weight);
    line-height: var(--normalRegular-line-height);
    height: 100%;
    margin: 0;
  }
  hr {
    margin: 0;
    color: inherit;
    background-color: currentColor;
    border: 0;
  }
  hr:not([size]) {
    height: 1px;
  }
  h6,
  h5,
  h4,
  h3,
  h2,
  h1 {
    margin: 0;
    padding: 0;
    color: var(--font-color-base);
  }
  h1 {
    font-size: var(--H1-font-size);
    font-weight: var(--H1-font-weight);
    line-height: var(--H1-line-height);
  }
  h2 {
    font-size: var(--H2-font-size);
    font-weight: var(--H2-font-weight);
    line-height: var(--H2-line-height);
  }
  h3 {
    font-size: var(--H3-font-size);
    font-weight: var(--H3-font-weight);
    line-height: var(--H3-line-height);
  }
  h4 {
    font-size: var(--H4-font-size);
    font-weight: var(--H4-font-weight);
    line-height: var(--H4-line-height);
  }
  h5 {
    font-size: var(--H5-font-size);
    font-weight: var(--H5-font-weight);
    line-height: var(--H5-line-height);
  }
  h6 {
    font-size: var(--H6-font-size);
    font-weight: var(--H6-font-weight);
    line-height: var(--H6-line-height);
  }
  p,
  a {
    margin: 0;
    font-size: var(--normalRegular-font-size);
    font-weight: var(--normalRegular-font-weight);
    line-height: var(--normalRegular-line-height);
  }
  div,
  label,
  input,
  select,
  option,
  button {
    color: var(--font-color-base);
  }
  input {
    border: 0;
    padding: 0;
    margin: 0;
    outline: none;
    font-size: var(--largeRegular-font-size);
    font-weight: var(--largeRegular-font-weight);
    line-height: var(--largeRegular-line-height);
  }

  input::placeholder {
    font-size: var(--largeRegular-font-size);
    font-weight: var(--largeRegular-font-weight);
    line-height: var(--largeRegular-line-height);
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  input[type='number'] {
    -moz-appearance: textfield;
  }
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  abbr[title],
  abbr[data-bs-original-title] {
    -webkit-text-decoration: underline dotted;
    text-decoration: underline dotted;
    cursor: help;
    -webkit-text-decoration-skip-ink: none;
    text-decoration-skip-ink: none;
  }
  address {
    font-style: normal;
    line-height: inherit;
  }
  ol,
  ul {
    padding: 0;
    list-style: none;
  }

  ol,
  ul,
  dl {
    margin-left: 0;
  }
  dd {
    margin-bottom: 0.5rem;
    margin-left: 0;
  }
  blockquote {
    margin: 0 0 1rem;
  }
  b,
  strong {
    font-weight: bolder;
  }
  a {
    text-decoration: none;
  }
  a:not([href]):not([class]),
  a:not([href]):not([class]):hover {
    color: inherit;
    text-decoration: none;
  }
  pre,
  code,
  kbd,
  samp {
    direction: ltr;
    unicode-bidi: bidi-override;
  }
  pre {
    display: block;
    margin-top: 0;
    margin-bottom: 1rem;
    overflow: auto;
    font-size: 0.875em;
  }
  pre code {
    font-size: inherit;
    color: inherit;
    word-break: normal;
  }
  code {
    font-size: 0.875em;
    word-wrap: break-word;
  }
  a > code {
    color: inherit;
  }
  kbd {
    padding: 0.2rem 0.4rem;
    font-size: 0.875em;
    border-radius: 0.2rem;
  }
  kbd kbd {
    padding: 0;
    font-size: 1em;
    font-weight: 700;
  }
  figure {
    margin: 0 0 1rem;
  }
  img,
  svg {
    vertical-align: middle;
  }
  table {
    caption-side: bottom;
    border-collapse: collapse;
  }
  caption {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    color: #6c757d;
    text-align: left;
  }
  th {
    text-align: inherit;
    text-align: -webkit-match-parent;
  }
  thead,
  tbody,
  tfoot,
  tr,
  td,
  th {
    border-color: inherit;
    border-style: solid;
    border-width: 0;
  }
  label {
    display: inline-block;
  }
  button:focus:not(:focus-visible) {
    outline: 0;
  }
  button,
  select {
    text-transform: none;
  }
  [role='button'] {
    cursor: pointer;
  }
  select {
    word-wrap: normal;
  }
  select:disabled {
    opacity: 1;
  }
  [list]::-webkit-calendar-picker-indicator {
    display: none;
  }
  button,
  [type='button'],
  [type='reset'],
  [type='submit'] {
    -webkit-appearance: button;
  }
  button:not(:disabled),
  [type='button']:not(:disabled),
  [type='reset']:not(:disabled),
  [type='submit']:not(:disabled) {
    cursor: pointer;
  }
  ::-moz-focus-inner {
    padding: 0;
    border-style: none;
  }
  textarea {
    resize: vertical;
  }
  fieldset {
    min-width: 0;
    padding: 0;
  }
  legend {
    float: left;
    width: 100%;
    padding: 0;
    margin-bottom: 0.5rem;
    font-size: calc(1.275rem + 0.3vw);
    line-height: inherit;
  }
  legend + * {
    clear: left;
  }
  ::-webkit-datetime-edit-fields-wrapper,
  ::-webkit-datetime-edit-text,
  ::-webkit-datetime-edit-minute,
  ::-webkit-datetime-edit-hour-field,
  ::-webkit-datetime-edit-day-field,
  ::-webkit-datetime-edit-month-field,
  ::-webkit-datetime-edit-year-field {
    padding: 0;
  }
  ::-webkit-inner-spin-button {
    height: auto;
  }
  [type='search'] {
    outline-offset: -2px;
    -webkit-appearance: textfield;
  }
  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }
  ::-webkit-color-swatch-wrapper {
    padding: 0;
  }
  ::-webkit-file-upload-button {
    font: inherit;
  }
  ::file-selector-button {
    font: inherit;
  }
  ::-webkit-file-upload-button {
    font: inherit;
    -webkit-appearance: button;
  }
  output {
    display: inline-block;
  }
  iframe {
    border: 0;
  }
  summary {
    display: list-item;
    cursor: pointer;
  }
  progress {
    vertical-align: baseline;
  }
  [hidden] {
    display: none !important;
  }
`;
