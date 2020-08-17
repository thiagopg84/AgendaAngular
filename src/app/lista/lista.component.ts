import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input() recebeListaTarefas;

  constructor() { }

  ngOnInit(): void {
    console.log('Objeto recebido do component pai via Input: ', this.recebeListaTarefas);
  }
}
