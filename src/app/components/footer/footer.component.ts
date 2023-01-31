import { Component } from '@angular/core';

// Icons
import { faWhatsapp, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  faWhatsapp = faWhatsapp;
  faFacebook = faFacebook;
  faInstagram = faInstagram;
}
