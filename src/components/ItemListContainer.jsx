import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCategory, products } from '../../AsyncMock'; 
import ProductCard from './ProductCard';
import './ItemListContainer.css';

export default function ItemListContainer({ mensaje }) {
    const { category } = useParams(); 
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        setLoading(true); 
        if (category) {
            getCategory(category).then((result) => {
                setFilteredProducts(result); 
                setLoading(false); 
            });
        } else {
            setFilteredProducts(products); 
            setLoading(false); 
        }
    }, [category]); 

    if (loading) {
        return <p className="cargando">Cargando productos...</p>; 
    }

    const capitalizar = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <main>
            <h1>{category ? capitalizar(category) : mensaje}</h1>
            <div className="product-list">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                ) : (
                    <p>No hay productos disponibles en esta categoría.</p> 
                )}
            </div>
        </main>
    );
}








