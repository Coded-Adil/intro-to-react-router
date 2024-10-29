import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
    return (
        <div>
            <h4>Oops!!!</h4>
            <p>{error.statusText || error.message}</p>
            {
                error.status === 404 && <div>
                    <p>Press the Home Button</p>
                    <Link to={'/'}><button>Home</button></Link>
                </div>
            }
        </div>
    );
};

export default ErrorPage;