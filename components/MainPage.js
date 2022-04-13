import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { usePoke } from "./context/pokeContext";
import uniqid from "uniqid";

function MainPage() {
  const { data, isLoading, setIsLoading, trainerName } = usePoke();
  const [update, setUpdate] = useState(0);

  // useEffect(() => {
  //   setIsLoading(true);
  //   if (data.length < 5) {
  //     setUpdate((prevState) => prevState + 1);
  //   } else {
  //     setIsLoading(false);
  //   }
  // }, []);

  useEffect(() => {
    setIsLoading(true);
    if (data.length < 5) {
      setUpdate((prevState) => prevState + 1);
    } else {
      setIsLoading(false);
    }
  }, [update, data, setIsLoading]);

  return (
    <Card className="main col-md-9 col-12 p-4 justify-content-center align-items-center position-relative">
      <Card.Img variant="top" src="./ash.png" className="ash " />
      <Card.Body className="text-center">
        <Card.Title className="main-title">
          Hello {trainerName}, look...
        </Card.Title>
        <Card.Text className="my-3 main-text">
          There they are!!! Try to catch'em all. Fast!!
        </Card.Text>
      </Card.Body>
      <div className="d-flex flex-row justify-content-center align-items-center flex-wrap">
        {!isLoading ? (
          data.map((pokemon) => (
            <Card key={uniqid()}>
              <Card.Img
                variant="top"
                src={pokemon.artwork}
                className="pokemon"
              />
              <Card.Body>
                <Card.Text className="text-center">
                  {pokemon.name.toUpperCase().replace("-", " ")}
                </Card.Text>
              </Card.Body>
            </Card>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
      <Button className="m-3 main-button">Catch'em!</Button>
    </Card>
  );
}

export default MainPage;
