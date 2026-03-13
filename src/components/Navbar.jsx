import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/Skillhivelogo2.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const location = useLocation();
  const dropdownRef = useRef(null);

  const menus = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    if (!isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-black fixed w-full top-0 left-0 z-50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          
          {/* Logo */}
          <div className="cursor-pointer">
            <Link to="/">
              <img src={logo} alt="Company Logo" className="h-20 w-auto" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <div ref={dropdownRef} className="hidden md:flex space-x-15 relative">
            {menus.map((item, index) => {
              const isActive = location.pathname === item.path;
              const hasSubmenu = item.subMenu?.length > 0;

              return (
                <div key={index} className="relative group">
                  {hasSubmenu ? (
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`text-[20px] font-montserrat font-medium flex items-center gap-1 transition ${
                        openDropdown === item.name
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.name}
                      {openDropdown === item.name ? (
                        <ChevronUp size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                  ) : (
                    <Link
                      to={item.path}
                      className={`text-[20px] font-montserrat font-medium pb-1 transition ${
                        isActive
                          ? "border-b-4 border-white text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}

                  {/* Dropdown */}
                  {hasSubmenu && openDropdown === item.name && (
                    <div className="absolute left-0 top-full mt-3 w-72 bg-black border border-gray-700 shadow-xl rounded-lg py-3 z-40">
                      <h4 className="text-white font-semibold text-[16px] px-4 pb-2">
                        {item.name}
                      </h4>

                      <div className="flex flex-col space-y-2 px-4">
                        {item.subMenu.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.path}
                            onClick={() => setOpenDropdown(null)}
                            className="text-[18px] mt-2 text-gray-300 font-medium hover:text-white transition"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="bg-white text-black p-2 px-4 rounded-md"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center space-y-8 z-50">
          <button
            className="absolute top-6 right-4 bg-white text-black p-2 px-4 rounded-md"
            onClick={() => setIsOpen(false)}
          >
            <X size={32} />
          </button>

          {menus.map((item, index) => {
            const isActive = location.pathname === item.path;
            const hasSubmenu = item.subMenu?.length > 0;
            const isDropdownOpen = openDropdown === item.name;

            return (
              <div key={index} className="flex flex-col items-center">
                {hasSubmenu ? (
                  <>
                    <button
                      onClick={() =>
                        setOpenDropdown(isDropdownOpen ? null : item.name)
                      }
                      className={`text-[22px] font-montserrat font-medium flex items-center gap-2 ${
                        isActive || isDropdownOpen
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      }`}
                    >
                      {item.name}
                      {isDropdownOpen ? (
                        <ChevronUp size={22} />
                      ) : (
                        <ChevronDown size={22} />
                      )}
                    </button>

                    {isDropdownOpen && (
                      <div className="flex flex-col mt-6 text-center space-y-6">
                        {item.subMenu.map((sub, i) => (
                          <Link
                            key={i}
                            to={sub.path}
                            className="text-[22px] font-medium text-gray-300 hover:text-white"
                            onClick={() => {
                              setIsOpen(false);
                              setOpenDropdown(null);
                            }}
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-[22px] font-montserrat font-medium ${
                      isActive
                        ? "text-white border-b-4 border-white"
                        : "text-gray-300 hover:text-white"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            );
          })}
        </div>
      )}
    </nav>
  );
}