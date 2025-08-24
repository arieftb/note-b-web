import './note-item-component.js';

class NoteListComponent extends HTMLElement {
  constructor () {
    super();
    this._noteList = [];
  }

  static get observedAttributes () {
    return ['title'];
  }

  attributeChangedCallback (name, oldValue, newValue) {
    if (oldValue !== newValue) {
      this.render();
    }
  }

  setNoteList (value) {
    this._noteList = value;
    this.render();
  }

  render () {
    const title = this.getAttribute('title');

    this.innerHTML = this.createSectionMarkup(title);

    this.renderNoteItems();
  }

  createSectionMarkup (title) {
    return `
      <section id="list">
        <header>
            <h2>${title}</h2>
        </header>
        <div class="content-container"></div>
      </section>
    `;
  }

  renderNoteItems () {
    const contentContainer = this.querySelector('.content-container');
    const noteItemsElements = this._noteList.map(this.createNoteItem.bind(this));

    contentContainer.append(...noteItemsElements);
  }

  createNoteItem (item) {
    const noteItem = document.createElement('note-item');
    noteItem.setNote(item);
    return noteItem;
  }
}

customElements.define('note-list', NoteListComponent);
