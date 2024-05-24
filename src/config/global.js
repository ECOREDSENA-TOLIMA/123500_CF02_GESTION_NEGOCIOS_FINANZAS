export default {
  global: {
    componenteFormativo: 'Gestión administrativa',
    descripcionCurso:
      'La planeación de las organizaciones está diseñada para respaldar los esfuerzos empresariales con objetivos claros para cada departamento. Esto incluye la definición de las funciones de cada miembro de trabajo, el establecimiento de los objetivos de cada equipo, el presupuesto y los recursos que se necesitan para hacerlos realidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Administración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Objetivos',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Planeación estratégica',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Modelos',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Recursos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Planeación',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Cronogramas',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Diagrama de causa y efecto',
            hash: 't_1_7',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CFA_02_123500.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Planeación estratégica ',
      referencia:
        'Torres, Z. y Torres, H. (2015). Planeación y control. Una visión integral de la administración. Grupo Editorial Patria.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/39408?page=1',
    },
    {
      tema: 'Planeación estratégica',
      referencia:
        'Núñez, A. (2014). Dirección de operaciones: decisiones tácticas y estratégicas. Editorial UOC.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/57659?page=616',
    },
  ],
  glosario: [
    {
      termino: 'Administración estratégica',
      significado:
        'Es el proceso sinérgico que consiste en definir la naturaleza de la empresa, determinar la visión, misión, valores y objetivos, realizando un análisis interno y externo, para formular, implantar y desarrollar la estrategia, ponderar y retroalimentar a mediano y largo plazo. (Núñez, 2014)',
    },
    {
      termino: 'Diagnóstico empresarial',
      significado:
        'Constituye una herramienta sencilla y de gran utilidad a los fines de conocer la situación actual de una organización y los problemas que impiden su crecimiento, sobrevivencia o desarrollo. Es un proceso de varios estudios realizados en las empresas de producción, servicios y de comercio.',
    },
    {
      termino: 'Estrategia',
      significado:
        'Implica la determinación de las metas que se pretenden alcanzar en la empresa y que pueden hacer referencia a captar clientes, incrementar el beneficio o ganar competitividad, así como el establecimiento de una guía que oriente sobre cómo utilizar y combinar sus recursos y capacidades para el logro de sus objetivos. (Gómez, 2020)',
    },
    {
      termino: 'FODA',
      significado:
        'Es una metodología utilizada para identificar el estudio de la situación competitiva de una empresa, a fin de determinar sus fortalezas, oportunidades, debilidades y amenazas. Su utilidad se refiere al diagnóstico de la situación interna y externa de la empresa, necesario antes de definir un plan estratégico. ',
    },
    {
      termino: 'Misión',
      significado:
        'Representa la identidad y personalidad de cada empresa desde un punto de vista genérico. Responde a la pregunta sobre cuál es la esencia del negocio.',
    },
    {
      termino: 'Modelo de negocio',
      significado:
        'Es una herramienta conceptual que contiene un conjunto de objetos, conceptos y las relaciones entre los mismos, con el objetivo de expresar la lógica de una empresa específica.',
    },
    {
      termino: 'Objetivos',
      significado:
        'Resultados y logros que se desean alcanzar en un determinado tiempo.',
    },
    {
      termino: 'Planeación',
      significado:
        'Es la función administrativa que determina anticipadamente los objetivos a alcanzar, así como lo que debe hacerse para alcanzarlos. La actividad incluye la previsión en el proceso administrativo. (Núñez, 2014)',
    },
    {
      termino: 'Proceso estratégico',
      significado:
        'Proceso por el cual diseñamos cuáles son las líneas estratégicas de nuestro proyecto empresarial. Se definen cuáles son los planes de acción de las áreas, se implementan y se efectúa su seguimiento. (Gómez, 2020)',
    },
    {
      termino: 'Recursos',
      significado:
        'Conjunto de medios o elementos que necesita una empresa para funcionar en forma efectiva.',
    },
    {
      termino: 'Táctica',
      significado:
        'Planes de acción mediante los cuales se ponen en práctica las estrategias.',
    },
    {
      termino: 'Ventaja competitiva',
      significado:
        'Constituye una destreza o habilidad especial que logra desarrollar una empresa y que la coloca en una posición de preferencia a los ojos del mercado.',
    },
    {
      termino: 'Visión',
      significado:
        'Es el deseo de destino futuro que tiene la empresa en términos generales y que debe inspirar el futuro de la organización a largo plazo, responde a la pregunta en qué quiero que se convierta mi empresa. (Núñez, 2014)',
    },
  ],
  referencias: [
    {
      referencia:
        'Gómez, I. y Brito, J. (2020). Administración de Operaciones. Universidad Internacional del Ecuador. ',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/131260?page=147 ',
    },
    {
      referencia:
        'Núñez, A. (2014). Dirección de operaciones: decisiones tácticas y estratégicas. Editorial UOC.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/57659?page=616',
    },
    {
      referencia:
        'Sánchez, A. (2006). Peter Drucker, innovador maestro de la administración de empresas. Cuadernos Latinoamericanos de Administración, II(2), p. 69-89.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Nombre del rol',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Nombre responsable',
          cargo: 'Diseñador de Contenidos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre responsable',
          cargo: 'Desarrollador Fullstack',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Animador y Producción audiovisual',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Nombre',
          cargo: 'Actividad Didáctica',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jaime Hernan Tejada',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
