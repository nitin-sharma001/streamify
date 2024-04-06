import Login from "./components/Login";
import Browser from "./components/Browser";
import Search from "./components/Search";
import { Route, Routes } from "react-router-dom";
import MoviePlayer from "./components/MoviePlayerComponents/MoviePlayer";
import TV from "./components/TV";
import Favourites from "./components/FavouriteComponent/Favourites";
import Movies from "./components/Movies";
function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/browse" element={<Browser />} />
          <Route path="/player/:type/:id" element={<MoviePlayer />} />
          <Route path="/search" element={<Search />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/favourite" element={<Favourites />} />
          <Route path="/lists" element={<Movies />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
