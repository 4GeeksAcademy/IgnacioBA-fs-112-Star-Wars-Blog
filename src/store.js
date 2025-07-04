export const initialStore=()=>{
  return{
    characters: [],   
    planets: []
  }
}

export default function storeReducer(store, action = {}) {
  switch(action.type){
    case "set_characters":
      return {
        ...store,
        characters: action.payload
      };

    case "set_planets":
      return {
        ...store,
        planets: action.payload
      };
    default:
      throw Error('Unknown action.');
  }    
}
