
# Grade Calculator

This web application allows you to manage the grades of a group of students. You can add new students, input grades, calculate averages, and determine pass/fail status.

## Usage of Switch, Try-Catch-Finally, and Classes

### Switch Statement

The switch statement is used to handle different actions that the user can perform in the application. In this project, it is employed to determine which action to take based on the option clicked by the user. For example, adding a new grade, calculating the average, or viewing the pass/fail status.

```javascript
// Example of using the switch statement
switch (action) {
    case "Add Student":
        // Code for adding a new student
        break;
    case "calculateAverage":
        // Code for calculating the student's average
        break;
    case "Check State":
        // Code to determine pass/fail status
        break;
    case "Add Qualification":
        // Code for adding a new qualification
        break;
    default:
        // Code to handle unspecified cases
        break;
}
```

You can see where I used switch here: [Code](https://github.com/OrnellaGrigolato/StakUp-School-Qualifications/blob/de95f9e27d501368cd159eb4b26b4729bf160d2d/index.js#L65)

### Try-Catch-Finally

The try-catch-finally is used to handle potential errors or exceptions that may occur during program execution. In this project, it is implemented to ensure that operations are performed correctly and to handle cases of incorrect data input.

```javascript
// Example of using the Try-Catch-Finally statement in "Add Student" case
try {
    if(/\d/g.test(nameOfStudentEntered)){
        throw new Error("A valid student name doesn't include numbers");
    } else{
        addStudent(nameOfStudentEntered)
    }
} catch (error) {
    show(error)
} finally {
    // Code that runs regardless of whether there was an error or not
}
```
You can see where I used Try-Catch-Finally here: [Code](https://github.com/OrnellaGrigolato/StakUp-School-Qualifications/blob/de95f9e27d501368cd159eb4b26b4729bf160d2d/index.js#L89)

### Classes

Classes are templates for creating objects with associated properties and methods. In this project, a class is used to represent students, with properties such as name, list of grades, etc. In addition, a "school" class is created from which the "StackUp" school is created. Then students are created and added to the school.


```javascript
class Student {
    constructor(name) {
        this.name = name;
        this.grades = [];
    }

    addGrade(grade) {
        this.grades.push(grade);
    }

    // Other methods of the class
}
```

You can see where I used classes here: [Code](https://github.com/OrnellaGrigolato/StakUp-School-Qualifications/blob/de95f9e27d501368cd159eb4b26b4729bf160d2d/index.js#L2)

