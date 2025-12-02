import { LitElement, html, css } from "lit";

export class WeeklyLessons extends LitElement {
  static get tag() {
    return "weekly-lessons";
  }

  static get properties() {
    return {
      weeks: { type: Array },
    };
  }

  constructor() {
    super();
    this.weeks = [
      {
        week: 1,
        title: "Intro to Coding",
        desc: "Variables, console, basic JS",
      },
      { week: 2, title: "Control Flow", desc: "Conditions + loops" },
      { week: 3, title: "Functions", desc: "Reusability and parameters" },
      { week: 4, title: "Arrays & Objects", desc: "Data structures" },
      // … continue to week 12
    ];
  }

  static styles = css`
    :host {
      display: flex;
      flex-direction: row;
      align-items: stretch;
      margin-block: 8rem 4rem;
    }

    .card {
      width: 220px;
      background: var(--highlight-color);
      border-left: 1px solid var(--card-border-color);
      flex-shrink: 0;
      position: relative;
      padding: 1rem 2rem;
    }

    /* Overlap all cards except the first */
    .card:not(:first-child) {
      margin-left: -80px;
    }

    .week {
      background: var(--background-color);
      color: var(--highlight-color);
      padding: 1rem 0;
      font-size: 2.2rem;
      font-weight: 700;
      text-align: center;
      margin-bottom: 1rem;
    }

    .title {
      font-weight: 700;
      color: #2d2347;
      margin-bottom: 0.3rem;
    }

    .desc {
      color: #574a75;
      font-size: 0.9rem;
    }
  `;

  render() {
    return html`
      ${this.weeks.map(
        (w) => html`
          <div class="card">
            <div class="week">${String(w.week).padStart(2, "0")}</div>
            <div class="title">${w.title}</div>
            <div class="desc">${w.desc}</div>
            <div class="progress-bar"></div>
          </div>
        `
      )}
    `;
  }
}

customElements.define(WeeklyLessons.tag, WeeklyLessons);
