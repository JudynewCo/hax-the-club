import { LitElement, html, css } from "lit";

export class HeaderComponent extends LitElement {
  static get tag() {
    return "header-component";
  }

  static get properties() {
    return {
      course: { type: String },
      instructor: { type: String },
      contactLink: { type: String },
    };
  }

  static get styles() {
    return [
      css`
        header {
          margin-top: 2rem;
          padding: 2rem 3rem 1rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: sticky;
          z-index: 2;
          top: 2rem;
          background: var(--background-color);
        }

        .course {
          font-size: 2rem;
          font-weight: 600;
          color: var(--primary-color);
        }

        .right {
          display: flex;
          gap: 2rem;
          align-items: center;
        }

        .instructor {
          font-size: 1.2rem;
          font-weight: 500;
          color: var(--primary-color);
        }

        .contact-btn {
          background: var(--primary-color);
          color: var(--background-color);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-weight: 600;
          display: inline-block;
          text-decoration: none;
          transition: transform 0.2s ease;
        }

        .contact-btn:hover {
          transform: translateY(-2px);
        }

        @media (max-width: 600px) {
          header {
            flex-direction: column;
            gap: 0.8rem;
          }
        }
      `,
    ];
  }

  render() {
    return html`
      <header>
        <div class="course">${this.course}</div>

        <div class="right">
          <div class="instructor">${this.instructor}</div>
          <a class="contact-btn" href="${this.contactLink}" target="_blank">
            Contact ↗
          </a>
        </div>
      </header>
    `;
  }
}

customElements.define(HeaderComponent.tag, HeaderComponent);
