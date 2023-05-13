import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datos, IAnimapp } from './interfaces/animapp';

@Injectable({
  providedIn: 'root'
})
export class AnimappService {

  apiKey: string = '3qQzauke22weT0AuZPQIJEa9G5Buw7hQ';

  resultados : Datos[] = [];

  constructor(private http: HttpClient) { }

  buscarGifs(query: string){
    this.http.get<IAnimapp>(`https://api.giphy.com/v1/gifs/search?api_key=${this.apiKey}&q=${query}&limit=10`)
              .subscribe(resp =>{
                this.resultados = resp.data;
              })
  }
}
