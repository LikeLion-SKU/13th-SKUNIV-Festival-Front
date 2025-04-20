import * as S from "./style";

import Back from "../../assets/icon/Back.svg?react";
import Home from "../../assets/icon/Home.svg?react";
import { Link } from "react-router";
import useHeaderStore from "../../stores/useHeaderStore";

const Header = () => {
  const { title, showBack, showHome } = useHeaderStore();

  return (
    <S.Header>
      {showBack && (
        <Link to="..">
          <Back />
        </Link>
      )}
      <S.Title>{title}</S.Title>
      {showHome && (
        <Link to="/">
          <Home />
        </Link>
      )}
    </S.Header>
  );
};

export default Header;
