import React, { useState } from "react";
import { colRef } from "../firebase/firebase";
import { getDocs } from "firebase/firestore";
import { Button, Alert } from "react-bootstrap";

export default function Game() {
  const [questions, setQuestions] = useState([]);
  const [start, setStart] = useState(true);
  const [random, setRandom] = useState("");
  const [endGame, setEndGame] = useState(false);
  const [showDivs, setShowDivs] = useState(false);

  function getQuestions(e) {
    e.preventDefault();
    if (questions.length !== 0) {
      return;
    }
    getDocs(colRef).then((snapshot) => {
      if (snapshot.docs.length > 0) {
        snapshot.docs.forEach((doc) => {
          setQuestions((prev) => {
            return [...prev, doc.data()];
          });
        });
      }
    });
    setStart(false);
  }
  function randomQuestion() {
    if (questions.length > 0) {
      let random = questions[Math.floor(Math.random() * questions.length)];
      setRandom(random);
      let newQuestions = questions.filter((el) => el.id !== random.id);
      setQuestions(newQuestions);
      setShowDivs(true);
    } else {
      setEndGame(true);
    }
  }

  return (
    <div>
      {start && (
        <Button className="w-100" variant="success" onClick={getQuestions}>
          Start
        </Button>
      )}
      {!start && (
        <Button className="w-100" variant="success" onClick={randomQuestion}>
          Losuj Pytanie
        </Button>
      )}
      {endGame && (
        <Alert className="mt-5" variant="danger">
          Koniec pytań
        </Alert>
      )}
      {!endGame && showDivs && (
        <div className="mt-5 p-3 bg-dark text-white border border-primary rounded">
          <span className="d-block pb-3 mb-3 border-bottom border-primary">
            PYTANIE
          </span>
          {random.question}
        </div>
      )}
      {!endGame && showDivs && (
        <div className="mt-3 p-3 bg-dark text-white border border-primary rounded">
          <span className="d-block pb-3 mb-3 border-bottom border-primary">
            ODPOWIEDZ A
          </span>
          {random.ansA}
        </div>
      )}
      {!endGame && showDivs && (
        <div className="mt-3 p-3 bg-dark text-white border border-primary rounded">
          <span className="d-block pb-3 mb-3 border-bottom border-primary">
            ODPOWIEDZ B
          </span>
          {random.ansB}
        </div>
      )}
    </div>
  );
}

// {questions.map((el, index) => {
//   return <div key={index}>{el.question}</div>;
// })}
