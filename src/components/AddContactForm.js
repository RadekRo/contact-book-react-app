import React, { Component } from 'react';

class AddContactForm extends Component {
    render() {

        const inputSize = 30;

        return (
            <React.Fragment>
                <form>
                    <input
                        name='name'
                        size={ inputSize }
                        placeholder='Enter name'
                    /><br/>
                    <input
                        name='phone'
                        size={ inputSize }
                        placeholder='Enter phone number'
                    /><br/>
                    <input
                        name='email'
                        size={ inputSize }
                        placeholder='Enter email'
                    /><br/>
                    <input
                        name='category'
                        size={ inputSize }
                        placeholder='Enter category (sep. by brackets)'
                    /><br/>
                    <button>Add contact</button>
                </form>
            </React.Fragment>
        );
    }
}

export default AddContactForm;