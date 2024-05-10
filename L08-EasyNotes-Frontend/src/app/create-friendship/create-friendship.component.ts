import { Component, OnInit } from '@angular/core';
import { FriendshipService } from '../services/friendship.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-friendship',
  templateUrl: './create-friendship.component.html',
  styleUrls: ['./create-friendship.component.scss']
})
export class CreateFriendshipComponent implements OnInit {
  friendship: any
  urlAnterior:any;
  userID: any;
  friendshipForm: any;
  user:any
  users:any[]=[]
  nameUser1:any

  constructor(private friendshipService:FriendshipService, private fbuilder: FormBuilder,private userService: UserService,private activateRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const rParams = this.activateRoute.snapshot.paramMap;
    this.userID = rParams.get('userID');
    this.user=this.userService.findUser(this.userID)
    
    console.log(this.user.id)
    this.friendshipForm = this.fbuilder.group({
      name_user1: this.nameUser1,
      name_user2: ['', Validators.required],
      id_user1:this.userID,
      id_user2:['', Validators.required],
      allowed: 0,
    });
  }

  getPreviousUrl(): string {
    const history = window.history;
    const previousUrl = history.length > 1 ? history.state.navigationUrl : '';
    console.log(previousUrl)
    return previousUrl;
  }

  onSubmit(){
    this.userService.listUsers().subscribe(
      users=>{
        this.users=Object.values(users)
        for (let i=0; i<this.users.length;i++){
          if(this.userID==this.users[i].id){
            
            this.nameUser1=this.users[i].name
            let friendshipForm2=new FormGroup({
              name_user1: new FormControl(this.nameUser1),
              name_user2:new FormControl(''+this.friendshipForm.get('name_user2')?.value),
              id_user1:new FormControl(this.userID),
              id_user2:new FormControl(''+this.friendshipForm.get('id_user2')?.value),
              allowed: new FormControl(0),
            })
            this.friendshipService.addFriendship(friendshipForm2.value).subscribe(
              friendship =>{
                this.friendship =friendship
              }
            );
        
            console.log(this.friendshipForm.value);
            window.history.back()
          }
        }
      }
    )
    
  }
}