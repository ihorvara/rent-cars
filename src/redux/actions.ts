import { convertToOffersModel } from "./convertor";

export const ADD_OFFERS = "ADD_CONNECTORS";

export const addOffers = (offers: Array<any>) => {
  return {
    type: ADD_OFFERS,
    offers: offers.map(convertToOffersModel),
  };
};
