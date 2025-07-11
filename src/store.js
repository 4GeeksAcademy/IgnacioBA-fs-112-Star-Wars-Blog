export const initialStore = () => {
  return {
    message: null,
    todos: [
      {
        id: 1,
        title: "Make the bed",
        background: null,
      },
      {
        id: 2,
        title: "Do my homework",
        background: null,
      }
    ],
    characters: [],
    planets: [],
    favorites: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case 'add_task':

      const { id, color } = action.payload

      return {
        ...store,
        todos: store.todos.map((todo) => (todo.id === id ? { ...todo, background: color } : todo))
      };

    case 'update_characters':

      return {
        ...store,
        characters: action.payload
      };
    case 'update_planets':

      return {
        ...store,
        planets: action.payload
      };

    case 'add_favorite':
      
      const alreadyExists = store.favorites.some(
        fav => fav.uid === action.payload.uid && fav.type === action.payload.type
      );
      if (alreadyExists) return store;
      return {
        ...store,
        favorites: [...store.favorites, action.payload]
      };

    case 'remove_favorite':
      return {
        ...store,
        favorites: store.favorites.filter(
          fav => !(fav.uid === action.payload.uid && fav.type === action.payload.type)
        )
      };
    default:
      console.error("Unknown action type:", action.type);
      throw Error('Unknown action.');
  }
}
