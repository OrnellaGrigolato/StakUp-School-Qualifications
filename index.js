const studentsList = document.getElementById("studentsList");
class Student {
  constructor(id, firstName, lastName, qualifications) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.qualifications = qualifications;
  }
}

class School {
  constructor() {
    this.students = [];
  }

  addStudent(student) {
    this.students.push(student);
  }

  displayStudents() {
    studentsList.innerHTML = "";
    this.students.forEach((student) => {
      studentsList.innerHTML += `<li><h4>${
        student.firstName + " " + student.lastName
      }</h4><p>Qualifications: ${student.qualifications?.map((e) => {
        return e;
      })}</p></li>`;
    });
  }
}

const stackUpSchool = new School();

const student1 = new Student(1, "Olivia", "Brown", [9, 6, 8]);
const student2 = new Student(2, "William", "Wilson", [1, 4, 2]);
const student3 = new Student(3, "Mia", "Jackson", [7, 4, 9]);
const student4 = new Student(4, "Harry", "Jones", [6, 8, 4]);
const student5 = new Student(5, "Ava", "Taylor", [8, 7, 7]);
stackUpSchool.addStudent(student1);
stackUpSchool.addStudent(student2);
stackUpSchool.addStudent(student3);
stackUpSchool.addStudent(student4);
stackUpSchool.addStudent(student5);

stackUpSchool.displayStudents();

const allActionButtons = document.querySelectorAll("button");
const selectInput = document.getElementById("studentSelect");

selectInput.addEventListener("change", function () {
  document.getElementById("statusResult").innerHTML = "";
  document.getElementById("averageResult").innerHTML = "";
  document.getElementById("addStudentForm").value = "";
  document.getElementById("gradeValue").value = "";
});

allActionButtons.forEach((e) => {
  e.addEventListener("click", function () {
    let studentSelected = document
      .getElementById("studentSelect")
      .value.split(" ")[0];
    let studentObj = stackUpSchool.students.find(
      (e) => e.firstName === studentSelected
    );
    switch (e.textContent.trim()) {
      case "Check State":
        try {
          if (studentObj.qualifications.length === 0) {
            throw new Error("This student doesn't have qualifications");
          } else {
            if (
              eval(studentObj.qualifications.join("+")) /
                studentObj.qualifications.length > //Calculate the average
              6
            ) {
              document.getElementById("statusResult").innerHTML = "Approved";
            } else {
              document.getElementById("statusResult").innerHTML = "Failed";
            }
          }
        } catch (error) {
          document.getElementById("statusResult").innerHTML = error;
        } finally {
          console.log("We have tried to determinate the student's state");
        }

        break;
      case "Add student":
        try {
          if (/\d/g.test(document.getElementById("addStudentForm").value)) {
            throw new Error("A valid student name doesn't include numbers");
          } else if (
            document.getElementById("addStudentForm").value.split(" ").length !=
            2
          ) {
            throw new Error(
              "Enter a valid student name (only first name and last name)"
            );
          } else {
            const newStudentFullName = document
              .getElementById("addStudentForm")
              .value.split(" ");
            stackUpSchool.addStudent(
              new Student(
                Math.random(),
                newStudentFullName[0],
                newStudentFullName[1],
                []
              )
            );
            document.getElementById("addStudentForm").value = "";

            //Add new student to select input
            const option = document.createElement("option");
            option.value = newStudentFullName[0] + " " + newStudentFullName[1];
            option.text = newStudentFullName[0] + " " + newStudentFullName[1];
            selectInput.add(option);
            stackUpSchool.displayStudents();
          }
        } catch (error) {
          document.getElementById("addStudentError").innerHTML = error;
        } finally {
          console.log("We have tried to add to the student");
        }

        break;
      case "Add Qualification":
        try {
          if (parseInt(document.getElementById("gradeValue").value) < 0) {
            throw new Error("The qualification can't be less than 0");
          } else if (
            parseInt(document.getElementById("gradeValue").value) > 10
          ) {
            throw new Error("The qualification can't be greater than 10");
          } else if (!document.getElementById("gradeValue").value) {
            throw new Error("You have to enter a qualification");
          } else {
            const newQualification =
              document.getElementById("gradeValue").value;
            studentObj.qualifications.push(newQualification);
            stackUpSchool.displayStudents();
            document.getElementById("gradeValue").innerHTML = "";
            document.getElementById("qualificationError").innerHTML = "";
          }
        } catch (error) {
          document.getElementById("qualificationError").innerHTML = error;
        } finally {
          console.log("We have tried to add to the qualification");
        }

        break;
      case "Calculate Average":
        try {
          if (studentObj.qualifications.length === 0) {
            throw new Error("This student doesn't have qualifications");
          } else {
            document.getElementById("averageResult").innerHTML = Math.round(
              eval(studentObj.qualifications.join("+")) /
                studentObj.qualifications.length
            );
          }
        } catch (error) {
          document.getElementById("averageResult").innerHTML = error;
        } finally {
          console.log("We have tried to calculate the average");
        }

        break;
      default:
        console.log("Something was wrong");
    }
  });
});
