import React, { useEffect, useState } from "react";
import Card from "../Card";
import { useOffersSelector } from "../../redux";
import { OfferModel } from "../../models/OfferModel";
import {
  Filter,
  FilterBar,
  NoResultBlock,
  OffersContainer,
  Title,
  CardContainer,
} from "./styles";

const OffersContent = () => {
  const offers: OfferModel[] = useOffersSelector();
  const [filteredStates, setFilteredStates] = useState(offers);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const filter = offers.filter((offer) => {
        return offer.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setFilteredStates(filter);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  const renderFilter = () => {
    return (
      <Filter
        id="outlined-basic"
        label="Filter"
        variant="outlined"
        value={searchValue}
        onChange={handleChange}
      />
    );
  };

  return (
    <>
      <FilterBar>
        {renderFilter()}
        <Title>Find the car of your dream</Title>
      </FilterBar>
      {filteredStates.length > 0 ? (
        <OffersContainer>
          {filteredStates.map((item) => {
            return (
              <CardContainer key={item.name}>
                <Card item={item} />
              </CardContainer>
            );
          })}
        </OffersContainer>
      ) : (
        <NoResultBlock>No offers matching your search criteria</NoResultBlock>
      )}
    </>
  );
};

export default OffersContent;
