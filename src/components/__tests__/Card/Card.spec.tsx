import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import { OfferModel } from "../../../models/OfferModel";
import Card from "../../Card";

const item: OfferModel = {
  name: "offerName",
  price: "offerPrice",
  image: "offerImage",
};

describe("Card", () => {
  it("should display offer name and price", async () => {
    render(<Card item={item} />);

    expect(await screen.findByText(item.name)).toBeInTheDocument();
    expect(await screen.findByText(item.price)).toBeInTheDocument();
  });
});
