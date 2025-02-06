import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../AsyncMock'; 
import ItemCount from './ItemCount'; 
import './ItemDetailContainer.css';

export default function ItemDetailContainer() {
    const { id } = useParams(); 
    const products = useProducts(); 
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const productDetail = products.find((p) => p.id === parseInt(id)); 
        setProduct(productDetail);
    }, [id, products]);

    if (!product) return <p>Producto no encontrado.</p>;

    const handleAddToCart = (count) => {
        alert(`Agregaste ${count} unidades de ${product.name} al carrito.`);
    };

    return (
        <div className="item-detail-container">
            <img src={product.image} alt={product.name} className="product-image" />
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p className="price">Precio: ${product.price}</p>
            <ItemCount stock={10} onAdd={handleAddToCart} /> 
        </div>
    );
}









