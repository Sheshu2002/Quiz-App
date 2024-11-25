import React from "react";
import styles from "../Quiz/Real.module.css";
import { useState } from "react";

function Real() {
  const questions = [
    {
      question: "What is the Capital of France?",
      options: [
        { answer: "Paris", isCorrect: true },
        { answer: "London", isCorrect: false },
        { answer: "Berlin", isCorrect: false },
        { answer: "Rome", isCorrect: false },
      ],
    },
    {
      question: "What is the Largest Planet in our Solar System?",
      options: [
        { answer: "Moon", isCorrect: false },
        { answer: "Mars", isCorrect: false },
        { answer: "Jupiter", isCorrect: true },
        { answer: "Saturn", isCorrect: false },
      ],
    },
    {
      question: "What is the Smallest Planet in our Solar System?",
      options: [
        { answer: "Earth", isCorrect: false },
        { answer: "Mercury", isCorrect: true },
        { answer: "Venus", isCorrect: false },
        { answer: "Saturn", isCorrect: false },
      ],
    },
    {
      question: "Who is Prime Minister of India",
      options: [
        { answer: "Virat Kohli", isCorrect: false },
        { answer: "Rahul Gandhi", isCorrect: false },
        { answer: "Narendra Modi", isCorrect: true },
        { answer: "Manmohan Singh", isCorrect: false },
      ],
    },
    {
      question: "What is the Capital of India",
      options: [
        { answer: "New Delhi", isCorrect: true },
        { answer: "Mumbai", isCorrect: false },
        { answer: "Old Delhi", isCorrect: false },
        { answer: "Chennai", isCorrect: false },
      ],
    },
  ];
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedone, setSelectedone] = useState(null);
  const [score, setScore] = useState(0);
  const [showscore, setShowscore] = useState(false);

  const handleAns = (index, isCorrect) => {
    setAnswered(true);
    setSelectedone(index);
    
    if (isCorrect) {
      setScore(score + 1);
    }
  };



  const handleQues = () => {
    setAnswered(false);
    setSelectedone(null);
    const nextQues = current + 1;
    if (nextQues < questions.length) {
      setCurrent(nextQues);
    } else {
      setShowscore(true);
    }
  };
  return (
    <>
      {showscore ? (
          <div className={styles.fscore} >
           <h1> You Scored {score} out of {questions.length}</h1>
          </div>
        ) : 
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.app}>
            <h1>Quiz App</h1>
          </div>
          <div className={styles.questions}>
            <h3>{questions[current].question}</h3>
          </div>
          <div className={styles.options}>
            {questions[current].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAns(index, option.isCorrect)}
                style={
                  answered
                  ? option.isCorrect
                  ? {
                    backgroundColor: "#90EE90",
                          border: "2px solid green",
                          color: "black",
                        }
                      : selectedone == index
                      ? {
                          backgroundColor: "#FF9C73",
                          border: "2px solid red",
                          color: "black",
                        }
                      : { color: "black" }
                      : { color: "black" }
                    }
                    disabled={answered}
                    >
                {option.answer}
              </button>
            ))}
          </div>
          <div className={styles.next}>
            <button
              onClick={handleQues}
              disabled={!answered}
              style={!answered ? { opacity: 0.5, cursor: "not-allowed" } : {}}
              >
              Next
            </button>
          </div>
          <div className={styles.score}>
            <p>
              Question {current + 1}/{questions.length}
            </p>
          </div>
        </div>
      </div>
      }
    </>
  );
}

export default Real;
