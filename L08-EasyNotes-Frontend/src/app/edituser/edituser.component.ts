import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from '../services/note.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit {

  userForm!:FormGroup;
  users: any;
  id:any;


  constructor(
    private userService: UserService,
    private route: ActivatedRoute) { }

  ngOnInit(){

    const routeParams=this.route.snapshot.paramMap;
    this.id=Number(routeParams.get('userID'));
    console.log(this.id);
    this.userService.findUser(this.id).subscribe(
      (user)=>{
        this.users=user
        this.userForm=new FormGroup({
        name: new FormControl(this.users.name),
        surname: new FormControl(this.users.surname),
        admin: new FormControl(this.users.admin) ,
        is_enabled: new FormControl(this.users.is_enabled),
        hash: new FormControl(this.users.hash)})
      })
  }

  onSubmit(){
    this.userService.updateUser(this.userForm.value,this.id).subscribe(
      (user)=>{
        console.log("User Updated Successfully!!");
      }
    )
  }
}
