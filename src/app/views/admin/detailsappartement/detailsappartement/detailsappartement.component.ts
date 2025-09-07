import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../services/data.service';
@Component({
  selector: 'app-detailsappartement',
  templateUrl: './detailsappartement.component.html',
  styleUrl: './detailsappartement.component.css'
})
export class DetailsappartementComponent implements OnInit{

  id=''
  dataObject:any
  messageErr=''
  constructor(private route: ActivatedRoute, private ds: DataService) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
        this.loadAppartementDetails();
      }
    });
  }
  
  loadAppartementDetails(): void {
    this.ds.getOneAppartement(this.id).subscribe(
      (response) => {
        this.dataObject = response;
      },
      (error) => {
        console.error('Error fetching appartement details:', error);
        this.messageErr = 'We didn\'t find this appartement in our database';
      }
    );
  }
  ngOnInit(): void {
  }

}