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
                                { contact.name }
                            </li>
                        )
                    })}
                </ul>
            </React.Fragment>
        );

    }
}

export default ContactList;