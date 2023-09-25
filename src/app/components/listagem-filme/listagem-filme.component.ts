import { Component, OnInit } from '@angular/core';
import { FilmeService } from 'src/app/services/filme.service';
import { Filme } from 'src/models/filme';


@Component({
  selector: 'app-listagem-filme',
  templateUrl: './listagem-filme.component.html',
  styleUrls: ['./listagem-filme.component.css']
})
export class ListagemFilmeComponent implements OnInit { 
   Filmes: Filme[]= []
 


   constructor(private filmeService : FilmeService){

   }
  ngOnInit(): void {
    
    this.filmeService.SelecionarFilmes()
    .subscribe(obj => 
      {this.Filmes = obj; console.log(obj)} )
  }




}
