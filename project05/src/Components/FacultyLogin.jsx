import styles from "./FacultyLogin.module.css";

import { FaShareAlt } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { LuLogIn } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { FaExclamationCircle } from "react-icons/fa";
const FacultyLogin = () => {
  return (
    <>
      <div className={styles.header_div}>
        <div className={styles.header_div1}>Faculty Login</div>
        <div className={styles.header_div2}>
        <FaShareAlt /> Share <CiFacebook /> <CiTwitter />
        </div>
      </div>
      <div className={styles.body_div}>
            <form>
                <div className={styles.form_header}>
                <LuLogIn /> Faculty Login
                </div>
                <div className={styles.form_body}>
                <label htmlFor="Username">Username</label>
                   <input type="text"></input>
                   <label htmlFor="Password">Password</label>
                   <input type = "password"></input>
                </div>
                
                <div className={styles.form_footer}>
                       <button ><FaCheck />Login</button>
                       <button ><FaExclamationCircle />Forget Password</button>
                </div>
            </form>
      </div>
    </>
  );
};

export default FacultyLogin;
