import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollectionNoteService {
  url:string = "http://127.0.0.1:3000/api/v4/"
  authSubject = new BehaviorSubject(false);
  constructor( private http: HttpClient) {
  }

  httpOptions={
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  listCollection_notes(){
    return this.http.get(this.url+'collection_notes');
  }

  getByCollectionId(id_collection:any){
    return this.http.get(this.url+'collection_notes/collection/'+id_collection);
  }

  createCollection_note(data:any){
    return this.http.post(this.url+'collection_notes', data, this.httpOptions);
  }

  getByNoteId(id:any){
    return this.http.get(this.url+'collection_notes/note/'+id);
  }

  deleteCollection_note(id_note:any){
    return this.http.delete(this.url+'collection_notes/delete/'+id_note);


  }




}
