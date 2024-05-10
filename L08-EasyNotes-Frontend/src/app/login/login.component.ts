import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  users: any[] = [];
  error: string = "";

  constructor(private fbuilder: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {
    this.loginForm = this.fbuilder.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.listUsers();
  }

  listUsers(): void {
    this.authenticationService.listUsers().subscribe(
      users => {
        this.users = Object.values(users);
      }
    );
  }

  onLogin(): void {
    if (this.loginForm.get('name')?.value === "" || this.loginForm.get('surname')?.value === "" || this.loginForm.get('password')?.value === "") {
      console.log("Error");
      return;
    }

    for (let i = 0; i < this.users.length; i++) {
      if (this.users[i].name === this.loginForm.get('name')?.value &&
        this.users[i].surname === this.loginForm.get('surname')?.value &&
        this.users[i].hash === btoa(this.loginForm.get('password')?.value)) {
        if (this.users[i].admin === 1) {
          console.log("Usuario admin");
          this.router.navigate(['/list-user']);
        } else {
          console.log("Usuario normal");
          this.router.navigate(['/list-notes/' + this.users[i].id]);
        }
        return;
      }
    }

    this.error = "Incorrect credentials.";
    console.log("Incorrect user");
  }
}
