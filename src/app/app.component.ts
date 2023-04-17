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

  experiencia: Array<{institucion: string, logoURL: string, periodo: string, descripcion: string}> = [
    {
      institucion: 'Instituto de Ciencias Nucleares - UNAM',
      logoURL: '../../../assets/img/logo-icn-unam.jpg',
      periodo: '2 años',
      descripcion: 'Realicé labores de investigación y docencia en colaboración con el Prof. Miguel Socolovsky, miembro del Departamento de Física de Altas Energías del Instituto de Ciencias Nucleares (ICN) de la UNAM.'
    }, 
    {
      institucion: 'Instituto Max Plank de Física Gravitacional',
      logoURL: '../../../assets/img/logo-instituto-max-plank.jpg',
      periodo: '4 años, 2 meses',
      descripcion: 'Realicé investigaciones en física de altas energías como miembro de la Escuela Internacional de Investigación Max Planck Internacional (IMPRS) para aspectos matemáticos y físicos de la Gravitación, Cosmología y Teoría cuántica de campos en el Instituto Max Planck de Física Gravitacional (Instituto Albert Einstein).'
    },
    {
      institucion: 'Instituto Gwangju de Ciencia y Tecnología',
      logoURL: '../../../assets/img/logo-gist.jpg',
      periodo: '1 año, 2 meses (actual)',
      descripcion: 'Actualmente estoy realizando una investigación sobre los aspectos de la información cuántica de la gravedad, que estoy llevando a cabo como parte de una beca de investigación apoyada por la Fundación Nacional de Investigación de Corea (NRF). Busco comprender las propiedades cuánticas de la gravedad utilizando herramientas de información cuántica, dentro de un área de gravedad cuántica llamada holografía.'
    }
  ];
}
