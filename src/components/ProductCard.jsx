import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-details">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-price">Precio: ${product.price}</p>
                <button className="add-to-cart-btn">Agregar al carrito</button>
                <Link to={`/product/${product.id}`} className="view-details-btn">Ver más detalles</Link>
            </div>
        </div>
    );
}

export default ProductCard;


