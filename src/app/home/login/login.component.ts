import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit, OnDestroy {
  usuario: string = '';
  senha: string = '';
  sub: Subscription | undefined;
  constructor(
    private service: AutenticacaoService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  ngOnDestroy(): void {
    if (this.sub) this.sub.unsubscribe();
  }

  login() {
    console.log(this.usuario, this.senha);
    this.sub = this.service.autenticar(this.usuario, this.senha).subscribe(
      (value) => {
        this.router.navigateByUrl('/animais');
      },
      (err) => console.log(err),
      () => {
        if (this.sub) this.sub.unsubscribe();
      }
    );
  }
}
