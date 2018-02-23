import React, {Component} from 'react';

class ContactList extends Component {
    render() {

        const { contacts } = this.props;

        return (
            <React.Fragment>
                <strong>Contact List:</strong>
                <ul>
                    { contacts.map(contact => {
                        return (
                            <li key={ contact.id }>
                                <strong>{ contact.name }</strong><br/>
                                { contact.phone }, { contact.email }
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        );

    }
}

export default ContactList;