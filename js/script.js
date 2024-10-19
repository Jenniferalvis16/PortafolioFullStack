function showReference(tool) {
  let referenceText = "";

  switch (tool) {
    case 'HTML':
      referenceText = "HTML (Hypertext Markup Language) es el lenguaje estándar utilizado para estructurar el contenido de las páginas web mediante etiquetas y atributos. Define elementos como encabezados, párrafos, imágenes y enlaces, formando la base de cualquier sitio web. Junto con CSS y JavaScript, HTML permite crear experiencias web completas y funcionales.";
      break;
    case 'CSS':
      referenceText = "CSS (Cascading Style Sheets) es el lenguaje utilizado para dar estilo y diseño a las páginas web, permitiendo definir colores, fuentes, márgenes y el diseño general de los elementos. Separa el contenido HTML del diseño visual, lo que mejora la mantenibilidad y la estética del sitio web, haciendo posible la creación de interfaces modernas y responsivas.";
      break;
    case 'JavaScript':
      referenceText = "JavaScript es un lenguaje de programación que añade interactividad y dinamismo a las páginas web. Permite crear elementos como menús desplegables, sliders, y validación de formularios, y se ejecuta directamente en el navegador del usuario. Es fundamental tanto en el desarrollo de aplicaciones web modernas como en el manejo de datos y el backend con Node.js.";
      break;
    case 'Bootstrap':
      referenceText = "Bootstrap es un framework CSS que facilita el desarrollo de sitios web responsivos y móviles. Ofrece una colección de componentes predefinidos y un sistema de rejilla que permite crear diseños flexibles de manera rápida y eficiente. Bootstrap combina HTML, CSS y JavaScript para proporcionar interfaces modernas con una apariencia profesional.";
      break;
    case 'Java':
      referenceText = "Java es un lenguaje de programación orientado a objetos que es conocido por su portabilidad y robustez. Se utiliza ampliamente para desarrollar aplicaciones empresariales, móviles y web, y es el lenguaje principal para las aplicaciones Android. Destaca por su capacidad de funcionar en cualquier sistema operativo que soporte la JVM.";
      break;
    case 'Docker':
      referenceText = "Docker es una plataforma que permite crear, implementar y ejecutar aplicaciones en contenedores, asegurando que se comporten de la misma manera en cualquier entorno. Los contenedores empaquetan todo lo necesario para ejecutar una aplicación, lo que facilita la portabilidad, el despliegue y la administración de software de manera eficiente y ágil.";
      break;
    case 'GitHub':
      referenceText = "GitHub es una plataforma basada en la web para el control de versiones y la colaboración en proyectos de software. Utiliza Git para gestionar el código, permitiendo a los desarrolladores trabajar juntos en proyectos, revisar cambios y realizar integraciones automáticas mediante GitHub Actions. Es esencial para proyectos de código abierto y para equipos que necesitan colaborar eficazmente.";
      break;
    case 'Notion':
      referenceText = "Notion es una herramienta todo-en-uno para la gestión de proyectos, toma de notas y organización de tareas. Combina bases de datos, listas de tareas, calendarios y documentos en una plataforma flexible que permite la colaboración en tiempo real. Es ideal tanto para individuos como para equipos que buscan una solución integrada para planificar y organizar su trabajo.";
      break;
   
  }

  document.getElementById("referenceText").innerText = referenceText;
  document.getElementById("referenceModal").style.display = "block";
}

function closeReference() {
  document.getElementById("referenceModal").style.display = "none";
}
