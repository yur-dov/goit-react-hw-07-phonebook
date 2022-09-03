import { useState } from "react";
import css from './ContactForm.module.css'
import {useAddContactMutation} from '../../redux/getContactsApi'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { nanoid } from "@reduxjs/toolkit";

export default function ContactForm() {
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const [addContact] = useAddContactMutation();
    
const handleChange = eve => {
if (eve.target.name === 'name') {
      setName(eve.target.value);
    }

    if (eve.target.name === 'number') {
      setNumber(eve.target.value);
    }
}

  const handleSubmit = async e => {
    e.preventDefault();
    const contact = {
      id: nanoid(4),
      name,
      number,
    };
    addContact(contact);
     toast.success(`Done`);
      reset();
  };

const reset = () => {
    setName('');
    setNumber('');
};
  

return (
    <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
            Name:
            <input
                className={css.input}
                value={name}
                type="text"
                onChange={handleChange}
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                />
        </label>
        <label className={css.label}>
            Number:
            <input
           className={css.input}
                type="tel"
                value={number}
                onChange={handleChange}
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                />
            </label>
    <button className={css.btn_add} type="submit">+Add</button>
    <ToastContainer theme="colored" autoClose={2000} />
    </form>
)


// ContactForm.propTypes = {
//   addNewContact: PropTypes.func.isRequired,
};