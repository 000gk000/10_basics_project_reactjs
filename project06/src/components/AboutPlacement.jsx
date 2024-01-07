import styles from "./AboutPlacement.module.css";
import { FaHome } from "react-icons/fa";
import { MdDoubleArrow } from "react-icons/md";

const AboutPlacement = () => {
  return (
    <>
      <div className={styles.headerdiv}>
        <a href="google.com">
          <FaHome className={styles.Homeicon} />
          Home
        </a>{" "}
        / About Placement
      </div>

      <div className={styles.tablediv}>
        <h3>Training and Placement</h3>
        <p>
          {" "}
          <a href="google.com">
            {" "}
            <MdDoubleArrow className={styles.arrowicon} />
            About placement
          </a>
        </p>
        <hr></hr>
        <p>
          {" "}
          <a href="google.com">
            <MdDoubleArrow className={styles.arrowicon} /> Placement Brochure
          </a>
        </p>
        <hr></hr>
        <p>
          {" "}
          <a href="google.com">
            {" "}
            <MdDoubleArrow className={styles.arrowicon} />
            Placement List
          </a>
        </p>
        <hr></hr>
        <p>
          {" "}
          <a href="google.com">
            {" "}
            <MdDoubleArrow className={styles.arrowicon} />
            Gate and CAT Qualified List
          </a>
        </p>
        <hr></hr>
        <p>
          {" "}
          <a href="google.com">
            <MdDoubleArrow className={styles.arrowicon} /> Other Competitive
            Achievement
          </a>
        </p>
        <hr></hr>
        <p>
          {" "}
          <a href="google.com">
            <MdDoubleArrow className={styles.arrowicon} /> Student Experience-
            Roadmap,guidance
          </a>
        </p>
      </div>

      <div className={styles.bodydiv}>
        <h3>Placement</h3>
        <p>
          DCE,Darbhanga with its glorious past, has been rendering yeoman
          service to the nation and engineering fraternity by channelising the
          youthful talent from Bihar and elsewhere and producing brilliant
          engineers. Our well placed alumni are a proud testimony to this. They
          have done the institution proud and carved a niche for themselves, in
          India and abroad. In these fast changing times, when demands are many,
          challenges are multifold and patience in nano-seconds, we are
          conscious of the responsibilities on our shoulders. Our students with
          the cutting edge of technology, are always alert and equipped with the
          most up-to-date knowledge. DCE not just provide exposure to technical
          aspect but also flames the igniting thought and determination to
          become the captain of their problems in the rapid changing
          technological arena. I take the opportunity to invite you for the
          recruitment of fresh talents. We would like to have you on our campus
          and explore our young talents who put their heart, mind and soul to
          the smallest act of their work. Looking forward to seeing you on DCE
          Campus.
        </p>
      </div>
      <div className={styles.bodydiv2}>
        <p>TEAM MEMBERS</p>
        <table>
           <th>sr.no</th>
           <th>Name</th>
           <th>designation</th>
           <th>Mobile no.</th>
           <th> Email id </th>
           <th>Image</th>
           <tr>
            <td>1</td>
            <td>Praful Chandra</td>
            <td>Training and placement officer</td>
            <td>+91-8884911159</td>
            <td>prafuldce@gmail.com</td>
            <td><img src=".\images\praful_sir.jpg" className={styles.images}></img></td>
           </tr>
        </table>
      </div>
    </>
  );
};

export default AboutPlacement;
