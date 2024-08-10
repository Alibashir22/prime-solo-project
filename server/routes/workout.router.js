const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 get all workout history for user
 */
router.get('/',rejectUnauthenticated, (req, res) => {
  const query=`SELECT
    w.id AS workout_id,
    w.workout_date,
    w.notes,
    STRING_AGG(e.name, ', ') AS exercises
FROM
    workout w
JOIN
    workout_exercise we ON w.id = we.workout_id
JOIN
    exercise e ON we.exercise_id = e.id
WHERE
    w.user_id = $1
GROUP BY
    w.id, w.workout_date, w.notes
ORDER BY
    w.id;`
    pool.query(query,[req.user.id]).then((result)=>(
      res.send(result.rows)
    )).catch((error)=>{
      console.log(error)
      res.sendStatus(500)
    })
});

/**
 create a new workout
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
