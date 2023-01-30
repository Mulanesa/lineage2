import { Component } from '@angular/core';

// Icons FB + WSP

import { faWhatsapp, faFacebook } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  faWhatsapp = faWhatsapp;
  faFacebook = faFacebook;
}
