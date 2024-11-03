// The provided course information.
const CourseInfo = {
  id: 451,
  name: "Introduction to JavaScript"
};
// The provided assignment group.
const AssignmentGroup =
{
  id: 12345, name: "Fundamentals of JavaScript", course_id: 451, group_weight: 25, assignments: [
    { id: 1, name: "Declare a Variable", due_at: "2023-01-25", points_possible: 50 },
    { id: 2, name: "Write a Function", due_at: "2023-02-27", points_possible: 150 },
    { id: 3, name: "Code the World", due_at: "3156-11-15", points_possible: 500 }]
};

// The provided learner submission data.
const LearnerSubmissions = [
  { learner_id: 125, assignment_id: 1, submission: { submitted_at: "2023-01-25", score: 47 } },
  { learner_id: 125, assignment_id: 2, submission: { submitted_at: "2023-02-12", score: 150 } },
  { learner_id: 125, assignment_id: 3, submission: { submitted_at: "2023-01-25", score: 400 } },
  { learner_id: 132, assignment_id: 1, submission: { submitted_at: "2023-01-24", score: 39 } },
  {
    learner_id: 132, assignment_id: 2, submission: { submitted_at: "2023-03-07", score: 140 }
  }
];

function getLearnerData(course, assgrp, submissions) {
  let result = [];
  const newarr = {};
  const currentDate = new Date();
  let Filteredassignment={}
 
  submissions.forEach((subarr) => {
     Filteredassignment = assgrp.assignments.find(a => a.id === subarr.assignment_id );

     //if (!Filteredassignment) return result;
    //  console.log(Date.parse(Filteredassignment.due_at) , currentDate)
    //  console.log(Date.parse(Filteredassignment.due_at) > currentDate)
    if(Date.parse(Filteredassignment.due_at) > currentDate)
      return;

     
    // Filteredassignments.forEach((agarr) =>
     //  {
      const learnerId = subarr.learner_id;
      const score = subarr.submission.score;
      const pointsPossible = Filteredassignment.points_possible;
 
     const finalScore = subarr.submission.submitted_at > Filteredassignment.duse_at ? score * 0.9 : score;
      if (!newarr[learnerId]) {
        newarr[learnerId] = { id: learnerId, totalScore: 0, totalPoints: 0, assignments: {} };
      }
      // console.log(newarr[learnerId].totalScore,'hk')
      //console.log(learnerId,finalScore,newarr[learnerId].totalScore,'1')
      newarr[learnerId].totalScore += finalScore;
      newarr[learnerId].totalPoints += pointsPossible;
      newarr[learnerId].assignment_id = 0//calculatePercentage(finalScore, pointsPossible);
      //console.log(learnerId,finalScore,newarr[learnerId].totalScore,'2')
      //});
      result = Object.values(newarr).map(arr => {
      
        const avg = arr.totalScore / arr.totalPoints;
        return { id: arr.id, avg: avg, ...arr.assignments };

    }
    );
  
  });

  return result;
}
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);
