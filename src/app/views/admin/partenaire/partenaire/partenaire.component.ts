import { Component, OnInit} from '@angular/core';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
import { PartenaireService } from '../../../services/partenaire.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrl: './partenaire.component.css'
})
export class PartenaireComponent implements OnInit{
  partenaires: any;

  constructor(private ds:DataService,public Partenaire: PartenaireService,private route:Router) { }

  ngOnInit(): void {

    this.Partenaire.getAllPartenaire()
      .subscribe(
        (response)=>{
          this.partenaires = response
          console.log(this.partenaires);
          
        }
      )

  }

  // delete(id: any){
    
  //   this._shared.deleteAppartement(id)
  //     .subscribe(
  //       (response)=>{
  //         console.log(response);
          
  //         this.ngOnInit();

  //       }
  //     );
    
  // }
  

  delete(id: any){


    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        this.Partenaire.deletePartenaire(id)
        .subscribe(
          (response)=>{
            console.log(response);
            
            this.ngOnInit();
  
            Swal.fire(
              'Deleted!',
              'Your file has been deleted.',
              'success'
            )

          }
        );

     
      }
    })


    

    
  }

}

