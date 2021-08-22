import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";

const Header = () => {
  const { pathname: currentPath } = useLocation();
  let inShowsSection = false;
  if (currentPath === "/shows") {
    inShowsSection = true;
  }

  return (
    <header>
      <div className="fixed block top-0 bg-purple-200 dark:bg-gray-800 w-full">
        <h1 className="bg-purple-300 text-gray-700 text-center dark:bg-gray-700 dark:text-indigo-300 font-mono text-5xl shadow-xl font-medium m-auto mb-2 p-5">
          {inShowsSection ? "Shows List" : "Show Detail"}
        </h1>
        <Navigation inShowsSection={inShowsSection} />
      </div>
    </header>
  );
};

export default Header;
