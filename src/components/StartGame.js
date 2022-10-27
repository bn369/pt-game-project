import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Card, Form, Alert } from "react-bootstrap";
import Game from "./Game";

export default function StartGame() {
  const playerRef = useRef();
  const [showInput, setShowInput] = useState(false);
  const [players, setPlayers] = useState([]);
  const [playerAlert, setPlayerAlert] = useState(false);
  const [score, setScore] = useState(0);
  const navigate = useNavigate();

  const showInputHandler = () => {
    setShowInput(!showInput);
  };
  const getToHome = () => {
    navigate("/");
  };

  const addPlayerHandler = (e) => {
    if (playerRef.current.value.length === 0) {
      setPlayerAlert(true);
    } else {
      setPlayers((prevState) => [
        ...prevState,
        { name: playerRef.current.value, score: score },
      ]);
      setShowInput(!showInput);
      setPlayerAlert(false);
    }
  };

  return (
    <>
      <Card className="h-100" style={{ backgroundColor: "#181831" }}>
        <Card.Body
          style={{ maxWidth: "600px" }}
          className="text-center d-flex flex-column"
        >
          <Button
            className="w-100 mb-4"
            onClick={getToHome}
            variant="secondary"
          >
            Home
          </Button>
          <Button className="mb-4" variant="primary" onClick={showInputHandler}>
            Dodaj Graczy
          </Button>
          {playerAlert && (
            <Alert variant="danger">To pole nie może być puste</Alert>
          )}
          {showInput && (
            <Form>
              <Form.Control type="text" ref={playerRef} required />
              <Button className="mt-3 mb-3" onClick={addPlayerHandler}>
                Dodaj
              </Button>
            </Form>
          )}
          <Game />
          <div className="mt-4 overflow-auto">
            {players.map((element, index) => {
              return (
                <div
                  key={index}
                  className="d-flex flex-row justify-content-center"
                >
                  <div className="h5 text-white m-auto">{element.name}</div>
                  <div className="p-1 text-white d-flex flex-row align-items-center">
                    <Button
                      className=""
                      variant="primary"
                      onClick={() => setScore(element.score++)}
                    >
                      +
                    </Button>
                    <div className="h4 m-auto px-2">{element.score}</div>
                    <Button
                      className=""
                      variant="primary"
                      onClick={() => setScore(element.score--)}
                    >
                      -
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </Card.Body>
      </Card>
    </>
  );
}
