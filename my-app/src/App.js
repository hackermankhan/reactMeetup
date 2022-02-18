import React from 'react'
import { Route, Switch, Routes, Link } from 'react-router-dom'
import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetups';
import MainNavigation from './components/layouts/MainNavigation';

function App() {
  return (
    <div>
      <MainNavigation />
      <Routes>
        <Route path='/' element={<AllMeetupsPage />} />
        <Route path='/favorites' element={<FavoritesPage />} />
        <Route path='/new-meetup' element={<NewMeetupsPage />} />
      </Routes>
    </div>
  );
}

export default App;
