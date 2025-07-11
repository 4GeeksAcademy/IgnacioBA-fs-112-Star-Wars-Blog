import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer()

	const handleRemove = (uid, type) => {
		dispatch({ type: "remove_favorite", payload: { uid, type } });
	};

	return (
		<nav className="navbar navbar-light bg-light px-3">
			<Link to="/" className="navbar-brand">Star Wars Blog</Link>

			<div className="dropdown">
				<button
					className="btn btn-warning dropdown-toggle"
					type="button"
					data-bs-toggle="dropdown"
					aria-expanded="false"
				>
					Favorites ({store.favorites.length})
				</button>

				<ul className="dropdown-menu dropdown-menu-end">
					{store.favorites.length === 0 ? (
						<li className="dropdown-item text-muted">No favorites yet</li>
					) : (
						store.favorites.map((fav, index) => (
							<li key={index} className="dropdown-item d-flex justify-content-between align-items-center">
								<span>{fav.name}</span>
								<button className="btn btn-sm btn-outline-danger ms-2" onClick={() => handleRemove(fav.uid, fav.type)}>
									❌
								</button>
							</li>
						))
					)}
				</ul>
			</div>
		</nav>
	);
};