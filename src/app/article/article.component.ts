import {Component, Input, input} from '@angular/core';



export interface article{
  inhaltString :string;
  titleString :string;


}
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss'
})


export class ArticleComponent {

  @Input() titleInput :string ="";
  @Input() inhaltInput :string ="";
  @Input() articletest :article = {inhaltString:"", titleString:""};

  titel : string = this.articletest.titleString;
  inhalt=this.articletest.inhaltString;

  articleArray : article[] = [];

  constructor() {

  }


  protected readonly input = input;
}
