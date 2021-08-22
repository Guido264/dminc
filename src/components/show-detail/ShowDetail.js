import { useSelector } from "react-redux";

import { useParams } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

const ShowDetail = () => {
  const shows = useSelector((state) => state.shows.shows);
  const { id } = useParams();
  const selectedShow = Number(id);
  const show = shows.find((show) => show.show.id === selectedShow);
  
  const { name, summary, premiered, url: info } = show.show;
  const { score } = show;
  const imageUrl = show.show.image ? show.show.image.medium : null;

  const image = imageUrl ? (
    <img
      className="object-contain h-48 w-48 mx-6 shadow-lg bg-grey-100 rounded-xl"
      src={imageUrl}
      alt=""
    />
  ) : (
    <p className="font-bold my-10 px-10 dark:text-indigo-300">No image available</p>
  );

  const summaryText = summary ? (
    ReactHtmlParser(summary)
  ) : (
    <span className="dark:text-indigo-300">No summary available</span>
  );

  return (
    <div className="rounded shadow-lg pt-40 dark:text-indigo-300 z-0">
      <div className="font-bold text-purple-500 text-xl mb-6 px-7">
        Name: {name}
      </div>
      <div className="flex items-top">
        {image}
        <h3 className="my-4 ">
          <strong >Summary: </strong>
          {summaryText}
        </h3>
      </div>
      <div className="px-6 py-4">
        <h4 className="my-4 ">
          <strong>Score: </strong>
          {score.toFixed(2)}
        </h4>
        <h4 className="my-4 ">
          <strong>Premiered: </strong>
          {premiered}
        </h4>
      </div>
      <div className="px-6">
        <strong>More info: </strong>
        <a href={info} className="no-underline text-purple-500" target="_blank" rel="noreferrer">{info}</a>
      </div>
    </div>
  );
};

export default ShowDetail;
