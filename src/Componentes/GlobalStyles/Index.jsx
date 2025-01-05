import { createGlobalStyle } from "styled-components";
import GandhiSansRegular from "./fonts/GandhiSans-Regular.otf" 
import GandhiSansBold from "./fonts/GandhiSans-Bold.otf" 

const GlobalStyles = createGlobalStyle`

@font-face {
    font-family: "GandhiSansRegular";
    src: local("Gandhi Sans Regular"), local("GandhiSansRegular"), url(${GandhiSansRegular});
}  
@font-face {
    font-family: "GandhiSansBold";
    src: local("Gandhi Sans Bold"), local("GandhiSansBold"), url(${GandhiSansBold});
}    
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
    width: 100%;
    font-family:"GandhiSansRegular";
  }
  body {
    line-height: 1.15;
    -ms-text-size-adjust: 100%;
    -webkit-text-size-adjust: 100%;
    background: transparent;
  }

  img, svg {
    border: 0; 
  }

  button, input, select, textarea {
    border: none; 
    outline: none; 
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  h1 {
    font-size: 2em;
    margin: 0.67em 0;
  }

  dl dl,
  dl ol,
  dl ul,
  ol dl,
  ul dl {
    margin: 0;
  }

  ol ol,
  ol ul,
  ul ol,
  ul ul {
    margin: 0;
  }

  hr {
    box-sizing: content-box; /* 1 */
    color: inherit; /* 2 */
    height: 0; /* 1 */
    overflow: visible; /* 3 */
  }

  main {
    display: block;
  }

  pre {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  a {
    background-color: transparent;
  }

  abbr[title] {
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace; /* 1 */
    font-size: 1em; /* 2 */
  }

  small {
    font-size: 80%;
  }

  audio,
  video {
    display: inline-block;
  }

  audio:not([controls]) {
    display: none;
    height: 0;
  }

  img {
    border-style: none;
  }

  svg:not(:root) {
    overflow: hidden;
  }

  table {
    border-color: inherit; /* 1 */
    text-indent: 0; /* 2 */
  }

  button,
  input,
  select {
    margin: 0;
  }

  button {
    overflow: visible; /* 1 */
    text-transform: none; /* 2 */
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  input {
    overflow: visible;
  }

  legend {
    box-sizing: border-box; /* 1 */
    color: inherit; /* 2 */
    display: table; /* 1 */
    max-width: 100%; /* 1 */
    white-space: normal; /* 1 */
  }

  progress {
    display: inline-block; /* 1 */
    vertical-align: baseline; /* 2 */
  }

  select {
    text-transform: none;
  }

  textarea {
    margin: 0; /* 1 */
    overflow: auto; /* 2 */
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box; /* 1 */
    padding: 0; /* 2 */
  }

  [type="search"] {
    -webkit-appearance: textfield; /* 1 */
    outline-offset: -2px; /* 2 */
  }

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    height: auto;
  }

  ::-webkit-input-placeholder {
    color: inherit;
    opacity: 0.54;
  }

  ::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button; /* 1 */
    font: inherit; /* 2 */
  }

  ::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  :-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  :-moz-ui-invalid {
    box-shadow: none;
  }

  details {
    display: block;
  }

  dialog {
    background-color: white;
    border: solid;
    color: black;
    display: block;
    height: -moz-fit-content;
    height: -webkit-fit-content;
    height: fit-content;
    left: 0;
    margin: auto;
    padding: 1em;
    position: absolute;
    right: 0;
    width: -moz-fit-content;
    width: -webkit-fit-content;
    width: fit-content;
  }

  dialog:not([open]) {
    display: none;
  }

  summary {
    display: list-item;
  }

  canvas {
    display: inline-block;
  }

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
`

export default GlobalStyles;
