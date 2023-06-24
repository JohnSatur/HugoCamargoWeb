import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {
  @Input() titulo: string = '';
  @Input() imgURL: string = '';
  @Input() fecha: string = '';
  @Input() autores: string = '';
  @Input() link: string = '';
}
