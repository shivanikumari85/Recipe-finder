import {Menu} from 'semantic-ui-react';
import logo from '../../assets/cooking.png';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return <Menu borderless fixed="top">
        <img src={logo} alt="logo" style= {{width:50}}/>
    <Menu.Item name= "Home" as ={Link} to="/" />
    <Menu.Item name = "Recipes"as = {Link} to= "/recipes" />
    </Menu>
}
export default NavBar;