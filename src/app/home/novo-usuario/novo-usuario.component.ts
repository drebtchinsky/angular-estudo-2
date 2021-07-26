import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { NovoUsuarioService } from './novo-usuario.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControlOptions,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { NovoUsuario } from './novo-usuario';
import { minusculoValidator } from './validators/minusculo.validator';
import { UsuarioExisteService } from './usuario-existe.service';
import { usuarioSenhaIguaisValidator } from './validators/usuario-senha.validator';

@Component({
  selector: 'app-novo-usuario',
  templateUrl: './novo-usuario.component.html',
  styleUrls: ['./novo-usuario.component.css'],
})
export class NovoUsuarioComponent implements OnInit {
  novoUsuarioForm!: FormGroup;
  sub!: Subscription;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private novoUsuarioService: NovoUsuarioService,
    private usuarioExistenteService: UsuarioExisteService
  ) {}

  ngOnInit(): void {
    this.novoUsuarioForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        fullName: ['', [Validators.required, Validators.minLength(4)]],
        userName: [
          '',
          [Validators.required, Validators.minLength(4), minusculoValidator],
          [this.usuarioExistenteService.usuarioExiste()],
        ],
        password: ['', [Validators.required, Validators.minLength(4)]],
      },
      {
        validators: [usuarioSenhaIguaisValidator],
      }
    );
  }
  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  cadastrar() {
    if (this.novoUsuarioForm.valid) {
      const novoUsuario = this.novoUsuarioForm.getRawValue() as NovoUsuario;
      this.sub = this.novoUsuarioService
        .cadastraNovoUsuario(novoUsuario)
        .subscribe(
          () => {
            this.router.navigate(['']);
          },
          (err) => {
            console.error(err);
          },
          () => {
            if (this.sub) this.sub.unsubscribe();
          }
        );
    }
  }
}
