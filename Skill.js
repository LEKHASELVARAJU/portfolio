import React from "react";
import { MenuList } from "../helpers/SList";
import MenuItem from "../components/SkillList";
import "../styles/Skill.css";
function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">My Skills</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <MenuItem
              key={key}
              image={menuItem.image}
              name={menuItem.name}
              // price={menuItem.price}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Menu;