import { HOME_URL, OFFERS_URL } from "../routes";
import React from "react";
import HeaderNavigationButton from "./HeaderNavigationButton";
import { HeaderNavigationList } from "./styles.";

const HeaderNavigation = () => {
  const navigationItems: any[] = [
    {
      title: "Home",
      link: HOME_URL,
    },
    {
      title: "Offers",
      link: OFFERS_URL,
    },
  ];

  const listItems = navigationItems.map((item) => (
    <HeaderNavigationButton item={item} key={item.title} />
  ));

  return <HeaderNavigationList>{listItems}</HeaderNavigationList>;
};

export default HeaderNavigation;
