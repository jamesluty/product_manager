import {Routes, Route, Link} from 'react-router-dom'
import './App.css';
import Form from './Components/Form'

function App() {
  return (
    <div className="App">
      <Form/>
      <Routes>
        <Route path="/form" element={<Form/>}/>
      </Routes>
    </div>
  );
}

export default App;
