import { useState } from "react";
import type { CardInterface } from "../../../interfaces/Card.interface";
import { Card } from "../card/Card";
import "./gridTemplate.css";

type GridTemplateProps = {
  initalCards: CardInterface[];
};

export const GridTemplate = ({ initalCards }: GridTemplateProps) => {
  const [cards] = useState<CardInterface[]>(initalCards);
  const [search, setSearch] = useState("");
  const [gridValue, setGridValue] = useState(0);
  const cardsClass = gridValue === 0 ? "cards--fill" : "cards--fit";

  const cardsFiltered = filterCards(cards, search);

  return (
    <>
      <div className="filters">
        <input
          className="search"
          type="search"
          placeholder="Buscar plato..."
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <div className="filters__btns">
          <button
            className={`btn ${gridValue === 0 ? "btn--active" : ""}`}
            onClick={() => setGridValue(0)}
          >
            auto-fill
          </button>
          <button
            className={`btn ${gridValue === 1 ? "btn--active" : ""}`}
            onClick={() => setGridValue(1)}
          >
            auto-filt
          </button>
        </div>
      </div>
      <section className={`cards ${cardsClass}`}>
        {!cardsFiltered.length ? (
          <p>No se encontraron resultado.....</p>
        ) : (
          cardsFiltered.map((card) => (
            <Card
              key={card.title}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))
        )}
      </section>
    </>
  );
};

const filterCards = (cards: CardInterface[], search: string) => {
  if (!search) return [...cards];

  const searchLowerCase = search.toLowerCase();

  return cards.filter((card) =>
    card.title.toLowerCase().startsWith(searchLowerCase),
  );
};
