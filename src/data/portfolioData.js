// ============================================================================
// ARCHIVO DE DATOS DEL PORTAFOLIO
// ============================================================================
// Portafolio profesional de Heyller De Jesús Galeano Guarín
// ============================================================================

import profilePlaceholder from '../assets/images/heyller.jpg'
import projectPlaceholder from '../assets/images/project-placeholder.svg'

// ----------------------------------------------------------------------------
// PERFIL
// ----------------------------------------------------------------------------
export const profileData = {
  name: 'Heyller Galeano',
  title: 'Estudiante de Ingeniería de Sistemas | Auditor Nocturno',
  tagline:
  'Apasionado por la programación, el desarrollo de software y la ciberseguridad, con interés en crear soluciones tecnológicas que generen valor.',
location: 'Medellín, Colombia',
  photo: profilePlaceholder,
}

// ----------------------------------------------------------------------------
// REDES SOCIALES Y CONTACTO
// ----------------------------------------------------------------------------
export const socialLinks = {
  linkedin: 'https://www.linkedin.com/in/heyller-galeano-0b63a8258',
  github: 'https://github.com/heyllergaleano-commits',
  email: 'heyllergaleano@gmail.com',
}

// ----------------------------------------------------------------------------
// SOBRE MÍ
// ----------------------------------------------------------------------------
export const aboutData = {
  paragraph:
    'Soy estudiante de Ingeniería de Sistemas con interés en el desarrollo de software, la programación y la ciberseguridad. ' +
    'Actualmente trabajo como auditor nocturno en Serena Hotels S.A.S., con sede principal en Haven Design Hotel. ' +
    'Mi experiencia laboral me ha permitido fortalecer habilidades como la responsabilidad, la organización, el análisis, ' +
    'la atención al detalle y la solución de problemas. Durante mi formación académica he desarrollado proyectos utilizando ' +
    'Python, programación orientada a objetos, archivos JSON, Git, GitHub, análisis de datos y fundamentos de desarrollo web. ' +
    'Mi objetivo es continuar aprendiendo y avanzar profesionalmente en el área de tecnología.',
}

// ----------------------------------------------------------------------------
// HABILIDADES
// ----------------------------------------------------------------------------
export const skillsData = [
  { name: 'Python', icon: '🐍' },
  { name: 'Programación orientada a objetos', icon: '🧩' },
  { name: 'HTML5', icon: '🧱' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '🟨' },
  { name: 'Git y GitHub', icon: '🔧' },
  { name: 'JSON', icon: '📄' },
  { name: 'SQL', icon: '🗄️' },
  { name: 'Visual Studio Code', icon: '💻' },
  { name: 'Análisis de datos', icon: '📊' },
  { name: 'Resolución de problemas', icon: '🧠' },
  { name: 'Trabajo en equipo', icon: '🤝' },
]

// ----------------------------------------------------------------------------
// PROYECTOS
// ----------------------------------------------------------------------------
export const projectsData = [
  {
    id: 1,
    title: 'Procesamiento de Transacciones',
    description:
      'Aplicación desarrollada en Python para leer registros de transacciones desde archivos, validar información, ' +
      'manejar errores y calcular valores totales. El proyecto aplica funciones, estructuras de datos, excepciones ' +
      'y persistencia de información mediante archivos JSON.',
    image: projectPlaceholder,
    technologies: ['Python', 'POO', 'JSON', 'Manejo de errores'],
    repoUrl: 'https://github.com/heyllergaleano-commits/Fundamentos-de-Programacion-Heyller',
    demoUrl: '',
  },
  {
    id: 2,
    title: 'Sistema de Gestión de Activos Tecnológicos',
    description:
      'Proyecto académico orientado al análisis y control de activos tecnológicos. Incluye organización de información, ' +
      'indicadores de gestión, análisis de inventario, representación mediante grafos y visualización de datos.',
    image: projectPlaceholder,
    technologies: ['Python', 'Excel', 'Análisis de datos', 'Grafos'],
    repoUrl: '',
    demoUrl: '',
  },
  {
    id: 3,
    title: 'Portafolio Web Profesional',
    description:
      'Portafolio personal desarrollado con una plantilla moderna. Presenta mi perfil profesional, habilidades, experiencia, ' +
      'educación y proyectos académicos, y está preparado para publicarse como una aplicación web progresiva.',
    image: projectPlaceholder,
    technologies: ['React', 'Vite', 'Tailwind CSS', 'PWA'],
    repoUrl: '',
    demoUrl: '',
  },
]

// ----------------------------------------------------------------------------
// EXPERIENCIA Y EDUCACIÓN
// ----------------------------------------------------------------------------
export const experienceData = [
  {
  id: 1,
  type: 'education',
  role: 'Ingeniería de Sistemas',
  place: 'Fundación Universitaria CEIPA',
  period: 'En formación',
  description:
    'Actualmente curso Ingeniería de Sistemas en la Fundación Universitaria CEIPA, donde me estoy formando en programación, desarrollo de software, bases de datos, análisis de datos, matemáticas, desarrollo web y ciberseguridad. Durante mi formación he desarrollado proyectos académicos aplicando estos conocimientos en situaciones reales.',
},
  {
    id: 2,
    type: 'work',
    role: 'Auditor Nocturno',
    place: 'Serena Hotels S.A.S. – Haven Design Hotel',
    period: 'Actualidad',
    description:
      'Responsable de la auditoría nocturna, conciliación de ingresos, verificación de movimientos operativos y financieros, ' +
      'elaboración de reportes y cierre diario del sistema hotelero. Mi sede principal es Haven Design Hotel y actualmente ' +
      'realizo la auditoría nocturna de dos hoteles operados por Serena Hotels S.A.S., garantizando la exactitud de la ' +
      'información y el correcto cierre de las operaciones.',
  },
  {
    id: 3,
    type: 'education',
    role: 'Formación en programación y desarrollo de software',
    place: 'Proyectos académicos y aprendizaje autónomo',
    period: 'Actualidad',
    description:
      'Desarrollo de ejercicios y proyectos con Python, programación orientada a objetos, manejo de excepciones, archivos JSON, ' +
      'Git, GitHub, HTML, CSS, JavaScript y herramientas de desarrollo.',
  },
]

// ----------------------------------------------------------------------------
// CONTACTO
// ----------------------------------------------------------------------------
export const contactData = {
  email: 'heyllergaleano@gmail.com',
  phone: '+57 302 355 3289',
  availability:
    'Interesado en oportunidades de aprendizaje, prácticas profesionales y crecimiento laboral en el área de tecnología.',
}