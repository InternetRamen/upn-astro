import { useState } from "react";
import Icon from "@mdi/react";
import { mdiClose, mdiMenu } from "@mdi/js";
function Navbar() {
  let [menuOpen, setMenuOpen] = useState(false);
  return (
    <nav
      className={`w-screen ${menuOpen ? "h-screen" : "h-16"}
            
             top-0 z-20 md:static 
            ${menuOpen ? "fixed" : "absolute"}
            transition-all
            ${menuOpen ? "bg-white" : "bg-transparent"}
            `}
    >
      <div className="w-11/12 h-full max-w-4xl mx-auto flex items-start justify-between relative">
        <div className="h-16 flex items-center text-lg">
          <a href="/">UPN</a>
        </div>
        <div
          className={`flex flex-col gap-5 mt-16 ${
            menuOpen ? "h-full" : "h-0"
          } overflow-hidden md:flex-row md:h-full md:mt-0 transition-[height] items-center absolute left-1/2 -translate-x-1/2`}
        >
          <a
            href="https://upcountypreventionnetwork.org"
            className="text-lg text-center hover:text-red-400 transition-all"
          >
            Home
          </a>

          <a
            href="/"
            className="text-lg text-center hover:text-red-400 transition-all"
          >
            Blog
          </a>
        </div>
        <div className="h-16 flex items-center">
          <button
            className="md:hidden"
            onClick={() => {
              setMenuOpen(!menuOpen);
            }}
          >
            {menuOpen ? (
              <Icon path={mdiClose} title="open" size={1.2} />
            ) : (
              <Icon path={mdiMenu} title="close" size={1.2} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
