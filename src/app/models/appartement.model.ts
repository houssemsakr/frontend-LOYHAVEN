export interface Appartement {
    _id?: string; // Identifiant MongoDB (optionnel pour les nouvelles créations)
    name: string;
    postedBy: string;
    price: number;
    phone: string;
    email: string;
    description: string;
    image?: string; // URL de l'image de l'appartement (optionnel)
  }
  