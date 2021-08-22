import { useSelector } from "react-redux";

import ShowListItem from "./ShowsListItem";

const ShowList = () => {
  const shows = useSelector((state) => state.shows.shows);
  return (
      <ul className="font-sans text-lg text-center mx-auto p-10 grid grid-cols-2 gap-4">
        {shows.map((show) => (
          <ShowListItem
            key={show.show.id}
            id={show.show.id}
            name={show.show.name}
            genres={show.show.genres}
          />
        ))}
      </ul>
  );
};

export default ShowList;
