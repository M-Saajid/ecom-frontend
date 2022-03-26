export default function validateInfo(details, files, values) {
  let errors = {};

  if (!details.title) {
    errors.title = "title required";
  }
  if (isNaN(details.price) || !details.price) {
    errors.price = "Number is invalid ";
  } else if (!details.price) {
    errors.price = "price required";
  }
  if (!details.desc) {
    errors.desc = "Description required";
  }
  if (!values) {
    errors.rating = "Rating must be between 1-5";
  }
  if (!details.quantity || isNaN(details.quantity)) {
    errors.quantity = "Quantity invalid";
  }
  if (!details.category) {
    errors.category = "Category required";
  }
  if (!files) {
    errors.files="Image required !";
  }

  return errors;
}
