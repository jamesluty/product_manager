import {Routes, Route} from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import View from './Components/View';
import Edit from './Components/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<View/>}/>
        <Route path="/:id/edit" element={<Edit/>}/>
      </Routes>
    </div>
  );
}

export default App;
