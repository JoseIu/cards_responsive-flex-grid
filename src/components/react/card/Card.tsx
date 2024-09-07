import "./card.css";
type CardProps = {
  title: string;
  description: string;
  image: string;
};

export const Card = ({ title, description, image }: CardProps) => {
  return (
    <article className="card">
      <img className="card__image" src={image} alt={title} />
      <div className="card__content">
        <h2 className="card__title">{title}</h2>
        <p className="card__description">{description}</p>

        <a href="#" className="card__btn">
          Learn More
        </a>
      </div>
    </article>
  );
};
