import { all } from "axios";
import {
  ADD_VIDEOGAME,
  GET_BY_NAME,
  GET_BY_ID,
  GET_VIDEOGAMES,
  FETCH_GENRES,
  GENRES_FILTER,
  ORIGIN_FILTER,
  ORDER_BY_RATING,
  ORDER_BY_NAME,
} from "../actions/action-types";

let initialState = {
  allVideogames: [],
  backup: [],
  videogame: {},
  filteredVideogames: [],
  genres: [],
  filteredGenres: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      return {
        ...state,
        allVideogames: action.payload,
        backup: action.payload,
      };
    case GET_BY_ID:
      return {
        ...state,
        videogame: action.payload,
      };
    case GET_BY_NAME:
      return {
        ...state,
        allVideogames: action.payload,
      };
    case ADD_VIDEOGAME:
      return {
        ...state,
        allVideogames: action.payload,
      };
    case FETCH_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GENRES_FILTER:
      let filterByGenre;
      action.payload === "AllGenres"
        ? (filterByGenre = state.backup)
        : (filterByGenre = state.backup.filter(
            (videogame) =>
              videogame.genres && videogame.genres.includes(action.payload)
          ));
      return {
        ...state,
        allVideogames: [...filterByGenre],
      };

    case ORIGIN_FILTER:
      let filterByOrigin;
      action.payload === "AllOrigins"
        ? (filterByOrigin = state.backup)
        : action.payload === "API"
        ? (filterByOrigin = state.backup.filter(
            (videogame) => typeof videogame.id === "number"
          ))
        : (filterByOrigin = state.backup.filter(
            (videogame) => typeof videogame.id !== "number"
          ));

      return {
        ...state,
        allVideogames: [...filterByOrigin],
      };

    case ORDER_BY_NAME:
      let orderNames = state.backup;
      action.payload === "Descendente"
        ? orderNames.sort(
            (a, b) => b.name?.charCodeAt(0) - a.name?.charCodeAt(0)
          )
        : orderNames.sort(
            (a, b) => a.name?.charCodeAt(0) - b.name?.charCodeAt(0)
          );
      return {
        ...state,
        allVideogames: [...orderNames],
      };

    case ORDER_BY_RATING:
      let orderRatings = state.backup;
      action.payload === "Descendente"
        ? orderRatings.sort((a, b) => b.rating - a.rating)
        : orderRatings.sort((a, b) => a.rating - b.rating);
      return {
        ...state,
        allVideogames: [...orderRatings],
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
