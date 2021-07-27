import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Comentario, Comentarios } from './comentarios';

@Injectable({
  providedIn: 'root',
})
export class ComentariosService {
  constructor(private http: HttpClient) {}

  buscaComentario(id: number): Observable<Comentarios> {
    return this.http.get<Comentarios>(`photos/${id}/comments`);
  }
  incluiComentario(id: number, commentText: string): Observable<Comentario> {
    return this.http.post<Comentario>(`photos/${id}/comments`, {
      commentText,
    });
  }
}
