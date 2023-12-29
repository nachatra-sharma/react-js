import { useRouteError, Link } from "react-router-dom";
import error from "../../error.png";
const ErrorPage = () => {
  const err = useRouteError();
  const { status, statusText } = err;
  return (
    <div className="error-container">
      <img src={error} alt="error-image" />
      <h2>We'll be back shortly</h2>
      <p>We are fixing a temporary glitch. Sorry for the inconvenience.</p>
      <Link to="/">
        <button className="error-btn">Go Back</button>
      </Link>
      <span>
        Error: {status} occured - {statusText}!!!
      </span>
    </div>
  );
};

export default ErrorPage;
