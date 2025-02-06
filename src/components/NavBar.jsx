import { Link } from 'react-router-dom';
import './NavBar.css';
import ButtonComponent from './ButtonComponent';
import Logo from './Logo';
import CartWidget from './CartWidget';

export default function NavBar() {
    return (
        <header>
            <nav>
                <Link to="/">
                    <Logo />
                </Link>
                <div>
                    <Link to="/category/remeras">
                        <ButtonComponent text="Remeras" />
                    </Link>
                    <Link to="/category/hoodies">
                        <ButtonComponent text="Hoodies" />
                    </Link>
                    <Link to="/category/pantalones">
                        <ButtonComponent text="Pantalones" />
                    </Link>
                </div>
                <CartWidget cartCount={3} />
            </nav>           
        </header>    
    );
}


