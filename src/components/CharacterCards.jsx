import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";


export const CharacterCards = ({name, id}) => {


    return (
        <div className="card" style={{ minWidth: "18rem" }}>
      <img src="https://via.placeholder.com/400x200" className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Some quick example text to build on the card title.</p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/info/${id}`} className="btn btn-primary">
            Learn more!
          </Link>
          <button className="btn btn-outline-warning">
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
    );
}; 