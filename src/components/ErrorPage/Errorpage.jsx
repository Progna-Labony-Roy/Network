import { Link } from "react-router-dom";

const errorpage = () => {
    return (
        <div>
            <p>Error</p>
            <Link to='/'>Go back to home</Link>
        </div>
    );
};

export default errorpage;