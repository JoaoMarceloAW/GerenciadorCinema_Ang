import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Filme } from 'src/models/filme';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';




@Injectable({
  providedIn: 'root'
})
export class FilmeService {
private apiUrl = "https://api.themoviedb.org/3/movie/"

  constructor(private http: HttpClient) { }

    public SelecionarFilmes(): Observable<Filme[]>{
    return this.http.get<any>('https://api.themoviedb.org/3/movie/popular',this.ObterHeaderAutorizacao())
    .pipe(map(obj => obj.results),map(obj => this.mapearFilmes(obj)));
  }

  private ObterHeaderAutorizacao(){
    return{     
      method:'GET',
      headers: {
        accept: 'apliccation/json',
        Authorization: environment.API_KEY,
      },
    };  

    
  }
  private mapearFilme(obj: any): Filme {
    return {
      id: obj.id,
      titulo: obj.title,
      poster: obj.poster_path
    }
  }

  private mapearFilmes(obj: any[]): Filme[] {

    const filmesMapeados = obj.map(filme => this.mapearFilme(filme));
    return filmesMapeados;
  }
}
