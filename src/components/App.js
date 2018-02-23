import React, {Component} from 'react';

import ContactList from './ContactList';

class App extends Component {

    state = {
        contacts: [
            {
                name: 'Ann Arrante',
                phone: '234 324 345',
                email: 'anna@aol.com',
                categories: 'work, family'
            },
            {
                name: 'Monica Pascale',
                phone: '454 324 345',
                email: 'monicap@gmail.com',
                categories: 'family'
            },
            {
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
                App file (main)
                <ContactList/>
            </React.Fragment>
        );
    }
}

export default App;