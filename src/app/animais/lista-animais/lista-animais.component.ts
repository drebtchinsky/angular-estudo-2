import { switchMap } from 'rxjs/operators';
import { Observable, Subscription } from 'rxjs';
import { AnimaisService } from './../animais.service';
import { UsuarioService } from './../../autenticacao/usuario/usuario.service';
import { Animais } from './../animais';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-lista-animais',
  templateUrl: './lista-animais.component.html',
  styleUrls: ['./lista-animais.component.css'],
})
export class ListaAnimaisComponent implements OnInit {
  animais$!: Observable<Animais>;

  constructor(
    private usuarioService: UsuarioService,
    private animaisService: AnimaisService
  ) {}

  ngOnInit(): void {
    this.animais$ = this.usuarioService.retornaUsuario().pipe(
      switchMap((usuario) => {
        const userName = usuario.name ?? '';
        return this.animaisService.listaDoUsuario(userName);
      })
    );
  }
}
