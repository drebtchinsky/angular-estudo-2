import { Component, Input, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
const API = environment.API_URL;

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css'],
})
export class AnimalComponent implements OnInit {

  private urlOriginal: string = '';

  @Input() set url(url: string) {
    if (url.startsWith('data')) {
      this.urlOriginal = url;
    } else {
      this.urlOriginal = `${API}/imgs/${url}`;
    }
  }

  get url(): string {
    return this.urlOriginal;
  }

  @Input() descricao?: string;

  constructor() {}

  ngOnInit(): void {}
}
