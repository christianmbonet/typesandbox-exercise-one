import React from "react";

export const Header = (props) => (
  <header>
    {props.profile.pages.map((page) => (
      <button>{page.name}</button>
    ))}
    <span>Welcome {props.profile.user.name}</span>
  </header>
);
