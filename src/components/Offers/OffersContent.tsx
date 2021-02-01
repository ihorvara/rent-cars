import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Card from "../Card";
import { useOffersSelector } from "../../redux";
import { OfferModel } from "../../models/OfferModel";
import {
  Filter,
  FilterBar,
  NoResultBlock,
  OffersContainer,
  Title,
} from "./styles";

const OffersContent = () => {
  const offers: OfferModel[] = useOffersSelector();
  const [filteredStates, setFilteredStates] = useState(offers);
  const [searchValue, setSearchValue] = useState("");
  const lastRowSize = filteredStates.length % 3;
  const gridMainSize = filteredStates.length - lastRowSize;

  useEffect(() => {
    const timer = setTimeout(() => {
      const filter = offers.filter((offer) => {
        return offer.name.toLowerCase().includes(searchValue.toLowerCase());
      });
      setFilteredStates(filter);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchValue]);

  const renderRow = (items: OfferModel[]) => {
    return items.map((item: OfferModel) => {
      return (
        <React.Fragment key={item.name}>
          <Grid item xs={4}>
            <Card item={item} />
          </Grid>
        </React.Fragment>
      );
    });
  };

  const renderRows = (items: OfferModel[]) => {
    const rowItemsToRender = [];
    for (let index = 0; index < gridMainSize; index += 3) {
      rowItemsToRender.push([items[index], items[index + 1], items[index + 2]]);
    }
    return rowItemsToRender.map((itemIndexes, index) => {
      return (
        <Grid container item xs={12} spacing={3} key={`row-key-${index}`}>
          {renderRow(itemIndexes)}
        </Grid>
      );
    });
  };

  const renderLastRow = (lastRowSize: number, offers: OfferModel[]) => {
    const itemsToRender = [];
    for (let index = 1; index <= lastRowSize; index++) {
      itemsToRender.push(offers[offers.length - index]);
    }
    return renderRow(itemsToRender);
  };

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
          <Grid container spacing={1}>
            {renderRows(filteredStates)}
            {renderLastRow(lastRowSize, filteredStates)}
          </Grid>
        </OffersContainer>
      ) : (
        <NoResultBlock>No offers matching your search criteria</NoResultBlock>
      )}
    </>
  );
};

export default OffersContent;
