import { Component, OnInit } from '@angular/core';
import { nombreCliente } from './tomarNombreCliente';//importo archivo ts nombre cliente

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Burger-Queen';

tomarNombreCliente: nombreCliente = {
  id: 1,
  name: 'nombre cliente'

}
constructor(){}

ngOnInit(){}
};