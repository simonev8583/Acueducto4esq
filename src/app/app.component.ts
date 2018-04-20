import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Acueducto Cuatro Esquinas';
  public imageLogo = 'http://ambprueba.somee.com/image/logo.ico';
  public menu = 'Menú';
  public info1_footer = [
    'DIRECCION SECTOR 3 CUATRO ESQUINAS',
    'Calle 38ª No.40-52 y 54',
    'TELEFAX 5615848 Y 5616282',
  ];
  public info2_footer = [
    'RIONEGRO ANT.P.J. ResoluciónNo.40-434 del 180793',
    ' emanada de la gobernación de Antioquia ',
    'Inscripción cámara de comercio ESAL No.500-15 del 09-04-97',
    'Superservicios No. Nit y RUT-811018505-9 '
  ];

  
}
