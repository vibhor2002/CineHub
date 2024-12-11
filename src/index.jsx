import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Error from "./components/Error.jsx";
import Home from "./components/Home.jsx";
import Trending from "./components/Trending.jsx";
import MoviesList from "./components/MoviesList.jsx";
import SeriesList from "./components/SeriesList.jsx";
import Favorites from "./components/Favorites.jsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<Error />} />
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/trending" element={<Trending />} />
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/series" element={<SeriesList />} />
        <Route path="/favorites" element={<Favorites />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
