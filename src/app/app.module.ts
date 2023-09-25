import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ListagemFilmeComponent } from './components/listagem-filme/listagem-filme.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { CardFilmeComponent } from './components/card-filme/card-filme.component';
import { DetalhesFilmeComponent } from './components/detalhes-filme/detalhes-filme.component';

@NgModule({
  declarations: [
    AppComponent,
    ListagemFilmeComponent,
    NavBarComponent,
    
    CardFilmeComponent,
         DetalhesFilmeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
