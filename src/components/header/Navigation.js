import ThemeButton from "../../UI/ThemeButton";
import NavigationLink from "./NavigationLink";

const Navigation = ({ inShowsSection }) => {
  return (
    <div className="flex justify-between shadow-md">
      <span className="p-2">
        <ThemeButton />
      </span>
      {!inShowsSection && <NavigationLink />}
    </div>
  );
};

export default Navigation;
