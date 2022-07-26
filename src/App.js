import "./App.css";
import { Home } from "./views/Home";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { MovieDetail } from "./views/MovieDetail";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movie">
          <Route path=":id" element={<MovieDetail/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
