import React from "react";

function Header() {
  return (
    <div className="header">
      <h1 className="font-press-start text-4xl text-purple-700 italic tracking-widest text-justify pl-24">
        - - - Backlogical - - -
      </h1>
      <Divider />
    </div>
  );
}

const Divider = () => <hr className="sidebar-hr" />;
export default Header;
