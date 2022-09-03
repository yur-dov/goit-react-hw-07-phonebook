// import React from 'react';
import ContactForm from '../ContactForm/ContactForm'
import {FilterForm} from '../FilterForm/FilterForm'
import ContactList from '../ContactList/ContactList'
import { useGetContactsQuery } from '../../redux/getContactsApi';
import { useState } from 'react';
import css from './App.module.css'

export const App = () => {
  const [filter, setFilter] = useState('');
  const { data } = useGetContactsQuery();
  console.log(data);
  const getFilteredContacts = () => {
    if (data) {
      
      if (data.length !== 0) {
        return data.filter(contacts =>
          contacts.name.toLowerCase().includes(filter.toLowerCase())
        );
      }
    }
    return;
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  return (
    <div className={css.container}>
      <h1 className={css.title}>PhoneBook</h1>
      <div className={css.add_contact}>
        <h2 className={css.title_add}>Add Contact</h2>
        <ContactForm />
        <h2 className={css.title_search}>Search contact</h2>
        <FilterForm filter={filter} onChange={changeFilter} />
      </div>
      <div className={css.contacts}>
         <h2 className={css.title_contact}>Contacts</h2>
        <ContactList contacts={getFilteredContacts()} />
      </div>
    </div>
  );
};
