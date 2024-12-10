
function formatResponse(message, predefinedResponse) {
  return `El mensaje del usuario es [${message}], la respuesta es en base a esto [${predefinedResponse}] crea una variante para este mensaje para hacerlo más variado, considerando que eres un asistente de la página web de compra de cursos online Galileo. mensajes cortos`;
}

function formatCursoResponse(message, predefinedResponse) {
  return `La lista de los cursos buscados son estos [${predefinedResponse}] entrega estos listados de cursos, no inventes cursos nuevos solo usa los dados en la lista dada, pero agrega une pequeña descripcion de cada curso, considerando que eres un asistente de la página web de compra de cursos online Galileo. mensajes cortos`;
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
    return `Curso de ${courseNameMapping.matematicas}: Álgebra Lineal Básica, Cálculo Diferencial e Integral.`;
  } else if (course === "fisica") {
      return `Curso de ${courseNameMapping.fisica}: Física Cuántica para Principiantes, Mecánica Clásica.`;
  } else if (course === "biologia") {
      return `Curso de ${courseNameMapping.biologia}: No hay cursos disponibles en esta materia.`;
  } else if (course === "quimica") {
      return `Curso de ${courseNameMapping.quimica}: No hay cursos disponibles en esta materia.`;
  } else if (course === "informatica") {
      return `Curso de ${courseNameMapping.informatica}: Introducción a Python, Desarrollo Web con React.`;
  } else if (course === "programacion") {
      return `Curso de ${courseNameMapping.programacion}: Introducción a Python, Desarrollo Web con React.`;
  } else if (course === "ingles") {
      return `Curso de ${courseNameMapping.ingles}: No hay cursos disponibles en esta materia.`;
  } else if (course === "historia") {
      return `Curso de ${courseNameMapping.historia}: No hay cursos disponibles en esta materia.`;
  } else if (course === "filosofia") {
      return `Curso de ${courseNameMapping.filosofia}: No hay cursos disponibles en esta materia.`;
  } else if (course === "economia") {
      return `Curso de ${courseNameMapping.economia}: No hay cursos disponibles en esta materia.`;
  } else if (course === "psicologia") {
      return `Curso de ${courseNameMapping.psicologia}: No hay cursos disponibles en esta materia.`;
  } else if (course === "arte") {
      return `Curso de ${courseNameMapping.arte}: Diseño Gráfico con Adobe Photoshop.`;
  } else if (course === "musica") {
      return `Curso de ${courseNameMapping.musica}: No hay cursos disponibles en esta materia.`;
  } else if (course === "arquitectura") {
      return `Curso de ${courseNameMapping.arquitectura}: No hay cursos disponibles en esta materia.`;
  } else if (course === "derecho") {
      return `Curso de ${courseNameMapping.derecho}: No hay cursos disponibles en esta materia.`;
  } else if (course === "medicina") {
      return `Curso de ${courseNameMapping.medicina}: No hay cursos disponibles en esta materia.`;
  } else if (course === "administracion") {
      return `Curso de ${courseNameMapping.administracion}: No hay cursos disponibles en esta materia.`;
  } else if (course === "marketing") {
      return `Curso de ${courseNameMapping.marketing}: No hay cursos disponibles en esta materia.`;
  } else if (course === "diseño") {
      return `Curso de ${courseNameMapping.diseño}: Diseño Gráfico con Adobe Photoshop, UX/UI para Principiantes.`;
  } else if (course === "contabilidad") {
      return `Curso de ${courseNameMapping.contabilidad}: No hay cursos disponibles en esta materia.`;
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



  /**

  
if (course === "matematicas") {
  return `Curso de ${courseNameMapping.matematicas}: Álgebra Básica, Geometría Euclidiana, Cálculo Diferencial, Álgebra Lineal Básica, Cálculo Diferencial e Integral.`;
} else if (course === "fisica") {
  return `Curso de ${courseNameMapping.fisica}: Mecánica Clásica, Electromagnetismo, Física Cuántica, Física Cuántica para Principiantes, Mecánica Clásica.`;
} else if (course === "biologia") {
  return `Curso de ${courseNameMapping.biologia}: Biología Molecular, Genética, Ecología Aplicada.`;
} else if (course === "quimica") {
  return `Curso de ${courseNameMapping.quimica}: Química Orgánica, Química Inorgánica, Análisis Químico.`;
} else if (course === "informatica") {
  return `Curso de ${courseNameMapping.informatica}: Fundamentos de Computación, Redes de Computadoras, Bases de Datos, Introducción a la Electrónica Digital, Microcontrolador con Arduino.`;
} else if (course === "programacion") {
  return `Curso de ${courseNameMapping.programacion}: Programación en Python, Desarrollo Web, Algoritmos y Estructuras de Datos, Introducción a Python, Desarrollo Web con React.`;
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
  return `Curso de ${courseNameMapping.arte}: Historia del Arte, Técnicas de Dibujo, Pintura al Óleo, Diseño Gráfico con Adobe Photoshop.`;
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
  return `Curso de ${courseNameMapping.diseño}: Diseño Gráfico, Diseño UX/UI, Ilustración Digital, Diseño Gráfico con Adobe Photoshop, UX/UI para Principiantes.`;
} else if (course === "contabilidad") {
  return `Curso de ${courseNameMapping.contabilidad}: Contabilidad Financiera, Auditoría, Planificación Tributaria.`;
} else {
  return "Curso no identificado. Por favor, verifica el nombre del curso.";
}



   */

function normalizeText(text) {
  return text.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
}
export default function getPredefinedResponse(message: string): string | null {
  const lowerMessage = normalizeText(message.toLowerCase());

  // Patrones relacionados con la compra de cursos
  const buyCoursePatterns = [
    /comprar.*curso|adquirir.*curso|obtener.*curso|como.*comprar.*curso|donde.*adquirir.*curso|me.*interesa.*comprar.*curso/,
    /quiero.*curso|me.*interesa.*curso|me.*gustaria.*curso|quiero.*obtener.*curso|deseo.*comprar.*curso|me.*gustaria.*aprender.*curso/,
    /como.*adquirir.*curso|informacion.*sobre.*curso|donde.*puedo.*comprar.*curso|quiero.*informarme.*sobre.*curso|informame.*sobre.*curso/,
    /que.*curso.*me.*recomiendas|recomiendame.*un.*curso|cual.*es.*el.*mejor.*curso|hay.*algún.*curso.*recomendado/,
    /agregar.*curso|añadir.*curso|incorporar.*curso|sumar.*curso|agregar.*un.*curso|quiero.*agregar.*curso|quiero.*añadir.*curso|como.*agregar.*curso/
  ];
  
  
  const loginPatterns = [
    /inicio.*sesion|acceder|entrar|iniciar.*sesion|logearse|loguearse|acceso.*cuenta|entrar.*a.*mi.*cuenta|iniciar.*sesion.*plataforma/,
    /loguearse|identificacion|acceso|quiero.*iniciar.*sesion|acceder.*a.*mi.*perfil|entrar.*al.*sistema/,
    /como.*iniciar.*sesion|necesito.*acceder.*a.*mi.*cuenta|como.*entrar.*a.*mi.*perfil/,
    /acceso.*usuario|iniciar.*mi.*sesion|me.*gustaria.*acceder.*a.*mi.*perfil/
  ];
  
  const logoutPatterns = [
    /salir.*sesion|cerrar.*sesion|desconectar.*sesion|cerrar.*mi.*cuenta|terminar.*sesion/,
    /finalizar.*sesion|terminar.*sesion|desconectar.*mi.*cuenta|salir.*del.*sistema|salir.*de.*mi.*perfil/,
    /como.*cerrar.*sesion|quiero.*salir.*del.*sistema|desconectar.*mi.*sesion/,
    /cerrar.*mi.*perfil|finalizar.*sesion.*en.*la.*plataforma/
  ];
  
  const cancelPurchasePatterns = [
    /cancelar.*compra|anular.*compra|devolver.*producto|quiero.*cancelar.*pedido|como.*cancelar.*mi.*compra/,
    /quiero.*devolver.*compra|como.*cancelar.*pedido|anular.*compra|devolver.*articulo|necesito.*devolver.*producto/,
    /como.*anular.*pedido|quiero.*hacer.*devolucion|como.*anular.*compra/,
    /quiero.*devolver.*mi.*compra|cancelar.*pedido.*realizado|quiero.*anular.*mi.*pedido/
  ];
  
  const completePurchasePatterns = [
    /completar.*compra|finalizar.*compra|confirmar.*compra|terminar.*mi.*compra|completar.*pedido/,
    /realizar.*pago|confirmacion.*pago|finalizar.*pedido|realizar.*compra|realizar.*mi.*pago/,
    /confirmar.*mi.*compra|realizar.*pago.*final|completar.*mi.*pedido/,
    /hacer.*pago|confirmar.*mi.*compra|finalizar.*mi.*pago|realizar.*pago.*final/
  ];
  
  const viewUserDataPatterns = [
    /ver.*mis.*datos|mostrar.*mis.*informacion|consultar.*mis.*datos|consultar.*mi.*perfil|mostrar.*mis.*informacion.*personal/,
    /ver.*perfil|consultar.*informacion.*personal|ver.*mi.*informacion|consultar.*datos.*personales/,
    /mostrar.*informacion.*de.*usuario|ver.*datos.*personales|quiero.*consultar.*mi.*perfil/,
    /consultar.*mi.*informacion.*de.*usuario|ver.*mis.*datos.*personales|mostrar.*mi.*perfil/
  ];
  
  const helpPatterns = [
    /necesito.*ayuda|ayuda.*por.*favor|como.*funciona|donde.*encontrar|que.*hacer|necesito.*soporte/,
    /soporte.*tecnico|problema.*con.*plataforma|ayuda.*con.*curso|necesito.*informacion.*adicional|necesito.*ayuda.*con.*mi.*cuenta/,
    /ayuda.*para.*comprar|problema.*al.*acceder.*curso|necesito.*ayuda.*con.*pago/,
    /me.*puedes.*ayudar|que.*hago.*si.*no.*puedo.*entrar|tengo.*un.*problema.*con.*la.*plataforma/
  ];
  
  const paymentPatterns = [
    /metodos.*de.*pago|formas.*de.*pago|puedo.*pagar.*con|tarjetas.*aceptadas|como.*pago.*el.*curso/,
    /factura.*curso|recibo.*compra|obtener.*factura|como.*obtener.*factura|como.*realizar.*el.*pago/,
    /formas.*de.*pago.*disponibles|metodos.*de.*pago.*para.*curso|como.*pagar.*por.*curso/,
    /¿que.*metodos.*de.*pago.*tienen|quiero.*realizar.*pago|¿como.*obtener.*mi.*recibo/
  ];
  
  const certificatePatterns = [
    /certificado.*de.*curso|obtener.*certificado|como.*descargar.*certificado|requisitos.*para.*certificado/,
    /tienen.*certificacion|dan.*certificados|quiero.*certificado.*de.*curso|como.*obtener.*mi.*certificado/,
    /como.*obtener.*certificado.*curso|¿donde.*descargar.*certificado|obtener.*certificado.*de.*formacion/,
    /me.*entregan.*certificado|cuando.*entrego.*el.*curso.*me.*dan.*certificado/
  ];
  
  const courseDetailsPatterns = [
    /duracion.*del.*curso|cuanto.*dura.*curso|contenido.*del.*curso|que.*incluye.*curso|nivel.*de.*curso/,
    /quien.*puede.*tomar.*curso|informacion.*sobre.*curso|detalles.*sobre.*el.*curso|como.*es.*el.*contenido/,
    /que.*temas.*trata.*curso|cual.*es.*el.*contenido|nivel.*de.*dificultad.*curso/,
    /quien.*puede.*tomar.*este.*curso|informacion.*completa.*sobre.*curso|contenido.*detallado.*del.*curso/
  ];
  
  const refundPatterns = [
    /solicitar.*reembolso|quiero.*reembolso|devolver.*dinero|como.*pedir.*reembolso|política.*de.*reembolso/,
    /quiero.*que.*me.*reembolsen|reembolso.*compra|quiero.*mi.*dinero.*de.*vuelta/,
    /como.*recibir.*reembolso|quiero.*devolver.*mi.*dinero|reembolso.*por.*producto/,
    /solicitar.*reembolso.*curso|reembolso.*por.*compra|como.*pedir.*devolucion.*dinero/
  ];
  
  const recommendCoursePatterns = [
    /recomienda.*curso|sugerencias.*de.*curso|que.*curso.*me.*recomiendas|me.*puedes.*sugerir.*curso/,
    /sugerir.*curso|que.*cursos.*me.*recomiendas|me.*recomiendas.*algún.*curso/,
    /que.*curso.*es.*bueno|cual.*es.*el.*mejor.*curso|me.*puedes.*dar.*una.*recomendación/,
    /que.*cursos.*debería.*tomar|cual.*es.*el.*mejor.*para.*mi|que.*recomiendas.*estudiar/
  ];
  
  const technicalIssuePatterns = [
    /no.*puedo.*acceder|error.*en.*plataforma|problema.*con.*curso|no.*funciona.*curso|no.*carga.*contenido/,
    /fallo.*tecnico|problema.*tecnico|no.*accedo.*a.*mi.*curso|problema.*con.*mi.*perfil/,
    /error.*en.*sistema|no.*puedo.*entrar.*a.*plataforma|fallo.*tecnico.*al.*acceder/,
    /no.*me.*deja.*entrar|no.*puedo.*ver.*el.*contenido|problema.*con.*mi.*curso/
  ];
  
  const promoPatterns = [
    /tienen.*promociones|hay.*descuentos|ofertas.*disponibles|ofertas.*especiales|promociones.*activas/,
    /codigo.*de.*descuento|cupon.*de.*descuento|oferta.*exclusiva|descuento.*en.*curso/,
    /ofertas.*en.*cursos|promociones.*para.*cursos|descuentos.*en.*plataforma/,
    /cupon.*descuento|descuentos.*en.*plataforma|oferta.*del.*día/
  ];
  
  const compatibilityPatterns = [
    /funciona.*en.*movil|puedo.*usar.*tableta|dispositivos.*compatibles|se.*puede.*usar.*en.*telefono|requisitos.*tecnicos/,
    /necesito.*software.*especial|necesito.*aplicacion.*movil|dispositivos.*compatibles.*con.*curso/,
    /se.*puede.*usar.*en.*movil|requisitos.*de.*hardware.*para.*curso|necesito.*requisitos.*tecnicos/,
    /funciona.*con.*tabletas|es.*compatible.*con.*moviles|necesito.*dispositivo.*compatibles/
  ];
  
  const updatePatterns = [
    /actualizaciones.*del.*curso|nuevo.*contenido|ampliacion.*del.*curso|mejoras.*del.*curso/,
    /versiones.*actualizadas|nuevas.*funciones.*del.*curso|actualizacion.*reciente|cambios.*en.*el.*curso/,
    /mejoras.*del.*contenido|actualizaciones.*del.*material|contenido.*actualizado/,
    /modificaciones.*al.*curso|nuevo.*contenido.*adicional|cursos.*actualizados/
  ];
  
  

  // Patrones relacionados con la búsqueda de cursos en el programa
  const searchCoursePatterns = [
    /estoy.*buscando.*curso.*de.*\w+|quiero.*curso.*de.*\w+|me.*interesa.*curso.*de.*\w+|necesito.*curso.*de.*\w+|estoy.*interesado.*en.*curso.*de.*\w+/,
    /cursos.*disponibles.*de.*\w+|ver.*cursos.*de.*\w+|dame.*informacian.*sobre.*curso.*de.*\w+|quiero.*saber.*que.*cursos.*de.*\w+.*hay/,
    /mostrar.*cursos.*de.*\w+|quiero.*ver.*los.*cursos.*de.*\w+/,
    /buscar.*cursos.*de.*\w+|encuentra.*cursos.*de.*\w+|me.*interesa.*ver.*cursos.*de.*\w+/,
    /\bcurso\b.*(matematicas|fisica|biologia|quimica|informatica|programacian)/ // Captura cursos específicos
  ];
  

  const specificCoursePatterns = {
    matematicas: /curso.*matematica|curso.*matematicas|clase.*matematica|clase.*matematicas|algebra.*lineal.*basica|calculo.*diferencial.*e.*integral/,
    fisica: /curso.*fisica|clase.*fisica|curso.*fisico|clase.*fisico|fisica.*cuantica.*para.*principiantes|mecanica.*clasica/,
    biologia: /curso.*biologia|clase.*biologia|curso.*biologico|clase.*biologico/,
    quimica: /curso.*quimica|clase.*quimica|curso.*quimico|clase.*quimico/,
    informatica: /curso.*informatica|clase.*informatica|curso.*computacion|clase.*computacion|introduccion.*a.*python|desarrollo.*web.*con.*react/,
    programacion: /curso.*programacion|clase.*programacion|curso.*codigo|clase.*codigo|desarrollo.*web.*con.*react|introduccion.*a.*python/,
    ingles: /curso.*ingles|clase.*ingles|curso.*english|clase.*english/,
    historia: /curso.*historia|clase.*historia|curso.*historico|clase.*historico/,
    filosofia: /curso.*filosofia|clase.*filosofia/,
    economia: /curso.*economia|clase.*economia/,
    psicologia: /curso.*psicologia|clase.*psicologia/,
    arte: /curso.*arte|clase.*arte|curso.*artes|clase.*artes|diseno.*grafico.*con.*adobe.*photoshop/,
    musica: /curso.*musica|clase.*musica|curso.*musical|clase.*musical/,
    arquitectura: /curso.*arquitectura|clase.*arquitectura|curso.*arquitectonico|clase.*arquitectonico/,
    derecho: /curso.*derecho|clase.*derecho|curso.*juridico|clase.*juridico/,
    medicina: /curso.*medicina|clase.*medicina|curso.*medico|clase.*medico/,
    administracion: /curso.*administracion|clase.*administracion|curso.*gestion|clase.*gestion/,
    marketing: /curso.*marketing|clase.*marketing|curso.*publicidad|clase.*publicidad/,
    diseño: /curso.*diseno|clase.*diseno|curso.*grafico|clase.*grafico|diseno.*grafico.*con.*adobe.*photoshop|ux\/ui.*para.*principiantes/,
    contabilidad: /curso.*contabilidad|clase.*contabilidad|curso.*finanzas|clase.*finanzas/,
};



  /**
   
  const specificCoursePatterns = {
    matematicas: /curso.*matematica|curso.*matematicas|clase.*matematica|clase.*matematicas/,
    fisica: /curso.*fisica|clase.*fisica|curso.*fisico|clase.*fisico|clase.*fisica|curso.*fisica/,
    biologia: /curso.*biologia|clase.*biologia|curso.*biologico|clase.*biologico|curso.*biologia|clase.*biologia/,
    quimica: /curso.*quimica|clase.*quimica|curso.*quimico|clase.*quimico|curso.*quimica|clase.*quimica/,
    informatica: /curso.*informatica|clase.*informatica|curso.*computacion|clase.*computacion|curso.*tecnologia.*informatica|clase.*tecnologia.*informatica/,
    programacion: /curso.*programacion|clase.*programacion|curso.*codigo|clase.*codigo|curso.*desarrollo.*software|clase.*desarrollo.*software/,
    ingles: /curso.*ingles|clase.*ingles|curso.*english|clase.*english/,
    historia: /curso.*historia|clase.*historia|curso.*historico|clase.*historico/,
    filosofia: /curso.*filosofia|clase.*filosofia|curso.*filosofia|clase.*filosofia/,
    economia: /curso.*economia|clase.*economia|curso.*economia|clase.*economia/,
    psicologia: /curso.*psicologia|clase.*psicologia|curso.*psicologia|clase.*psicologia/,
    arte: /curso.*arte|clase.*arte|curso.*artes|clase.*artes/,
    musica: /curso.*musica|clase.*musica|curso.*musical|clase.*musical/,
    arquitectura: /curso.*arquitectura|clase.*arquitectura|curso.*arquitectonico|clase.*arquitectonico/,
    derecho: /curso.*derecho|clase.*derecho|curso.*juridico|clase.*juridico/,
    medicina: /curso.*medicina|clase.*medicina|curso.*medico|clase.*medico/,
    administracion: /curso.*administracion|clase.*administracion|curso.*gestion|clase.*gestion/,
    marketing: /curso.*marketing|clase.*marketing|curso.*publicidad|clase.*publicidad/,
    diseño: /curso.*diseño|clase.*diseño|curso.*grafico|clase.*grafico/,
    contabilidad: /curso.*contabilidad|clase.*contabilidad|curso.*finanzas|clase.*finanzas/,
  };
   
   */

  // Verificación de patrones y respuesta utilizando la función auxiliar

  for (const pattern of helpPatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Si necesitas ayuda, consulta nuestra sección de soporte o contáctanos a través del chat en vivo.');
    }
  }
  
  for (const pattern of technicalIssuePatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Lamentamos el inconveniente. Por favor, verifica tu conexión a internet y vuelve a intentarlo. Si el problema persiste, contáctanos.');
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
  
  for (const pattern of viewUserDataPatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Para ver tus datos de usuario, accede a tu perfil y revisa la sección "Mis Datos".');
    }
  }
  
  for (const pattern of searchCoursePatterns) {
    if (pattern.test(lowerMessage)) {
      // Luego verifica por cada curso específico
      const identifiedCourses = [];
      for (const [courseKey, pattern] of Object.entries(specificCoursePatterns)) {
        if (pattern.test(lowerMessage)) {
          identifiedCourses.push(courseKey);
        }
      }
  
      if (identifiedCourses.length > 0) {
        const courseMessages = identifiedCourses.map(course => identifyCourseAndGenerateMessage(course));
        return formatCursoResponse(message, `${courseMessages.join(' y ')}.`);
      } else {
        return formatCursoResponse(message, 'No existe curso de esta materia, lo sentimos, pero es posible en el futuro que sea agregado esta materia en el futuro, porfavor matengase a tento a posibles actualizaciones de nuestros servicios');
      }
    }
  }
  
  for (const pattern of recommendCoursePatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Claro, dinos tus intereses o el tema que deseas aprender, y te sugeriremos cursos ideales para ti.');
    }
  }
  
  for (const pattern of buyCoursePatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Para comprar un curso basta con seleccionar el curso, luego presionar el botón de agregar compra.');
    }
  }
  
  for (const pattern of completePurchasePatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Para completar tu compra, revisa tu carrito y haz clic en el botón "Completar compra".');
    }
  }
  
  for (const pattern of cancelPurchasePatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Si deseas cancelar tu compra, por favor accede a tu carrito y selecciona la opción de cancelar compra.');
    }
  }
  
  for (const pattern of promoPatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Consulta nuestras promociones en la página principal. Puedes aplicar códigos de descuento en el proceso de pago.');
    }
  }
  
  for (const pattern of paymentPatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Aceptamos tarjetas de crédito, débito, y otros métodos de pago. Si necesitas factura, la puedes descargar desde tu historial de compras.');
    }
  }
  
  for (const pattern of certificatePatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Al completar un curso, podrás descargar tu certificado desde tu perfil en la sección "Mis Certificados".');
    }
  }
  
  for (const pattern of courseDetailsPatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Cada curso incluye una descripción con duración, contenido, y nivel recomendado en su página de detalles.');
    }
  }
  
  for (const pattern of refundPatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Para solicitar un reembolso, visita la sección "Mis Compras" y selecciona la opción de reembolso para el curso correspondiente.');
    }
  }
  
  for (const pattern of compatibilityPatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Nuestra plataforma es compatible con dispositivos móviles, tabletas y computadoras. Solo necesitas un navegador web actualizado.');
    }
  }
  
  for (const pattern of updatePatterns) {
    if (pattern.test(lowerMessage)) {
      return formatResponse(message, 'Actualizamos constantemente nuestros cursos para ofrecer contenido nuevo y relevante. Revisa las novedades en la sección "Actualizaciones".');
    }
  }
  

  return formatResponse(message, 'Lo siento, no entiendo tu pregunta. Por favor, intenta formularla de otra manera o contáctanos al soporte.'); // Si no coincide ningún patrón
}
