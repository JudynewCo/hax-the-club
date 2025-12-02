/**
 * Copyright 2025 btopro
 * @license Apache-2.0, see LICENSE for full text.
 */
import { html, css } from "lit";
import { HTCScreen } from "./htc-screen.js";
/**
 * `example-htc-screen`
 * This provides a 'screen' as far as sizing and some base requirements discussed in meeting
 * 
 * @demo index.html
 * @element htc-screen
 */
export class ExampleHTCScreen extends HTCScreen {

  static get tag() {
    return "example-htc-screen";
  }
  constructor() {
    super();
  }
  
}

globalThis.customElements.define(ExampleHTCScreen.tag, ExampleHTCScreen);