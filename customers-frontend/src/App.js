import logo from './logo.svg';
import './App.css';
import ListCustomersComponent from './components/ListCustomersComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCustomerComponent from './components/AddCustomerComponent';

function App() {
  return (
    <div>
      <BrowserRouter>
      <HeaderComponent/>
      <div className='container'>
        <Routes>
          <Route exact path='/' element={<ListCustomersComponent/>}></Route>
          <Route path='/customers' element={<ListCustomersComponent/>}></Route>
          <Route path='/add-customer' element={<AddCustomerComponent/>}></Route>
          <Route path='/edit-customer/:id' element={<AddCustomerComponent/>}></Route>
          
        </Routes>
      </div>
      <FooterComponent/>
      </BrowserRouter>
    </div>
  );
}

export default App;
