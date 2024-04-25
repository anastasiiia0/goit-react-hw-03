import css from './Contact.module.css';
import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';

export default function Contact({ contact: { id, name, number }, onDelete }) {
  return (
    <div className={css.contactsListItem}>
      <div className={css.contactInfoWrap}>
        <p className={css.contactInfo}>
          <FaUser className={css.contactIcon} />
          {name}
        </p>
        <p className={css.contactInfo}>
          <FaPhone className={css.contactIcon} />
          {number}
        </p>
      </div>
      <button
        type="button"
        className={css.contactDeleteBtn}
        onClick={() => onDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
