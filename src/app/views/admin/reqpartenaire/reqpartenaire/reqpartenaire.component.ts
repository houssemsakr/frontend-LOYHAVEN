import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PartenaireService } from '../../../services/partenaire.service';
import { Partenaire } from '../../../../models/partenaire.model';

@Component({
  selector: 'app-reqpartenaire',
  templateUrl: './reqpartenaire.component.html',
  styleUrls: ['./reqpartenaire.component.css']
})
export class ReqpartenaireComponent implements OnInit {
  partenaires: Partenaire[] = [];
  newPartenaire: Partenaire = {
    firstname: '',
    lastname: '',
    adresse: '',
    Job: '',
    phone: 0,
    email: '',
    description: '',
    image: ''
  };

  constructor(private partenaireService: PartenaireService, private router: Router) {}

  ngOnInit(): void {
    this.loadPartenaires();
  }

  loadPartenaires(): void {
    this.partenaireService.getAllDemandePs().subscribe(
      (response: any) => {
        this.partenaires = response;
        console.log('Toutes les colocations:', this.partenaires);
      },
      (error: any) => {
        console.error('Erreur lors de la récupération des colocations:', error);
      }
    );
  }

  ajout(partenaire: Partenaire): void {
    this.partenaireService.createPartenaire(partenaire).subscribe(
      (response: any) => {
        console.log('Colocation créée avec succès:', response);
        this.loadPartenaires(); // Recharge la liste des colocations après l'ajout

        // Suppression du post correspondant
        this.deleteDemande(partenaire._id); // Assurez-vous que votre modèle contient l'identifiant (_id) du post

        // Réinitialisation des valeurs du nouvel colocation
        this.newPartenaire = {
          firstname: '',
          lastname: '',
          adresse: '',
          Job: '',
          phone: 0,
          email: '',
          description: '',
          image: ''
        };

        this.router.navigate(['/admin/Requestpart']);
      },
      (error) => {
        console.error('Erreur lors de la création de la colocation:', error);
      }
    );
  }

  deleteDemande(postId: any): void {
    this.partenaireService.deleteDemandeP(postId).subscribe(
      () => {
        console.log('Post supprimé avec succès');
      },
      (error) => {
        console.error('Erreur lors de la suppression du post:', error);
      }
    );
  }
}


