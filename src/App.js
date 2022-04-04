
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Component/About/About';
import Blogs from './Component/Blogs/Blogs';
import DashBoard from './Component/DashBoard/DashBoard';
import Header from './Component/Header/Header';
import HomePage from './Component/HomePage/HomePage';
import NotFound from './Component/NotFound/NotFound';
import Reviews from './Component/Reviews/Reviews';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='home' element={<HomePage />} />
        <Route path='review' element={<Reviews />} />
        <Route path='dashboard' element={<DashBoard />} />
        <Route path='blogs' element={<Blogs />} />
        <Route path='about' element={<About />} />
        <Route path='*' element={<NotFound />} />

      </Routes>

    </div>
  );
}

export default App;
