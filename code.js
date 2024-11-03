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
    { id: 3, name: "Code the World", due_at: "3156-11-15", points_possible: 500 },
    { id: 4, name: "Code the World", due_at: "2024-01-15", points_possible: 500 }]
};

// The provided learner submission data .
const LearnerSubmissions = [
  { learner_id: 125, assignment_id: 1, submission: { submitted_at: "2023-01-25", score: 47 } },
  { learner_id: 125, assignment_id: 2, submission: { submitted_at: "2023-02-12", score: 150 } },
  { learner_id: 125, assignment_id: 3, submission: { submitted_at: "2023-01-25", score: 400 } },
  { learner_id: 132, assignment_id: 1, submission: { submitted_at: "2023-01-24", score: 39 } },
  { learner_id: 132, assignment_id: 2, submission: { submitted_at: "2023-03-07", score: 140 } }
  , { learner_id: 200, assignment_id: 1, submission: { submitted_at: "2023-01-10", score: 25 } },
  { learner_id: 200, assignment_id: 4, submission: { submitted_at: "2024-02-10", score: 140 } }
];

function getLearnerData(course, assgrp, submissions) {
  try {
    let result = [];
    const newarr = {};
    const currentDate = new Date();

    let Filteredassignment = {}


    if (assgrp.course_id !== course.id) {
      throw new Error("AssignmentGroup does not belong to the specified course.");
    }

    submissions.forEach((subarr) => {
      Filteredassignment = assgrp.assignments.find(a => a.id === subarr.assignment_id);
      let score = 0;

      if (Date.parse(Filteredassignment.due_at) > currentDate)
        return;

      const learnerId = subarr.learner_id;
      //const score = subarr.submission.submitted_at > Filteredassignment.due_at ? subarr.submission.score * 0.9 : subarr.submission.score;
      if (subarr.submission.submitted_at > Filteredassignment.due_at) {
        score = subarr.submission.score * 0.9;
      }
      else {
        score = subarr.submission.score;
      }

      const pointsPossible = Filteredassignment.points_possible;

      if (!newarr[learnerId]) {
        newarr[learnerId] = { id: learnerId, totalScore: 0, totalPoints: 0, assignments: {} };
      }
      newarr[learnerId].totalScore += score;
      newarr[learnerId].totalPoints += pointsPossible;
      newarr[learnerId].assignments[subarr.assignment_id] = (score / pointsPossible).toFixed(3);


    });
       result = Object.values(newarr).map(arr => {
       const avg = (arr.totalScore / arr.totalPoints).toFixed(3);
       return { id: arr.id, avg: avg, ...arr.assignments };
    }
    );
    return result;
  } catch (error) {
    console.error("An error occurred:", error.message);
   // console.error(error.stack); 
    return [];
  }
}
const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
console.log(result);
