import styled from "styled-components";
import MaterialCard from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const CardContainer = styled(MaterialCard)`
  min-width: 345px;
`;

const Media = styled(CardMedia)`
  min-height: 240px;
`;

export { CardContainer, Media };
