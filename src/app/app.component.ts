import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hugo-camargo';

  becas: Array<{institucion: string, logoURL: string, periodo: string, descripcion: string}> = [
    {
      institucion: 'King\'s College London',
      logoURL: '../../../assets/img/logo-kings-college-london.jpg',
      periodo: '4 meses',
      descripcion: 'Recibí una Beca Internacional de la UNAM para estudiar un semestre en el King\'s College London como estudiante de intercambio'
    } ,
    {
      institucion: 'Consejo Nacional de Ciencia y Tecnología (CONACyT)',
      logoURL: '../../../assets/img/logo-conacyt.jpg',
      periodo: '9 meses',
      descripcion: 'Recibí una beca conjunta del Consejo Nacional de Ciencia y Tecnología de México (CONACyT) y Cambridge Commonwealth European and International Trust para realizar una maestría en la Universidad de Cambridge en el campo de Matemáticas Aplicadas y Física Teórica.'
    } ,
    {
      institucion: 'Fundación Konrad Adenauer',
      logoURL: '../../../assets/img/logo-konrad-adenauer-stiftung.jpg',
      periodo: '3 años, 6 meses',
      descripcion: 'Obtuve una beca internacional Konrad-Adenauer en nombre de la Fundación Konrad-Adenauer para realizar un doctorado en el Instituto Max Planck de Física Gravitacional en Potsdam.'
    } ,
    {
      institucion: 'National Research Foundation of Korea',
      logoURL: '../../../assets/img/logo-national-research-foundation-korea.jpg',
      periodo: '11 meses (actual)',
      descripcion: 'Recibí una beca de investigación de la National Research Foundation (NRF) de Corea del Sur para llevar a cabo investigaciones en el campo de la física de altas energías con el proyecto "Quantum Information Aspects of Gravity'
    }
  ];
}
