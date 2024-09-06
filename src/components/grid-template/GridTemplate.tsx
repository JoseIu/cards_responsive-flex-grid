import { useState } from "react";
import type { CardInterface } from "../../interfaces/Card.interface";

type GridTemplateProps = {
  initalCards: CardInterface[];
};

export const GridTemplate = ({ initalCards }: GridTemplateProps) => {
  const [cards, setCards] = useState<CardInterface[]>(initalCards);
  return (
    <>
      Hola
      {/* {cards.map((card) => (
        <Card
          key={card.title}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))} */}
    </>
  );
};
