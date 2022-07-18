import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemCount from './components/ItemCount/ItemCount';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting={'Saludos :D'} />}/>ç
        <Route path='graduadas' element={<ItemCount />}/>
        <Route path='details/:id' element={<ItemDetailContainer />}/>
        <Route path='*' element={<div>404 Not Found</div>}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
