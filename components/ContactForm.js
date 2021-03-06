var ContactForm = React.createClass({
    propTypes: {
        contact: React.PropTypes.object.isRequired
    },

    render: function() {
        return (
            React.createElement('form', {className: 'contactForm'},

                React.createElement('label', {
                    htmlFor: "inputYourName",
                }, 'Name'), 

                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Name',
                    id: "inputYourName",
                    required: "",
                    value: this.props.contact.firstName,
                }),

                React.createElement('label', {
                    htmlFor: "inputYourSurname",
                }, 'Surname'), 

                React.createElement('input', {
                    type: 'text',
                    placeholder: 'Surname', 
                    id: "inputYourSurname",
                    required: "",
                    value: this.props.contact.lastName,
                }),

                React.createElement('label', {
                    htmlFor: "inputYourEmail",
                }, 'Email'), 

                React.createElement('input', {
                    htmlFor: "email",
                    type: 'email',
                    placeholder: 'Email',
                    id: "inputYourEmail",
                    required: "",
                    value: this.props.contact.email,
                }),

                React.createElement('button', {type: 'submit'}, "Add contact")
            )
        );
    },
});
