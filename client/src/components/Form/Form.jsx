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
          <span>{error.name}</span>
        </div>
        <div>
          <label>Released</label>
          <input
            name="released"
            type="text"
            value={input.value}
            onChange={handleCHange}
          />
        </div>
        <div>
          <label>Image</label>
          <input
            name="image"
            type="text"
            value={input.value}
            onChange={handleCHange}
          />
        </div>
        <div>
          <label>Rating</label>
          <input
            name="rating"
            type="number"
            value={input.value}
            onChange={handleCHange}
          />
        </div>
        <div>
          <label>Platforms</label>
          <input
            name="platforms"
            type="text"
            value={input.value}
            onChange={handleCHange}
          />
        </div>
        <div>
          <label>Genres</label>
          <input
            name="genres"
            type="text"
            value={input.value}
            onChange={handleCHange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
