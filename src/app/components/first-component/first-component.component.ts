import { Component } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent {
  name: string = 'Bruno';
  idade: number = 30;
  profissao = 'Profissional Digital';
  idiomas = ['português', 'inglês', 'japonês'];
  data = {
    dia: '04',
    mes: 'março',
    ano: '2023'
  }

}
