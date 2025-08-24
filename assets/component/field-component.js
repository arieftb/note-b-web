class FieldComponent extends HTMLElement {
  constructor() {
    super();
    this._inputField = null;
    this._errorMessage = null;
    this.render();
  }

  static get observedAttributes() {
    return ['label', 'placeholder', 'type', 'maxLength', 'id', 'minLength'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  getValue() {
    return this._inputField.value;
  }

  render() {
    const label = this.getAttribute('label');
    const placeholder = this.getAttribute('placeholder');
    const id = this.getAttribute('id');
    const type = this.getAttribute('type');
    const minLength = this.getAttribute('minLength');
    const maxLength = this.getAttribute('maxLength');

    this.innerHTML = `
      <label for="${id}">${label}</label>
      <input id="${id}" type="${type}" placeholder="${placeholder}">
      <span class="error-message"></span>
    `;

    this._inputField = this.querySelector('input');
    this._errorMessage = this.querySelector('.error-message');

    this.initValidationEvents(minLength, maxLength, type);
  }

  initValidationEvents(minLength, maxLength, type) {
    this._inputField.addEventListener('input', (event) => this.validate(event, minLength, maxLength, type));
    this._inputField.addEventListener('focus', (event) => this.validate(event, minLength, maxLength, type));
  }

  validate(event, minLength, maxLength, type) {
    const value = event.target.value.trim();
    let errorMsg = '';

    if (value.length < minLength) {
      errorMsg = `Minimum characters required: ${minLength}`;
    } else if (value.length > maxLength && type !== 'password') {
      errorMsg = `Maximum characters allowed: ${maxLength}`;
    }

    this.toggleErrorMessage(errorMsg);
    this._inputField.setCustomValidity(errorMsg);
  }

  toggleErrorMessage(errorMsg) {
    if (errorMsg) {
      this._errorMessage.textContent = errorMsg;
      this._errorMessage.style.display = 'block';
    } else {
      this._errorMessage.textContent = '';
      this._errorMessage.style.display = 'none';
    }
  }
}

customElements.define('field-content', FieldComponent);
