import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() institucion: string = '';
  @Input() periodo: string = '';
  @Input() descripcion: string = '';
  @Input() logoURL: string = '';
  
}
