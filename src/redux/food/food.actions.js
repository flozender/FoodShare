import FoodActionTypes from "./food.types";

export const foodCreateStart = (foodData) => ({
  type: FoodActionTypes.FOOD_CREATE_START,
  payload: foodData,
});

export const foodCreateSuccess = (foodData) => ({
  type: FoodActionTypes.FOOD_CREATE_SUCCESS,
  payload: foodData,
});
