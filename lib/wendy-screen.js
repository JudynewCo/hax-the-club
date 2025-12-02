/**
 * Copyright 2025 btopro
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { HTCScreen } from "./htc-screen.js";
import "../components /syllabus-section.js";
import "../components /weekly-lessons.js";
import "../components /header-component.js";
/**
 * `example-htc-screen`
 * This provides a 'screen' as far as sizing and some base requirements discussed in meeting
 *
 * @demo index.html
 * @element wendy-screen
 */
export class WendyScreen extends HTCScreen {
  static get tag() {
    return "wendy-screen";
  }
  static get styles() {
    return [
      super.styles,
      css`
        :host {
          --primary-color: #d0bae1;
          --highlight-color: #e6e3ff;
          --background-color: #0d0d14;
          --font-primary: "Helvetica", sans-serif;

          --card-bg-color: rgba(42, 42, 42, 0.24);
          --card-border-color: rgba(30, 30, 30, 1);
          --text-light: #ffffff;
          --text-muted: rgba(153, 153, 153, 1);
          --text-bg-color: #1e1e1e;

          --border-bottom: 1px solid #f6f6f633;

          display: block;
          background: var(--background-color);
          text-decoration: none;
          scroll-behavior: smooth;
          height: 100vh;
          overflow-y: auto;
        }

        /* Hero Section */
        .hero {
          position: relative;
          padding: 6rem 3rem 2rem 3rem;
        }

        .hero h1 {
          font-size: 14rem;
          font-weight: 900;
          letter-spacing: -0.02em;
          margin: 0;
          text-align: center;
          color: var(--highlight-color);
          position: sticky;
          z-index: 1;
          top: 25%;
        }

        /* Module Cards */
        .modules {
          display: flex;
          overflow-x: hidden;
        }
      `,
    ];
  }

  render() {
    return html`
      <header-component
        course="IST 256"
        instructor="Bryan Ollendyke"
        contact-link="mailto:bto108@psu.edu"
      ></header-component>

      <section class="hero">
        <h1>Syllabus.</h1>
        <syllabus-section></syllabus-section>
      </section>

      <section class="modules">
        <weekly-lessons></weekly-lessons>
      </section>
    `;
  }
}

globalThis.customElements.define(WendyScreen.tag, WendyScreen);
