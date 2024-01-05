import styles from "./FacultyLogin.module.css";

import { FaShareAlt } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { LuLogIn } from "react-icons/lu";
import { FaCheck } from "react-icons/fa6";
import { FaExclamationCircle } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
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
            <input type="password"></input>
          </div>

          <div className={styles.form_footer}>
            <button>
              <FaCheck />
              Login
            </button>
            <button>
              <FaExclamationCircle />
              Forget Password
            </button>
          </div>
        </form>
      </div>
      <div className={styles.body2_div}>
        <div className={styles.first2divofbody2_div}>
          <div className={styles.courses}>
            <ul>
              <li>Admission</li>
              <li>Disciplinary Rule</li>
              <li>Anti Ragging</li>
              <li>Alumni</li>
              <li>placement</li>
            </ul>
          </div>
          <hr></hr>
          <div className={styles.departments}>
            <ul>
              <li>Civil Engineering</li>
              <li>Mechanical Engineering</li>
              <li>CSE</li>
              <li>EEE</li>
              <li>Fire & Safety Engineering</li>
              <li>Science & Humanities</li>
            </ul>
          </div>
          <hr></hr>
        </div>
        <div className={styles.last2divofbody2_div}>
          <div className={styles.location_div}>
            <p>Location</p>
            <p>
              Darbhanga College of Engineering, <br></br>
              Mabbi, P.O. Lal Sahpur, Darbhanga,<br></br>
              Bihar – 846005
            </p>

            <button>
              <IoLocationOutline />
              Main campus
            </button>
          </div>
          <hr></hr>
          <div className={styles.contact}>
            <p>
              <FaPhoneAlt className={styles.call} />
              Call us on:<br></br>06272-255255<br></br>
              <IoMdMail />
              Mail us on: <br></br>dcedbg@rediffmail.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FacultyLogin;
