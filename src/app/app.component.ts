import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hugo-camargo';

  becas: Array<{
    institucion: string;
    logoURL: string;
    periodo: string;
    descripcion: string;
  }> = [
    {
      institucion: 'National Research Foundation of Korea',
      logoURL:
        '../../../assets/img/logo-national-research-foundation-korea.jpg',
      periodo: '11 meses (actual)',
      descripcion:
        'Recibí una beca de investigación de la National Research Foundation (NRF) de Corea del Sur para llevar a cabo investigaciones en el campo de la física de altas energías con el proyecto "Quantum Information Aspects of Gravity',
    },
    {
      institucion: 'Fundación Konrad Adenauer',
      logoURL: '../../../assets/img/logo-konrad-adenauer-stiftung.jpg',
      periodo: '3 años, 6 meses',
      descripcion:
        'Obtuve una beca internacional Konrad-Adenauer en nombre de la Fundación Konrad-Adenauer para realizar un doctorado en el Instituto Max Planck de Física Gravitacional en Potsdam.',
    },
    {
      institucion: 'Consejo Nacional de Ciencia y Tecnología (CONACyT)',
      logoURL: '../../../assets/img/logo-conacyt.jpg',
      periodo: '9 meses',
      descripcion:
        'Recibí una beca conjunta del Consejo Nacional de Ciencia y Tecnología de México (CONACyT) y Cambridge Commonwealth European and International Trust para realizar una maestría en la Universidad de Cambridge en el campo de Matemáticas Aplicadas y Física Teórica.',
    },
    {
      institucion: "King's College London",
      logoURL: '../../../assets/img/logo-kings-college-london.jpg',
      periodo: '4 meses',
      descripcion:
        "Recibí una Beca Internacional de la UNAM para estudiar un semestre en el King's College London como estudiante de intercambio",
    },
  ];

  experiencia: Array<{
    institucion: string;
    logoURL: string;
    periodo: string;
    descripcion: string;
  }> = [
    {
      institucion: 'Instituto de Ciencias Nucleares - UNAM',
      logoURL: '../../../assets/img/logo-icn-unam.jpg',
      periodo: '2 años',
      descripcion:
        'Realicé labores de investigación y docencia en colaboración con el Prof. Miguel Socolovsky, miembro del Departamento de Física de Altas Energías del Instituto de Ciencias Nucleares (ICN) de la UNAM.',
    },
    {
      institucion: 'Instituto Max Plank de Física Gravitacional',
      logoURL: '../../../assets/img/logo-instituto-max-plank.jpg',
      periodo: '4 años, 2 meses',
      descripcion:
        'Realicé investigaciones en física de altas energías como miembro de la Escuela Internacional de Investigación Max Planck Internacional (IMPRS) para aspectos matemáticos y físicos de la Gravitación, Cosmología y Teoría cuántica de campos en el Instituto Max Planck de Física Gravitacional (Instituto Albert Einstein).',
    },
    {
      institucion: 'Instituto Gwangju de Ciencia y Tecnología',
      logoURL: '../../../assets/img/logo-gist.jpg',
      periodo: '1 año, 2 meses (actual)',
      descripcion:
        'Actualmente estoy realizando una investigación sobre los aspectos de la información cuántica de la gravedad, que estoy llevando a cabo como parte de una beca de investigación apoyada por la Fundación Nacional de Investigación de Corea (NRF). Busco comprender las propiedades cuánticas de la gravedad utilizando herramientas de información cuántica, dentro de un área de gravedad cuántica llamada holografía.',
    },
  ];

  articulos: Array<{
    titulo: string;
    imgURL: string;
    fecha: string;
    autores: string;
    link: string;
  }> = [
    {
      titulo: 'Spectral and Krylov Complexity in Billiard Systems',
      imgURL: '../../../assets/img/k-complexity-billiard.png',
      fecha: 'Junio, 2023',
      autores:
        'Hugo A. Camargo, Viktor Jahnke, Hyun-Sik Jeong, Keun-Young Kim, Mitsuhiro Nishida',
      link: '../../../assets/pdf/Spectral and Krylov Complexity in Billiard Systems.pdf',
    },
    {
      titulo:
        'Krylov complexity in free and interacting scalar field theories with bounded power spectrum',
      imgURL: '../../../assets/img/k-complexity-qft.png',
      fecha: 'Junio, 2023',
      autores:
        'Hugo A Camargo, Viktor Jahnke, Keun-Young Kim, Mitsuhiro Nishida',
      link: '../../../assets/pdf/Krylov complexity in free and interacting scalar field theories with bounded power spectrum.pdf',
    },
    {
      titulo: 'Balanced partial entanglement and mixed state correlations',
      imgURL: '../../../assets/img/partial-entanglement.png',
      fecha: 'Abril 21, 2022',
      autores: 'Hugo A Camargo, Pratik Nandy, Qiang Wen, Haocheng Zhong',
      link: '../../../assets/pdf/Balanced partial entanglement and mixed state correlations.pdf',
    },
    {
      titulo: 'Q-curvature and path integral complexity',
      imgURL: '../../../assets/img/q-curvature.png',
      fecha: 'Abril, 2022',
      autores: 'Hugo A Camargo, Pawel Caputa, Pratik Nandy',
      link: '../../../assets/pdf/Q-curvature and path integral complexity.pdf',
    },
    {
      titulo:
        'Long distance entanglement of purification and reflected entropy in conformal field theory',
      imgURL: '../../../assets/img/long-distance-entanglement.png',
      fecha: 'Septiembre 29, 2021',
      autores:
        'Hugo A Camargo, Lucas Hackl, Michal P Heller, Alexander Jahn, Bennet Windt',
      link: '../../../assets/pdf/Long distance entanglement of purification and reflected entropy in conformal field theory.pdf',
    },
    {
      titulo:
        'Entanglement and complexity of purification in (1 + 1)-dimensional free conformal field theories',
      imgURL: '../../../assets/img/complexity-of-purification.png',
      fecha: 'Marzo 17, 2021',
      autores:
        'Hugo A Camargo, Lucas Hackl, Michal P Heller, Alexander Jahn, Tadashi Takayanagi, Bennet Windt',
      link: '../../../assets/pdf/Entanglement and complexity of purification in 1+1 dimensional free conformal field theories.pdf',
    },
    {
      titulo: 'On the efficacy of virtual seminars',
      imgURL: '../../../assets/img/virtual-seminar.png',
      fecha: 'Abril 24, 2020',
      autores:
        'Hugo Camargo, Michal P Heller, Ro Jefferson, Johannes Knaute, Ignacio Reyes, Sukhbinder Singh, Viktor Svensson',
      link: '../../../assets/pdf/On the efficacy of virtual seminars.pdf',
    },
    {
      titulo: 'Path integral optimization as circuit complexity',
      imgURL: '../../../assets/img/path-integral-optimization.png',
      fecha: 'Julio 1, 2019',
      autores: 'Hugo A Camargo, Michal P Heller, Ro Jefferson, Johannes Knaute',
      link: '../../../assets/pdf/Path integral optimization as circuit complexity.pdf',
    },
    {
      titulo:
        'Complexity as a novel probe of quantum quenches: universal scalings and purifications',
      imgURL: '../../../assets/img/path-integral.jpg',
      fecha: 'Julio 1, 2018',
      autores: 'Hugo A Camargo, Michal P Heller, Ro Jefferson, Johannes Knaute',
      link: '../../../assets/pdf/Complexity as a novel probe of quantum quenches universal scalings and purifications.pdf',
    },
    {
      titulo:
        'Quantum Scalar Field Behavior of the Conformally Flat Part of the SKS Metric',
      imgURL: '../../../assets/img/quantum-scalar-field.jpg',
      fecha: 'Septiembre 19, 2017',
      autores: 'HA Camargo, EJ Gonzalez de Urreta, M Socolovsky',
      link: '../../../assets/pdf/Quantum Scalar Field Behavior of the Conformally Flat Part of the SKS Metric.pdf',
    },
    {
      titulo: 'Weyl geometry, anti-de Sitter space, and-theory',
      imgURL: '../../../assets/img/weyl-geometry.png',
      fecha: 'Mayo 26, 2016',
      autores:
        'HA Camargo, Emiliano José González de Urreta, Miguel Socolovsky',
      link: '../../../assets/pdf/Weyl geometry, anti-de Sitter space, and-theory.pdf',
    },
    {
      titulo: 'Rindler approximation to Kerr-Newman black hole',
      imgURL: '../../../assets/img/rindler-approx-kn-black-hole.png',
      fecha: 'Noviembre 19, 2015',
      autores: 'HA Camargo, M Socolovsky',
      link: '../../../assets/pdf/Rindler approximation to Kerr-Newman black hole.pdf',
    },
    {
      titulo: 'Newman-Janis algorithm revisited',
      imgURL: '../../../assets/img/newman-janis.png',
      fecha: 'Enero 2015',
      autores: 'O Brauer, HA Camargo, M Socolovsky',
      link: '../../../assets/pdf/Newman-Janis algorithm revisited.pdf',
    },
    {
      titulo: 'Proper time and length in Schwarzschild geometry',
      imgURL: '../../../assets/img/schwarzschild-geometry.png',
      fecha: 'Junio 5, 2014',
      autores: 'O Brauer, HA Camargo, M Socolovsky',
      link: '../../../assets/pdf/Proper time and length in Schwarzschild geometry.pdf',
    },
  ];
}
