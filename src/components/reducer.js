export const initialState = {
  basket: []
};

export const Baskettotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };

    case "REMOVE_FROM_BASKET":
      let newbasket = [...state.basket];
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        newbasket.splice(index, 1);
      } else {
        console.warn(
          `the items you are try to remove is not valid {id :${action.id}}`
        );
      }
      return { ...state, basket: newbasket };

    default:
      return state;
  }
}
export default reducer;