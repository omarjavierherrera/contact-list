var listaDeContactos = [];


function agregarContacto(nombreApellido) {
  listaDeContactos.push(nombreApellido);
}


function mostrarContactos() {
  console.log("Lista de contactos:");
  for (var i = 0; i < listaDeContactos.length; i++) {
    console.log(listaDeContactos[i]);
  }
}


function nuevoContacto() {
  var nuevoNombreApellido = prompt("Ingrese el nombre y apellido del nuevo contacto:");
  agregarContacto(nuevoNombreApellido);
  console.log("Nuevo contacto añadido:", nuevoNombreApellido);
}


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


function imprimirContactos() {
  console.log("Contactos presentes en la lista:");
  for (var i = 0; i < listaDeContactos.length; i++) {
    console.log(listaDeContactos[i]);
  }
}


agregarContacto("Juan Perez");
agregarContacto("María López");
agregarContacto("Carlos Rodriguez");
agregarContacto("Carlos Tierra");


mostrarContactos();


nuevoContacto();


borrarContacto();


imprimirContactos();


function agregarNuevoContacto() {
  var nuevoNombreApellido = prompt("ingrese el nombre del nuevo contacto");
  agregarContacto(nuevoNombreApellido);
  console.log("Nuevo contacto añadido:", nuevoNombreApellido);
}


agregarNuevoContacto();