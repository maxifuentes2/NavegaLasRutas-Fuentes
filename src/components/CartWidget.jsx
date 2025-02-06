import './CartWidget.css'

export default function CartWidget({ cartCount }) {
    return (
        <div className="carrito-contenedor">
            <img src="/carrito.svg" alt="Widget del carrito de compras" className="carrito" />
            <span className="carrito-cantidad">{cartCount}</span>
        </div>
    );
}

