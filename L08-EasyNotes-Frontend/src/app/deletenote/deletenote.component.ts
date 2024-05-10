import { Component } from '@angular/core';
import { NoteService } from '../services/note.service';

@Component({
  selector: 'app-deletenote',
  templateUrl: './deletenote.component.html',
  styleUrls: ['./deletenote.component.scss']
})
export class DeletenoteComponent {

  constructor(private noteService: NoteService) {}

  deleteNote(id: number): void {
    this.noteService.deleteNote(id).subscribe({
      next: () => {
        console.log(`Note with ID ${id} has been deleted successfully.`);
      },
      error: err => {
        console.error('Error deleting the note:', err);
      }
    });
  }
}
