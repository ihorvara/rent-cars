import styled from "styled-components";

interface Props {
  active: boolean;
}

const Container = styled.div`
  margin-right: 42px;
  cursor: pointer;
`;

const NavigationButton = styled.div<Props>`
  position: relative;
  font-size: 16px;

  &::after {
    position: absolute;
    content: "";
    box-sizing: border-box;
    height: 81%;
    width: 100%;
  }
  &:hover::after {
    border-bottom: ${(props) => (!props.active ? "grey" : "none")} solid 5px;
  }
  &::after {
    border-bottom: ${(props) => (props.active ? "white" : "none")} solid 5px;
  }
`;

const NavigationButtonText = styled.div`
  padding: 0 8px 0 8px;
`;

export { Container, NavigationButton, NavigationButtonText };
