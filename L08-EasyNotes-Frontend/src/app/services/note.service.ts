import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  url:string = "http://127.0.0.1:3000"
  constructor(private http: HttpClient) { }

  listNote(){
    return this.http.get(this.url+'/api/v1/notes');
  }

  httpOptions={
    headers: new HttpHeaders({ 'Content-Type': 'application/json'})
  };

  addNote(data: any){
    return this.http.post(this.url+'/api/v1/notes', data, this.httpOptions);

  }

  findNote(id:any){
    return this.http.get(this.url+'/api/v1/notes/'+id);
  }

  findNoteByUser(user_id:any){
    return this.http.get(this.url+'/api/v1/notes/user/'+user_id);
  }


  updateNote(data:any, id:any){

    return this.http.put(this.url+'/api/v1/notes/'+id,data,this.httpOptions);
  }

  deleteNote(id:any){
    return this.http.delete(this.url+'/api/v1/notes/'+id);


  }

  getLast(){
    return this.http.get(this.url+'/api/v1/notes/getLast/get');
  }

  is_shared(id:any){
    return this.http.put(this.url+'/api/v1/notes/is_shared/'+id,{});
  }
}
