import React, {Component} from 'react';
import EditContactForm from './EditContactForm';

state = {
    showEditForm: true
};

class ToggleEditContactButton extends Component {
    render() {
        return (
            <React.Fragment>
                <button
                    onClick={() =>
                        this.setState({ showEditForm: !this.state.showEditForm })
                    }
                >
                edit
                </button>
            </React.Fragment>
        );
    }
}

export default ToggleEditContactButton;