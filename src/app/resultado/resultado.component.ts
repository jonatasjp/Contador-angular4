import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent implements OnInit, OnChanges {

  @Input() public contador: number;

  @Output() public contadorForaDeFaixa: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    if(this.contador > 10) {
      this.contadorForaDeFaixa.emit({
        contador: this.contador,
        mensagem: 'O contador está acima do limite'
      });
    }
    if(this.contador < 0) {
      this.contadorForaDeFaixa.emit({
        contador: this.contador,
        mensagem: 'O contador está abaixo do limite'
      });
    }
  }

}
