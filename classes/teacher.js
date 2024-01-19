const Person = require('./person');

class Teacher extends Person {
  constructor (firstName, lastName, subject, yearsOfExperience) {
    super(firstName, lastName);
    this.subject = subject;
    this.yearsOfExperience = yearsOfExperience;
  }

  static combinedYearsOfExperience(teacher) {
    let combined = 0;
    for (const exp of teacher) {
      combined = combined + exp.yearsOfExperience;
    }
    return combined;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = Teacher;
} catch {
  module.exports = null;
}