import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { colRef } from "../firebase/firebase";
import { addDoc } from "firebase/firestore";
import { v4 as uuid } from "uuid";

// Logic for user to create a question
// with two answers.
// Data is being pushed to firebase firestore.

export default function AddQuestion() {
  const questionRef = useRef();
  const answerARef = useRef();
  const answerBRef = useRef();
  const navigate = useNavigate();

  const addQuestionHandler = (e) => {
    e.preventDefault();
    const unique_id = uuid();

    addDoc(colRef, {
      question: questionRef.current.value,
      ansA: answerARef.current.value,
      ansB: answerBRef.current.value,
      id: unique_id,
    }).then(() => {
      questionRef.current.value = "";
      answerARef.current.value = "";
      answerBRef.current.value = "";
      alert("Dodano pytanie");
    });
  };

  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <div className="text-center">
      <Button
        className="mt-3 mb-4"
        variant="secondary"
        onClick={navigateHandler}
      >
        Home
      </Button>
      <Form
        className="text-center"
        id="form-reset"
        onSubmit={addQuestionHandler}
      >
        <div className="form-group text-white m-2">
          <label htmlFor="textArea">Wprowadź nowe pytanie</label>
          <textarea
            className="form-control"
            ref={questionRef}
            name="question"
            id="textArea"
            rows="6"
          ></textarea>
        </div>
        <div className="form-group text-white m-2">
          <label htmlFor="answerArea">Odpowiedź A</label>
          <textarea
            className="form-control"
            ref={answerARef}
            name="answerA"
            id="answerArea"
            rows="2"
          ></textarea>
        </div>
        <div className="form-group text-white m-2">
          <label htmlFor="answerArea">Odpowiedź B</label>
          <textarea
            className="form-control"
            ref={answerBRef}
            name="answerB"
            id="answerArea"
            rows="2"
          ></textarea>
        </div>
        <Button type="submit" className="mt-3 mb-2">
          Zatwierdź
        </Button>
      </Form>
    </div>
  );
}
