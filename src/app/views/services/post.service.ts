import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PostService {

 private url = 'http://127.0.0.1:3000/colocation/';
    
constructor(private http: HttpClient) { }
    
createColocation(colocation: any) {
  return this.http.post('http://127.0.0.1:3000/colocation/create/', colocation);
}
createpost(colocation: any) {
  return this.http.post('http://127.0.0.1:3000/post/create/', colocation);
}
getAllPosts() {
  return this.http.get('http://127.0.0.1:3000/post/all');
}

deletePost(id: any) {
  return this.http.delete('http://127.0.0.1:3000/post/supprimer/' + id);
}
  
getAllColocations() {
  return this.http.get(this.url + 'all');
}
    
deleteColocation(id: any) {
  return this.http.delete(this.url + 'supprimer/' + id);
}
    
      
    
updateColocation(id: any, colocation: any) {
  return this.http.put(this.url + 'update/' + id, colocation);
}
      
    
getColocationById(id: any){
  return this.http.get( this.url + 'getbyid/' + id );
   }
    // getAppartementDetails(appartementId: string) {
      // const url = `http://127.0.0.1:3000/appartement/getbyid/${appartementId}`;
      // return this.http.get(url);
    // }
    
    
    // getAppartementDetails(appartementId: string) {
      // const url = `${this.url}getbyid/${appartementId}`;
      // return this.http.get(url);
    // }
    }
    
 

