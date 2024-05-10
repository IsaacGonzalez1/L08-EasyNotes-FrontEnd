import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FriendshipService {
  url: string = 'http://127.0.0.1:3000';
  constructor(private http: HttpClient) {}

  listFriendship() {
    return this.http.get(this.url + '/api/v5/friendships');
  }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  addFriendship(data: any) {
    return this.http.post(
      this.url + '/api/v5/friendships',
      data,
      this.httpOptions
    );
  }

  friendshipAllow(id:any){
    return this.http.put(this.url+'/api/v5/friendships/allow/'+id,{});
  }

  findFriendshipByUser(user_id: any) {
    return this.http.get(this.url + '/api/v5/friendships/list/' + user_id);
  }  

  deleteFriendship(id: any) {
    return this.http.delete(this.url + '/api/v5/friendships/' + id);
  }
}
