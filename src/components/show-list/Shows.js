import { useSelector } from "react-redux";

import ShowsList from "./ShowsList";

const Shows = () => {
    const shows = useSelector((state) => state.shows.shows);
    const error = useSelector((state) => state.error.error);
    let content = null;
  
    if (shows.length > 0) {
      content = <ShowsList />;
    }
  
    if (error) {
      content = (
        <p className="w-full text-8xl bg-gray-100 dark:bg-gray-800 dark:text-purple-300 text-purple-600 text-center mt-48 p-5">
          {error}
        </p>
      );
    }
  
    return <div className="mt-36">{content}</div>;
  };

  export default Shows;