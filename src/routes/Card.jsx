import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Card = ({ name, likes, addLikes, 
  removeCard, removeLikes }) => {
    const [imageUrl, setImageUrl] = useState(null);
    const [loading, setLoading] = useState(true);
    const[error, setError] = useState(null);
    const API_KEY = import.meta.env.VITE_APP_PIXABAY_API_KEY;


    useEffect(() => {
      const fetchImage = async () => {
        try {
          const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${name}`);

          console.log(response);

          setImageUrl(response.data.hits[0]?.webformatURL || "");
          setLoading(false);

        } catch (error) {
          console.error('Error fetching image:', error);
          setError(error.message);
          setLoading(false);
        }
      };
      fetchImage();
  }, [name, API_KEY]);

  if (loading) {
    return <p>Loading image...</p>;
  }

  if (error) {
    return <p>{`Error: ${error}`}</p>;
  }

    return (
      <div className="card g-0 mt-8">
        <button type="button" onClick={removeCard} className="btn-close btn-close"></button>
        {imageUrl && (
          <img
          style={{maxWidth:"339px", height:"300px", objectFit:"cover",borderRadius:"5px"}}
            src={imageUrl}
            className="card-img-top"
            alt={name}
  
          />
        )}
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the card's content.
          </p>
          <button className="btn" onClick={removeLikes}>
            <span className="material-symbols-outlined minus-btn">heart_minus</span>
          </button>
          <button className="btn">
            <p className="d-inline">{likes}</p>
            <span className={`material-symbols-outlined heart_broken d-inline ${likes >= 0 ? "d-none" : ""}`} role="img" aria-label="sad">😢</span>
          </button>
          <button className="btn" onClick={addLikes}>
            <span className="material-symbols-outlined minus-btn">heart_plus</span>
          </button>
          <Link to={name} className="btn btn-primary">see more</Link>
        </div>
      </div>
    );
  };
  
  export default Card;
  
 