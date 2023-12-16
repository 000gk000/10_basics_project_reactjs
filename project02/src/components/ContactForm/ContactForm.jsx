import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
const ContactForm = () => {
  return (
    <>
    
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button
            
            text="VIA CHAT SUPPORT"
            icon={<MdMessage fontSize="24px" />}
          />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>

        <Button
        isOutline={true}
          text=" VIA EMAIL"
          icon={<MdOutlineMarkEmailUnread fontSize="24px" />}
        />
        <form>
           
           <div className={styles.form_control}>
            <label htmlFor="Name"> Name </label>
            <input type="text" name="Name"></input>
            </div>
            <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="text" name="email"></input>
             </div>
             <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text"></textarea>
           </div>

          

      </form>
      </div>
      <div className={styles.contact_image}></div>
      <img src=".\image\Service 24_7-pana 1.svg" alt="NoImage"></img>
     
    </section>
   
    </>
   
  );
};
export default ContactForm;
