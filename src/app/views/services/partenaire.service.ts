import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Partenaire } from '../../models/partenaire.model';

@Injectable({
  providedIn: 'root'
})
export class PartenaireService {

  private url = 'http://127.0.0.1:3000/partenaire/';
    
  constructor(private http: HttpClient) { }
      
  createPartenaire(partenaire: any) {
    return this.http.post('http://127.0.0.1:3000/partenaire/create/', partenaire);
  }
  createdemandeP(partenaire: any) {
    return this.http.post('http://127.0.0.1:3000/demandeP/create/', partenaire);
  }
  getAllDemandePs() {
    return this.http.get('http://127.0.0.1:3000/demandeP/all');
  }
  
  deleteDemandeP(id: any) {
    return this.http.delete('http://127.0.0.1:3000/demandeP/delete/' + id);
  }
    
  getAllPartenaire() {
    return this.http.get(this.url + 'all');
  }
      
  deletePartenaire(id: any) {
    return this.http.delete(this.url + 'supprimer/' + id);
  }

  getPartenaireById(id: any){
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
      
   
  
  