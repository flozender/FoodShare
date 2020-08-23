import { takeLatest, put, all, call } from "redux-saga/effects";

import FoodActionTypes from "./food.types";

import { createFood } from "../../utils/query";

function* startCreateFood(payload) {
  console.log(payload);
  const { data } = yield call(createFood, payload);
  console.log(data);
}

function* onCreateFood() {
  yield takeLatest(FoodActionTypes.FOOD_CREATE_START, startCreateFood);
}

function* foodSagas() {
  yield all([call(onCreateFood)]);
}

export default foodSagas;
