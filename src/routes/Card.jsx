import React from "react";
import { Link } from "react-router-dom";
const Card = ({ name, likes, addLikes, removeCard, removeLikes }) => {

  return (
    <div className="card col-3 g-3">
      <img
        src={`https://source.unsplash.com/400x400/?${name}`}
        className="card-img-top"
        alt="..."
      />

      <div className="card-body">
        <h5 className="card-title">{name} </h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
       <button className="btn" onClick={removeLikes}>
          <span className="material-symbols-outlined minus-btn">
            heart_minus
            </span>
          </button>
        <button className="btn">
          <p className="d-inline">{likes}</p>

          <span className={`material-symbols-outlined minus-btn ${likes >= 0 ? "d-none" : ""}`}>
            heart_broken
            </span>
          </button>
          <button className="btn" onClick={addLikes}>
          
          <span className="material-symbols-outlined minus-btn">heart_plus</span>
          </button>
        <Link to={name} className="btn btn-primary">
          see more
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default Card;
