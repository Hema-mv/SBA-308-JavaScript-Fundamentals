# SBA-308-JavaScript-Fundamentals


This Project Process Learner submision data for a course and calculates average scores and individual assignment scores.

Obectives are:

Objectives
Employ basic JavaScript syntax accurately.
Implement control flow structures such as conditionals and loops effectively.
Use arrays and objects to organize and manage data.
Develop functions to create reusable code.
Utilize loops and iteration to navigate through data collections.
Implement error handling to manage potential code failures gracefully.

Input parameters 


A CourseInfo object, which looks like this:
{
  "id": number,
  "name": string,
}

An AssignmentGroup object, which looks like this:
{
  "id": number,
  "name": string,
   the ID of the course the assignment group belongs to
  "course_id": number,
   the percentage weight of the entire assignment group
  "group_weight": number,
  "assignments": [AssignmentInfo],
}

Each AssignmentInfo object within the assignments array looks like this:
{
  "id": number,
  "name": string,
   the due date for the assignment
  "due_at": Date string,
   the maximum points possible for the assignment
  "points_possible": number,
}

An array of LearnerSubmission objects, which each look like this:
{
    "learner_id": number,
    "assignment_id": number,
    "submission": {
      "submitted_at": Date string,
      "score": number
    }
}

Transform Data:

 the ID of the learner for which this data has been collected
    "id": number,
     the learner’s total, weighted average, in which assignments
     with more points_possible should be counted for more
     e.g. a learner with 50/100 on one assignment and 190/200 on another
     would have a weighted average score of 240/300 = 80%.
    "avg": number,
     each assignment should have a key with its ID,
     and the value associated with it should be the percentage that
     the learner scored on the assignment (submission.score / points_possible)
    <assignment_id>: number,
     if an assignment is not yet due, it should not be included in either
     the average or the keyed dictionary of scores

Error Handling: 
    1. Late submissions
    2. check whether points possible is number
    3. Course Id exits

Example Output:

[
  { id: 125, avg: 0.985, 1: 0.94, 2: 1.0 },
  { id: 132, avg: 0.82, 1: 0.78, 2: 0.833 }
]

Function :-

getLearnerData() that accepts these values as parameters, in the order listed:
 (CourseInfo, AssignmentGroup, [LearnerSubmission]), and returns the formatted result