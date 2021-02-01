import styled from "styled-components";
import TextField from "@material-ui/core/TextField";

const SpinnerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  flex-grow: 1;
  margin-left: 15px;
  margin-top: 15px;
`;

const NoResultBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
`;

const OffersContainer = styled.div`
  margin-top: 15px;
`;

const FilterBar = styled.div`
  display: flex;
`;

const Filter = styled(TextField)`
  width: 250px;
`;

const Title = styled.div`
  margin: 10px 10px 10px 130px;
  font-size: 30px;
`;

export {
  SpinnerContainer,
  Content,
  NoResultBlock,
  OffersContainer,
  FilterBar,
  Title,
  Filter,
};
