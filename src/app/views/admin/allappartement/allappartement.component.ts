import { Component, OnInit} from '@angular/core';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-allappartement',
  templateUrl: './allappartement.component.html',
  styleUrl: './allappartement.component.css'
})
export class AllappartementComponent implements OnInit{
  appartements: any[] = [];

  constructor(private appartementService: SharedService, private route:Router) { }

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
  details(id: any) {
    this.route.navigate(['/admin/detailsappartement', id]);
  }
  
  
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

      this.appartementService.deleteAppartement(id)
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