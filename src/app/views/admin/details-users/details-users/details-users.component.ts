import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';

@Component({
  selector: 'app-details-users',
  templateUrl: './details-users.component.html',
  styleUrl: './details-users.component.css'
})
export class DetailsUsersComponent implements OnInit {

  id=''
  dataObject:any
  messageErr=''
  constructor(private route:ActivatedRoute,private ds:DataService) {
    this.route.params.subscribe(params=>this.id=params.id)

    this.ds.getOneuser(this.id).subscribe(response=>this.dataObject=response,(err:HttpErrorResponse)=>{
        console.log(err)
      this.messageErr="We dont't found this student in our database"})
   }

  ngOnInit(): void {
  }

}