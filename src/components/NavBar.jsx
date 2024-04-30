import React from "react";
import { git, logo } from "../assets";

function NavBar() {
  return (
    <nav className="absolute top-0 navbar">
      <div className="flex-1">
        <a href="./">
          <img src={logo} alt="" />
        </a>
      </div>
      <div className="flex-none">
        <button className="text-yellow-100 btn btn-square btn-ghost">
          <img
            src={git}
            alt="github"
            onClick={() => {
              window.open(
                "https://github.com/maher-cshub/ai-article-summarizer_ReactJS"
              );
            }}
          />
        </button>
      </div>
    </nav>
  );
}

export default NavBar;
