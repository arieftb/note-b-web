import './form-add-content-component.js';

class FormAddComponent extends HTMLElement {
  constructor () {
    super();
    this._button = null;
    this._contentContainer = null;
    this.render();
  }

  static get observedAttributes () {
    return ['visible', 'title'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render () {
    this.setUpElementStructure();
    this.initShowHide();
    this.renderContent(this.isVisible());
  }

  setUpElementStructure() {
    const title = this.getAttribute('title');
    const buttonLabel = this.isVisible() ? 'Hide' : 'Show';

    this.innerHTML = `
      <section id="add">
        <header>
            <div class="title-container">
                <h2>${title}</h2>
            </div>
            <button id="add-show-button">${buttonLabel}</button>
        </header>
        <div class="content-container"></div>
      </section>
    `;

    // Cache DOM elements for better performance
    this._button = this.querySelector('#add-show-button');
    this._contentContainer = this.querySelector('.content-container');
  }

  isVisible() {
    return this.getAttribute('visible') === 'true';
  }

  initShowHide() {
    this._button.addEventListener('click', () => this.toggleVisibility());
  }

  toggleVisibility() {
    const isVisible = this.isVisible();
    this.setAttribute('visible', (!isVisible).toString());
    this.renderContent(!isVisible);
  }

  renderContent(visible) {
    if (visible) {
      this._contentContainer.innerHTML = '<form-add-content></form-add-content>';
      this.listenToFormSubmit();
    } else {
      this._contentContainer.innerHTML = '';
    }
  }

  listenToFormSubmit() {
    const form = this.querySelector('form-add-content');
    form.addEventListener('submit-note-event', (event) => {
      const { title, content } = event.detail;
      this.dispatchSubmitEvent(title, content);
    });
  }

  dispatchSubmitEvent(title, content) {
    const submitEvent = new CustomEvent('submit-note-event', {
      detail: { title, content },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(submitEvent);
  }
}

customElements.define('form-add', FormAddComponent);
