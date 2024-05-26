import { useParams } from "react-router-dom";

const SinglePage = ({ ...rest }) => {
    const params = useParams();
    const categoryItems = rest[params.category];
    const data = categoryItems.find((el) => el.name === params.name);
    return ( 
         <>
        <div className="container singlePage">

        <img                
         src={`https://source.unsplash.com/400x400?${data.name}`}
        />

        <p className="card-text">Card text of the zoo app where text about birds, insects, animals and so on displayed.
        </p>
        </div>
        </>
     );
};
 
export default SinglePage;