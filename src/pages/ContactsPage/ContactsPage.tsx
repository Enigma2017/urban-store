import Icon from '../../components/Icon/Icon';
import Logo from '../../components/Logo/Logo';
import styles from './ContactsPage.module.scss';

const ContactsPage = () => {
  return (
    <main>
      <h2>Contacts | space</h2>
      <div className={styles.content}>
        <div className={styles.info}>
          <h2>Contacts</h2>
          <div className={styles.contacts}>
            <div className={styles.socials}>
              <Icon icon="instagram" size={36} className="inst" />
              <Icon icon="twitter" size={36} />
              <Icon icon="facebook" size={36} />
            </div>
            <span className="body-medium-regular">urbanzen@help.com</span>
          </div>
        </div>
        <div className={styles.logo}>
          <Logo variant="dark" />
        </div>
      </div>
    </main>
  );
};

export default ContactsPage;
