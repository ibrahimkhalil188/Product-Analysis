
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import HomePage from './Component/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/' element={<HomePage></HomePage>}
        />
        <Route path='home' element={<HomePage></HomePage>}
        />

      </Routes>

    </div>
  );
}

export default App;
