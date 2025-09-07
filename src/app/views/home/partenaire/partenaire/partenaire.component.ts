import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { PartenaireService } from '../../../services/partenaire.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-partenaire',
  templateUrl: './partenaire.component.html',
  styleUrls: ['./partenaire.component.css']
})
export class PartenaireComponent implements OnInit {
  partenaires: any[] = [];
  dataPartenaire: any = {}; // Déclaration de dataPartenaire comme un objet vide

  constructor(private partenaireService: PartenaireService) {}

  ngOnInit(): void {
    this.loadPartenaires();
  }

  loadPartenaires(): void {
    this.partenaireService.getAllPartenaire().subscribe(
      (data: any) => { // Définissez explicitement le type de données attendu (any)
        if (Array.isArray(data)) {
          this.partenaires = data; // Assurez-vous que data est bien un tableau
        } else {
          console.error('Invalid data format received:', data);
        }
      },
      (error) => {
        console.error('Error loading partenaires:', error);
      }
    );
  }
  

  deletePartenaire(partenaireId: string): void {
    this.partenaireService.deletePartenaire(partenaireId).subscribe(
      () => {
        console.log('Partenaire deleted successfully.');
        this.loadPartenaires();
      },
      (error) => {
        console.error('Error deleting partenaire:', error);
      }
    );
  }
}
