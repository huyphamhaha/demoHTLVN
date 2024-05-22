import { Routes, Route, Link } from 'react-router-dom'

import Home from "./components/Homepage/Home.js";
import Contact from './components/Contact/Contact.js'
import ProvinceMainPage from './components/Province/provinceMainPage.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/provinceMainPage' element={<ProvinceMainPage/>}></Route>

      </Routes>
    </div>
  );
}

export default App;


