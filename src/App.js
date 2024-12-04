import React  from 'react'
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Landing from './stores/pages/landing';
import MobilePage from './stores/pages/MobilePage';
import ComputerPage from './stores/pages/ComputerPage';
import WatchesPage from './stores/pages/WatchesPage';
import TvPage from './stores/pages/TvPage';
import SpeakerPage from './stores/pages/SpeakerPage';
import AcPage from './stores/pages/AcPage';
import BookPage from './stores/pages/BookPage';
import FridgePage from './stores/pages/FridgePage';
import FurniturePage from './stores/pages/FurniturePage';
import MenPage from './stores/pages/MenPage';
import WomanPage from './stores/pages/WomanPage';
import KitchenPage from './stores/pages/KitchenPage';
import MobileSingle from './stores/SingleProduct/MobileSingle';
import ComputerSingle from './stores/SingleProduct/ComputerSingle';
import FridgeSingle from './stores/SingleProduct/FridgeSingle';
import WatchSingle from './stores/SingleProduct/WatchSingle';
import TvSingle from './stores/SingleProduct/TvSingle';
import SpeakerSingle from './stores/SingleProduct/SpeakerSingle';
import AcSingle from './stores/SingleProduct/AcSingle';
import BookSingle from './stores/SingleProduct/BookSingle';
import FurnitureSingle from './stores/SingleProduct/FurnitureSingle';
import MenSingle from './stores/SingleProduct/MenSingle';
import WomenSingle from './stores/SingleProduct/WomenSingle';
import KitchenSingle from './stores/SingleProduct/KitchenSingle';
import UserCart from './stores/Cart/UserCart';

function App() {
  return (
    <div className="App">
      <Routes>

        {/*----Navbar Routing----*/}

        <Route path='/' element = { <Landing /> } />
        <Route path='/Mobiles' element = { <MobilePage />} />
        <Route path='/Computers' element = { <ComputerPage />} />
        <Route path='/Watches' element = { <WatchesPage />} />
        <Route path='/TV' element = { <TvPage />} />
        <Route path='/Speakers' element = { <SpeakerPage />} />
        <Route path='/AC' element = { <AcPage />} />
        <Route path='/Books' element = { <BookPage />} />
        <Route path='/Fridges' element = { <FridgePage />} />
        <Route path='/Furnitures' element = { <FurniturePage />} />
        <Route path='/Men Fashion' element = { <MenPage />} />
        <Route path='/Women Fashion' element = { <WomanPage />} />
        <Route path='/Kitchen' element = { <KitchenPage />} />

        {/*--Single Product -->*/}

        <Route path='/Mobiles/:id' element={<MobileSingle />} />
        <Route path='/Computers/:id' element={<ComputerSingle />} />
        <Route path='/Watches/:id' element={<WatchSingle />} />
        <Route path='/TV/:id' element={<TvSingle />} />
        <Route path='/Speakers/:id' element={<SpeakerSingle />} />
        <Route path='/Ac/:id' element={<AcSingle />} />
        <Route path='/Books/:id' element={<BookSingle />} />
        <Route path='/Fridges/:id' element={<FridgeSingle />} />
        <Route path='/Furnitures/:id' element={<FurnitureSingle />} />
        <Route path='/Men Fashion/:id' element={<MenSingle />} />
        <Route path='/Women Fashion/:id' element={<WomenSingle />} />
        <Route path='/Kitchen/:id' element={<KitchenSingle />} />

        {/*----Cart----*/}

        <Route path='/Cart' element = {<UserCart/>} />

      </Routes>
    </div>
  );
}

export default App;
