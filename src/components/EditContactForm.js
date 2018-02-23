import React, { Component } from 'react';

class EditContactForm extends Component {

    state = {
        contactName: this.props.name,
        contactPhone: this.props.phone,
        contactEmail: this.props.email,
        contactCategory: this.props.categories
    };

    render() {
        return (
            <React.Fragment>
                <form>
                    <input

                    /><br/>
                    <input

                    /><br/>
                    <input

                    /><br/>
                    <input

                    /><br/>
                    <button>Update contact</button>
                </form>
            </React.Fragment>
        );
    }
}

export default EditContactForm;