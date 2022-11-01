import React, { useState } from "react";
import { Button, Card, Alert } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogout() {
    setError("");

    try {
      await logout();
      navigate("/login");
    } catch {
      setError("failed to log out");
    }
  }

  function addQuestionBtn() {
    navigate("/add-question");
  }

  function startGameBtn() {
    navigate("/start-game");
  }

  return (
    <>
      <Card>
        <Card.Body className="text-center d-flex flex-column shadow-lg">
          <Button
            className="mx-auto mb-4"
            variant="success"
            onClick={startGameBtn}
          >
            Start Game
          </Button>
          <Button
            className="mx-auto mb-4"
            variant="primary"
            onClick={addQuestionBtn}
          >
            Dodaj pytanie
          </Button>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Button variant="link" onClick={handleLogout}>
            Log Out
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}
