import { combineReducers, createStore } from "redux";
import { useSelector } from "react-redux";
import { OfferModel } from "../models/OfferModel";
import { offersReducers } from "./offers";

export interface RootState {
  offers: OfferModel[];
}

export const reducers = combineReducers({
  offers: offersReducers,
});

export const store = createStore(reducers);

export const useOffersSelector = () =>
  useSelector((state: RootState) => state.offers);
