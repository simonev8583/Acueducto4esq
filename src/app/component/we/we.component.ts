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
  public quiensomos: Array<string>;
  public valores: Array<string>;
  public SabiaUsted: Array<string>;


  constructor() {
    this.title = ''
    this.mision = 'La Asociación de Acueducto Cuatro Esquinas S.A.E.S.P. Presta el servicio público domiciliario de acueducto apoyado en el recurso humano basado en el avance científico y tecnológico, cumpliendo las normas legales vigentes existentes, generando la protección de los recursos naturales, teniendo como apoyo la calidad, continuidad y cobertura, contribuyendo a un desarrollo armónico y sostenible del sector  y sectores aledaños,  mejorando la calidad de vida de sus habitantes.'
    this.vision = 'La Asociación de Acueducto Cuatro Esquinas S.A.E.S.P. Dentro de su perspectiva busca proyectarse como una empresa solida prestadora de servicios públicos domiciliarios de acueducto, en forma organizada, eficaz, eficiente y efectiva mejorando la calidad de vida de sus habitantes.'
    this.valores = [
      'Calidad.',
      'Respeto.',
      'Recursos naturales.',
      'Atención al cliente.',
      'Trabajo colectivo.',
      'Recurso humano.',
      'Sentido de pertenencia.'
    ];
    this.ubicacion = 'ASOCIACION ACUEDUCTO Y ALCANTARILLADO CUATRO ESQUINAS, RIONEGRO ANT.P.J. ResoluciónNo.40-434 del 180793 emanada de la gobernación de Antioquia  Inscripción cámara de comercio ESAL No.500-15 del 09-04-97, Superservicios No. Nit y RUT-811018505-9  DIRECCION SECTOR 3 CUATRO ESQUINAS (Calle 38ª No.40-52 y 54 TELEFAX 5615848 Y 5616282'
    this.quiensomos = ['La Asociación de Acueducto Cuatro Esquinas S.A.E.S.P.  Es una entidad sin ánimo de lucro, cuyo objetivo único ha sido el de ofrecer el servicio de acueducto y alcantarillado a las comunidades de los sectores Cuatro Esquinas, Cimarronas, el águila, La lela, Barrio Obrero y la puerta como también se presta el servicio al Asilo de Ancianos Santa Ana, Escuela, Parroquia, Club la macarena del Municipio de Rionegro-Antioquia.',
      'Desde la fecha de iniciación del Acueducto en 1969, se contaba con 37 usuarios, número que fue creciendo, a la fecha tenemos 894 usuarios, en 1980 se colocaron medidores a todos los usuarios ya que solo se pagaba un cargo fijo.',
      'La Asociación de Acueducto Cuatro Esquinas se ha sostenido como microempresa de servicio comunitario gracias a la efectividad, organización directiva y administrativa la cual ha logrado brindar un servicio de agua de mejores condiciones fiscas, químicas y biológicas.',
      'La Asociación de Acueducto y Alcantarillado Cuatro Esquinas fue creada con personería jurídica 40434 de 1993 y como tal puede actuar como empresa de servicios públicos expandiéndose a las diferentes áreas de influencia.',
    ];
    this.SabiaUsted = [
      'La idea de construir un Acueducto para los sectores cuatro esquinas, cimarronas, Quebrada la Puerta y el rosal surgió en 1964.',
      'El primer presidente de la junta fue el Señor Adolfo Giraldo y tesorero el Señor Pedro Luis Gomez.',
      'El acueducto en sus inicios se vio en la necesidad de hacer reinados y festivales para la recolección de fondos.',
      'La primera caseta del Acueducto fue construida en Guadua y estaba ubicada en la vía Marinilla- El Carmen.',
      'La primera Merced del Agua fue otorgada por cornare en 1987 de 3.93 L/S y fue tomada de la Quebrada Tres Puertas. Actualmente es de 9.1 L/S. Entre las Fuentes Tres Puertas y la Puerta.',
      'Las primeras redes fueron construidas por los habitantes del Sector.',
      'El primer Medidor fue ubicado en el Sector La Lela.',
      'El Acueducto Cumple con la Normatividad Exigida por el Ministerio de la Protección Social (Decreto 1575 de 2007 y resolución 2115 de 2007, mediante la realización de Análisis fisicoquímicos y microbiológicos del agua entregada a los usuarios en la red de distribución.',
      'El Acueducto cuenta con un laboratorio dotado con los equipos básicos para realizar control de calidad del agua antes durante y después del tratamiento.',
      'El acueducto de cuatro esquinas es uno de los que posee mayor eficiencia y calidad, pues cuenta con un sistema especial de tratamiento que consta de coagulación, floculación, sedimentación, filtración y desinfección.'
    ];
  }

  ngOnInit() {
    console.log('we.component cargado!!');
  }

}
