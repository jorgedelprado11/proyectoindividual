const validation = (input) => {
  const errors = {};

  //errors name
  if (!input.name) errors.name = "The field cannot be empty";
  else {
    if (input.name.length > 25)
      errors.name = "The name cannot exceed 25 characters";
    if (input.name.length < 3)
      errors.name = "The name must contain more than 3 characters";
  }

  //errors image
  if (!input.image) errors.image = "The field cannot be empty";

  //errors description
  if (!input.description) errors.description = "The field cannot be empty";
  else {
    if (input.description.length < 10)
      errors.description = "The description must have more than 10 characters";
    if (input.description.length > 70)
      errors.description =
        "The description must not have more than 70 characters";
  }

  //errors platforms
  if (!input.platforms) errors.platforms = "The field cannot be empty";

  //errors released
  if (!input.released) errors.released = "You must select to a date";

  //errors rating
  if (!input.rating) errors.rating = "The rating cannot be 0";

  //errors genres
  if (input.genres.length === 0)
    errors.genres = "You must choose at least one genre";

  return errors;
};

export default validation;
