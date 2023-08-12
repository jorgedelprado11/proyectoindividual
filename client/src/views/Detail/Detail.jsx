import { useParams } from "react-router-dom";
import "./Detail.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../../redux/actions/actions";

const Detail = () => {
  const { id } = useParams();
  const videogame = useSelector((state) => state.videogame);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getById(id));
  }, [dispatch]);

  return (
    <>
      {!videogame ? null : (
        <div>
          <h1>{videogame.name}</h1>
          <img src={videogame.image} alt={videogame.name} />
          <p>{videogame.description}</p>
          <h3>{videogame.rating}</h3>
          <h3>{videogame.platforms}</h3>
          <h3>{videogame.genres}</h3>
        </div>
      )}
    </>
  );
};

export default Detail;
