import { Component } from '@angular/core';

@Component({
  selector: 'app-contato',
  templateUrl: 'contato.page.html',
  styleUrls: ['contato.page.scss'],
})
export class ContatoPage {
  constructor() { }

  ngOnInit() {
  }


cadastro(){

  alert('Desculpe,Professor Andre nao permitiu o cadastro');
 }
}
