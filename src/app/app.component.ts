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
    'Nit: 890200162 - 2',
    'Dirección: Diagonal 32 No. 30A - 51 - Parque del Agua - Bucaramanga - Colombia',
    'Phone: (+57) 6320220',
  'Peticiones Quejas y Reclamos y Denuncias(PQRD): CLIC AQUÍ'
  ];
  public info2_footer = [
    'CAJAS Y PQR: Lunes a Viernes 7:00 a.m. 4:00 p.m.',
    'CORRESPONDENCIA: Lunes a Viernes 7:00 a.m. 4:00 p.m.',
    'OFICINAS: Lunes a Viernes 7:00 a.m.a 11:50 a.m. 1:00 p.m.a 5:00 p.m.'
  ];
  public info3_footer = [
    'LUNES Y MARTES: Sin servicio por mantenimiento',
    'MIERCOLES A VIERNES: 8:00 a.m.a 12:00 p.m. 2:00 p.m.a 5:00 p.m',
    'FINES DE SEMANA Y FESTIVOS: 8:00 a.m.a 5:00 p.m.En Jornada Continua'
  ];
  
}
