import { Link } from "react-router-dom";



const Home = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <Link to="/animals" className="card mb-3">
            <img
              className="card-img-top"
              src="/images/lion.jpeg"
              alt="Animals"
            />
            <div className="card-body">
              <h5 className="card-title">Animals</h5>
            </div>
          </Link>
        </div>

        <div className="col-md-6">
          <Link to="/birds" className="card mb-3">
            <img
              className="card-img-top"
              src= "/images/bird.jpeg"
              alt="Birds"
            />
            <div className="card-body">
              <h5 className="card-title">Birds</h5>
            </div>
          </Link>
        </div>

        <div className="col-md-6">
          <Link to="/fishes" className="card mb-3">
            <img
              className="card-img-top"
              src="/images/fish.jpeg"
              alt="Fishes"
            />
            <div className="card-body">
              <h5 className="card-title">Fishes</h5>
            </div>
          </Link>
        </div>

        <div className="col-md-6">
          <Link to="/insects" className="card mb-3">
            <img
              className="card-img-top"
              src="/images/insects.jpeg"
              alt="Insects"
            />
            <div className="card-body">
              <h5 className="card-title">Insects</h5>
            </div>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Home;