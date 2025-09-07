import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  totalUsers: number = 0;
  totalAppartements: number = 0; // Ajoutez une nouvelle propriété pour le nombre total d'appartements
  totalPartenairs: number = 0;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    // Effectuer une requête HTTP pour récupérer le nombre total d'utilisateurs depuis votre API
    this.http.get<any>('http://localhost:3000/count')
      .subscribe(
        (response: any) => {
          // Assurez-vous que votre API renvoie un objet avec la propriété 'count'
          if (response && response.count) {
            this.totalUsers = response.count; // Accédez à la propriété 'count' de la réponse
          } else {
            console.error('Réponse API invalide:', response);
          }
        },
        (error) => {
          console.error('Erreur lors de la récupération du nombre d\'utilisateurs:', error);
        }
      );

    // Effectuer une requête HTTP pour récupérer le nombre total d'appartements depuis votre API
    this.http.get<any>('http://localhost:3000/appartement/count')
      .subscribe(
        (response: any) => {
          if (response && response.count) {
            this.totalAppartements = response.count;
          } else {
            console.error('Réponse API invalide:', response);
          }
        },
        (error) => {
          console.error('Erreur lors de la récupération du nombre d\'appartements:', error);
        }
      );
      // Effectuer une requête HTTP pour récupérer le nombre total des partenaire depuis votre API
    this.http.get<any>('http://localhost:3000/partenaire/count')
    .subscribe(
      (response: any) => {
        if (response && response.count) {
          this.totalPartenairs = response.count;
        } else {
          console.error('Réponse API invalide:', response);
        }
      },
      (error) => {
        console.error('Erreur lors de la récupération du nombre d\'appartements:', error);
      }
    );
  }
}
