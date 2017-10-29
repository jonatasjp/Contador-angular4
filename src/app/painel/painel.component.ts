import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public contador: number = 0;
  public exibirPainel: boolean = true;
  public mensagemErro: string = '';

  constructor() { }

  ngOnInit() { }

  public pararAplicacao(objeto: any): void {
    this.exibirPainel = false;
    this.mensagemErro = objeto.mensagem + ', contador é igual a: ' +objeto.contador; 
  }

  public incrementaContador(): void {
    this.contador++;
  }

  public decrementaContador(): void {
    this.contador--;
  }
  
  public reiniciarContador(): void {
    this.contador = 0;
    this.exibirPainel = true;
  }

}
