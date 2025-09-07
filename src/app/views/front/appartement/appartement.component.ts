import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { DataService } from '../../services/data.service';

import { SharedService } from '../../services/shared.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrl: './appartement.component.css'
})
export class AppartementComponent implements OnInit  {
  
  appartements: any[] = [];

  constructor(private appartementService: SharedService) { }

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
}
