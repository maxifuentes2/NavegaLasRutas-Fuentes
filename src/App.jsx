import { Routes, Route } from 'react-router-dom';
import './App.css';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import NavBar from './components/NavBar';

function App() {
    const mensaje = "Bienvenidos a la tienda de UrbanVerb";

    return (
        <>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer mensaje={mensaje} />} />
                <Route path="/category/:category" element={<ItemListContainer mensaje={mensaje} />} />
                <Route path="/product/:id" element={<ItemDetailContainer />} />
                <Route path="*" element={<h2 className='error404'>404 - Página no encontrada</h2>} />
            </Routes>
        </>
    );
}

export default App;


