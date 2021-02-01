import { OfferModel } from "../models/OfferModel";
import { ADD_OFFERS } from "./actions";

export const offersReducers = (state: OfferModel[] = [], action: any) => {
  switch (action.type) {
    case ADD_OFFERS:
      return action.offers;
    default:
      return state;
  }
};
