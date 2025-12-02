import { LitElement, html, css } from "lit";

export class SyllabusSection extends LitElement {
  static get tag() {
    return "syllabus-section";
  }

  static get properties() {
    return {
      items: { type: Array },
    };
  }

  constructor() {
    super();
    this.items = [
      {
        icon: "⭐",
        title: "Overview",
        subtitle: "Location, Time, Objectives",
        link: "/overview",
      },
      {
        icon: "◎",
        title: "Assessments",
        subtitle: "Grading Breakdown",
        link: "/assessments",
      },
      {
        icon: "⚑",
        title: "Policy",
        subtitle: "Academic Integrity",
        link: "/policy",
      },
      {
        icon: "🔗",
        title: "Resources",
        subtitle: "Tools & Links",
        link: "/resources",
      },
    ];
  }

  static styles = css`
    .grid {
      display: grid;
      justify-content: center;
      row-gap: 6em;
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      justify-items: center;
      align-items: start;
      column-gap: 6em;
      row-gap: 3em;
      flex-wrap: wrap;
      align-content: start;
      position: sticky;
      top: 10rem;
      z-index: 1;
    }

    .card {
      background: var(--card-bg-color);
      padding-left: 2em;
      padding-right: 2em;
      padding-top: 2em;
      padding-bottom: 2.5em;
      border-radius: 16px;
      cursor: pointer;
      transition: 0.25s;
      text-decoration: none;
      width: 16em;
      backdrop-filter: blur(10px);
      border: 1px solid var(--card-border-color);
      z-index: 997;
    }
    .card:hover {
      transform: translateY(-4px);
    }

    .card span {
      display: flex;
      flex-direction: row;
      gap: 1rem;
      padding-bottom: 0.4rem;
      align-items: center;
      border-bottom: var(--border-bottom);
    }

    .icon {
      font-size: 1.5rem;
      color: var(--primary-color);
    }
    .title {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-light);
    }
    .subtitle {
      font-size: 0.75rem;
      margin-top: 0.8rem;
      color: var(--text-muted);
      background-color: var(--text-bg-color);
      padding: 0.25rem 0.5rem;
      border-radius: 6px;
      width: fit-content;
    }
  `;

  render() {
    return html`
      <section class="grid">
        ${this.items.map(
          (i) => html`
            <a class="card" href="${i.link}">
              <span>
                <div class="icon">${i.icon}</div>
                <div class="title">${i.title}</div>
              </span>
              <div class="subtitle">${i.subtitle}</div>
            </a>
          `
        )}
      </section>
    `;
  }
}

customElements.define(SyllabusSection.tag, SyllabusSection);
