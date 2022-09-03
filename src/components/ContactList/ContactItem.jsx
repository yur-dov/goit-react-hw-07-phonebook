import { useDeleteContactMutation } from '../../redux/getContactsApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './ContactList.module.css'

const ContactItem = ({ id, name, phone }) => {
  const [deleteContact] = useDeleteContactMutation();
  const handleDeleteContact = async id => {
    await deleteContact(id);
    toast.error('Deleted', {
      duration: 2000,
    });
  };

  return (
    <li key={id} className={css.list_item}>
      <p>
        {name}: {phone}
      </p>
      <button
        
        type="button"
        onClick={() => handleDeleteContact(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;
