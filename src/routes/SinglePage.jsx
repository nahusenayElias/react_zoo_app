import { useParams } from "react-router-dom";

const SinglePage = ({ ...rest }) => {
    const params = useParams();
//     console.log(params);
    const categoryItems = rest[params.category];
    const data = categoryItems.find((el) => el.name === params.name);
    return ( 
         <>
        <h3>{data.name}</h3>
        </>
     );
};
 
export default SinglePage;