import {useParams} from "react-router-dom";
const SinglePage = ({...rest}) => {
    const params = useParams();
    const categoryItems = rest[params.category];
    const data = categoryItems.find((el) => el.name === params.name);
    return ( 
        <>
        <h2>{data.name}</h2>
        </>
     );
}
 
export default SinglePage;