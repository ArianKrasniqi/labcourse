import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../../actions/user_actions';

class Register extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         firstname: "",
         lastname: "",
         email: "",
         password: "",
         passwordConfirmation: "",
         errors: []
      }
    }

    changeHandler = event => {
        this.setState({ [event.target.name]: event.target.value })
    }

    displayErrors = errors => 
    errors.map((error, i) => <p key={i}> {error} </p>)

    isFormValid = () => {
        let errors = [];
        let error;

        if (this.isFormEmpty(this.state)) {
            error = { message: "Fill the fields" };
            this.setState({ errors: errors.concat(error) });
        } else if (!this.isPasswordValid(this.state)) {
            error = { message: "Password is invalid " };
            this.setState({ errors: errors.concat(error) });
        } else {
            return true;
        }
    }

    isPasswordValid = ({ password, passwordConfirmation }) => {
        if (password.length < 6 || passwordConfirmation.length < 6) {
            return false;
        } else if (password !== passwordConfirmation) {
            return false;
        } else {
            return true;
        }
    }

    isFormEmpty = ({ firstname, lastname, email, password, passwordConfirmation }) => {
        return (
            !firstname.length ||
            !lastname.length ||
            !email.length ||
            !password.length ||
            !passwordConfirmation.length
        );
    }

    submitForm = event => {
        event.preventDefault();

        let dataToSubmit = {
            firstname: this.state.firstname,    
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            passwordConfirmation: this.state.passwordConfirmation,
        }

        if(this.isFormValid()) {
            this.setState({ errors: [] })
            this.props.dispatch(registerUser(dataToSubmit))
            .then(response => {                
                if (response.payload.success) {
                    this.props.history.push('/dashboard/login')
                } else {
                    this.setState({ 
                        errors: this.state.errors.concat("Something went wrong for your register")
                    });
                }
            })
            .catch(err => {
                this.setState({
                    errors: this.state.errors.concat(err)
                });
            })
        } else {
            console.error('form is not valid'); 
        }
    }
    
  render() {
    return (
      <div>
        <div className="container">
          <h2 className="center">Register Staff</h2>
          <div className="row">
              <form className="col s12" >
                <div className="row">
                    <div className="input-field col s12">
                    <input 
                        name="firstname"
                        value={this.state.firstname}
                        onChange={e => this.changeHandler(e)}
                        id="firstname"
                        type="text"
                        className="validate"
                    />
                    <label  className="active" htmlFor="email">FirstName</label>
                    <span 
                        className="helper-text"
                        data-error="Type a right email"
                        data-success="right"
                    />
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s12">
                    <input
                        name="lastname"
                        value={this.state.lastname}
                        onChange={e => this.changeHandler(e)}
                        id="lastname"
                        type="text"
                        className="validate"  
                    />
                    <label className="active" htmlFor="password">Lastname</label>
                    <span 
                        className="helper-text"
                        data-error="wrong"
                        data-success="right"
                    />    
                    </div>    
                </div>

                <div className="row">
                    <div className="input-field col s12">
                    <input
                        name="email"
                        value={this.state.email}
                        onChange={e => this.changeHandler(e)}
                        id="email"
                        type="email"
                        className="validate"  
                    />
                    <label className="active" htmlFor="email">Email</label>
                    <span 
                        className="helper-text"
                        data-error="wrong"
                        data-success="right"
                    />    
                    </div>    
                </div>

                <div className="row">
                    <div className="input-field col s12">
                    <input
                        name="password"
                        value={this.state.password}
                        onChange={e => this.changeHandler(e)}
                        id="password"
                        type="password"
                        className="validate"  
                    />
                    <label className="active" htmlFor="password">Password</label>
                    <span 
                        className="helper-text"
                        data-error="wrong"
                        data-success="right"
                    />    
                    </div>    
                </div>

                <div className="row">
                    <div className="input-field col s12">
                    <input
                        name="passwordConfirmation"
                        value={this.state.passwordConfirmation}
                        onChange={e => this.changeHandler(e)}
                        id="passwordConfirmation"
                        type="password"
                        className="validate"  
                    />
                    <label className="active" htmlFor="passwordConfirmation">Confirm Password</label>
                    <span 
                        className="helper-text"
                        data-error="wrong"
                        data-success="right"
                    />    
                    </div>    
                </div>                

                {this.state.errors.length > 0 && (
                    <div>
                        {this.displayErrors(this.state.errors)}
                    </div>
                )}

                <div className="row">
                    <div className="col s6">
                        <button 
                            className="btn green lighten-2" 
                            type="submit"
                            name="action"
                            onClick={this.submitForm}
                            >   Create an account
                        </button>
                        &nbsp; &nbsp; &nbsp; &nbsp;
                        <Link to="/dashboard/login">
                            <button 
                                className="btn green lighten-2" 
                                type="submit"
                                name="action"
                                >LOG IN
                            </button>
                        </Link>
                    </div>
                </div>      

              </form>
          </div>
      </div>
      </div>
    )
  }
}

export default connect()(Register);

