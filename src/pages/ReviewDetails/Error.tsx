import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  let errorMessage = "Unknown Error";

  if (error instanceof TypeError) {
    // Handles network errors or misconfigured CORS
    errorMessage = `${error.name}: ${error.message}`;
    console.error(error);
  } else if (isRouteErrorResponse(error)) {
    // Handles 4xx and 5xx status codes
    errorMessage = `${error.status}: ${error.statusText}`;
  }

  return (
    <div>
      <h2>An error has occurred.</h2>
      <p>
        <i>{errorMessage}</i>
      </p>
    </div>
  );
}
