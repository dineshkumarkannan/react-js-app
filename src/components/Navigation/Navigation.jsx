import { Link, useLocation } from "react-router-dom";
import { NAVIGATION } from "../../constants/navigation";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const location = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const isActive = (path) => location.pathname === path;
  return (
    <nav
      className="bg-white dark:bg-gray-800 shadow-lg"
      aria-label="Main navigation"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to={"/"}
            className="text-xl font-bold text-blue-600 dark:text-blue-400"
            aria-label="Homepage"
          >
            React Learning
          </Link>

          {/* Navigation Links */}
          <ul
            className="hidden md:flex space-x-4 list-none p-0 m-0"
            role="menubar"
          >
            {NAVIGATION.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.name} role="none">
                  <Link
                    to={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors
                      ${
                        active
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                          : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                      }`}
                    aria-current={active ? "page" : undefined}
                    role="menuitem"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-100 transition-colors"
              aria-label={
                isDark ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {isDark ? (
                <Sun aria-hidden="true" />
              ) : (
                <Moon aria-hidden="true" />
              )}
            </button>
            {/* Auth section */}
            <div className="flex items-center space-x-3">
              <Link
                to="/auth"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                aria-label="Sign in"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden">
          <ul
            className="px-2 pt-2 pb-3 space-y-1 list-none p-0 m-0"
            role="menubar"
          >
            {NAVIGATION.map((item) => {
              const active = isActive(item.href);
              return (
                <li key={item.name} role="none">
                  <Link
                    to={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors
                      ${
                        active
                          ? "bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300"
                          : "text-gray-700 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-400"
                      }`}
                    aria-current={active ? "page" : undefined}
                    role="menuitem"
                  >
                    {item.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
