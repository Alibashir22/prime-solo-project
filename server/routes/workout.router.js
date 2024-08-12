const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const pool = require('../modules/pool');
const router = express.Router();

/**
 get all workout history for user
 */
router.get('/', rejectUnauthenticated, (req, res) => {
  const query = `SELECT
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
  pool.query(query, [req.user.id]).then((result) => (
    res.send(result.rows)
  )).catch((error) => {
    console.log(error)
    res.sendStatus(500)
  })
});

/**
 create a new workout
 */
router.post('/', (req, res) => {
  // when creating a workout. we shall Receive exercises id's from frontend
  const query = `WITH new_workout AS (
    INSERT INTO "workout" ("user_id", "workout_date", "notes")
    VALUES ($1, $2, $3)
    RETURNING "id" AS workout_id
)
INSERT INTO "workout_exercise" ("exercise_id", "workout_id")
SELECT exercise_id::bigint, workout_id
FROM new_workout, UNNEST($4::bigint[]) AS exercise_id;
`
  pool.query(query, [req.user.id, req.body.workout_date, req.body.notes,req.body.exercises_id]).then(() => res.sendStatus(200)).catch((error) =>{ console.log(error); res.sendStatus(500)})
});

module.exports = router;
