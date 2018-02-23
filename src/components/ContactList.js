import React, { Component } from 'react';
import AddContactForm from "./AddContactForm";

class ContactList extends Component {
    render() {

        const { contacts } = this.props;

        return (
            <React.Fragment>
                <AddContactForm/>
                <strong>Contact List:</strong>
                <ul>
                    { contacts.map(contact => {

                        let contactDisplay = contact.categories.replace(' ','').split(',');

                        for (let i=0; i<contactDisplay.length; i++){
                            contactDisplay[i]='['+contactDisplay[i]+']';
                        }

                        contactDisplay = contactDisplay.join(', ');

                        return (
                            <li key={ contact.id }>
                                <strong>{ contact.name }</strong><br/>
                                { contact.phone }, { contact.email }<br/>
                                { contactDisplay }<br/>

                                <button>remove</button>
                                <button>edit</button>

                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        );

    }
}

export default ContactList;