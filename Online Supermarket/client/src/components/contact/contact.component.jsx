import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component'

import './contact.styles.scss';

class Contact extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      name: '',
      lastname: '',
      phone: '',
      email: '',
      subject: ''
    }
  }

  submitHandler = event => {
    event.preventDefault();

    this.setState({name: '', lastname: '', phone: '', email: '', subject: ''})
  }

  changeHandler = event => {
    const {value, name} = event.target;

    this.setState({ [name]: value })
  }

  render() {
   return(
    <div className='contact'>
      <h2>Ask what you want</h2>
      <span>We will response as fast as we can!</span>

      <form onSubmit={this.submitHandler}>
        <FormInput name='name' type='text' value={this.state.name} handleChange={this.changeHandler} label='Name' required/>
        <FormInput name='lastname' type='text' value={this.state.lastname} handleChange={this.changeHandler} label='Lastname'/>
        <FormInput name='phone' type='text' value={this.state.phone} handleChange={this.changeHandler} label='Phone'/>
        <FormInput name='email' type='email' value={this.state.email} handleChange={this.changeHandler} label='Email' required/>
        <FormInput name='subject' type='text' value={this.state.subject} handleChange={this.changeHandler} label='Subject' required/>

        <CustomButton type='submit' value='Submit Form'> 
          Send Message
        </CustomButton>
      </form>
   </div> 
  )}
}

export default Contact;