import React from "react";
import { Link } from "react-router-dom";

function PetItems({ animal }) {
  let image =
    animal.photos.length > 0
      ? animal.photos[0].medium
      : "https://iili.io/Q4WXOF.png";

  return (
    <div className="thumb-container">
      <div>
        <img src={image} />
        <div className="detail-wrapper">
          <h3>{animal.name}</h3>

          <small>
            ❤ a {animal.size} {animal.age} {animal.gender}{" "}
            {animal.breeds.primary}{" "}
          </small>
        </div>
      </div>
      <div>
        <Link to={`/pets/${animal.id}`} className="view">
          {" "}
          <button>Details</button>
        </Link>
        <Link to={`/enquiry/${animal.id}`}>
          {" "}
          <button className="enquirebutton"> Enquire</button>
        </Link>{" "}
      </div>
    </div>
  );
}

export default PetItems;
