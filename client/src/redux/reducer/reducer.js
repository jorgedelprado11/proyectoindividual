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
  newVideogame: [],
  genres: [],
  filteredGames: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_VIDEOGAMES:
      if (state.allVideogames.length) {
        return {
          ...state,
        };
      }
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
        newVideogame: action.payload,
      };
    case FETCH_GENRES:
      return {
        ...state,
        genres: action.payload,
      };
    case GENRES_FILTER:
      let filterByGenre;
      console.log(state.filteredGames.length);
      state.filteredGames.length
        ? (filterByGenre = state.filteredGames)
        : (filterByGenre = state.backup);
      filterByGenre = state.backup.filter(
        (videogame) =>
          videogame.genres && videogame.genres.includes(action.payload)
      );

      if (action.payload === "AllGenres") {
        filterByGenre = state.backup;
        return {
          ...state,
          allVideogames: [...filterByGenre],
          filteredGames: [...filterByGenre],
        };
      }

      return {
        ...state,
        allVideogames: [...filterByGenre],
        filteredGames: [...filterByGenre],
      };

    case ORIGIN_FILTER:
      let filterByOrigin;
      console.log("backup", state.backup.length);
      if (action.payload === "AllOrigins") filterByOrigin = state.backup;
      state.filteredGames.length
        ? (filterByOrigin = state.filteredGames)
        : (filterByOrigin = state.backup);
      if (action.payload === "API")
        filterByOrigin = filterByOrigin.filter(
          (videogame) => typeof videogame.id === "number"
        );
      if (action.payload === "DB")
        filterByOrigin = filterByOrigin.filter(
          (videogame) => typeof videogame.id !== "number"
        );

      return {
        ...state,
        allVideogames: [...filterByOrigin],
      };

    case ORDER_BY_NAME:
      let orderNames;
      state.filteredGames.length
        ? (orderNames = state.filteredGames)
        : (orderNames = state.backup);

      action.payload === "Descendente"
        ? orderNames.sort(
            (a, b) =>
              b.name?.toUpperCase().charCodeAt(0) -
              a.name?.toUpperCase().charCodeAt(0)
          )
        : orderNames.sort(
            (a, b) =>
              a.name?.toUpperCase().charCodeAt(0) -
              b.name?.toUpperCase().charCodeAt(0)
          );
      return {
        ...state,
        allVideogames: [...orderNames],
      };

    case ORDER_BY_RATING:
      let orderRatings;
      state.filteredGames.length
        ? (orderRatings = state.filteredGames)
        : (orderRatings = state.backup);

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
