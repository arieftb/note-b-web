import './field-component.js';
import { submitNote } from '../js/notes.js';

class FormAddContentComponent extends HTMLElement {
  constructor () {
    super();
    this.form = null;
    this.titleField = null;
    this.contentField = null;
    this.render();
  }

  static get observedAttributes () {
    return ['label', 'placeholder', 'type', 'maxLength', 'minLength'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  render () {
    this.setUpFormStructure();
    this.initFormSubmitHandler();
  }

  setUpFormStructure() {
    this.innerHTML = `
      <form id="add-note-form">
        <field-content label="Title" placeholder="Title" type="text" maxLength="20" id="title" minLength="3"></field-content>
        <label for="content">Content</label>
        <textarea id="content" placeholder="Content" required autocomplete="off"></textarea>
        <button type="submit">Save</button>
      </form>
    `;

    this.form = this.querySelector('form');
    this.titleField = this.querySelector('#title');
    this.contentField = this.querySelector('#content');
  }

  initFormSubmitHandler() {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleSubmit();
    });
  }

  handleSubmit() {
    const title = this.titleField.getValue();
    const content = this.contentField.value;

    submitNote(title, content);
    this.dispatchSubmitEvent(title, content);
    this.resetForm();
  }

  dispatchSubmitEvent(title, content) {
    const submitEvent = new CustomEvent('submit-note-event', {
      detail: { title, content },
    });
    this.dispatchEvent(submitEvent);
  }

  resetForm() {
    this.form.reset();
  }
}

customElements.define('form-add-content', FormAddContentComponent);
