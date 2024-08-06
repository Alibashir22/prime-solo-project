CREATE TABLE IF NOT EXISTS "user" (
	"id" bigint GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
	"name" text NOT NULL,
	"username" text NOT NULL UNIQUE,
	"password" text NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "exercise" (
	"id" bigint GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
	"name" text NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "workout" (
	"id" bigint GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
	"user_id" bigint NOT NULL,
	"workout_date" date NOT NULL,
	"notes" text NOT NULL,
	PRIMARY KEY ("id")
);

CREATE TABLE IF NOT EXISTS "workout_exercise" (
	"id" bigint GENERATED ALWAYS AS IDENTITY NOT NULL UNIQUE,
	"exercise_id" bigint NOT NULL,
	"workout_id" bigint NOT NULL,
	PRIMARY KEY ("id")
);



ALTER TABLE "workout" ADD CONSTRAINT "workout_fk1" FOREIGN KEY ("user_id") REFERENCES "user"("id");
ALTER TABLE "workout_exercise" ADD CONSTRAINT "workout_exercise_fk1" FOREIGN KEY ("exercise_id") REFERENCES "exercise"("id");

ALTER TABLE "workout_exercise" ADD CONSTRAINT "workout_exercise_fk2" FOREIGN KEY ("workout_id") REFERENCES "workout"("id");