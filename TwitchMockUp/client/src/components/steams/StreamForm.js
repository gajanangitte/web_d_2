import React, { Component } from 'react'
import { Field, reduxForm } from 'redux-form'; 


class StreamForm extends Component {

    renderError({error, touched }) {
        if(touched && error) {
            return (
                <div className='ui error message'>
                         {error}
                </div>
            )
        } 
    }

    renderInput = (formProps) => {   
        // console.log(formProps.meta);
        const className = `field ${formProps.meta.error && formProps.meta.touched ? 'error' : ''}`;

        return (
            <div className={className}>
                <label> {formProps.label}</label>
                
                <input {...formProps.input} autoComplete='off' />
                {this.renderError(formProps.meta)}
                {/* <div>{formProps.meta.error}</div> */}
            </div>
        )
    }

    onSumbit = (formValues) => {
    this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSumbit)} className='ui form error'>
                <Field name='title' component={this.renderInput} label='Enter Title' />
                <Field name='description' component={this.renderInput} label='Enter Description' />
                
                <button className='ui button primary'> Save </button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        errors.title = 'Enter a title'
    }

    if(!formValues.description) {
        errors.description = 'Enter a description'
    }

    return errors;

}

export default  reduxForm({
    form: 'streamForm',
    validate: validate,
})(StreamForm);
