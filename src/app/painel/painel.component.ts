import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public contador: number = 0;

  constructor() { }

  ngOnInit() {
  }

  public incrementaContador(): void {
    this.contador++;
  }

  public decrementaContador(): void {
    this.contador--;
  }

}
