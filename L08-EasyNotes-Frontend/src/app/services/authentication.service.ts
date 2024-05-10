import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  url:string = "http://127.0.0.1:3000/api/v2/"
  authSubject = new BehaviorSubject(false);
  constructor( private http: HttpClient) {
  }

  httpOptions={
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };
  loginUser( name : string, surname : string, password : string): Observable<any>{
    var urlLogin : string = this.url + "login/" + name + "/" + surname + "/" + password;
    console.log(urlLogin);
    return this.http.get(urlLogin);
  }

  listUsers(){
    return this.http.get(this.url+'users');
  }

  registerUser(user:any){
    console.log(this.url+'users/signup')
    console.log(user)
    return this.http.post(this.url+'users/signup', user, this.httpOptions);
  }

  getUserByName(name: string){
    return this.http.get(this.url+'users/name/'+name);
  }

  getUserById(id: number){
    return this.http.get(this.url+'users/' + id)
  }
}
