export default function validateInfo(values, files) {
  let errors = {};

  if (!values.title.trim()) {
    errors.title = "title required";
  }
  if (isNaN(values.price) || !values.price) {
    errors.price = "Number is invalid ";
  } else if (!values.price.trim()) {
    errors.price = "price required";
  }
  if (!values.desc.trim()) {
    errors.desc = "Description required";
  }
  if (!values.rating.trim() || values.rating < 1 || values.rating > 5) {
    errors.rating = "Rating must be between 1-5";
  }
  if (!values.quantity.trim()) {
    errors.quantity = "Quantity required";
  }
  if (!values.category.trim()) {
    errors.category = "Category required";
  }
  if (!files) {
    alert("Image required please select an image");
  }

  return errors;
}
