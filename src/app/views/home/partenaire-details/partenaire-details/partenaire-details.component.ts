import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PartenaireService } from '../../../services/partenaire.service';
@Component({
  selector: 'app-partenaire-details',
  templateUrl: './partenaire-details.component.html',
  styleUrl: './partenaire-details.component.css'
})
export class PartenaireDetailsComponent implements OnInit{



  constructor(private actRoute: ActivatedRoute, private part: PartenaireService, private router: Router) { }
  
  id: any;
  partenaire: any;
  
  ngOnInit(): void {
    this.id = this.actRoute.snapshot.paramMap.get('id');
  
    this.part.getPartenaireById(this.id)
      .subscribe(
        (response)=>{
          this.partenaire = response;
          
          
        }
      )
    
    
  }
  }
