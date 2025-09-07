import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../../services/shared.service';


@Component({
  selector: 'app-details-appartement',
  templateUrl: './details-appartement.component.html',
  styleUrl: './details-appartement.component.css'
})
export class DetailsAppartementComponent implements OnInit{



constructor(private actRoute: ActivatedRoute, private shared: SharedService, private router: Router) { }

id: any;
appartement: any;

ngOnInit(): void {
  this.id = this.actRoute.snapshot.paramMap.get('id');

  this.shared.getAppartementById(this.id)
    .subscribe(
      (response)=>{
        this.appartement = response;
        
        
      }
    )
  
  
}
}