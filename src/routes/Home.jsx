import {Link} from 'react-router-dom';

const Home = () => {
    return (
        <>
            <Link to="/animals">Animals</Link>
            <Link to="/birds">Birds</Link>
            <Link to="/insects">Insects</Link>
            <Link to="/fishes">Fishes</Link>
        </>
    )
}
export default Home;