import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";

export default function Navigation() {
  const getNavLinkByClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };
  return (
   <header className={css.header}> 
    <h2>Logo</h2>
    <nav className={css.navigation}>
   <NavLink to="/" className={getNavLinkByClass}>
     Home
   </NavLink>
   <NavLink to="/movies" className={getNavLinkByClass}>
     Movies
   </NavLink>
 </nav>
 </header>
  );
}
