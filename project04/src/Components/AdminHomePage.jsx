import styles from "./AdminHomePage.module.css";

const AdminHomePage = () => {
  return (
    <>
      <div className={styles.mainbox}>
        <form>
          <div className={styles.username}>
            <label htmlFor="username"> Username or E-mail</label>
            <input type="text"></input>
          </div>

          <div className={styles.password}>
            <label htmlFor="Password">Password</label>
            <input type="password"></input>
          </div>
          <div className={styles.footer_div}>
            <div className={styles.checkbox}>
              <label htmlFor="Checkbox">Remember Me</label>
              <input type="checkbox"></input>
            </div>
            <div className={styles.button}>
              <button type="button">Login</button>
            </div>
          </div>
        </form>
      </div>
      <div className={styles.footer_para}>
      <p>Lost your password</p>
      <p> Go to Home page </p>
      </div>
      
    </>
  );
};

export default AdminHomePage;
