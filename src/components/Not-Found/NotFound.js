import styles from "./NotFound.module.css";
const appURL = process.env.REACT_APP_FRONT_END_URL;
const NotFound = () => (
  <>
    <h1 className={`${styles.title}`}>404 - Page Not Found</h1>
    <div className={`${styles.content} container`}>
      <p>The page you're looking for doesn't exist.</p>
      <p>
        Click <a href={`${appURL}`}>here</a> if you want to go back
        to the home page
      </p>
    </div>
  </>
);

export default NotFound;
