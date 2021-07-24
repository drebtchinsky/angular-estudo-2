import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  usuario: string = '';
  senha: string = '';
  constructor(private service: AutenticacaoService) {}

  ngOnInit(): void {}

  login() {
    console.log(this.usuario, this.senha);
    this.service.autenticar(this.usuario, this.senha).subscribe(
      (value) => {
        console.log(value);
      },
      (err) => console.log(err)
    );
  }
}
