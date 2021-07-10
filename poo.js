class LearningPath {
  constructor({
    id,
    logo,
    name,
    teachers = [],
    blogposts = [],
    glosary = [],
    category,
    description,
    levels = [],
  }) {
    this.id = id;
    this.logo = logo;
    this.name = name;
    this.teachers = teachers;
    this.blogposts = blogposts;
    this.glosary = glosary;
    this.category = category;
    this.description = description;
    this.levels = levels;
  }

  addCourse(level, nameCourse) {
    if (!this.levels[level]) {
      this.levels[level] = [];
    }
    this.levels[level].push(nameCourse);
  }

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
