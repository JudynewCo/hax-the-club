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
export class WhateverScreen extends HTCScreen {

  static get tag() {
    return "whatever-screen";
  }
  constructor() {
    super();
  }
  static get styles() {
    return [ super.styles, css`
      :host {
        background-image: url("./assets/images/handshake.png");
        background-repeat: no-repeat;
        background-size: cover;
      }

      .wrapper {
        padding: 20px;
        background-color: rgba(255,255,255,0.5);
        justify-content:center;
        color: black;
      }
    `];
  }
}

globalThis.customElements.define(WhateverScreen.tag, WhateverScreen);