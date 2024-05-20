import { useState } from 'react';
// import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './routes/Card';
import {animals, birds, insects, fishes} from './routes/animalsList'
import Home from './routes/Home';
import Root from './routes/Root'
import About from './routes/About';
import ErrorPage from './routes/ErrorPage';
import SinglePage from './routes/SinglePage';
import CategoryPage from './components/CategoryPage';
import {RouterProvider, createBrowserRouter} from "react-router-dom";

//create broweser router and router provider, home, root, birds,animals, about, ErroraPage

function App() {
const [zoo, setZoo] = useState({animals, birds, insects, fishes});

const removeHandler = (name, category) => {
  setZoo((prevZoo) => ({
    ...prevZoo,
    [category] : prevZoo[category].filter(el =>el.name !== name), 
  })
)}
const likesHandler = (name, category, action) => {
 setZoo((prevZoo) => ({
  ...prevZoo, 
  [category]:prevZoo[category].map((el) => el.name === name ? {...el, likes: el.likes + (action === 'add' ? 1: -1) }: el),

 }));
};

  const router = createBrowserRouter([
    // children: [
    //   path: ':category',###
    //   element
    // ]
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
        {path: '/about', element:<About />}
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