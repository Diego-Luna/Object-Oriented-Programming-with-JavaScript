// modulos en JS

function videoPlay(id) {
  const urlSecreta = "https://moonmakers_TopSecret.com/" + id;
  console.log("se esta reproduciendo desde la URL ");
}
function videoStop(id) {
  const urlSecreta = "https://moonmakers_TopSecret.com/" + id;
  console.log("se pauso el video ");
}

// export class MoonMakersClass {
class MoonMakersClass {
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
  constructor({ name, classes = [], isFree = false, lang = "spanish" }) {
    this._name = name;
    this.classes = classes;
    this.isFree = isFree;
    this.lang = lang;
  }

  get name() {
    return this._name;
  }

  set name(nuevoNombrecito) {
    if (nuevoNombrecito === "no") {
      console.error("Error");
    } else {
      this._name = nuevoNombrecito;
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
  isFree: true,
});
const RocketMakerE1 = new Course({
  name: "Rocket Maker E1",
  isFree: false,
  lang: "english",
});

const RocketMaker = new LearningPath({
  id: 1,
  name: "Rocket Maker",
  courses: [ConoceMoonMakers, RocketMakerE1, "Rocket Maker E2"],
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
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

class FreeStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.isFree) {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos");
    }
  }
}

class BasicStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    if (newCourse.lang !== "english") {
      this.approvedCourses.push(newCourse);
    } else {
      console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
    }
  }
}

class ExpertStudent extends Student {
  constructor(props) {
    super(props);
  }

  approveCourse(newCourse) {
    this.approvedCourses.push(newCourse);
  }
}

const Diego = new FreeStudent({
  name: "diego",
  username: "diegoFcoLuna",
  email: "diego@diego.com",
  instagram: "diegoFcoLuna",
});

const Annabeth = new BasicStudent({
  name: "Annabeth",
  username: "Annabeth_chase",
  email: "annabeth@annabeth.com",
  instagram: "Annabeth_chase",
});
