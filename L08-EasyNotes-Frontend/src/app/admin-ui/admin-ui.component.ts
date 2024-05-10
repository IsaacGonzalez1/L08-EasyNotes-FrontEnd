import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { UserService } from '../services/user.service';
import { NoteService } from '../services/note.service';
import { FriendshipService } from '../services/friendship.service';
import { CollectionService } from '../services/collection.service';

@Component({
  selector: 'app-admin-ui',
  templateUrl: './admin-ui.component.html',
  styleUrls: ['./admin-ui.component.scss']
})
export class AdminUIComponent implements OnInit {
  users:any;
  user:any;
  notes: any;
  note: any;
  friendships:any;
  collections:any;

  constructor(
    private userService: UserService,
    private authenticationService: AuthenticationService,
    private noteService: NoteService,
    private activateRoute: ActivatedRoute,
    private friendshipService:FriendshipService,
    private collectionService:CollectionService
  ) {}

  ngOnInit(): void {
    const rParams = this.activateRoute.snapshot.paramMap;
    this.UsersList()
    this.NotesList()
    this.FriendshipsList()
    this.CollectionsList()
    
  }

  UsersDelete(id: any) {
    this.userService.deleteUser(id).subscribe((article) => {
      console.log('User has been deleted');
    });
    window.location.reload();
  }

  UsersList() {
    this.authenticationService.listUsers().subscribe(
      users=>{
        this.users=Object.values(users)
      }
    )
  }

  NotesList() {
    this.notes = this.noteService.listNote().subscribe((note) => {
      this.notes = note;
      console.log(this.notes);
    });
   
  }
  NotesDelete(id: any) {
    this.noteService.deleteNote(id).subscribe((article) => {
      console.log('Article has been deleted');
    });
    window.location.reload();
  }

  FriendshipsList() {
    this.friendships = this.friendshipService.listFriendship().subscribe((friendship) => {
      this.friendships = friendship;
      
    });
  }
  FriendshipDelete(id: any) {
    this.friendshipService.deleteFriendship(id).subscribe((friendship) => {
      console.log('Friendship has been deleted');
    });
    window.location.reload();
  }

  CollectionsList() {
    this.collections = this.collectionService.listCollection().subscribe((collection) => {
      this.collections = collection;
      console.log(this.collections);
    });
  }

  CollectionDelete(id: any) {
    this.collectionService.deleteCollection(id).subscribe((collection) => {
      console.log('Collection has been deleted');
    });
    window.location.reload();
  }
  

}
