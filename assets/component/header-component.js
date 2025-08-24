class HeaderComponent extends HTMLElement {
  constructor () {
    super();
    this._title = '';
    this._subtitle = '';
  }

  static get observedAttributes () {
    return ['title', 'subtitle'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (oldValue !== newValue) {
      if (name === 'title') {
        this._title = newValue;
      }
      if (name === 'subtitle') {
        this._subtitle = newValue;
      }
      this.render();
    }
  }

  connectedCallback () {
    this.render();
  }

  render () {
    this.innerHTML = `
        <header>
            <h1>${this._title}</h1>
            <p>${this._subtitle}</p>
        </header>
    `;
  }
}

customElements.define('top-bar', HeaderComponent);
