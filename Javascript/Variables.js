// Definir la lista de contactos
var listaDeContactos = [];

// Función para agregar un contacto a la lista
function agregarContacto(nombreApellido) {
  listaDeContactos.push(nombreApellido);
}

// Función para mostrar la lista de contactos
function mostrarContactos() {
  console.log("Lista de contactos:");
  for (var i = 0; i < listaDeContactos.length; i++) {
    console.log(listaDeContactos[i]);
  }
}

// Función para añadir un nuevo contacto a la lista
function nuevoContacto() {
  var nuevoNombreApellido = prompt("Ingrese el nombre y apellido del nuevo contacto:");
  agregarContacto(nuevoNombreApellido);
  console.log("Nuevo contacto añadido:", nuevoNombreApellido);
}

// Función para borrar un contacto de la lista
function borrarContacto() {
  var contactoABorrar = prompt("Ingrese el nombre y apellido del contacto que desea borrar:");
  var indice = listaDeContactos.indexOf(contactoABorrar);
  if (indice !== -1) {
    listaDeContactos.splice(indice, 1);
    console.log("Contacto borrado:", contactoABorrar);
  } else {
    console.log("No se encontró el contacto:", contactoABorrar);
  }
}

// Función para imprimir en consola los contactos presentes en la lista
function imprimirContactos() {
  console.log("Contactos presentes en la lista:");
  for (var i = 0; i < listaDeContactos.length; i++) {
    console.log(listaDeContactos[i]);
  }
}

// Agregar contactos iniciales a la lista
agregarContacto("Juan Perez");
agregarContacto("María López");
agregarContacto("Carlos Rodriguez");

// Mostrar la lista de contactos
mostrarContactos();

// Añadir un nuevo contacto
nuevoContacto();

// Borrar un contacto existente
borrarContacto();

// Imprimir los contactos presentes en la lista
imprimirContactos();