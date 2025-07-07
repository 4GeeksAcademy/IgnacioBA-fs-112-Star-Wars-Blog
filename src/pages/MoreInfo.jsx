import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from "react-router-dom";

export const MoreInfo = () => {

  let {id} = useParams()
   
  const {store, dispatch} =useGlobalReducer()

    return (
        <div className="text-center mt-5">
            <h1>More info {id}</h1>
            
        </div>
    );
}; 