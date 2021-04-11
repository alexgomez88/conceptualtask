import * as React from "react";
import { FunctionComponent, useState } from "react";
import { MenuItem } from "./menu-item";
import "./style.scss";

export const Menu: FunctionComponent = () => {
  const [active, setActive] = useState("welcome");

  // const body = document.body;
  // const bgColorsBody = ["#ffb457", "#ff96bd", "#9999fb", "#ffe797", "#cffff1"];
  // const menu = body.querySelector(".menu");
  // const menuItems = menu.querySelectorAll(".menu__item");
  // const menuBorder = menu.querySelector(".menu__border");
  // let activeItem = menu.querySelector(".active");

  const onClickItem = (event: MouseEvent, id: string) => {
    if (active !== id) setActive(id);
  };

  // function clickItem(item, index) {

  //     menu.style.removeProperty("--timeOut");

  //     body.style.backgroundColor = bgColorsBody[index];
  //     offsetMenuBorder(activeItem, menuBorder);

  // }

  const offsetMenuBorder(element, menuBorder) {

       const offsetActiveItem = element.getBoundingClientRect();
       const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth  - offsetActiveItem.width) / 2) +  "px";
       menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

  }

  // offsetMenuBorder(activeItem, menuBorder);

  // menuItems.forEach((item, index) => {

  //     item.addEventListener("click", () => clickItem(item, index));

  // })

  // window.addEventListener("resize", () => {
  //     offsetMenuBorder(activeItem, menuBorder);
  //     menu.style.setProperty("--timeOut", "none");
  // });

  return (
    <>
      <nav className="menu">
        <MenuItem
          id="welcome"
          icon="menu"
          active={active}
          onClick={onClickItem}
          bgcolor="#ff8c00"
        />
        <MenuItem
          id="activities"
          icon="inbox"
          active={active}
          onClick={onClickItem}
          bgcolor="#f54888"
        />
        <MenuItem
          id="pomodoros"
          icon="pile"
          active={active}
          bgcolor="#4343f5"
          onClick={onClickItem}
        />
        <MenuItem
          id="teams"
          icon="layout"
          active={active}
          bgcolor="#e0b115"
          onClick={onClickItem}
        />
        <MenuItem
          id="sbout"
          icon="picture"
          active={active}
          bgcolor="#65ddb7"
          onClick={onClickItem}
        />

        <div className="menu__border"></div>
      </nav>

      <div className="svg-container">
        <svg viewBox="0 0 202.9 45.5">
          <clipPath
            id="menu"
            clipPathUnits="objectBoundingBox"
            transform="scale(0.0049285362247413 0.021978021978022)"
          >
            <path
              d="M6.7,45.5c5.7,0.1,14.1-0.4,23.3-4c5.7-2.3,9.9-5,18.1-10.5c10.7-7.1,11.8-9.2,20.6-14.3c5-2.9,9.2-5.2,15.2-7
          c7.1-2.1,13.3-2.3,17.6-2.1c4.2-0.2,10.5,0.1,17.6,2.1c6.1,1.8,10.2,4.1,15.2,7c8.8,5,9.9,7.1,20.6,14.3c8.3,5.5,12.4,8.2,18.1,10.5
          c9.2,3.6,17.6,4.2,23.3,4H6.7z"
            />
          </clipPath>
        </svg>
      </div>
    </>
  );
};
