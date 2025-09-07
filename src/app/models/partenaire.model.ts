export interface Partenaire {
  _id?: string; // Identifiant MongoDB (optionnel pour les nouvelles créations)
  firstname: string;
  lastname: string;
  adresse: string;
  Job: string;
  phone: number;
  email: string;
  description: string;
  image?: string; // URL de l'image du partenaire (optionnel)
}

