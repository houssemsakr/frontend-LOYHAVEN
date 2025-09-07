import { PartenaireService } from '../../../services/partenaire.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-addpartenaire',
  templateUrl: './addpartenaire.component.html',
  styleUrl: './addpartenaire.component.css'
})
export class AddpartenaireComponent implements OnInit{

 newPartenaire = {
    firstname: '',
    lastname: '',
    adresse: '',
    Job: '',
    phone: 0,
    email: '',
    description: '',
    image: null
  };

  myFile: any;
  constructor( public Partenaire: PartenaireService, private router: Router ) { }

  ngOnInit(): void {
  }
  
  

  selectFile(event: any) {
    this.myFile = event.target.files[0];  
  }

  ajout() {
    const formData = new FormData();
    formData.append('firstname', this.newPartenaire.firstname);
    formData.append('lastname', this.newPartenaire.lastname);
    formData.append('adresse', this.newPartenaire.adresse);
    formData.append('Job', this.newPartenaire.Job);
    formData.append('phone', this.newPartenaire.phone.toString());
    formData.append('email', this.newPartenaire.email);
    formData.append('description', this.newPartenaire.description);
    formData.append('image', this.myFile);

    this.Partenaire.createdemandeP(formData)
      .subscribe(
        (response) => {
          console.log(response);
          // Réinitialiser le formulaire après l'ajout
          this.newPartenaire = {
            firstname: '',
            lastname: '',
            adresse: '',
            Job: '',
            phone: 0,
            email: '',
            description: '',
            image: null
          }; 
          this.router.navigate(['/user'])
        },
       
        (error) => {
          console.error(error);}
      );
  }
}

            
          
 
