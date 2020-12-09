CREATE DATABASE IF NOT EXISTS abracaquiz;

USE abracaquiz;


DROP TABLE IF EXISTS question_pool;
CREATE TABLE question_pool (
  questionID INT(3) ZEROFILL AUTO_INCREMENT NOT NULL,
  sprint INT(2) NOT NULL,
  question VARCHAR(256) NOT NULL,
  correctAnswer VARCHAR(256) NOT NULL,
  incorrect1 VARCHAR(256) NOT NULL DEFAULT "",
  incorrect2 VARCHAR(256) NOT NULL DEFAULT "",
  incorrect3 VARCHAR(256) NOT NULL DEFAULT "",
  incorrect4 VARCHAR(256) NOT NULL DEFAULT "",
  CONSTRAINT PRIMARY KEY (questionID)
);

INSERT INTO question_pool (sprint, question, correctAnswer, incorrect1, incorrect2, incorrect3) VALUES
    (1, 'Who was the best character in Game of Thrones?', 'Tyrion Lannister', 'Daenerys Targaryen', 'Jon Snow', 'Arya Stark'),
    (1, 'How many licks does it take to get to the center of a Tootsie Pop?', 3, 4, 2, 1),
    (2, 'Which way should you go to get to the North Pole?', 'North', 'South', 'East', 'West'),
    (2, 'What is something meant to be hit with a hammer?', 'Nail', 'Big Toe', 'Vase', 'Grass'),
    (3, 'What is the best smell to wake up to in the morning?', 'Bacon Frying', 'Fresh Cut Grass', 'Coffee Brewing', 'Matter of Opinion');