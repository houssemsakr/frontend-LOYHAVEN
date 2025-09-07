import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';
import { Appartement } from '../../../../models/appartement.model';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  appartements: Appartement[] = [];
  newAppartement: Appartement = {
    name: '',
    postedBy: '',
    price: 0,
    phone: '',
    email: '',
    description: '',
    
  };
  myFile: any;

  constructor(private appartementService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.loadAppartements();
  }

  loadAppartements(): void {
    this.appartementService.getAllDemandes().subscribe(
      (response: any) => {
        this.appartements = response;
        console.log('Tous les appartements:', this.appartements);
      },
      (error) => {
        console.error('Erreur lors de la récupération des appartements:', error);
      }
    );
  }

  selectFile(event: any): void {
    this.myFile = event.target.files[0];
  }
  ajout(appartement: Appartement): void {
    const formData = new FormData();
    formData.append('name', appartement.name);
    formData.append('postedBy', appartement.postedBy);
    formData.append('price', appartement.price.toString());
    formData.append('phone', appartement.phone.toString());
    formData.append('email', appartement.email);
    formData.append('description', appartement.description);
  
    // Vérifiez si l'image est présente dans l'appartement
    if (appartement.image) {
      formData.append('image', appartement.image);
    } else if (this.myFile) {
      formData.append('image', this.myFile);
    }
  
    this.appartementService.create(formData).subscribe(
      (response: any) => {
        console.log('Appartement créé avec succès:', response);
        this.loadAppartements(); // Recharge la liste des appartements après l'ajout
  
        // Suppression de la demande correspondante dans la collection 'Demandes'
        this.deleteDemande(appartement._id); // Assurez-vous que votre modèle contient l'identifiant (_id) de la demande
  
        // Réinitialiser les valeurs du nouvel appartement
        this.newAppartement = {
          name: '',
          postedBy: '',
          price: 0,
          phone: '',
          email: '',
          description: '',
        };
  
        this.router.navigate(['/admin/Request']);
      },
      (error) => {
        console.error('Erreur lors de la création de l\'appartement:', error);
      }
    );
  }
  
  deleteDemande(demandeId: any): void {
    this.appartementService.deleteDemandes(demandeId).subscribe(
      () => {
        console.log('Demande supprimée avec succès');
      },
      (error) => {
        console.error('Erreur lors de la suppression de la demande:', error);
      }
    );
  }
}  