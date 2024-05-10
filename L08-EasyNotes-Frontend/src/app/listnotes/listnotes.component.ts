import { Component } from '@angular/core';
import { NoteService } from '../services/note.service';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../user';

import { FriendshipService } from '../services/friendship.service';
import { CollectionNoteService } from '../services/collection-note.service';

@Component({
  selector: 'app-listnotes',
  templateUrl: './listnotes.component.html',
  styleUrls: ['./listnotes.component.scss'],
})
export class ListnotesComponent { 
  
  notes: any;
  sharedNotesList:any[] = [];
  sharedNotes:any;

  userID: any;
  user:any;
  userLogged:any;
  
  friendships: any;


  constructor(
    private noteService: NoteService,
    private authenticationService: AuthenticationService,
    private activateRoute: ActivatedRoute,
    private collection_noteService:CollectionNoteService,
    private friendshipService: FriendshipService

  ) {}

  ngOnInit() {

    const rParams = this.activateRoute.snapshot.paramMap;
    this.userID = rParams.get('userID');
    this.user = this.authenticationService.getUserById(this.userID);
    this.user.subscribe((val: any) => this.NotesList(val));
    this.user.subscribe((val: any) => this.SharedNotesList(val));
  }

 

  SharedNotesList(val:any){

    this.sharedNotes = this.noteService.listNote().subscribe((sharedNote) => {
      this.sharedNotes = sharedNote;
      for(let i=0; i<this.sharedNotes.length;i++){
        if(this.sharedNotes[i].is_shared==1){
          this.friendships = this.friendshipService.findFriendshipByUser(this.userID).subscribe((friendship) => {
            this.friendships = friendship;
            console.log(this.sharedNotes[i]);
            for(let j=0; j<this.friendships.length;j++){
              if(this.friendships[j].id_user2==this.userID && this.friendships[j].allowed == 1){
                console.log(this.sharedNotes[i])
               this.sharedNotesList.push(this.sharedNotes[i])
              }

              if(this.friendships[j].id_user1==this.userID && this.friendships[j].allowed == 1){
                console.log(this.sharedNotes[i])
               this.sharedNotesList.push(this.sharedNotes[i])
              }

            }
          });
        }


      }
    });
  }
  NotesDelete(id: any) {
    this.DeleteNote(id)
    this.DeleteCollection_note(id)



    window.location.reload();
  }

  DeleteNote(id:any){
    this.noteService.deleteNote(id).subscribe((article) => {
      console.log('Note has been deleted');
    });
  }

  DeleteCollection_note(id:any){
    this.collection_noteService.deleteCollection_note(id).subscribe((article) => {
      console.log('collection_note has been deleted');
    });
  }
  NotesList(val:any) {
    this.notes = this.noteService.findNoteByUser(val.id).subscribe((note) => {
      this.notes = note;
    });
  }
}
