import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function SinglePage({ ...rest }) {
  const { category, name } = useParams();
  const categoryItems = rest[category];
  const [image, setImage] = useState("");
  const data = categoryItems.find((el) => el.name === name);
  const API_KEY = import.meta.env.VITE_APP_PIXABAY_API_KEY;


  const [wikiData, setWikiData] = useState("");

  useEffect(() => {
    async function fetchWikiData() {
      try {
        const response = await fetch(
          `https://en.wikipedia.org/api/rest_v1/page/summary/${name}`
          
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await response.json();
        setWikiData(result.extract);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchWikiData();
  }, [name]);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await axios.get(`https://pixabay.com/api/?key=${API_KEY}&q=${data.name}`);

        //console.log(response);

        const image = (response.data.hits[0]?.webformatURL || "");
        setImage(image)

      } catch (error) {
        console.error('Error fetching image:', error);
        setError(error.message);
      }
    };
    fetchImage();
}, [data, API_KEY]);

  

  return (
    <>
      <h2 className="category_title">{data.name}</h2>
      <div className="category_container">
        <img
          className="category_image"
          src={image}
          alt={data.name}
        />
        <p className="category_text">{wikiData}</p>
      </div>
    </>
  );
}

export default SinglePage;