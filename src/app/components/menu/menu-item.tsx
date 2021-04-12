import * as React from "react";
import {
  FunctionComponent,
  MouseEventHandler,
  useRef,
  forwardRef,
} from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Icons } from "../index";

type MenuItemProps = {
  link: string;
  icon: string;
  setMenuActiveRef: any;
};

export const MenuItem: FunctionComponent<MenuItemProps> = (
  props: MenuItemProps
) => {
  const { link, icon, setMenuActiveRef } = props;
  const menuItemRef = useRef(null);
  const location = useLocation();

    React.useEffect(() => {
    const menuItemEffect = () => {
      if (location.pathname !== link) return;
      setMenuActiveRef(menuItemRef, false);
    };

    menuItemEffect();
  }, [menuItemRef.current]);

  const onClick = () => setMenuActiveRef(menuItemRef);

  return (
    <NavLink
      to={link}
      exact
      innerRef={menuItemRef}
      className="menu__item"
      activeClassName="active"
      onClick={onClick}
    >
      <Icons icon={icon} />
    </NavLink>
  );
};
