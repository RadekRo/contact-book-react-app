import React, { Component } from 'react';

class ContactList extends Component {

    handleRemoveClick = event => {
        const contactId = event.target.dataset.contactId;
        this.props.removeContact(contactId)
    };

    render() {

        const { contacts } = this.props;

        return (
            <React.Fragment>
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

                                <button
                                    onClick={ this.handleRemoveClick }
                                    data-contact-id={ contact.id }>
                                    remove
                                </button>
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