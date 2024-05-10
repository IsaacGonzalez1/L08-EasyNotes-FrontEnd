import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormControlName, FormBuilder,Validators } from '@angular/forms';
import { NoteService } from '../services/note.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CollectionService } from '../services/collection.service';
import { CollectionNoteService } from '../services/collection-note.service';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss'],
})
export class CreatenoteComponent {
  note: any;
  urlAnterior: any;
  userID: any;
  listCollection: any;
  noteForm: any;
  id_collection: any;
  collection_note: any;
  checkboxValue = 0;

  constructor(
    private collectionService: CollectionService,
    private collection_noteService: CollectionNoteService,
    private noteService: NoteService,
    private fbuilder: FormBuilder,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const rParams = this.activateRoute.snapshot.paramMap;
    this.userID = rParams.get('userID');

    this.noteForm = this.fbuilder.group({
      title: ['', Validators.required],
      content: ['', Validators.required],
      user_id: this.userID,
      is_shared:0,
      collection: ['', Validators.required],
    });
    this.listCollections();
  }

  listCollections(): void {
    this.listCollection = this.collectionService
      .findCollectionByUser(this.userID)
      .subscribe((collection) => {
        this.listCollection = collection;
        console.log(this.listCollection);
      });
  }
  onSubmit() {
    this.noteService.addNote(this.noteForm.value).subscribe((note) => {
      this.note = note;
    });

    this.noteService.getLast().subscribe((note) => {
      this.note = note;
      const collection_note: any = {
        id_collection: parseInt(this.noteForm.value.collection, 10),
        id_note: this.note.id,
      };

      this.collection_noteService.createCollection_note(collection_note).subscribe(
        response => {
          console.log('Successfully updated resource', response);
          
        },
        error => {
          console.error('Error updating the resource', error);
        }
      );
    });

    window.history.back();
  }
  
  getPreviousUrl(): string {
    const history = window.history;
    const previousUrl = history.length > 1 ? history.state.navigationUrl : '';
    console.log(previousUrl);
    return previousUrl;
  }

  

}
