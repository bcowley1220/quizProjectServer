let express = require("express");
let router = express.Router();
let pool = require("../connection/connection"); // everyone get in line when making api requests

// function selectAllQuestions(req, res) {
//   pool.query("select * from questions").then(result => {
//     res.send(result.rows);
//   });
// }
// router.get("/questions", selectAllQuestions);

// router.post("/questions", (req, res) => {
//   pool
//     .query(
//       "insert into questions (question_name, choice_1, choice_2, choice_3, choice_4, answer) values ($1::text, $2::text, $3::text, $4::text, $5::text, $6::text)",
//       [
//         req.body.question_name,
//         req.body.choice_1,
//         req.body.choice_2,
//         req.body.choice_3,
//         req.body.choice_4,
//         req.body.answer
//       ]
//     )
//     .then(() => {
//       selectAllQuestions(req, res);
//     });
// });

// // "id": 1,
// //         "question_name": "Which fictional city is the home of Batman?",
// //         "choice_1": "Newport City",
// //         "choice_2": "Gothan",
// //         "choice_3": "Gotham",
// //         "choice_4": "Detroit",
// //         "answer": "Gotham"

// //ADDED PUT REQUEST
// router.put("/questions/:id", (req, res) => {
//   res.send("PUT works");
// });

// //ADDED DELETE REQUEST
// router.delete("/questions/:id", (req, res) => {
//   res.send("DELETE works");
// });

module.exports = router;
