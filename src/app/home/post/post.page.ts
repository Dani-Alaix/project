import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PublicationPage } from './publication/publication.page';
import { MediaService } from 'src/app/core/services/media.service';
import { Post } from 'src/app/core/interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  allPost: Post[];

  constructor(private modalCtrl: ModalController, private mediaService: MediaService) { }

  ngOnInit() {
    this.getPost();
  }

  getPost() {
    this.mediaService.getUsersPosts().subscribe(
      res => this.allPost = res.reverse(),
      err => { }
    );
  }


  async createPost() {
    const newPost = await this.modalCtrl.create({
      component: PublicationPage,
      componentProps: {
      }
    });
    await newPost.present();
    const { data } = await newPost.onWillDismiss();
  }

  liked(comment: any) {
    comment.like = !comment.like;
    if (comment.like) comment.likes++;
    else if (!comment.like) comment.likes--;
  }

}
