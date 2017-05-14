import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';

class FormComponent extends Component {

    constructor(props) {
        super(props);
    }

    //field is an event handler
    renderTitleField(field) {
        return (
            <div>
                <label>{field.label}</label>
                <input
                    type={field.type}
                    {...field.input}
                />
                <span>{field.meta.touched ? field.meta.error : ''}</span>
            </div>
        );
    }

    renderTextarea(field) {
        return (
            <div>
                <label>{field.label}</label>
                <textarea {...field.input}></textarea>
                <span>{field.meta.touched ? field.meta.error : ''}</span>
            </div>
        );
    }

    onSubmit(values) {
        console.log('test');
        console.log(values);
        //this.props.history.push('/');

        //passing redirect after post is created
        //through callback to action
        //
        //this.props.createPost(values, () => {
        //  this.props.history.push('/');
        // });

        //in action:
        //....post(...).then(() => callback());
    }

    render() {

        const {handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    name="title"
                    label="TITLE"
                    type="text"
                    component={this.renderTitleField}
                />

                <Field
                    name="value"
                    label="TEXTAREA"
                    component={this.renderTextarea}
                />
                <br/>
                <button type="submit">Submit</button>
            </form>
        );
    }
}

//values contains all values user enters to form
// reutrn {title: 'asdf', value: 'ddd'}
function validate(values) {
    const errors = {};

    //validate inputs from values object
    if (!values.title) {
        errors.title = "Enter a title!";
    }
    if (!values.value) {
        errors.value = "Enter a value!";
    }

    //ife errors is {} then form is fine
    return errors;
}

export default reduxForm({
    form: 'formForm',
    // fields: _.keys(FIELDS),
    validate
})(
    FormComponent
    //connect(null, {createForm})(FormComponent)
);
