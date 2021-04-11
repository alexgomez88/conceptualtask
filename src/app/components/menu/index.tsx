import * as React from "react";
import { useState, useRef, FunctionComponent, MutableRefObject } from "react";
import { MenuItem } from "./menu-item";
import "./style.scss";

export const Menu: FunctionComponent = () => {
  const [active, setActive] = useState("welcome");

  let menuRef: HTMLElement | null = null;
  let menuActiveRef: HTMLButtonElement | null = null;
  let menuBorderRef: HTMLDivElement | null = null;

  const offsetMenuBorder = () => {
    if (!menuRef || !menuBorderRef || !menuActiveRef) return;

    const offsetActiveItem = menuActiveRef.getBoundingClientRect();
    const left =
      Math.floor(
        offsetActiveItem.left -
          menuRef.offsetLeft -
          (menuBorderRef.offsetWidth - offsetActiveItem.width) / 2
      ) + "px";

    menuBorderRef.style.transform = `translate3d(${left}, 0 , 0)`;
  };

  const setMenuActiveRef = (ref: HTMLButtonElement) => {
    console.log(ref);
    menuActiveRef = ref;
    offsetMenuBorder();
  };

  const onClickItem = (id: string) => {
    console.log(id, active);
    if (active === id) return;
    setActive(id);
  };

  return (
    <div>
      <nav
        className="menu"
        ref={(ref) => {
          menuRef = ref;
          offsetMenuBorder();
        }}
      >
        <MenuItem
          id="welcome"
          icon="menu"
          active={active}
          onClick={onClickItem}
          setMenuActiveRef={setMenuActiveRef}
          bgcolor="#ff8c00"
        />
        <MenuItem
          id="activities"
          icon="inbox"
          active={active}
          onClick={onClickItem}
          setMenuActiveRef={setMenuActiveRef}
          bgcolor="#f54888"
        />
        <MenuItem
          id="pomodoros"
          icon="pile"
          active={active}
          bgcolor="#4343f5"
          onClick={onClickItem}
          setMenuActiveRef={setMenuActiveRef}
        />
        <MenuItem
          id="teams"
          icon="layout"
          active={active}
          bgcolor="#e0b115"
          onClick={onClickItem}
          setMenuActiveRef={setMenuActiveRef}
        />
        <MenuItem
          id="sbout"
          icon="picture"
          active={active}
          bgcolor="#65ddb7"
          onClick={onClickItem}
          setMenuActiveRef={setMenuActiveRef}
        />

        <div
          className="menu__border"
          ref={(ref) => {
            menuBorderRef = ref;
            offsetMenuBorder();
          }}
        />
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
    </div>
  );
};
