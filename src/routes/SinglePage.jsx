import { useParams } from "react-router-dom";
const SinglePage = ({ ...rest }) => {
    const params = useParams();
    const categoryItems = rest[params.category];
    const data = categoryItems.find((el) => el.name === params.name);
    return ( 
        <>
        <h2>{data.name}</h2>
        <p className="card-text">Card text of the zoo app where text about birds, insects, animals and so on displayed.
        </p>
        </>
     );
};
 
export default SinglePage;