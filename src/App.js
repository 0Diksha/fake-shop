import Header from "./containers/Header";
import {BrowserRouter , Routes, Route} from 'react-router-dom';
import { routes } from './router/Routes/index';
import ProductListing from "./containers/ProductListing";
import './App.css';

function App() {
  return (
    <div className="App">
    
    <BrowserRouter>
      <Header />
      <Routes>
      {routes?.map((item)=>{
        return <Route path= {item.link}  element = {item.element} key={item.link} />;
      })}
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
