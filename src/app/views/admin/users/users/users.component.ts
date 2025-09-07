
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../../../services/data.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  dataArray:any=[]
 
  dataStudent={
    firstname:'',
    lastname:'',
    email:'',
    age:0,
    phone:0,
    id:'',
  }

  messageSuccess=''
  constructor(private ds:DataService,private route:Router) {
   
    this.ds.getAllusers().subscribe(data=> this.dataArray=data)
    
   }

  ngOnInit(): void {
  }


  // delete(id:any,i:number){

    // this.ds.deleteuser(id).subscribe(response=>this.dataArray.splice(i,1))

  // }





  details(id:any){
    this.route.navigate(['/admin/detailsusers/'+id])
  }
  delete(id: any): void {
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
        this.ds.deleteuser(id).subscribe(
          (response) => {
            console.log(response);
            // Recharge la liste des utilisateurs après la suppression
            this.ds.getAllusers().subscribe((data) => (this.dataArray = data));
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
          },
          (error) => {
            console.error('Error deleting user:', error);
            Swal.fire('Error!', 'An error occurred while deleting.', 'error');
          }
        );
      }
    });
  }
  

}
