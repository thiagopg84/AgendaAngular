import { Component, OnInit } from '@angular/core';
// import { compileComponentFromMetadata } from '@angular/compiler';

@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.component.html',
  styleUrls: ['./agenda.component.css']
})
export class AgendaComponent implements OnInit {

  listaTarefas: Object[];

  constructor() { 
    this.listaTarefas = [
      {
        id: 1,
        data: '00/00/0000',
        tarefa: 'Tarefa 01',
        tipo: 'IMPORTANTE',
        concluida: false,
        showID: function() {
          window.alert(`A tarefa ${this.id} teve seu estado alterado.`);
          this.concluida = !this.concluida;
        }
      },
      {
        id: 2,
        data: '01/01/0001',
        tarefa: 'Tarefa 02',
        tipo: 'LEMBRETE',
        concluida: true,
        showID: function() {
          window.alert(`A tarefa ${this.id} teve seu estado alterado.`);
          this.concluida = !this.concluida;
        }
      },
      {
        id: 3,
        data: '02/02/0002',
        tarefa: 'Tarefa 03',
        tipo: 'NÃO ESQUECER',
        concluida: false,
        showID: function() {
          window.alert(`A tarefa ${this.id} teve seu estado alterado.`);
          this.concluida = !this.concluida;
        }
      }      
    ]
  }

  ngOnInit(): void {
    console.log(this.listaTarefas);
    window.alert('Agenda do Thiago');
  }

  receiveFeedback(teste) {
    console.log(teste)
  }



}
