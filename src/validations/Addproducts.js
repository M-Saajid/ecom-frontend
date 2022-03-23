export default function validateInfo(values, files) {
  let errors = {};

  if (!values.title) {
    errors.title = "title required";
  }
  if (isNaN(values.price) || !values.price) {
    errors.price = "Number is invalid ";
  } else if (!values.price) {
    errors.price = "price required";
  }
  if (!values.desc) {
    errors.desc = "Description required";
  }
  if (!values.rating || values.rating < 1 || values.rating > 5) {
    errors.rating = "Rating must be between 1-5";
  }
  if (!values.quantity || isNaN(values.quantity)) {
    errors.quantity = "Quantity invalid";
  }
  if (!values.category) {
    errors.category = "Category required";
  }
  if (!files) {
    alert("Image required please select an image");
  }

  return errors;
}
