
function formatResponse(message, predefinedResponse) {
  return `El mensaje del usuario es [${message}], la respuesta es en base a esto [${predefinedResponse}] crea una variante para este mensaje para hacerlo más variado, considerando que eres un asistente de la página web de compra de cursos online Galileo.`;
}

function formatCursoResponse(message, predefinedResponse) {
  return `La lista de los cursos buscados son estos [${predefinedResponse}] entrega estos listados de cursos, considerando que eres un asistente de la página web de compra de cursos online Galileo.`;
}

function identifyCourseAndGenerateMessage(course) {
  const courseNameMapping = {
    matematicas: "Matemática",
    fisica: "Física",
    biologia: "Biología",
    quimica: "Química",
    informatica: "Informática",
    programacion: "Programación",
    ingles: "Inglés",
    historia: "Historia",
    filosofia: "Filosofía",
    economia: "Economía",
    psicologia: "Psicología",
    arte: "Arte",
    musica: "Música",
    arquitectura: "Arquitectura",
    derecho: "Derecho",
    medicina: "Medicina",
    administracion: "Administración",
    marketing: "Marketing",
    diseño: "Diseño",
    contabilidad: "Contabilidad"
  };

  if (course === "matematicas") {
    return `Curso de ${courseNameMapping.matematicas}: Álgebra Básica, Geometría Euclidiana, Cálculo Diferencial.`;
  } else if (course === "fisica") {
    return `Curso de ${courseNameMapping.fisica}: Mecánica Clásica, Electromagnetismo, Física Cuántica.`;
  } else if (course === "biologia") {
    return `Curso de ${courseNameMapping.biologia}: Biología Molecular, Genética, Ecología Aplicada.`;
  } else if (course === "quimica") {
    return `Curso de ${courseNameMapping.quimica}: Química Orgánica, Química Inorgánica, Análisis Químico.`;
  } else if (course === "informatica") {
    return `Curso de ${courseNameMapping.informatica}: Fundamentos de Computación, Redes de Computadoras, Bases de Datos.`;
  } else if (course === "programacion") {
    return `Curso de ${courseNameMapping.programacion}: Programación en Python, Desarrollo Web, Algoritmos y Estructuras de Datos.`;
  } else if (course === "ingles") {
    return `Curso de ${courseNameMapping.ingles}: Inglés Básico, Inglés Conversacional, Inglés para Negocios.`;
  } else if (course === "historia") {
    return `Curso de ${courseNameMapping.historia}: Historia Mundial, Historia Contemporánea, Historia de América Latina.`;
  } else if (course === "filosofia") {
    return `Curso de ${courseNameMapping.filosofia}: Filosofía Clásica, Ética, Filosofía del Conocimiento.`;
  } else if (course === "economia") {
    return `Curso de ${courseNameMapping.economia}: Microeconomía, Macroeconomía, Economía Internacional.`;
  } else if (course === "psicologia") {
    return `Curso de ${courseNameMapping.psicologia}: Psicología General, Psicología Social, Psicología Clínica.`;
  } else if (course === "arte") {
    return `Curso de ${courseNameMapping.arte}: Historia del Arte, Técnicas de Dibujo, Pintura al Óleo.`;
  } else if (course === "musica") {
    return `Curso de ${courseNameMapping.musica}: Teoría Musical, Instrumentos de Cuerda, Composición Musical.`;
  } else if (course === "arquitectura") {
    return `Curso de ${courseNameMapping.arquitectura}: Diseño Arquitectónico, Construcción Sostenible, Historia de la Arquitectura.`;
  } else if (course === "derecho") {
    return `Curso de ${courseNameMapping.derecho}: Derecho Penal, Derecho Civil, Derecho Laboral.`;
  } else if (course === "medicina") {
    return `Curso de ${courseNameMapping.medicina}: Anatomía Humana, Fisiología, Medicina Interna.`;
  } else if (course === "administracion") {
    return `Curso de ${courseNameMapping.administracion}: Administración de Empresas, Gestión de Proyectos, Liderazgo Organizacional.`;
  } else if (course === "marketing") {
    return `Curso de ${courseNameMapping.marketing}: Estrategias de Marketing, Publicidad Digital, Branding.`;
  } else if (course === "diseño") {
    return `Curso de ${courseNameMapping.diseño}: Diseño Gráfico, Diseño UX/UI, Ilustración Digital.`;
  } else if (course === "contabilidad") {
    return `Curso de ${courseNameMapping.contabilidad}: Contabilidad Financiera, Auditoría, Planificación Tributaria.`;
  } else {
    return "Curso no identificado. Por favor, verifica el nombre del curso.";
  }
}

/**
  if (course === "matematicas") {
    return `Curso de ${courseNameMapping.matematicas}: Álgebra Básica, Geometría Euclidiana, Cálculo Diferencial.`;
  } else if (course === "fisica") {
    return `Curso de ${courseNameMapping.fisica}: Mecánica Clásica, Electromagnetismo, Física Cuántica.`;
  } else if (course === "biologia") {
    return `Curso de ${courseNameMapping.biologia}: Biología Molecular, Genética, Ecología Aplicada.`;
  } else if (course === "quimica") {
    return `Curso de ${courseNameMapping.quimica}: Química Orgánica, Química Inorgánica, Análisis Químico.`;
  } else if (course === "informatica") {
    return `Curso de ${courseNameMapping.informatica}: Fundamentos de Computación, Redes de Computadoras, Bases de Datos.`;
  } else if (course === "programacion") {
    return `Curso de ${courseNameMapping.programacion}: Programación en Python, Desarrollo Web, Algoritmos y Estructuras de Datos.`;
  } else if (course === "ingles") {
    return `Curso de ${courseNameMapping.ingles}: Inglés Básico, Inglés Conversacional, Inglés para Negocios.`;
  } else if (course === "historia") {
    return `Curso de ${courseNameMapping.historia}: Historia Mundial, Historia Contemporánea, Historia de América Latina.`;
  } else if (course === "filosofia") {
    return `Curso de ${courseNameMapping.filosofia}: Filosofía Clásica, Ética, Filosofía del Conocimiento.`;
  } else if (course === "economia") {
    return `Curso de ${courseNameMapping.economia}: Microeconomía, Macroeconomía, Economía Internacional.`;
  } else if (course === "psicologia") {
    return `Curso de ${courseNameMapping.psicologia}: Psicología General, Psicología Social, Psicología Clínica.`;
  } else if (course === "arte") {
    return `Curso de ${courseNameMapping.arte}: Historia del Arte, Técnicas de Dibujo, Pintura al Óleo.`;
  } else if (course === "musica") {
    return `Curso de ${courseNameMapping.musica}: Teoría Musical, Instrumentos de Cuerda, Composición Musical.`;
  } else if (course === "arquitectura") {
    return `Curso de ${courseNameMapping.arquitectura}: Diseño Arquitectónico, Construcción Sostenible, Historia de la Arquitectura.`;
  } else if (course === "derecho") {
    return `Curso de ${courseNameMapping.derecho}: Derecho Penal, Derecho Civil, Derecho Laboral.`;
  } else if (course === "medicina") {
    return `Curso de ${courseNameMapping.medicina}: Anatomía Humana, Fisiología, Medicina Interna.`;
  } else if (course === "administracion") {
    return `Curso de ${courseNameMapping.administracion}: Administración de Empresas, Gestión de Proyectos, Liderazgo Organizacional.`;
  } else if (course === "marketing") {
    return `Curso de ${courseNameMapping.marketing}: Estrategias de Marketing, Publicidad Digital, Branding.`;
  } else if (course === "diseño") {
    return `Curso de ${courseNameMapping.diseño}: Diseño Gráfico, Diseño UX/UI, Ilustración Digital.`;
  } else if (course === "contabilidad") {
    return `Curso de ${courseNameMapping.contabilidad}: Contabilidad Financiera, Auditoría, Planificación Tributaria.`;
  } else {
    return "Curso no identificado. Por favor, verifica el nombre del curso.";
  }
 */

export default function getPredefinedResponse(message: string): string | null {
  const lowerMessage = message.toLowerCase();

  // Patrones relacionados con la compra de cursos
  const buyCoursePatterns = [
    /comprar.*curso|adquirir.*curso|obtener.*curso/,        // Variaciones sobre cómo comprar un curso
    /quiero.*curso|me.*interesa.*curso|me.*gustaría.*curso/, // Frases de interés o deseo de un curso
    /cómo.*adquirir.*curso|información.*sobre.*curso/        // Frases de información sobre cursos
  ];

  // Patrones relacionados con inicio de sesión
  const loginPatterns = [
    /inicio.*sesión|acceder|entrar|iniciar.*sesión/, // Variaciones comunes en la entrada al sistema
    /loguearse|identificación|acceso/                // Variaciones relacionadas con acceso
  ];

  // Patrones relacionados con salida de sesión
  const logoutPatterns = [
    /salir.*sesión|cerrar.*sesión|desconectar.*sesión/, // Variaciones para salir del sistema
    /finalizar.*sesión|terminar.*sesión/               // Frases relacionadas con terminar la sesión
  ];

  // Patrones relacionados con la cancelación de compras
  const cancelPurchasePatterns = [
    /cancelar.*compra|anular.*compra|devolver.*producto/, // Variaciones para cancelar o anular una compra
    /quiero.*devolver.*compra|cómo.*cancelar.*pedido/     // Frases para devolver o cancelar un pedido
  ];

  // Patrones relacionados con completar una compra
  const completePurchasePatterns = [
    /completar.*compra|finalizar.*compra|confirmar.*compra/,  // Variaciones para completar una compra
    /realizar.*pago|confirmación.*pago|finalizar.*pedido/     // Frases relacionadas con completar el pago
  ];

  // Patrones relacionados con ver los datos del usuario
  const viewUserDataPatterns = [
    /ver.*mis.*datos|mostrar.*mis.*información|consultar.*mis.*datos/, // Variaciones para ver los datos del usuario
    /ver.*perfil|consultar.*información.*personal/                   // Frases para ver perfil o datos personales
  ];
  
  // Patrones relacionados con la búsqueda de cursos en el programa


  const searchCoursePatterns = [
    /estoy.*buscando.*curso.*de.*\w+|quiero.*curso.*de.*\w+|me.*interesa.*curso.*de.*\w+|necesito.*curso.*de.*\w+|estoy.*interesado.*en.*curso.*de.*\w+/,
    /cursos.*disponibles.*de.*\w+|ver.*cursos.*de.*\w+|dame.*información.*sobre.*curso.*de.*\w+|quiero.*saber.*qué.*cursos.*de.*\w+.*hay/,
    /mostrar.*cursos.*de.*\w+|quiero.*ver.*los.*cursos.*de.*\w+/,
    /buscar.*cursos.*de.*\w+|encuentra.*cursos.*de.*\w+|me.*interesa.*ver.*cursos.*de.*\w+/,
    /\bcurso\b.*(matemáticas|física|biología|química|informática|programación)/ // Captura cursos específicos
  ];
  

  const specificCoursePatterns = {
    matematicas: /curso.*matematica|curso.*matematicas|clase.*matematica|clase.*matematicas/,
    fisica: /curso.*fisica|clase.*fisica|curso.*fisico|clase.*fisico|clase.*física|curso.*física/,
    biologia: /curso.*biologia|clase.*biologia|curso.*biologico|clase.*biologico|curso.*biología|clase.*biología/,
    quimica: /curso.*quimica|clase.*quimica|curso.*químico|clase.*químico|curso.*química|clase.*química/,
    informatica: /curso.*informatica|clase.*informatica|curso.*computacion|clase.*computacion|curso.*tecnologia.*informatica|clase.*tecnologia.*informatica/,
    programacion: /curso.*programacion|clase.*programacion|curso.*codigo|clase.*codigo|curso.*desarrollo.*software|clase.*desarrollo.*software/,
    ingles: /curso.*ingles|clase.*ingles|curso.*english|clase.*english/,
    historia: /curso.*historia|clase.*historia|curso.*histórico|clase.*histórico/,
    filosofia: /curso.*filosofia|clase.*filosofia|curso.*filosofía|clase.*filosofía/,
    economia: /curso.*economia|clase.*economia|curso.*economía|clase.*economía/,
    psicologia: /curso.*psicologia|clase.*psicologia|curso.*psicología|clase.*psicología/,
    arte: /curso.*arte|clase.*arte|curso.*artes|clase.*artes/,
    musica: /curso.*musica|clase.*musica|curso.*musical|clase.*musical/,
    arquitectura: /curso.*arquitectura|clase.*arquitectura|curso.*arquitectónico|clase.*arquitectónico/,
    derecho: /curso.*derecho|clase.*derecho|curso.*jurídico|clase.*jurídico/,
    medicina: /curso.*medicina|clase.*medicina|curso.*médico|clase.*médico/,
    administracion: /curso.*administracion|clase.*administracion|curso.*gestion|clase.*gestion/,
    marketing: /curso.*marketing|clase.*marketing|curso.*publicidad|clase.*publicidad/,
    diseño: /curso.*diseño|clase.*diseño|curso.*grafico|clase.*grafico/,
    contabilidad: /curso.*contabilidad|clase.*contabilidad|curso.*finanzas|clase.*finanzas/,
  };

  // Verificación de patrones y respuesta utilizando la función auxiliar

  for (const pattern of searchCoursePatterns) {
    if (pattern.test(lowerMessage)) {
      // Luego verifica por cada curso específico
      const identifiedCourses = [];
      // Compara el mensaje con cada uno de los patrones de cursos específicos
      for (const [courseKey, pattern] of Object.entries(specificCoursePatterns)) {
        if (pattern.test(lowerMessage)) {
          identifiedCourses.push(courseKey);
        }
      }
  
      // Si se identificaron cursos, genera el mensaje
      if (identifiedCourses.length > 0) {
        const courseMessages = identifiedCourses.map(course => identifyCourseAndGenerateMessage(course));
        return formatCursoResponse(message, `${courseMessages.join(' y ')}.`);
      } else {
        //return formatCursoResponse(message, 'No pude identificar qué cursos estás buscando. ¿Podrías ser más específico?');
        return formatCursoResponse(message, 'cuenta un chiste divertido?');
      }
    }
  }

  for (const pattern of buyCoursePatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Para comprar un curso basta con seleccionar el curso, luego presionar el botón de agregar compra.');
    }
  }

  for (const pattern of loginPatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Para iniciar sesión, por favor ingresa tu usuario y contraseña en la página de inicio.');
    }
  }

  for (const pattern of logoutPatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Para salir de sesión, solo debes hacer clic en el botón "Cerrar sesión" en tu perfil.');
    }
  }

  for (const pattern of cancelPurchasePatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Si deseas cancelar tu compra, por favor accede a tu carrito y selecciona la opción de cancelar compra.');
    }
  }

  for (const pattern of completePurchasePatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Para completar tu compra, revisa tu carrito y haz clic en el botón "Completar compra".');
    }
  }

  for (const pattern of viewUserDataPatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Para ver tus datos de usuario, accede a tu perfil y revisa la sección "Mis Datos".');
    }
  }

  return formatResponse(message, 'Lo siento, no entiendo tu pregunta. Por favor, intenta formularla de otra manera o contáctanos al soporte.'); // Si no coincide ningún patrón
}
