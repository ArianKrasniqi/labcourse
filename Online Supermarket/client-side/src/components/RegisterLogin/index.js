import React, { Component } from 'react'

class RegisterLogin extends Component {
  render() {
    return (
      <div className="container">
          <h2 className="center"> Log In</h2>
          <div className="row">

              <form className="col s6" >
                <div className="row">
                    <div className="input-field col s10">
                    <input 
                        name="email"
                        //value={this.state.email}
                        //onChange={e => this.changeHandler(e)}
                        id="email"
                        type="email"
                        className="validate"
                    />
                    <label htmlFor="email">Email</label>
                    <span 
                        className="helper-text"
                        data-error="Type a right email"
                        data-success="right"
                    />
                    </div>
                </div>

                <div className="row">
                    <div className="input-field col s10">
                    <input
                        name="password"
                        //value={this.state.password}
                        //onChange={e => this.changeHandler(e)}
                        id="password"
                        type="password"
                        className="validate"  
                    />
                    <label htmlFor="password">Password</label>
                    <span 
                        className="helper-text"
                        data-error="wrong"
                        data-success="right"
                    />    
                    </div>    
                </div>

                <div className="row">
                    <div className="col s12 center ma">
                        <button 
                            className="btn green lighten-2" 
                            type="submit"
                            name="action"
                            //onClick={this.submitForm}
                        >LOG IN
                        </button>
                    </div>
                </div>

              </form>

          </div>
      </div>
    )
  }
}

export default RegisterLogin
