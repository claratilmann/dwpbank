import PropTypes from "prop-types";
import "../css/card.css";

const Card = ({ security }) => {
  return (
    <div className="securitiesCard">
      <h1>{security.name}</h1>
      <p>Typ: {security.typ}</p>
      <p>Risiko: {security.anlagerisiko}</p>
      <button className="cardButton">Mehr erfahren</button>
    </div>
  );
};

Card.propTypes = {
  security: PropTypes.shape({
    name: PropTypes.string.isRequired,
    typ: PropTypes.string,
    anlagerisiko: PropTypes.string,
  }).isRequired,
};

export default Card;
