import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ArticleComponent } from './article/article.component';
import { OverviewComponent } from './overview/overview.component';
import { ArticleFormularComponent } from './article-formular/article-formular.component';
import {FormsModule} from "@angular/forms";

import { ArtikelSeiteComponent } from './artikel-seite/artikel-seite.component';
import { ProduktComponent } from './produkt/produkt.component';
import {ToastrModule} from "ngx-toastr";
import {MatButtonModule} from "@angular/material/button";
import {UserService} from "./user/user.service";
import {AuthService} from "./user/auth.service";
import {LoginComponent} from "./user/login.component";
import { ProduktStandaloneComponent } from './produkt-standalone/produkt-standalone.component';
import {AdminComponent} from "./user/admin/admin.component";
import { WarenkorbComponent } from './warenkorb/warenkorb.component';
import {RegisterComponent} from "./user/register/register.component";


@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    OverviewComponent,
    ArticleFormularComponent,
    ArtikelSeiteComponent,
    ProduktComponent,
    HeaderComponent,
    LoginComponent,
    ProduktStandaloneComponent,
    AdminComponent,
    WarenkorbComponent,
    RegisterComponent



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    MatButtonModule

  ],
  providers: [UserService,AuthService],
  bootstrap: [AppComponent]


})
export class AppModule { }
