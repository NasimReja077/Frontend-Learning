// useNavigate 
// Returns a function that lets you navigate programmatically in the browser in response to user interactions or effects.
// It's often better to use redirect in action/loader functions than this hook.
// use useNavigate hook for go back 1 step previous page
import { useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage = () =>{
     const error = useRouteError() //useRouteError hook use for error haldaling
     // console.log();
     const navigate = useNavigate();

     const handleGoBack = () => {
          navigate(-1); // back to previous page
          //navigate(/); // "/" use for back to root page
     };

     if(error.status === 404){
          return(
          <section className=" error-section">
        <div id="error-text">
          <figure>
            <img
              src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
              alt="404 page"
            />
          </figure>
          <div className="text-center">
            <p className="p-a">
              . The page you were looking for could not be found
            </p>
            <p className="p-b">... Back to previous page</p>
          </div>
        </div>
        {/* <NavLink to="/" className="btn">
          Go Back To HomePage
        </NavLink> */}
        <button className="btn" onClick={handleGoBack}>
          Go Back
        </button>
      </section>
     )
}
console.log(error);

  return <h1> The page you are looking does not exist</h1>;
}