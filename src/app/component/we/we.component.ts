import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'we',
  templateUrl: './we.component.html',
  styleUrls: ['../../app.component.scss']


})

export class weComponent implements OnInit {
  public title: string;
  public mision: string;
  public vision: string;
  public ubicacion: string;
  public quiensomos: string;
  public valores: Array<string>;


  constructor() {
    this.title = ''
    this.mision = 'La Asociación de Acueducto Cuatro Esquinas S.A.E.S.P. Presta el servicio público domiciliario de acueducto apoyado en el recurso humano basado en el avance científico y tecnológico, cumpliendo las normas legales vigentes existentes, generando la protección de los recursos naturales, teniendo como apoyo la calidad, continuidad y cobertura, contribuyendo a un desarrollo armónico y sostenible del sector  y sectores aledaños,  mejorando la calidad de vida de sus habitantes.'
    this.vision = 'La Asociación de Acueducto Cuatro Esquinas S.A.E.S.P. Dentro de su perspectiva busca proyectarse como una empresa solida prestadora de servicios públicos domiciliarios de acueducto, en forma organizada, eficaz, eficiente y efectiva mejorando la calidad de vida de sus habitantes.'
    this.valores = [
      'Calidad',
      'respeto',
      'recursos naturales',
      'atención al cliente',
      'trabajo colectivo',
      'recurso humano sentido de pertenencia.'
    ];
    this.ubicacion = 'ASOCIACION ACUEDUCTO Y ALCANTARILLADO CUATRO ESQUINAS, RIONEGRO ANT.P.J. ResoluciónNo.40-434 del 180793 emanada de la gobernación de Antioquia  Inscripción cámara de comercio ESAL No.500-15 del 09-04-97, Superservicios No. Nit y RUT-811018505-9  DIRECCION SECTOR 3 CUATRO ESQUINAS (Calle 38ª No.40-52 y 54 TELEFAX 5615848 Y 5616282'
    this.quiensomos = 'La Asociación de Acueducto Cuatro Esquinas S.A.E.S.P.  Es una entidad sin ánimo de lucro, cuyo objetivo único ha sido el de ofrecer el servicio de acueducto y alcantarillado a las comunidades de los sectores Cuatro Esquinas, Cimarronas, el águila, La lela, Barrio Obrero y la puerta como también se presta el servicio al Asilo de Ancianos Santa Ana, Escuela, Parroquia, Club la macarena del Municipio de Rionegro-Antioquia. Desde la fecha de iniciación del Acueducto en 1969, se contaba con 37 usuarios, número que fue creciendo, a la fecha tenemos 894 usuarios, en 1980 se colocaron medidores a todos los usuarios ya que solo se pagaba un cargo fijo. La Asociación de Acueducto Cuatro Esquinas se ha sostenido como microempresa de servicio comunitario gracias a la efectividad.'

  }

  ngOnInit() {
    console.log('we.component cargado!!');
  }

}
