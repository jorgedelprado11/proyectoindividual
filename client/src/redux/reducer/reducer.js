import { GET_BY_NAME, GET_VIDEOGAMES } from "../actions/action-types";

let initialState = { allVideogames: [] };

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        allVideogames: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
