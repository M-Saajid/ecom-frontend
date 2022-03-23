export default function validateInfo(values) {
  let errors = {};

  if (isNaN(values.price)) {
    errors.price = "Number is invalid ";
  }
  if (isNaN(values.rating) || values.rating < 0 || values.rating > 5) {
    errors.rating = "Rating must be between 1-5 and a Number";
  }
  if (isNaN(values.quantity)) {
    errors.quantity = "Quantity invalid";
  }

  return errors;
}
