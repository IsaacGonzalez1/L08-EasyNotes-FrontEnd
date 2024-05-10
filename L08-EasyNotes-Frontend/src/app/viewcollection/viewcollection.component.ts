import { Component, OnInit } from '@angular/core';
import { NoteService } from '../services/note.service';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute } from '@angular/router';
import { CollectionNoteService } from '../services/collection-note.service';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'app-viewcollection',
  templateUrl: './viewcollection.component.html',
  styleUrls: ['./viewcollection.component.scss'],
})
export class ViewcollectionComponent implements OnInit {
  collectionID: any;
  notes: any[] = [];
  collection_notes: any[] = [];
  userLogged: any;
  route: any;
  note: any;
  collection: any;

  constructor(
    private noteService: NoteService,
    private authenticationService: AuthenticationService,
    private activateRoute: ActivatedRoute,
    private collectionNoteService: CollectionNoteService,
    private collectionService: CollectionService
  ) {}

  ngOnInit() {
    const rParams = this.activateRoute.snapshot.paramMap;
    this.collectionID = rParams.get('collectionID');
    this.collectionService
      .getCollection(this.collectionID)
      .subscribe((collection) => {
        this.collection = collection;
      });
    this.collectionNoteService
      .getByCollectionId(this.collectionID)
      .subscribe((collection_notes) => {
        this.collection_notes = Object.values(collection_notes);
        for (let i = 0; i < this.collection_notes.length; i++) {
          this.note = this.noteService
            .findNote(this.collection_notes[i].id_note)
            .subscribe((note) => {
                this.notes[i] = note;
            });
        }
      });
  }

  GoBack() {
    window.history.back();
  }
}
