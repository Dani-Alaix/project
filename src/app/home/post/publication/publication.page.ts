import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { MediaService } from 'src/app/core/services/media.service';

@Component({
  selector: 'app-publication',
  templateUrl: './publication.page.html',
  styleUrls: ['./publication.page.scss'],
})
export class PublicationPage implements OnInit {

  emoticonsModal: HTMLIonModalElement;

  more: boolean = false;

  public postForm: FormGroup;
  public nameUser: FormControl;
  public caption: FormControl;

  imageUser: any;

  constructor(private mediaService: MediaService, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.caption = new FormControl("");
    this.nameUser = new FormControl("", Validators.required);
    this.postForm = new FormGroup({
      caption: this.caption,
      nameUser: this.nameUser,
    });
  }

  onChangeFiles(event: any) {
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.imageUser = reader.result as string;
    }
  }

  sendPost() {
    let data = {
      caption: this.caption.value,
      date: new Date().toString(),
      name: this.nameUser.value,
      profile: "https://picsum.photos/100",
      media: this.imageUser,
    }
    this.mediaService.newUserMedia(data);
    this.modalCtrl.dismiss();
  }

  back() {
    this.modalCtrl.dismiss();
  }

  emoSelected(box: any, event:any){
    if (box!='') {
      box.value += " " + event.value;
      this.caption.setValue(box.value);
    } else {
      this.caption.setValue(box.value);
    }
  }

}
