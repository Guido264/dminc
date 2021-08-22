import React, { useEffect, Suspense, lazy } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";

import { errorActions } from "./store/error";
import { showsActions } from "./store/shows";

const Header = lazy(() => import("./components/header/Header"));
const Shows = lazy(() => import("./components/show-list/Shows"));
const ShowDetail = lazy(() => import("./components/show-detail/ShowDetail"));

const Loading = () => {
  return (
    <h1 className="text-purple-600 dark:text-purple-300 text-4xl text-center font-semibold mt-20">
      LOADING....
    </h1>
  );
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "http://api.tvmaze.com/search/shows?q=girls"
        );
        if (!response.ok) {
          throw new Error("Something went wrong!");
        }
        const data = await response.json();
        dispatch(showsActions.shows(data));
      } catch (error) {
        dispatch(errorActions.error(error.message));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div className="bg-gray-200 dark:bg-black transition duration-500">
      <Suspense fallback={<Loading />}>
        <Header />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/shows" />
          </Route>
          <Route path="/shows" exact>
            <Shows />
          </Route>
          <Route path="/shows/:id">
            <ShowDetail />
          </Route>
          <Route path="*">
            <h1 className="w-full mt-48 text-8xl bg-gray-100 dark:bg-gray-800 dark:text-purple-300 text-purple-600 p-5 text-center">
              Not found
            </h1>
          </Route>
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
