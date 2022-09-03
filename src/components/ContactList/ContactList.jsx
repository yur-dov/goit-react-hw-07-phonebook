import ContactItem from './ContactItem'

const ContactList = ({ contacts }) => {
        return (
                <ul>
                        {contacts && contacts.map(({ name, phone, id }) => (
                                <ContactItem
                                key={id}
                                id={id}
                                data={contacts}
                                name={name}
                                phone={phone}/>
                        ))}
                </ul>
        )
}
export default ContactList;