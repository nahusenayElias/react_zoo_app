import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../routes/Card.jsx";

const CategoryPage = ({ removeCard, removeLikes, addLikes,  ...rest }) => {
  
  const { category } = useParams();
  const categoryItems = rest[category] || [];
  
  const [searchQuery, setSearchQuery] = useState("");
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredItems = categoryItems.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  

  


  return (
    
      <div className="container mt-4">
      <h2>{category}</h2>
      <div>
      <input type="text" className="mb-2 mt-4"
      placeholder={`Search ${category}`} value={searchQuery} onChange={handleSearchChange}/>
      </div>
      <div className="row">
        {filteredItems.map((item) => (
          <div key={item.name} className="col-4 mb-2">

      
        
        
        <Card
        likes={item.likes}
        name={item.name}
        removeCard={() => removeCard(item.name, category)}
        removeLikes={() => removeLikes(item.name, category, "remove")}
        addLikes={() => addLikes(item.name, category, "add")}
        />
        </div>
          
        ))}
      
      </div>
      </div>
    
  );
};
export default CategoryPage;