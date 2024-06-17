import {Component, EventEmitter, Output} from '@angular/core';
import {article} from "../article/article.component";

@Component({
  selector: 'app-article-formular',
  templateUrl: './article-formular.component.html',
  styleUrl: './article-formular.component.scss'
})
export class ArticleFormularComponent {

  @Output()onArticleAdd = new EventEmitter<article>()


  name : string ="";
  content :string ="";
  article : article ={
     titleString:this.name, inhaltString:this.content
  }


  onButtonclick(){
    this.onArticleAdd.emit(this.article)
  }

  onWarenKorbButtonclick(){


  }

}


