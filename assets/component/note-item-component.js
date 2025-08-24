class NoteItemComponent extends HTMLElement {
  constructor () {
    super();
    this._note = {
      id: '',
      title: '',
      content: '',
      date: ''
    };
  }

  setNote (value) {
    this._note = { ...value };
    this.render();
  }

  connectedCallback () {
    this.render();
  }

  render () {
    this.innerHTML = this.createNoteMarkup();
  }

  createNoteMarkup () {
    return `
      <article id="${this._note.id}">
        <h3>${this._note.title}</h3>
        <p class="date">${this._note.date}</p>
        <p>${this._note.content}</p>
      </article>
    `;
  }
}

customElements.define('note-item', NoteItemComponent);
