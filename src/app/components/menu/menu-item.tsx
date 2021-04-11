import * as React from "react";
import { FunctionComponent, MouseEventHandler, useRef } from "react";
import { Icons } from "../index";

type MenuItemProps = {
  id: string;
  icon: string;
  active: string;
  bgcolor: string;
  onClick: any;
};

export const MenuItem: FunctionComponent<MenuItemProps> = ({
  id,
  icon,
  bgcolor,
  active,
  onClick,
}: MenuItemProps) => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const className = id === active ? "menu__item active" : "menu__item";

  const onClickItem: MouseEventHandler = (event) => {
    console.log(id);
    onClick(event, id, buttonRef);
  };

  return (
    <button
      id={id}
      ref={buttonRef}
      className={className}
      data-bgcolor={bgcolor}
      onClick={onClickItem}
    >
      <Icons icon={icon} />
    </button>
  );
};
