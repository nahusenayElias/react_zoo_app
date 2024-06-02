import { useState } from 'react';
import {animals, birds, insects, fishes} from './routes/animalsList'
import Home from './routes/Home';
import Root from './routes/Root';
import About from './routes/About';
import ErrorPage from './routes/ErrorPage';
import SinglePage from './routes/SinglePage';
import CategoryPage from './components/CategoryPage';
import {RouterProvider, createBrowserRouter} from "react-router-dom";

//create browser router and router provider, home, root, birds,animals, about, ErrorPage

function App() {
const [zoo, setZoo] = useState({animals, birds, insects, fishes});

 const removeHandler = (name, category) => {
  setZoo((prevZoo) => ({
   ...prevZoo,
    [category] : prevZoo[category].filter(el =>el.name !== name), 
  })
   )}

//Increasing and decreasing likes.
 const likesHandler = (name, category, action) => {

 setZoo((prevZoo) => ({
  ...prevZoo, 
  [category]: prevZoo[category].map((el) => 
  el.name === name 
  ? {...el, likes: el.likes + (action === "add" ? 1: -1) }: el
  ),

 }));
 };

  const router = createBrowserRouter([
   
    {path: '/', element: <Home />},
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children:[
        {path: ':category', element: ( 
        <CategoryPage 
         
        addLikes={likesHandler} 
        removeLikes={likesHandler} 
        removeCard ={removeHandler} 
        {...zoo} 
        />
        ),
        
        },
         {path: '/about', element:<About/>},
        {
          path:":category/:name",
          element:<animalsList {...zoo} />
        },
        {
          path: "/:category/:name", 
          element: <SinglePage {...zoo} />
        },

      ]
    }
  ]);
  return <RouterProvider router= {router} />;
}
export default App;