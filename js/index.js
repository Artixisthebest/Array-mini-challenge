const cohort = [
  {
    name: "Julian",
    age: "16",
    gmail: "jdawg.chapulin@gmail.com",
  },
  {
    name: "Bryan",
    age: "16",
    gmail: "bryanjeromevaliente@gmail.com",
  },
  {
    name: "Angelo",
    age: "15",
    gmail: "drsagaming@gmail.com",
  },
  {
    name: "Daniel",
    age: "16",
    gmail: "this1rand0mguytyler@gmail.com",
  },
  {
    name: "Robert",
    age: "15",
    gmail: "rvel06018@gmail.com",
  },
  {
    name: "Benji",
    age: "15",
    gmail: "Ba4750323@gmail.com",
  },
  {
    name: "Drew",
    age: "17",
    gmail: "imaayko@gmail.com",
  },
  {
    name: "Ralph",
    age: "16",
    gmail: "rlopez90062@gmail.com",
  },
  {
    name: "Mohammed",
    age: "16",
    gmail: "mohammedhossane0.0@gmail.com",
  },
  {
    name: "Henry",
    age: "16",
    gmail: "henrymtz0390@gmail.com",
  },
  {
    name: "Renzo",
    age: "17",
    gmail: "darkgalaxy735@gmail.com",
  },
  {
    name: "Jeffery",
    age: "15",
    gmail: "hernandezjeffrey2510@gmail.com",
  },
];

let greaterFilteredCohort = cohort.filter((cohort) => cohort.age > 16);
let lowerFilteredCohort = cohort.filter((cohort) => cohort.age < 16);
// console.log(greaterFilteredCohort);
// console.log(lowerFilteredCohort);

for (let i = 0; i < cohort.length; i++) {
  //   console.log(cohort[i]);
  if (cohort[i].age < 16) {
    console.log(
      cohort[i].name,
      "is less than 16! His actual age is",
      cohort[i].age
    );
  } else if (cohort[i].age > 16) {
    console.log(
      cohort[i].name,
      "is greater than 16! His actual age is",
      cohort[i].age
    );
  }
}
