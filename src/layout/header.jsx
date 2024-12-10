import { Link } from 'react-router-dom'
import './header.css'
const Header = () => {

    return (
        <>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/user">User</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/register">Register</Link></li>
                    <li><Link to="/login">Login</Link></li>

                </ul></div>
        </>
    )
}
export default Header