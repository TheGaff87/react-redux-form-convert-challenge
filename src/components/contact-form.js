import React from 'react';
import {reduxForm, Field} from 'redux-form';

export default function ContactForm() {
    return (
        <form onSubmit={props.handleSubmit(values =>
                    onSubmit(values)>
            <label htmlFor="name">Your Name</label>
            <Field name="name" id="name" type="text" component="input" />
            <label htmlFor="email">Email address</label>
            <Field name="email" id="email" type="email" component="input" />
            <label htmlFor="message">Message</label>
            <Field name="message" id="message" component="textarea" />
            <button>Submit</button>
        </form>
    );
}

export default reduxForm({
    form: 'contact'
})(ContactForm);
