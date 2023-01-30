import { Component } from '@angular/core';

// Icons

import { faRotate, faLock, faX } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-donaciones',
  templateUrl: './donaciones.component.html',
  styleUrls: ['./donaciones.component.css']
})
export class DonacionesComponent {
  faRotate = faRotate;
  faLock = faLock;
  faX = faX;
  faEllipsisVertical = faEllipsisVertical;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;

}
