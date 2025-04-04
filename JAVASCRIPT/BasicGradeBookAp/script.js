/* Step 1 A teacher has finished grading their students' tests and needs your help to calculate the average score for the class */

function getAverage(scores) {
    let sum = 0;
    // a better iteration than traditional for loop
    for (const score of scores) {
      sum += score;
    }
  /* a longer version of iteration
  for (let i = 0; i < scores.length; i++) {
      sum += scores[i];
    }
   */
     return sum / scores.length;
    }
    
    console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
    console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));

//Step 2 Now the teacher needs your help converting the student score to a letter grade.
    function getGrade(score) {
      if (score === 100) {
        return "A++";
      } else if (score > 90) {
        return "A"; //score > 89
      } else if (score > 80) {
        return "B";
      } else if (score > 70) {
        return "C";
      } else if (score > 60) {
        return "D";
      } else {
        return "F";
      }
      }
      
      console.log(getGrade(96));
      console.log(getGrade(82));
      console.log(getGrade(56));

//Step 3 The teacher is really happy with the program you have created so far. But now they want to have an easy way to check if a student has a passing grade. A passing grade is anything that is not an "F".
      function hasPassingGrade(score) {
        //shorter version
        return getGrade(score) !== "F";
        /* Longer version
        if (getGrade(score) !== "F"){
          return true;
        } else 
        if (getGrade(score) === "F"){
          return false
        }
        */
        
     }
     
     
     console.log(hasPassingGrade(100));
     console.log(hasPassingGrade(53));
     console.log(hasPassingGrade(87));

// Step 4 Now that the teacher has all of the information they need, they want to be able to message the student with the results.   
     //Long code protocol for step 4 done by me
     function studentMsg(totalScores, studentScore) {
      if ( hasPassingGrade(studentScore)){
       return "Class average: " + getAverage(totalScores) + ". " + "Your grade: " + getGrade(studentScore) + ". " + "You passed the course."
      } else if (getGrade(studentScore) === "F") {
        return "Class average: " + getAverage(totalScores) + ". " + "Your grade: " + getGrade(studentScore) + ". " + "You failed the course."
      }
      }
      console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
      
      //short code protocol done by AI
      function studentMsg(totalScores, studentScore) {
        let passFail;
        if (hasPassingGrade(studentScore)){
          passFail = "You passed the course.";
        } else {
          passFail = "You failed the course."
        }
        return "Class average: " + getAverage(totalScores) + ". " + "Your grade: " + getGrade(studentScore) + ". " + passFail;
      }