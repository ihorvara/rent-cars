import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { OfferModel } from "../../../models/OfferModel";
import * as reactRedux from "react-redux";
import OffersContent from "../../Offers/OffersContent";

const offers: OfferModel[] = [
  {
    name: "offerName1",
    price: "offerPrice1",
    image: "offerImage1",
  },
  {
    name: "offerName2",
    price: "offerPrice2",
    image: "offerImage2",
  },
  {
    name: "offerName3",
    price: "offerPrice3",
    image: "offerImage3",
  },
];

const mockOffers = () => {
  jest.spyOn(reactRedux, "useSelector").mockImplementation(() => offers);
};

const checkOfferExistence = async (offer: OfferModel) => {
  expect(await screen.findByText(offer.name)).toBeInTheDocument();
  expect(await screen.findByText(offer.price)).toBeInTheDocument();
};

describe("Offers", () => {
  it("should display offers in a grid", async () => {
    mockOffers();
    render(<OffersContent />);

    await checkOfferExistence(offers[0]);
    await checkOfferExistence(offers[1]);
    await checkOfferExistence(offers[2]);
  });
});
