import { useHistory, useLocation } from "react-router-dom";
import { Container, NavigationButton, NavigationButtonText } from "./styles";

export interface NavigationItem {
  title: string;
  link: string;
}

interface Props {
  item: NavigationItem;
}

const HeaderNavigationButton = ({ item }: Props) => {
  const location = useLocation();
  const history = useHistory();

  const goToLink = (link: string) => {
    history.push(link);
  };
  const active = location.pathname.includes(item.link);

  return (
    <Container>
      <NavigationButton onClick={() => goToLink(item.link)} active={active}>
        <NavigationButtonText>{item.title}</NavigationButtonText>
      </NavigationButton>
    </Container>
  );
};

export default HeaderNavigationButton;
