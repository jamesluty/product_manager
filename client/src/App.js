import {Routes, Route} from 'react-router-dom'
import './App.css';
import Home from './Components/Home'
import View from './Components/View';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<View/>}/>
      </Routes>
    </div>
  );
}

export default App;
