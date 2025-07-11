import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";


export const CharacterCards = ({ name, uid, type }) => {

  const { store, dispatch } = useGlobalReducer()

  const isFavorite = store.favorites.some(
    fav => fav.uid === uid && fav.type === type
  );

  const handleFavorite = () => {
    if (isFavorite) {
      dispatch({ type: "remove_favorite", payload: { uid, type } });
    } else {
      dispatch({
        type: "add_favorite",
        payload: { uid, name, type }
      });
    }
  };
  console.log("Favorite payload:", { uid, name, type });

  return (
    <div className="card" style={{ minWidth: "18rem" }}>
      <img src="https://ralfvanveen.com/wp-content/uploads/2021/06/Placeholder-_-Glossary.svg" className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">Some quick example text to build on the card title.</p>
        <div className="d-flex justify-content-between align-items-center">
          <Link to={`/info/${type}/${uid}`} className="btn btn-primary">More info</Link>
          <button className="btn btn-outline-warning" onClick={handleFavorite}>
            <i className="far fa-heart"></i>
          </button>
        </div>
      </div>
    </div>
  );
}; 