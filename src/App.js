import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Home';
import Header from './Header';
import Countries from './Countries';
// import Country from './Country';
import CountryClass from './CountryClass';
import NotFound from './NotFound';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Header/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/countries' element={<Countries/>}/>
            <Route path='/country/:name' element={<CountryClass/>}/>
            <Route path='*' element={<NotFound/>}/>

          </Routes>
          <Footer/>
        </BrowserRouter>
    </div>
  );
}

export default App;
