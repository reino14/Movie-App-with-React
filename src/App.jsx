import "./css/App.css";
import Favorites from "./pages/Favorite";
import Home from "./pages/Home";
import Navbar from "./components/NavBar";
import { Routes, Route } from 'react-router-dom';
import {MovieProvider} from "./contexts/MovieContext";

function App() {
  return (
    <div>
      <MovieProvider>
       <Navbar />
        <main className='main-content'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </main>
    </MovieProvider>
    </div>
  );
}

export default App;
