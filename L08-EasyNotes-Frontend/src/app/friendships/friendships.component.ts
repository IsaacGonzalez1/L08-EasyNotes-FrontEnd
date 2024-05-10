import { Component, OnInit } from '@angular/core';
import { FriendshipService } from '../services/friendship.service';
import { AuthenticationService } from '../services/authentication.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friendships',
  templateUrl: './friendships.component.html',
  styleUrls: ['./friendships.component.scss'],
})
export class FriendshipsComponent implements OnInit {
  userID: any;
  friendships: any;
  user: any;
  userLogged: any;
  myFriendships: any[] = [];
  allowed: any;
  myFriends:any[]=[];
  friends:any;
  name:any;

  constructor(
    private friendshipService: FriendshipService,
    private authenticationService: AuthenticationService,
    private activateRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const rParams = this.activateRoute.snapshot.paramMap;
    this.userID = rParams.get('userID');
    console.log("User ID: ", this.userID);
    this.user = this.authenticationService.getUserById(this.userID);
    this.user.subscribe((val: any) => this.FriendshipsList(val));
    this.user.subscribe((val: any) => this.FriendsList(val));
  }

  FriendshipDelete(id: any) {
    this.friendshipService.deleteFriendship(id).subscribe((friendship) => {
      console.log('Friendship has been deleted');
    });
    window.location.reload();
  }
  

  FriendshipsAccept(id: any) {
    this.friendshipService.friendshipAllow(id).subscribe(
      (response) => {
        console.log('Recurso actualizado con éxito', response);

      },
      (error) => {
        console.error('Error al actualizar el recurso', error);
      }
    );
    window.location.reload();
  }
  
  FriendshipsList(val: any) {
    this.friendships = this.friendshipService
      .findFriendshipByUser(this.userID)
      .subscribe((friendship) => {
        this.friendships = friendship;
        console.log(this.friendships);
        this.myFriendships.push(this.friendships);
        
        // for (let i = 0; i < this.friendships.length; i++) {
        //   if (this.friendships[i].id_user2 == this.userID && this.friendships[i].allowed ==0 ) {
        //     this.myFriendships?.push(this.friendships[i]);
        //     console.log(this.myFriendships);
        //   }
        // }
      });
  }
  FriendsList(val: any) {
    this.friends = this.friendshipService
      .findFriendshipByUser(this.userID)
      .subscribe((friendship) => {
        this.friends = friendship;
        console.log(this.friends);
        this.myFriends.push(this.friends);
        // for (let i = 0; i < this.friends.length; i++) {
        //   if (
        //     this.friends[i].id_user2 == this.userID &&
        //     this.friends[i].allowed == 1
        //   ) {
        //     this.myFriends?.push(this.friends[i]);
        //     this.name=this.friends[i].name_user1;
        //     console.log(this.myFriends);
        //   }

        //   if (
        //     this.friends[i].id_user1 == this.userID &&
        //     this.friends[i].allowed == 1
        //   ) {
        //     this.myFriends?.push(this.friends[i]);
        //     this.name=this.friends[i].name_user2;
        //     console.log(this.myFriends);
        //   }
        // }
      });
  }
}
