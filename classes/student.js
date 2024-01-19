const Person = require('./person');

class Student extends Person {
  constructor (firstName, lastName, major, GPA) {
  super (firstName, lastName);
  this.major = major;
  this.GPA = GPA;
  }

  static compareGPA (stu1, stu2) {
    if (stu1.GPA > stu2.GPA) {
      return (`${stu1.firstName} ${stu1.lastName} has the higher GPA.`);
    }
    if (stu1.GPA < stu2.GPA) {
      return (`${stu2.firstName} ${stu2.lastName} has the higher GPA.`);
    }
    if (stu1.GPA == stu2.GPA) {
       return (`Both students have the same GPA`);
    }
  }
}



/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Student;
} catch {
  module.exports = null;
}