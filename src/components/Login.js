import React, { useRef, useState } from "react";
import { Card, Button, Form, Alert } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState();
  const [loading, setLoading] = useState();
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/");
    } catch {
      setError("Failed to log in");
      setLoading(false);
    }
  }
  function newGame() {
    navigate("/start-game");
  }

  return (
    <>
      <Card className="mx-3 mt-3 text-center rounded-0 rounded-top">
        <Card.Body>
          <p className="fs-4 fw-bold">
            Zaloguj się jeśli chcesz dodać pytania lub zacznij nową grę!
          </p>
          <Button variant="primary" onClick={newGame}>
            Nowa Gra
          </Button>
        </Card.Body>
      </Card>
      <Card className="mx-3 mb-3 rounded-0 rounded-bottom">
        <Card.Body>
          <h2 className="text-center mb-4">Zaloguj się</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <Button disabled={loading} className="w-100 mt-3" type="submit">
              Zaloguj
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="text-white w-100 text-center mt-2 mb-2">
        {`Stwórz nowe konto! `}
        <Link to="/signup">Sign Up</Link>
      </div>
    </>
  );
}
