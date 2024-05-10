import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {
  url:string = "http://127.0.0.1:3000/api/v3/"
  authSubject = new BehaviorSubject(false);
  constructor( private http: HttpClient) {
  }

  httpOptions={
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  listCollection(){
    return this.http.get(this.url+'collections');
  }

  getCollection(id:any){
    return this.http.get(this.url+'collections/'+id);
  }

  createCollection(collection:any){
    return this.http.post(this.url+'collections', collection, this.httpOptions);
  }

  updateCollection(data:any, id:any){

    return this.http.put(this.url+'collections/'+id,data,this.httpOptions);
  }

  deleteCollection(id:any){
    return this.http.delete(this.url+'collections/'+id);

  }

  findCollectionByUser(id_user:any){
    return this.http.get(this.url+'collections/user/'+id_user);
  }


}
