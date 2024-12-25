import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="fixed w-[100%] top-0 bg-white flex justify-evenly items-center ">
      <img src="/logo.png" alt="logo" className="w-[100px]" />
      <nav className="flex justify-between gap-4 md:gap-12 text-customPink  ">
        <NavLink
          to="/supplyList"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Supply List
        </NavLink>
        <NavLink
          to="/stockTracker"
          className={({ isActive }) =>
            isActive ? "nav-link active-link" : "nav-link"
          }
        >
          Stock Tracker{" "}
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
