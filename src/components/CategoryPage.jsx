import React, { useEffect, useState } from "react";
import "../assets/card.css";
import { useParams, useLocation } from "react-router-dom";
import Card from "../routes/Card.jsx";

const CategoryPage = ({ removeCard, removeLikes, addLikes, searchTerm, handleSearch, ...rest }) => {
  
  const { category } = useParams();
  const location = useLocation();
  const [search, setSearch] = useState('');

  useEffect(() => {
    setSearch('');
  }, [location]);

  const searchHandler = (event) =>{
    setSearch(event.target.value);
  };

  const categoryItems = rest[category];

  return (
    <>
      <h2 className="cat-name">{category}</h2>
      <div className="card-container row gap-4">
        {categoryItems.filter((el) => el.name.toLowerCase().includes(search.toLowerCase()))
        .map((item) => {
          return (
            <Card
            likes={item.likes}
            name={item.name}
              removeCard={() => removeCard(item.name, category)}
              removeLikes={() => removeLikes(item.name, category, "remove")}
              addLikes={() => addLikes(item.name, category, "add")}
            />
          );
        })}
      </div>
    </>
  );
};
export default CategoryPage;