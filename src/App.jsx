import { useState } from 'react';
// import './App.css';
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

// const [searchTerm, setSearchTerm] = useState("");
// const handleSearch = (category, e) => {
//   const searchTerm = e.target.value.toLowerCase();
//   setZoo((prevZoo) => ({
//     ...prevZoo,
//     [category]: prevZoo[category].filter((el) => 
//     el.name.toLowerCase().includes(searchTerm)
//     ),
//   }))
// }

//Removing cards...
 const removeHandler = (name, category) => {
  setZoo((prevZoo) => ({
   ...prevZoo,
    [category] : prevZoo[category].filter(el =>el.name !== name), 
  })
   )}

//Increasing and decreasing likes.
 const likesHandler = (name, category, action) => {
  //  console.log('likes handler clicked');
 setZoo((prevZoo) => ({
  ...prevZoo, 
  [category]: prevZoo[category].map((el) => 
  el.name === name 
  ? {...el, likes: el.likes + (action === "add" ? 1: -1) }: el
  ),


 }));
 };
// const likesHandler = (name, category) => {
//   console.log('likes handler clicked');
//   setLikes(likes + 1);


// }

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
        // searchTerm={searchTerm}
        // handleSearch={handleSearch()}
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

//   return (
//     <>
//     <Header/>
//       <main>
//         {animalsData.map((animal) => (
//         <Card 
//         key={animal.name} 
//         {...animal}
//         removeLikes={() => likesHandler(animal.name, 'remove')}
//         addLikes={likesHandler.bind(this,animal.name, 'add')}
//         removeCard={() => removeCard(animal.name)}
//         />
//         ))}
//       </main>
//     <Footer/>
//     </>
//   );
// }

//   const removeCard = (animal) => {
//     const updatedArray = animalsData.filter(item => item.name !== animal);
//     // console.log(animal, 'remove card was trggered');
// setAnimalsData(updatedArray);

//   };
//   const likesHandler = (animal, action) => {
//     const updatedArray = animalsData.map((item) => {
//       if (item.name === animal) {
//         if (action === 'add') {
//         return {...item, likes: item.likes + 1};
      
//     } else {
//       return { ...item, likes: item.likes - 1};
//     }
//     // console.log(animal, 'action likes was trggered');

//   } else {
//     return item;
//   }
// });
// setAnimalsData(updatedArray);
//   };
//   const removeLikes = (animal) => {
//     console.log(animal, 'remove likes was trggered');
//   }

  // const removeHandler = (name) => {
  //   const updatedArray = animals.filter((animal) => animal.name !== name);
  //   setAnimalsData(updatedArray);
  // };