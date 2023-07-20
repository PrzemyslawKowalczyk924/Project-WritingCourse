import { NavLink } from "@remix-run/react";
import butterfly from "../../public/icons/butterfly.png"

interface NavigationProps {
  colSpan: string;
}

export default function Navigation({colSpan}: NavigationProps) {
    return (
      <nav className={`${colSpan}  fixed w-full flex items-center justify-center`}>
        <div className="rounded-full flex items-center ml-3 mt-3 justify-center  shadow">
          <img className="m-5" src={butterfly}></img>
          <NavLink to="/course" className="mr-6 text-magenta font-light hover:text-blue-800">kurs</NavLink>
          <NavLink to="/about" className="mr-6 text-magenta font-light hover:text-blue-800">o mnie</NavLink>
          <NavLink to="/blog" className="mr-6 text-magenta font-light hover:text-blue-800">blog</NavLink>
          <NavLink to="/contact" className="mr-6 text-magenta font-light hover:text-blue-800">kontakt</NavLink>
          <NavLink to="/login" className="mr-6 text-magenta font-light hover:text-blue-800">zaloguj</NavLink>
        </div>
      </nav>
    );
}