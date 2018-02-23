import React, { Component } from 'react';
import '../css/style.css';

import ContactList from './ContactList';

class App extends Component {

    state = {
        contacts: [
            {
                id: '1',
                name: 'Ann Arrante',
                phone: '234 324 345',
                email: 'anna@aol.com',
                categories: 'work, family'
            },
            {
                id: '2',
                name: 'Monica Pascale',
                phone: '454 324 345',
                email: 'monicap@gmail.com',
                categories: 'family'
            },
            {
                id: '3',
                name: 'Jessica Hudson',
                phone: '454 333 345',
                email: 'jessica333@gmail.com',
                categories: 'family'
            }
        ]
    };

    render() {
        return (
            <React.Fragment>
                <ContactList
                    contacts={ this.state.contacts }
                />
            </React.Fragment>
        );
    }
}

export default App;