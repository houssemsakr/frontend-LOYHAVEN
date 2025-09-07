import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class HttpService {
  test = "How r u?";

  constructor(private http: HttpClient) {}

  sendEmailToAdmin(user: any): Observable<any> {
    const url = 'http://localhost:3000/sendmail';

    // Format des données à envoyer au serveur
    const data = {
      name: user.name,
      email: user.email,
      message: user.message
    };

    return this.http.post(url, data);
  }
}
