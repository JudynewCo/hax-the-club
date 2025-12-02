/**
 * Copyright 2025 btopro
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";
import "@haxtheweb/simple-icon/lib/simple-icon-button-lite.js";

/**
 * `hax-the-club`
 * 
 * @demo index.html
 * @element hax-the-club
 */
export class HaxTheClub extends I18NMixin(LitElement) {

  static get tag() {
    return "hax-the-club";
  }

  constructor() {
    super();
    this.t = this.t || {};
    this.t = {
      ...this.t,
      haxTheClub: "HAX The Club",
      skip: "Skip",
    };
    this.active = {};
    this.skipped = false;
    this.registerLocalization({
      context: this,
      localesPath:
        new URL("./locales/hax-the-club.ar.json", import.meta.url).href +
        "/../",
      locales: ["ar", "es", "hi", "zh"],
    });
    this.screen = 0;
    this.screens = [];
    this.addEventListener('screen-change', (e) => {
      let tmp = this.screen + parseInt(e.detail.direction);
      if (tmp > (this.screens.length-1)) {
        tmp = this.screens.length-1;
      }
      if (tmp < 0) {
        tmp = 0;
      }
      this.screen = tmp;
    });
    this.addEventListener('screen-ready', (e) => {
      this.screens = [...this.screens, e.detail.screen];
    });
  }

  firstUpdated(changedProperties) {
    if (super.firstUpdated) {
      super.firstUpdated(changedProperties);
    }
    // use hash in URL
    if (parseInt(globalThis.location.hash.replace("#", "")) >= 0) {
      this.screen = parseInt(globalThis.location.hash.replace("#", ""));
    }
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      screen: { type: Number, reflect: true },
      screens: { type: Array },
      skipped: { type: Boolean, reflect: true },
      active: { type: Object },  
    };
  }

  updated(changedProperties) {
    if (super.updated) {
      super.updated(changedProperties);
    }
    // if screen changes, update the hash
    if (this.shadowRoot && (changedProperties.has('screens') || changedProperties.has('screen')) && this.screens.length > 0) {
      globalThis.location.hash = this.screen;
      // scroll the screen into view
      let active = this.screens.find((screen => screen.sid == this.screen));
      if (active) {
        this.screens.map((screen) => {
          if (screen.sid == this.screen) {
            screen.active = true;
          }
          else {
            screen.active = false;
          }
        });
        this.active = null;
        this.active = active;
        this.active.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center"
        });
        // ensure intro skipped if we jumped to something
        if (this.screen !== 0) {
          this.skipIntro();
        }
      }
    }
  }

  // Lit scoped styles
  static get styles() {
    return [
      css`
      :host {
        display: block;
      }
      :host([hidden]) {
        display: none;
      }
      .buttons {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        padding: 16px;
        z-index: 1000;
        background-color: #0d0d14;
        display: flex;
        flex-direction: row-reverse;
        color: white;
      }
      h1 {
        display: inline-flex;
        font-size: 24px;
        line-height: auto;
        margin: 0 8px 0 0;
        padding: 0;
      }

      .joker-voice {
        font-size: 24px;
        line-height: auto;
        margin: 0 8px 0 0;
        cursor: pointer;
        color: white;
        background-color: #55555544;
        border-radius: 50%;
        padding: 4px;
        transition: all 0.3s ease-in-out;
      }
      .joker-voice:hover {
        transform: rotate(180deg);
      }
    `];
  }
  skipIntro() {
    this.screens.find((screen) => screen.sid === 0 ).skipIntro = true;
    this.skipped = true;
  }

  // Lit render the HTML
  render() {
    return html`
    <div class="buttons">
      ${this.skipped ? html`
        <span class="joker-voice" @click="${this.jokerClick}" data-voice="joker-website-gone">🃏</span>
        <simple-icon-button-lite
        icon="icons:arrow-forward"
        @click="${this.arrowClick}"
        data-direction="right"
        ></simple-icon-button-lite>
        <simple-icon-button-lite
        @click="${this.arrowClick}"
        icon="icons:arrow-back"
        data-direction="left"
        ></simple-icon-button-lite>
        <h1>${this.active.title}</h1>
      ` : html`
      <button @click="${this.skipIntro}">${this.t.skip}</button>    
      `}
    </div>
    <div class="wrapper">
      <slot></slot>
    </div>`;
  }
  jokerClick(e) {
    this.playVoice(e);
    globalThis.document.body.classList.toggle('joker');
    setTimeout(() => {
      globalThis.document.body.classList.toggle('gone');
      setTimeout(() => {
        globalThis.document.body.classList.toggle('gone');
        this.screen = null;
        setTimeout(() => {
          this.screen = 0;
          globalThis.document.body.classList.toggle('joker');
        }, 500);
      }, 3000);
    }, 6000);
  }
  playVoice(e) {
    let sound = e.target.getAttribute('data-voice');
    return new Promise((resolve) => {
      let playSound = ["joker-website-gone"].includes(sound) ? sound : "joker-website-gone";
      this.audio = new Audio(
        new URL(`./assets/voices/${playSound}.mp3`, import.meta.url).href,
      );
      this.audio.volume = 0.8;
      this.audio.onended = (event) => {
        resolve();
      };
      this.audio.play();
      // resolve after 500s if sound failed to load
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }
  playSound(e) {
    let sound = "coin2";
    return new Promise((resolve) => {
      let playSound = ["coin2"].includes(sound) ? sound : "coin2";
      this.audio = new Audio(
        new URL(`./assets/sounds/${playSound}.mp3`, import.meta.url).href,
      );
      this.audio.volume = 0.5;
      this.audio.onended = (event) => {
        resolve();
      };
      this.audio.play();
      // resolve after 1s if sound failed to load
      setTimeout(() => {
        resolve();
      }, 500);
    });
  }

  arrowClick(e) {
    this.playSound();
    let direction = 0;
    switch (e.target.getAttribute('data-direction')) {
      case "up":
        direction = -1;
        break;
      case "down":
        direction = 1;
        break;
      case "left":
        direction = -1;
        break;
      case "right":
        direction = 1;
        break;
    }
    this.dispatchEvent(
      new CustomEvent("screen-change", {
        bubbles: true,
        composed: true,
        detail: {
          direction: direction,
        },
      })
    );
  }
}

globalThis.customElements.define(HaxTheClub.tag, HaxTheClub);