import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import Button from "../Button/Button"
 import styles from "./ContactForm.module.css"
const ContactForm = () => {
    return (
        <section className={styles.container}>
            <div className={styles.contact_form}>
                <Button  text="VIA CHAT SUPPORT"
                icon={<MdMessage/>} />
                <Button  text="VIA CALL"
                icon={<FaPhoneAlt />} />
                
            </div>
            <div className={styles.contact_image}>

            </div>
        </section>
    )
}
export default ContactForm