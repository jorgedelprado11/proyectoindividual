import { useEffect, useState } from "react";
import "./Form.css";
import validation from "./validation";
import { addVideogame, fetchGenres } from "../../redux/actions/actions";
import { useDispatch, useSelector } from "react-redux";


const Form = () => {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  const [errors, setErrors] = useState({});

  // const [checkBox, setChexBox] = useState([]);
  const [submit, setSubmit] = useState(false);
  const [input, setInput] = useState({
    name: "",
    released: "",
    image: "",
    description: "",
    rating: 0,
    platforms: "",
    genres: [],
  });

  const handleChange = (event) => {
    //creo una constante value que tome el valor del event target value, si es rating me lo parsee a float para no tener conflicto con el back
    const value =
      event.target.name === "rating"
        ? parseFloat(event.target.value)
        : event.target.value;
    setInput({
      ...input,
      [event.target.name]: value,
    });
    const validateErrors = validation({
      ...input,
      [event.target.name]: value,
    });

    setErrors(validateErrors);
  };

  //handleSubmit
  const handleSubmit = (event) => {
    dispatch(addVideogame(input));
    setInput({
      name: "",
      released: "",
      image: "",
      description: "",
      rating: 0,
      platforms: "",
      genres: [],
    });
    alert("Your game has been created");
    setSubmit(true);
  };

  const handleCheck = (event) => {
    //   setChexBox([...checkBox, event.target.name]);

    //   setInput({
    //     ...input,
    //     genres: [...checkBox],
    //   });
    // };

    setInput({
      ...input,
      genres: [...input.genres, event.target.value],
    });
    const validateErrors = validation({
      ...input,
      genres: input.genres,
    });
    setErrors(validateErrors);
  };


  return (
    <>
      <form className="form-create" onSubmit={handleSubmit}>
        <div className="div-input">
          <label>Name: </label>
          <input
            name="name"
            type="text"
            value={input.name}
            onChange={handleChange}
          />
          {errors.name && <p className="errors">{errors.name}</p>}
        </div>
        <div className="div-input">
          <label>Image: </label>
          <input
            name="image"
            type="text"
            value={input.image}
            onChange={handleChange}
          />
          {errors.image && <p className="errors">{errors.image}</p>}
        </div>
        <div className="div-input">
          <label>Description: </label>
          <textarea
            name="description"
            type="text"
            value={input.description}
            onChange={handleChange}
          />
          {errors.description && <p className="errors">{errors.description}</p>}
        </div>
        <div className="div-input">
          <label>Platforms: </label>
          <input
            name="platforms"
            type="text"
            value={input.platforms}
            onChange={handleChange}
          />
          {errors.platforms && <p className="errors">{errors.platforms}</p>}
        </div>
        <div className="div-input">
          <fieldset className="fieldset">
            <legend className="legend">Select the Genres: </legend>
            <div className="div-genres">
              {genres.map((genre) => (
                <div className="block-genres" key={genre.name}>
                  <label>
                    <input
                      type="checkbox"
                      id={genre.name}
                      name={genre.name}
                      value={genre.name}
                      onChange={(event) => handleCheck(event)}
                    />
                    {genre.name}
                  </label>
                </div>
              ))}
            </div>

            {/* 
            <select onChange={handleChange} multiple="true" name="genres">
              {genres.map((genre) => (
                <option key={genre.name} value={genre.name}>
                  {genre.name}
                </option>
              ))}
            </select> */}

            {/* <input
            name="genres"
            type="text"
            value={input.genres}
            onChange={handleChange}
          /> */}
            {errors.genres && <p className="errors">{errors.genres}</p>}
          </fieldset>
        </div>
        <div className="div-input">
          <label>Released: </label>
          <input
            name="released"
            type="date"
            value={input.released}
            onChange={handleChange}
          />
          {errors.released && <p className="errors">{errors.released}</p>}
        </div>
        <div className="div-input">
          <label>Rating: </label>
          <input
            name="rating"
            type="range"
            min="0.0"
            max="5.0"
            step="0.01"
            value={input.rating}
            onChange={handleChange}
          />
          {errors.rating && <p className="errors">{errors.rating}</p>}
        </div>

        <button
          type="submit"
          className={` form-btn ${
            Object.keys(errors).length || input.name === "" ? "is-disabled" : ""
          }`}
        >
          Create
        </button>
      </form>
    </>
  );
};

export default Form;
