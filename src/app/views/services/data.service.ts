import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators'; // Importez tap et catchError depuis RxJS

@Injectable({
  providedIn: 'root'
})
export class DataService {
  token: any = localStorage.getItem('token');
  headerAdmin = new HttpHeaders()
    .set('authorization', this.token)
    .set('role', 'Admin');

  params = new HttpParams()
    .set('secret', environment.secret)
    .set('client', environment.client);

  headerall = new HttpHeaders()
    .set('authorization', this.token);

  constructor(private http: HttpClient) {}

  getAllappartement() {
    return this.http.get(`${environment.urlBackend}` + 'appartements/', { headers: this.headerall, params: this.params });
  }

  addappartement(profile: any) {
    return this.http.post(environment.urlBackend + 'addappartement/', profile, { headers: this.headerAdmin, params: this.params });
  }

  getOneAppartement(id: any): Observable<any> {
    return this.http.get(`${environment.urlBackend}appartement/getbyid/${id}`, { headers: this.headerall, params: this.params }).pipe(
      tap((response: any) => console.log('Appartement details response:', response)),
      catchError((error: any) => {
        console.error('Error fetching appartement details:', error);
        return throwError(error); // Rethrow the error to propagate it further
      })
    );
  }
  
  getAllusers() {
    return this.http.get(`${environment.urlBackend}users/`, { headers: this.headerall, params: this.params });
  }

  deleteuser(id: any) {
    return this.http.delete(`${environment.urlBackend}user/${id}`, { headers: this.headerAdmin, params: this.params });
  }

  getOneuser(id: any) {
    return this.http.get(`${environment.urlBackend}user/${id}`, { headers: this.headerall, params: this.params });
  }
}
