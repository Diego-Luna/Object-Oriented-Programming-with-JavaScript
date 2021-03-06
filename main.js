// Es un objeto literal -  It is a literal object
const Hazel = {
  // atributos
  name: "Hazel",
  age: 20,
  cursosAprovados: ["Rocket Maker", "Conseptos basicos de Arduino"],
  // creamos un metodo
  aprobarCurso(nuevoCurso) {
    this.cursosAprovados.push(nuevoCurso);
  },
};

// Hacer que hazel aprueve otro curso
// Hazel.cursosAprovados.push("Code Adventure");

// vamos a crear un prototipo
function Student(name, age, cursosAprovados) {
  this.name = name;
  this.age = age;
  this.cursosAprovados = cursosAprovados;
  // creamos un metodo en el prototipo
  // this.aprobarCurso = function(nuevoCurso){
  //   this.cursosAprovados.push(nuevoCurso);
  // }
}
// creamos un metodo en el prototipo
Student.prototype.aprobarCurso = function (nuevoCurso) {
  this.cursosAprovados.push(nuevoCurso);
};

// creamos una instancia de nuestro prototipo
const Frank = new Student("Frank", 21, ["Code Adventure"]);

// Prototipos con la sintaxis de clases

class StudentClass {
  constructor({ name, age, cursosAprovados = [], email }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprovados = cursosAprovados;
  }

  aprobarCurso(nuevoCurso) {
    this.cursosAprovados.push(nuevoCurso);
  }
}

// nueva instancia
const jason = new StudentClass({
  email: "jasongrace@gmail.com",
  name: "jason",
  age: 20,
});
