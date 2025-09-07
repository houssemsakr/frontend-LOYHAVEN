import { Component,OnInit } from '@angular/core';
import { PostService } from '../../../services/post.service';


@Component({
    selector: 'app-colocation',
    templateUrl: './colocation.component.html',
    styleUrls: ['./colocation.component.css']
})
export class ColocationComponent  implements OnInit {
  colocations: any[] = [];
  

  constructor(private postService: PostService) { }


  ngOnInit(): void {
    this.postService.getAllColocations()
      .subscribe(
        (response) => {
          this.colocations = response as any[]; // Assurez-vous de caster response en any[]
          console.log('Tous les colocations:', this.colocations);
        },
        (error) => {
          console.error('Erreur lors de la récupération des appartements:', error);
        }
      );
  }

}