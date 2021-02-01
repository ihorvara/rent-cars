import {
  Advertisement,
  CardContent,
  CarouselContent,
  Content,
  LinkButton,
  SpinnerContainer,
  Title,
} from "./styles";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { OFFERS_URL } from "../../routes";
import Carousel from "react-material-ui-carousel";
import Card from "../Card";
import api from "../../api/index.tx";
import CircularProgress from "@material-ui/core/CircularProgress";
import { OfferModel } from "../../models/OfferModel";
import { useOffersSelector } from "../../redux";

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const history = useHistory();
  const offers: OfferModel[] = useOffersSelector();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    api
      .getOffers()
      .then(() => {
        setLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const goToLink = (link: string) => {
    history.push(link);
  };

  const onClick = () => {
    goToLink(OFFERS_URL);
  };

  const renderItem = (item: any) => {
    return (
      <CardContent key={`carousel-card-key-${item.name}`}>
        <Card item={item} />
      </CardContent>
    );
  };

  const getRandomItem = () => {
    return offers[Math.floor(Math.random() * offers.length)];
  };

  const getRandomItems = () => {
    const threeUniqueItems = new Set();
    while (threeUniqueItems.size < 3) {
      threeUniqueItems.add(getRandomItem());
    }
    return threeUniqueItems;
  };

  const renderCarouselContent = () => {
    const threeUniqueItems = getRandomItems();
    return Array.from(threeUniqueItems).map((item) => {
      return renderItem(item);
    });
  };

  return (
    <Content>
      <Title>Discover world with renting cars service</Title>
      <Advertisement>Special offer: get 3 hours free ride</Advertisement>
      <LinkButton
        size="small"
        variant="outlined"
        color="primary"
        onClick={onClick}
      >
        Choose a car
      </LinkButton>
      {isLoading ? (
        <SpinnerContainer>
          <CircularProgress color="primary" size={100} />
        </SpinnerContainer>
      ) : (
        <Carousel>
          {offers.map((offer) => {
            return (
              <div key={`carousel-content-key-${offer.name}`}>
                <CarouselContent>{renderCarouselContent()}</CarouselContent>
              </div>
            );
          })}
        </Carousel>
      )}
    </Content>
  );
};

export default Home;
