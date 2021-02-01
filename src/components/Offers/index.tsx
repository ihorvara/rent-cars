import React, { useEffect, useState } from "react";
import api from "../../api/index.tx";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Content, SpinnerContainer } from "./styles";
import OffersContent from "./OffersContent";

const Offers = () => {
  const [isLoading, setLoading] = useState(true);

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

  return (
    <Content>
      {isLoading ? (
        <SpinnerContainer>
          <CircularProgress color="primary" size={100} />
        </SpinnerContainer>
      ) : (
        <OffersContent />
      )}
    </Content>
  );
};

export default Offers;
