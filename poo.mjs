// modulos en JS

function videoPlay(id) {
  const urlSecreta = "https://moonmakers_TopSecret.com/" + id;
  console.log("se esta reproduciendo desde la URL ");
}
function videoStop(id) {
  const urlSecreta = "https://moonmakers_TopSecret.com/" + id;
  console.log("se pauso el video ");
}

export class MoonMakersClass {
  constructor({ name, videoID }) {
    this.name = name;
    this.videoID = videoID;
  }

  reproducir() {
    videoPlay(this.videoID);
  }

  pausar() {
    videoStop(this.videoID);
  }
}

// modulos en JS

class Comments {
  constructor({ user, comment }) {
    this.user = user;
    this.comment = comment;
  }
}

class Classes {
  constructor({ name, time, comentarios = [] }) {
    this.name = name;
    this.time = time;
    this.comentarios = comentarios;
  }
}

class Course {
  // ES2020, campos privados en las clases.
  #name;

  constructor({ name, classes = [] }) {
    this.#name = name;
    this.classes = classes;
  }

  get name() {
    return this.#name;
  }

  set name(nuevoNombre) {
    if (nuevoNombre === "no" || nuevoNombre === "") {
      console.error("Error");
    } else {
      this.#name = nuevoNombre;
    }
  }
}

class LearningPath {
  constructor({
    id,
    logo = "",
    name,
    teachers = [],
    blogposts = [],
    glosary = [],
    category = "",
    description = "",
    courses = [],
  }) {
    this.id = id;
    this.logo = logo;
    this.name = name;
    this.teachers = teachers;
    this.blogposts = blogposts;
    this.glosary = glosary;
    this.category = category;
    this.description = description;
    this.courses = courses;
  }

  // addCourse(course, nameCourse) {
  //   if (!this.courses[course]) {
  //     this.courses[course] = [];
  //   }
  //   this.courses[course].push(nameCourse);
  // }

  addTeacher(teacher) {
    this.teachers.push(teacher);
  }

  addBlog(blog) {
    this.blogposts.push(blog);
  }

  addConcept(concept) {
    this.glosary.push(concept);
  }
}

const ConoceMoonMakers = new Course({
  name: "Conoce MoonMakers",
});

const RocketMaker = new LearningPath({
  id: 1,
  name: "Rocket Maker",
  courses: [ConoceMoonMakers, "Rocket Maker E1", "Rocket Maker E2"],
});
const ProgrammingArduino = new LearningPath({
  id: 1,
  name: "Programming Arduino",
  courses: [ConoceMoonMakers, "Programa tu primer LED con Arduino"],
});

class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagrm = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagrm,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const Diego = new Student({
  name: "diego",
  username: "diegoFcoLuna",
  email: "diego@diego.com",
  instagram: "diegoFcoLuna",
});

const Annabeth = new Student({
  name: "Annabeth",
  username: "Annabeth_chase",
  email: "annabeth@annabeth.com",
  instagram: "Annabeth_chase",
});
