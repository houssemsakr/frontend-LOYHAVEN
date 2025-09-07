import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostService } from '../../../services/post.service';
import { Colocation } from '../../../../models/colocation.model';

@Component({
  selector: 'app-reqcolocation',
  templateUrl: './reqcolocation.component.html',
  styleUrls: ['./reqcolocation.component.css']
})
export class ReqcolocationComponent implements OnInit {
  colocations: Colocation[] = [];
  newColocation: Colocation = {
    title: '',
    body: ''
  };

  constructor(private postService: PostService, private router: Router) {}

  ngOnInit(): void {
    this.loadColocations();
  }

  loadColocations(): void {
    this.postService.getAllPosts().subscribe(
      (response: any) => {
        this.colocations = response;
        console.log('Toutes les colocations:', this.colocations);
      },
      (error) => {
        console.error('Erreur lors de la récupération des colocations:', error);
      }
    );
  }

  ajout(colocation: Colocation): void {
    this.postService.createColocation(colocation).subscribe(
      (response: any) => {
        console.log('Colocation créée avec succès:', response);
        this.loadColocations(); // Recharge la liste des colocations après l'ajout

        // Suppression du post correspondant
        this.deletePost(colocation._id); // Assurez-vous que votre modèle contient l'identifiant (_id) du post

        // Réinitialisation des valeurs du nouvel colocation
        this.newColocation = {
          title: '',
          body: ''
        };

        this.router.navigate(['/admin/Requestcol']);
      },
      (error) => {
        console.error('Erreur lors de la création de la colocation:', error);
      }
    );
  }

  deletePost(postId: any): void {
    this.postService.deletePost(postId).subscribe(
      () => {
        console.log('Post supprimé avec succès');
      },
      (error) => {
        console.error('Erreur lors de la suppression du post:', error);
      }
    );
  }
}
