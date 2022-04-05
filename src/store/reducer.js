export const initialState = {
  // updated when customer adding to cart or remove
  basket: [],
  // store the product for admin upate
  updateBucket: [],
  //update the bucket according to the user search topic and view it in search ui
  searchBucket: [],
  //update the user
  user: null
};
// basket total view in cart and purchase
export const Baskettotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  console.log("current action", action);
  switch (action.type) {
    // update the basket accourding to the add to cart function
    case "ADD_TO_BASKET":
      return { ...state, basket: [...state.basket, action.item] };
    // remove the  all items in the basket
    case "EMPTY_BASKET":
      return { ...state, basket: [] };
    case "EMPTY_SEARCH_BASKET":
      return { ...state, searchBucket: [] };
    // remove the   items in the basket according to customer request
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
    // update the admin update basket dispatch items to that basket
    case "ADD_TO_UPDATES":
      return { ...state, updateBucket: [...state.basket, action.item] };
    // update the user
    case "SET_USER":
      return {
        ...state,
        user: action.user
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: action.email
      };
    case "SET_SEARCH_KEY":
      return {
        search: action.searchkey
      };
    default:
      return state;
  }
}
export default reducer;
