import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OverviewComponent} from "./overview/overview.component";
import {ArticleFormularComponent} from "./article-formular/article-formular.component";

const routes: Routes = [
  //*{path:'', component:OverviewComponent},
  //+{path:'overview', component:OverviewComponent},
  //*{path:'formular', component:ArticleFormularComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
