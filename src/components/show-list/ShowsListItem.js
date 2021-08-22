import { useHistory } from "react-router-dom";

const ShowListItem = ({ name, id, genres }) => {
 const history = useHistory();
  const onSelect = () => {
    if (id) history.push(`/shows/${id}`)
  }

  const genresList = genres ? (
    genres.map((genre, index) => (
      <span
        key={index}
        className="inline-block bg-purple-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
      >
        {genre}
      </span>
    ))
  ) : (
    <p className="text-center">No genres available</p>
  );

  return (
    <li className="bg-indigo-200 dark:bg-gray-600 text-center m-5 rounded-xl p-6 cursor-pointer shadow-lg" onClick={onSelect}>
      <h3 className="font-semibold mb-3 dark:text-indigo-300 text-gray-800">{name}</h3>
      {genresList}
    </li>
  );
};

export default ShowListItem;
