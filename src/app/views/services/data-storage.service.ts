// data-storage.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private formData: any;

  constructor() { }

// data-storage.service.ts
saveFormData(formData: any): void {
  this.formData = formData;
  console.log('Données enregistrées dans le service :', this.formData);
}


  // Méthode pour récupérer les données du formulaire
  getFormData(): any {
    return this.formData;
  }
}
