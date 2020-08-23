import FoodActionTypes from "./food.types";

const INITIAL_STATE = {
  currentFood: null,
  isFetching: false,
  error: null,
};

const FoodReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FoodActionTypes.SIGN_IN_START:
    case FoodActionTypes.SIGN_UP_START:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case FoodActionTypes.SIGN_IN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        currentFood: action.payload,
        error: null,
      };
    case FoodActionTypes.SIGN_IN_FAILURE:
    case FoodActionTypes.SIGN_UP_FAILURE:
      return {
        ...state,
        isFetching: false,
        currentFood: null,
        error: action.payload,
      };
    case FoodActionTypes.SIGN_OUT:
      return {
        ...state,
        currentFood: null,
      };
    default:
      return state;
  }
};

export default FoodReducer;
