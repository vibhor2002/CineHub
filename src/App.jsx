import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
  const [query, setQuery] = useState("");

  return (
    <>
      <Header setQuery={setQuery} />
      <Outlet context={{ query }} />
    </>
  );
}

export default App;
