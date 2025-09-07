import { Component } from '@angular/core';
import { PostService } from '../../../services/post.service';
@Component({
  selector: 'app-addcolocation',
  templateUrl: './addcolocation.component.html',
  styleUrl: './addcolocation.component.css'
})
export class AddcolocationComponent {
    newPost = {
        title: '',
        body: ''
    };

    constructor(private postService: PostService) { }

    createPost() {
        this.postService.createpost(this.newPost)
            .subscribe(
                (response) => {
                    console.log('Post created successfully:', response);
                    // Effectuez d'autres actions après la création de la publication
                },
                (error) => {
                    console.error('Error creating post:', error);
                }
            );
    }
}
