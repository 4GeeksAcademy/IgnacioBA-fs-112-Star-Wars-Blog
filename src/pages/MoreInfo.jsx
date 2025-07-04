import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Link } from "react-router-dom";

export const MoreInfo = () => {

  const {store, dispatch} =useGlobalReducer()

    return (
        <div className="text-center mt-5">
            <div className="d-flex justify-content-end">
				<Link to="/" className="btn btn-success">
					Back to home
				</Link>
			</div>
        </div>
    );
}; 