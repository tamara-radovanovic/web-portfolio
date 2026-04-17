import { Link } from "react-router-dom";

function NotFoundPage(){
    return(
        <div className="p-8">
            <h1 className="text-2xl">404 - Page Not Found</h1>
            <Link to="/" className="text-blue-500 underline mt-4 block">
                Go to Home Page
            </Link>
        </div>
    )
}
 export default NotFoundPage;