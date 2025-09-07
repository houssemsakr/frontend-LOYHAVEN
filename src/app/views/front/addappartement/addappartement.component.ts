import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-addappartement',
  templateUrl: './addappartement.component.html',
  styleUrl: './addappartement.component.css'
})
export class AddappartementComponent implements OnInit{
    newAppartement = {
      name: '',
      postedBy: '',
      price: 0,
      phone: '',
      email: '',
      description: '',
     
    };
  
    constructor(public _shared: SharedService,private router: Router ) { }
    ngOnInit(): void {
    }
    
    myFile: any;
  
  
    selectFile(event: any){
      this.myFile = event.target.files[0];  
    }
    
    ajout() {
      const formData = new FormData();
      formData.append('name', this.newAppartement.name);
      formData.append('postedBy', this.newAppartement.postedBy);
      formData.append('price', this.newAppartement.price.toString());
      formData.append('phone', this.newAppartement.phone);
      formData.append('email', this.newAppartement.email);
      formData.append('description', this.newAppartement.description);
      formData.append('image',this.myFile);
  
      this._shared.createapp(formData)
        .subscribe(
          (response) => {
            console.log('Appartement créé avec succès:', response);
            // Réinitialiser le formulaire après la création réussie
            this.newAppartement = {
              name: '',
              postedBy: '',
              price: 0,
              phone: '',
              email: '',
              description: '',
              
            };
             this.router.navigate(['/list']);
          },
          (error) => {
            console.error('Erreur lors de la création de l\'appartement:', error);
          }
        );
    }
  }
  
   
  
  
  