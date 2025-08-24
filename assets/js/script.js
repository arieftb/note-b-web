import { fetchNotes } from './notes.js';
import '../component/header-component.js';
import '../component/form-add-component.js';
import '../component/note-list-component.js';

document.addEventListener('DOMContentLoaded', showNotes);

document.addEventListener('submit-note-event', (event) => {
  showNotes();
});

function showNotes () {
  const container = document.querySelector('note-list');
  container.setNoteList(fetchNotes().map(note => {
    return {
      id: note.id,
      title: note.title,
      content: note.body,
      date: note.createdAt
    };
  }));
}