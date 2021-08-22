import { Link } from "react-router-dom";

const NavigationLink = () => {
  return (
    <span className="my-4">
      <Link
        className="bg-transparent dark:hover:bg-purple-300 hover:bg-purple-600 dark:text-purple-500 text-purple-600 font-semibold hover:text-white py-2 px-4 border dark:border-purple-300 border-purple-600 hover:border-purple-600 rounded mx-5"
        to="/shows"
      >
        Back to Shows
      </Link>
    </span>
  );
};

export default NavigationLink;
