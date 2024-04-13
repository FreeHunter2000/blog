import {Component, EventEmitter, Input, Output,} from '@angular/core';
import {article, ArticleComponent} from "../article/article.component";
import {ArticleFormularComponent} from "../article-formular/article-formular.component";
import { Router } from '@angular/router';
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})



export class OverviewComponent {


  constructor(public router: Router) {

  }


  articleArray : article[] =[
    {inhaltString:"Dieser Inhalt eines TExtestes hat zwar kein bedeutung abe dient lediglich der Testens von Artikeln" , titleString:"TestStringName"},
    {inhaltString:"Kurzer Teststring Ingalt" , titleString:"KurzerName"},
    {inhaltString:"DiKomicsher text name zum komischen testen" , titleString:"KomischerName"}
  ] ;


  addnewArticle(article : article){
this.articleArray.push(article)
  }


}
