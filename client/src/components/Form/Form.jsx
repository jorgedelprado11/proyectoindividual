import { useState } from "react";
import "./Form.css";

const Form = () => {
  const [input, setInput] = useState({
    name: "",
    released: "",
    image: "",
    rating: 0,
    platforms: "",
    genres: "",
  });

  const [error, setError] = useState({
    name: "",
    released: "",
    image: "",
    rating: 0,
    platforms: "",
    genres: "",
  });

  const validate = (input) => {
    if (!input.name)
      setError({
        ...error,
        name: "el campo no puede estar vacio ",
      });
    setError({
      ...error,
      name: "",
    });
  };

  const handleCHange = (event) => {
    setInput({
      ...input,
      [event.target.name]: event.target.name,
    });
    validate({ ...input, [event.target.value]: event.target.value });
  };

  return (
    <>
      <form onSubmit={""}>
        <div>
          <label>Name</label>
          <input
            name="name"
            type="text"
            value={input.value}
            onChange={handleCHange}
          />
          {error.name && <p className="errors">{error.name}</p>}
        </div>
        <div>
          <label>Image</label>
          <input
            name="image"
            type="text"
            value={input.value}
            onChange={handleCHange}
          />
          {error.image && <p className="errors">{error.image}</p>}
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            type="text"
            value={input.value}
            onChange={handleCHange}
          />
          {error.description && <p className="errors">{error.description}</p>}
        </div>
        <div>
          <label>Platforms</label>
          <input
            name="platforms"
            type="text"
            value={input.value}
            onChange={handleCHange}
          />
          {error.platforms && <p className="errors">{error.platforms}</p>}
        </div>
        <div>
          <label>Released</label>
          <input
            name="released"
            type="date"
            value={input.value}
            onChange={handleCHange}
          />
          {error.released && <p className="errors">{error.released}</p>}
        </div>
        <div>
          <label>Rating</label>
          <input
            name="rating"
            type="number"
            value={input.value}
            onChange={handleCHange}
          />
          {error.rating && <p className="errors">{error.rating}</p>}
        </div>
        <div>
          <label>Genres</label>
          <input
            name="genres"
            type="text"
            value={input.value}
            onChange={handleCHange}
          />
          {error.genres && <p className="errors">{error.genres}</p>}
        </div>
        <button type="submit">Create</button>
      </form>
    </>
  );
};

export default Form;
