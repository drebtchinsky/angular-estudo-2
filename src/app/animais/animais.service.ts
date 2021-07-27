import { TokenService } from './../autenticacao/token.service';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Animais, Animal } from './animais';
import { environment } from 'src/environments/environment';
const API = environment.API_URL;

@Injectable({
  providedIn: 'root',
})
export class AnimaisService {
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  listaDoUsuario(nomeUsuario: string): Observable<Animais> {
    return this.http.get<Animais>(`${API}/${nomeUsuario}/photos`);
  }

  buscaPorId(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${API}/photos/${id}`);
  }
}
