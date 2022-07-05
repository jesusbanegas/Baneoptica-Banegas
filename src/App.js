import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <body>
      <NavBar />
      <ItemListContainer greeting={'Saludos :D'} />
    </body>
  );
}

export default App;
