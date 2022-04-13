import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { usePoke } from "./context/pokeContext";

function Login() {
  const { setOffset, setIsLogged, trainerName, setTrainerName } = usePoke();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setTrainerName(e.target.value);
  };

  const handleSubmit = (e) => {
    let minChars = 2;
    e.preventDefault();
    if (trainerName.toString().length === 0) {
      setError("Name can not be empty");
    } else if (
      trainerName.toString().length > 0 &&
      trainerName.toString().length <= minChars
    ) {
      setError(`Name should contain more than ${minChars} characters`);
    } else {
      setOffset(trainerName.length * 10);
      setIsLogged(true);
    }
  };

  return (
    <>
      <Card className="login mx-auto  p-4 col-lg-9 col-12 justify-content-center align-items-center">
        <Card.Img
          variant="top"
          src="./pikachu.svg"
          className="pikachu px-3 m-3"
        />
        <Card.Body className="text-center col-lg-9 col-12 d-flex justify-content-center align-items-between flex-column">
          <Card.Title className="login-title">Welcome to</Card.Title>
          <Card.Title className="login-title fs-4">Pokémon Cather</Card.Title>
          <Card.Text className="my-3">
            Get your own Pokédex, explore new kinds and catch them all!!
          </Card.Text>
          <Form onSubmit={(e) => handleSubmit(e)}>
            <Form.Group className="mb-3" controlId="trainerName">
              <Form.Label>Tell me your name Trainer!</Form.Label>
              <Form.Control
                type="text"
                placeholder="Ash Ketchum"
                name="trainerName"
                value={trainerName}
                onChange={(e) => handleChange(e)}
                className="w-75 mx-auto text-center"
              />
              <div className="fs-7 text-danger">{error}</div>
            </Form.Group>
            <Button type="submit" className="login-button">
              Continue
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

export default Login;
