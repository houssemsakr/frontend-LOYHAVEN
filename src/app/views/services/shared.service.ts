import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  export class SharedService {

    private url = 'http://127.0.0.1:3000/appartement/';
  
    constructor(private http: HttpClient) { }
  
    create(appartement: any) {
      return this.http.post('http://127.0.0.1:3000/appartement/create/', appartement);
    }
    createapp(appartement: any) {
      return this.http.post('http://127.0.0.1:3000/Demandes/create/', appartement);
    }
    getAllDemandes() {
      return this.http.get('http://127.0.0.1:3000/demandes/all');
    }
    
    deleteDemandes(id: any) {
      return this.http.delete('http://127.0.0.1:3000/demandes/supprimer/' + id);
    }

    getAllAppartements() {
      return this.http.get(this.url + 'all');
    }
  
    deleteAppartement(id: any) {
      return this.http.delete(this.url + 'supprimer/' + id);
    }
  
    
  
    updateAppartement(id: any, appartement: any) {
      return this.http.put(this.url + 'update/' + id, appartement);
    }
    
  
  getAppartementById(id: any){

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
  