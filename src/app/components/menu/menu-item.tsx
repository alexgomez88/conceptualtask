import * as React from "react";
import { FunctionComponent, MouseEventHandler, useRef, forwardRef } from "react";
import { Icons } from "../index";

type MenuItemProps = {
  id: string;
  icon: string;
  active: string;
  bgcolor: string;
  onClick: any;
  setMenuActiveRef: any
};

export const MenuItem: FunctionComponent<MenuItemProps> = (props: MenuItemProps) => {
  const {id, icon, active, bgcolor, onClick, setMenuActiveRef} = props;
  const isActive = id === active
  const className = isActive ? "menu__item active" : "menu__item";

  const onClickItem = (event: React.SyntheticEvent) => {
    onClick(id);
  }

  return (
    <button
      id={id}
      ref={ref => {if(isActive) setMenuActiveRef(ref) }}
      className={className}
      data-bgcolor={bgcolor}
      onClick={onClickItem}
    >
      <Icons icon={icon} />
    </button>
 );
};
