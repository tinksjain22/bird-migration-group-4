-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "Bird_names" (
    "BirdID" int   NOT NULL,
    "Species" string   NOT NULL,
    CONSTRAINT "pk_Bird_names" PRIMARY KEY (
        "BirdID"
     )
);

CREATE TABLE "Bird_occurence" (
    "OccurenceID" string   NOT NULL,
    "BirdID" int   NOT NULL,
    "EventDate" DATE   NOT NULL,
    "Latitude" string   NOT NULL,
    "Longitude" string   NOT NULL,
    CONSTRAINT "pk_Bird_occurence" PRIMARY KEY (
        "OccurenceID"
     )
);

CREATE TABLE "Bird_status" (
    "BirdID" int   NOT NULL,
    "Species" string   NOT NULL,
    "endangered_status" string   NOT NULL
);

ALTER TABLE "Bird_occurence" ADD CONSTRAINT "fk_Bird_occurence_BirdID" FOREIGN KEY("BirdID")
REFERENCES "Bird_names" ("BirdID");

ALTER TABLE "Bird_status" ADD CONSTRAINT "fk_Bird_status_BirdID_Species" FOREIGN KEY("BirdID", "Species")
REFERENCES "Bird_names" ("BirdID", "Species");

CREATE INDEX "idx_Bird_names_Species"
ON "Bird_names" ("Species");

