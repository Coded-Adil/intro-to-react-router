import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email, username, phone} = user;
    const userStyle = {
        border: '2px solid Tomato',
        padding: '10px',
        margin: '20px auto',
        borderRadius: '30px',
        maxWidth: "300px",
        backgroundColor: "gray",
        color: "white"
    }
    return (
        <div style={userStyle}>
            <h2>Username: {username}</h2>
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
            <p>Phone No: {phone}</p>
            <Link to={`/users/${id}`}><button>Show Details</button></Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object
}

export default User;