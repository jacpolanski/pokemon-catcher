import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { usePoke } from "./context/pokeContext";
import uniqid from "uniqid";

function MainPage() {
  const { data, isLoading, setIsLoading, trainerName } = usePoke();
  const [update, setUpdate] = useState(0);
  const [trainer, setTrainer] = useState();

  useEffect(() => {
    setIsLoading(true);
    if (data.length < 5) {
      setUpdate((prevState) => prevState + 1);
    } else {
      setIsLoading(false);
    }
  }, [update, data, setIsLoading]);

  const catchPokemons = (pokemonData, catchProbability) =>
    pokemonData.filter(() => Math.random() < catchProbability);

  const handleCatch = () => {
    let catchProbability = 0.5;
    setTrainer({
      nickname: trainerName,
      pokemons: catchPokemons(data, catchProbability),
    });
  };

  useEffect(() => {
    trainer && console.log(trainer);
  }, [trainer]);

  return (
    <>
      <Card className="main mx-auto col-lg-9 col-12 p-1 p-md-4 justify-content-center align-items-center position-relative">
        <Card.Img
          variant="top"
          src="./ash.png"
          className="ash d-none d-md-block"
        />
        <Card.Body className="main-body text-center col-12">
          <Card.Title className="main-title">
            Hello {trainerName}, look...
          </Card.Title>
          <Card.Text className="my-3 main-text">
            There they are!!! Try to catch&apos;em all. Hurry up!!
          </Card.Text>
          <div className="d-flex justify-content-center align-items-center flex-wrap flex-lg-nowrap">
            {!isLoading ? (
              data.map((pokemon) => (
                <Card key={uniqid()} className="pokeCard">
                  <Card.Img
                    variant="top"
                    src={pokemon.artwork}
                    className="pokeCard-image"
                  />
                  <Card.Body>
                    <div className="text-center">
                      {pokemon.name.toUpperCase().replace("-", " ")}
                    </div>
                  </Card.Body>
                </Card>
              ))
            ) : (
              <p>Loading...</p>
            )}
          </div>
          <Button className="m-3 main-button" onClick={handleCatch}>
            Catch&apos;em!
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

export default MainPage;
