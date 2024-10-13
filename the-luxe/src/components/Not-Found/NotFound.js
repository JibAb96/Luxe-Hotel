import "./NotFound.css"
const NotFound = () => (
    <>
      <h1 className="not-found-title">404 - Page Not Found</h1>
        <div className="container not-found">
            <p>The page you're looking for doesn't exist.</p>
            <p>Click <a href="http://localhost:3001/">here</a> if you want to go back to the home page</p>
        </div>
    </>
  );

  export default NotFound