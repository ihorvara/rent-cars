import styled from "styled-components";
import Button from "@material-ui/core/Button";

const Content = styled.div`
  margin-top: 100px;
  font-size: 30px;
  text-align: center;
`;

const Title = styled.div`
  margin-top: 20px;
`;

const Advertisement = styled.div`
  margin-top: 20px;
  font-size: 20px;
`;

const LinkButton = styled(Button)`
  margin-top: 20px;
`;

const CarouselContent = styled.div`
  margin: 100px 20px 20px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CardContent = styled.div`
  margin: 10px 10px 10px 10px;
  min-width: 345px;
`;

const SpinnerContainer = styled.div`
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export {
  Content,
  Title,
  Advertisement,
  LinkButton,
  CardContent,
  CarouselContent,
  SpinnerContainer,
};
