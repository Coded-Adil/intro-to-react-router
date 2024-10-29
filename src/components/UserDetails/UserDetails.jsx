import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    const {name, website} = user;
    return (
        <div>
            <h2>User Details are here</h2>
            <h4>Name: {name}</h4>
            <p>Website: {website}</p>            
        </div>
    );
};

export default UserDetails;