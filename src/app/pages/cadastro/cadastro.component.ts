import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css'],
  imports: [RouterLink]
})
export class CadastroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
