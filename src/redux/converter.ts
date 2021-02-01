import { OfferModel } from "../models/OfferModel";

export const convertToOffersModel = (item: any): OfferModel => {
  return {
    name: item.carGroupInfo.modelExample.name,
    price: `${item.prices.dayPrice.amount.value} ${item.prices.dayPrice.amount.currency}`,
    image: item.carGroupInfo.modelExample.imageUrl,
  };
};
