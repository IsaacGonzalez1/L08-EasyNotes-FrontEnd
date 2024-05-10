import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  users: any[] = [];
  user: any;

  constructor(
    private fbuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.registerForm = this.fbuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      admin: 0,
      is_enabled: 1,
      hash: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.listUsers();
  }
  listUsers(): void {
    this.authenticationService.listUsers().subscribe((users) => {
      this.users = Object.values(users);
    });
  }
  onRegister(): void {
    const nameValue = this.registerForm.get('name')?.value;
    const surnameValue = this.registerForm.get('surname')?.value;
    const hashValue = this.registerForm.get('hash')?.value;
  
    if (!nameValue || !surnameValue || !hashValue) {
      console.log('Error');
      return;
    }
  
    const hashed = btoa(hashValue);
    console.log(hashed);
  
    if (this.users.length === 0 || !this.users.some(user => user.name === nameValue)) {
      const registerFormEnc = new FormGroup({
        name: new FormControl(nameValue),
        surname: new FormControl(surnameValue),
        admin: new FormControl(0),
        is_enabled: new FormControl(1),
        hash: new FormControl(hashed),
      });
  
      this.authenticationService
        .registerUser(registerFormEnc.value)
        .subscribe((user) => {
          this.user = user;
        });
      this.router.navigate(['/login']);
    } else {
      console.log('Nombre repetido');
    }
  }
  
}
