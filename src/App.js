import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Countries from './Countries';
// import Country from './Country';
import CountryClass from './CountryClass';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route exact path='/' element={<Home/>}/>
            <Route exact path='/countries' element={<Countries/>}/>
            <Route exact path='/country/:name' element={<CountryClass/>}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
