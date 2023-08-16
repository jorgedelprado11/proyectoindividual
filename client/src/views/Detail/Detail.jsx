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
        <div className="detail-container">
          <div className="detail-grid">
            <div>
              <img
                className="detail-img"
                src={videogame.image}
                alt={videogame.name}
              />
              <div className="detail-extrainfo">
                <div className="div-par">
                  <h2 className="title-par">Rating: </h2>
                  {videogame.rating >= 4 ? (
                    <h3
                      className="rating"
                      style={{ border: "2px solid green", color: "green" }}
                    >
                      {Math.trunc(videogame.rating * 20)}
                    </h3>
                  ) : videogame.rating >= 3 ? (
                    <h3
                      className="rating"
                      style={{ border: "2px solid yellow", color: "yellow" }}
                    >
                      {Math.trunc(videogame.rating * 20)}
                    </h3>
                  ) : (
                    <h3
                      className="rating"
                      style={{ border: "2px solid red", color: "red" }}
                    >
                      {Math.trunc(videogame.rating * 20)}
                    </h3>
                  )}
                </div>
                <div className="div-par">
                  <h2 className="title-par">Platforms: </h2>
                  <h3 className="par-info">{videogame.platforms}</h3>
                </div>
                <div className="div-par">
                  <h2 className="title-par">Genres: </h2>
                  <h3 className="par-info">{videogame.genres}</h3>
                </div>
              </div>
            </div>
            <div className="detail-description">
              <h1 className="detail-title">{videogame.name}</h1>
              <p className="description-info">{videogame.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
