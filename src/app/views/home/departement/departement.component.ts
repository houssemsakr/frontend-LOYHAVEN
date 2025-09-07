import { Component, OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrl: './departement.component.css'
})
export class DepartementComponent implements OnInit{
  appartements: any[] = [];

  constructor(private appartementService: SharedService, private router: Router) { }

  ngOnInit(): void {
    this.appartementService.getAllAppartements()
      .subscribe(
        (response) => {
          this.appartements = response as any[]; // Assurez-vous de caster response en any[]
          console.log('Tous les appartements:', this.appartements);
        },
        (error) => {
          console.error('Erreur lors de la récupération des appartements:', error);
        }
      );
  }
  
  delete(id: any) {
    this.appartementService.deleteAppartement(id)
      .subscribe(
        () => {
          console.log('Appartement supprimé avec succès');
          // Rafraîchir la liste après la suppression réussie
          this.ngOnInit();
        },
        (error) => {
          console.error('Erreur lors de la suppression de l\'appartement:', error);
        }
      );
  }
  viewDetails(id: any) {
    // Naviguer vers la page de détails de l'appartement avec l'ID
    this.router.navigate(['user/appartement-details', id]);
}
}
