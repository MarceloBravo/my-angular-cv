import { Component, Input } from '@angular/core';
import { CredentialInterface } from '../../interface/credential-interface';
import AOS from 'aos';

@Component({
  selector: 'app-credential',
  imports: [],
  templateUrl: './credential.html',
  styleUrl: './credential.scss',
})
export class Credential {
  @Input() credential: CredentialInterface = {
    name: '',
    url: '',
    image: '',
    mouse_move_title: '',
    mouse_move_description: '',
  };

  constructor(){
  }

  ngOnInit(): void {
    AOS.init();
    console.log(this.credential);
  }


}
