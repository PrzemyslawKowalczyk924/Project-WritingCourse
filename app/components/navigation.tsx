import { NavLink } from "@remix-run/react";
import butterfly from "../../public/icons/butterfly.png"

interface NavigationProps {
  colSpan: string;
}

export default function Navigation({colSpan}: NavigationProps) {
    return (
      <nav className={`${colSpan} fixed m-3 flex items-center`}>
        <img className="mr-6" src={butterfly}></img>
        <NavLink to="/course" className="mr-6 text-magenta hover:text-blue-800">KURS</NavLink>
        <NavLink to="/about" className="mr-6 text-magenta hover:text-blue-800">O MNIE</NavLink>
        <NavLink to="/blog" className="mr-6 text-magenta hover:text-blue-800">BLOG</NavLink>
        <NavLink to="/contact" className="mr-6 text-magenta hover:text-blue-800">KONTAKT</NavLink>
      </nav>
    );
}