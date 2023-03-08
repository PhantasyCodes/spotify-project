import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './routes/Home'
import Playlist from './routes/Playlist';
import { AnimatePresence } from 'framer-motion';
import Submit from './routes/Submit';


function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/playlists' element={<Playlist />} />
          <Route path='/submit' element={<Submit />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;

