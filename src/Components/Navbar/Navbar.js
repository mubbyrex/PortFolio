import React, { useState } from "react";
import { ThemeState } from "../../Context/theme";
import {
  about,
  achievements,
  workExperience,
  projects,
  articles,
  openSource,
  skills,
  contact,
} from "../../portfolio/portfolio";
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import "./Navbar.css";

const Navbar = () => {
  const { themeMode, toggleTheme } = ThemeState();
  const [showNavList, setShowNavList] = useState(false);

  const toggleNavList = () => setShowNavList(!showNavList);

  const navItems = [
    { href: "#about", label: "About", show: Boolean(about.name) },
    { href: "#highlights", label: "Highlights", show: achievements.length },
    {
      href: "#work-experience",
      label: "Experience",
      show: workExperience.length,
    },
    { href: "#projects", label: "Projects", show: projects.length },
    {
      href: "#insights",
      label: "Insights",
      show: articles.length || openSource.length,
    },
    { href: "#skills", label: "Skills", show: skills.length },
    { href: "#contact", label: "Contact", show: Boolean(contact.email) },
  ];

  return (
    <nav className="center nav">
      <ul
        style={{ display: showNavList ? "flex" : null }}
        className="nav__list"
      >
        {navItems
          .filter((item) => item.show)
          .map((item) => (
            <li key={item.href} className="nav__list-item">
              <a
                href={item.href}
                onClick={toggleNavList}
                className="link link--nav"
              >
                {item.label}
              </a>
            </li>
          ))}
      </ul>

      <button
        onClick={toggleTheme}
        type="button"
        className="btn btn--icon nav__theme"
        aria-label="toggle theme"
      >
        {themeMode === "dark" ? (
          <BsFillSunFill size="2em" style={{ backgroundColor: "#111424" }} />
        ) : (
          <BsFillMoonFill size="2em" />
        )}
      </button>

      <button
        type="button"
        onClick={toggleNavList}
        className="btn btn--icon nav__hamburger"
        aria-label="toggle navigation"
      >
        {showNavList ? (
          <AiOutlineClose size="2em" />
        ) : (
          <AiOutlineMenu size="2em" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
