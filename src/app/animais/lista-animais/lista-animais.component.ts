import { ActivatedRoute } from '@angular/router';
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
  animais!: Animais;

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((param) => {
      this.animais = this.activatedRoute.snapshot.data['animais'];
    });
  }
}
