/**
 * Copyright 2025 btopro
 * @license Apache-2.0, see LICENSE for full text.
 */
import { html, css } from "lit";
import { HTCScreen } from "./htc-screen.js";
import "@haxtheweb/date-card/date-card.js";
/**
 * `example-htc-screen`
 * This provides a 'screen' as far as sizing and some base requirements discussed in meeting
 * 
 * @demo index.html
 * @element htc-screen
 */
export class FiraolScreen extends HTCScreen {

  static get tag() {
    return "firaol-screen";

  }
  constructor() {
    super();

  }
  
  static get styles() {
    return [
      super.styles,
      css`
        
        .sky {
          
          background: radial-gradient(circle at bottom, #0b1d3a, #000);
          
        }

        /* Moon */
        .moon {
          position: absolute;
          top: 50px;
          left: 60px;
          width: 120px;
          height: 120px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, .9); 
          box-shadow: 
            0 0 40px 15px rgba(255, 255, 200, 0.4), 
            inset 10px 10px 20px rgba(255, 255, 255, 0.3);
          
          animation: moon-glow 6s infinite alternate ease-in-out;
        }
        h1 {
          
          position: relative;
          font-weight: bold;
          text-align: center;
        }
        h2 {
          
          flex-direction: column;
        }

        /* Stars */
        .stars {
          position: absolute;
          width: 2px;
          height: 2px;
          background: white;
          border-radius: 50%;
          top: 0;
          left: 0;
          box-shadow:
            20px 40px white,
            80px 120px white,
            200px 30px white,
            150px 90px white,
            300px 60px white,
            250px 150px white,
            400px 100px white,
            500px 50px white,
            600px 130px white,
            700px 70px white;
          animation: twinkle 2s infinite alternate;
        }
        .dates {
          overflow: scroll;
          max-height: 300px;
          position: absolute;
          bottom: 30px; /* distance from bottom edge */
          left: 40px;  /* change to left: 20px if you want bottom-left corner */
          max-height: 300px;
     
          
          padding: 10px;
          border-radius: 10px;

        }
        .date-card {
          overflow: scroll;
          max-height: 300px;
          max-width: 350px;
          position: absolute;
          margin-top: 30px; /* distance from bottom edge */
          right: 100px;  /* change to left: 20px if you want bottom-left corner */
          max-height: 300px;
          margin-bottom: 50px;

     
          
          padding: 10px;
          border-radius: 10px;

        }

        @keyframes twinkle {
          from { opacity: 0.6; }
          to   { opacity: 1; }
        }
        @keyframes moon-glow {
          from { box-shadow: 0 0 30px 10px rgba(255, 255, 200, 0.3); }
          to   { box-shadow: 0 0 50px 20px rgba(255, 255, 230, 0.6); }
        }
      `
    ];
    
  }
  render() {
    return html`
       <div class="sky">
        <div class="moon"></div>
        <div class="title"> <h1>HAX Club, MEETS EVERY MONDAY</h1></div>
        <div class="date-card">
        <date-card month="August" date="4" day="Friday" title="IST Ice Cream Social" end-time="6PM" location="West Dining Commons" border-spacing="20" accent-color="blue"></date-card>
        <date-card month="August" date="4" day="Friday" title="IST Ice Cream Social" end-time="6PM" location="West Dining Commons" border-spacing="20" accent-color="blue"></date-card>
        <date-card month="August" date="4" day="Friday" title="IST Ice Cream Social" end-time="6PM" location="West Dining Commons" border-spacing="20" accent-color="blue"></date-card>
        </div>
        <div class="dates"><slot>Prof Bryan Special Talk</slot></div>

        <div class="stars"></div>
       </div>
      `;
  }
  
}

globalThis.customElements.define(FiraolScreen.tag, FiraolScreen);