let score = prompt("Enter Your score: ");
let grade = calculateGrade(score);

function calculateGrade(score) {
  if (score >= 70 && score <= 100) {
    alert("Your grade is  A");
  } else if (score >= 60 && score <= 69) {
    alert("Your garde is B");
  } else if (score >= 50 && score <= 59) {
    alert("Your garde is C");
  } else if (score >= 45 && score <= 49) {
    alert("Your garde is D");
  } else if (score >= 40 && score <= 45) {
    alert("Your garde is E");
  } else if (score >= 0 && score <= 39) {
    alert("Your garde is F");
  } else {
    alert("Invalid score");
  }
}
