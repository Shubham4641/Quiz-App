import { Link } from '@material-ui/core';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className = {classes.Header}>
            <Link to="/">Shubham Quiz</Link>
            <hr />
        </div>
    );
};

export default Header;