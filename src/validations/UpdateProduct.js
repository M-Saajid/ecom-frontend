export default function validateInfo(values) {
  let errors = {};

  if (isNaN(values.price)) {
    errors.price = "Number is invalid ";
  }

  if (isNaN(values.quantity)) {
    errors.quantity = "Quantity invalid";
  }

  return errors;
}
