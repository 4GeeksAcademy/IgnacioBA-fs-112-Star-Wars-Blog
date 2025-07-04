
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()

	return (
		<div className="text-center mt-5">
			<div className="d-flex justify-content-end">
				<Link to="/info" className="btn btn-success">
					Learn more
				</Link>
			</div>
		</div>
	);
}; 