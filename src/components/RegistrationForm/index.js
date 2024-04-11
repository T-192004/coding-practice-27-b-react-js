// Write your JS code here
import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isSubmitSucces: false,
    firstName: '',
    lastName: '',
    firstNameError: '',
    lastNameError: '',
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value, firstNameError: false})
  }

  onBlurFirstName = () => {
    const {firstName} = this.state
    if (firstName === '') {
      this.setState({firstNameError: true})
    }
  }

  renderFirstNameForm = () => {
    const {firstName, firstNameError} = this.state
    const errorMsg = <p className="error-msg">*Required</p>
    const errorClass = firstNameError ? 'error' : ''
    return (
      <div className="input-container">
        <label className="input-label" htmlFor="FirstName">
          FIRST NAME
        </label>
        <input
          className={`input-box ${errorClass}`}
          type="text"
          id="FirstName"
          placeholder="First Name"
          onBlur={this.onBlurFirstName}
          onChange={this.onChangeFirstName}
          value={firstName}
        />
        {firstNameError && errorMsg}
      </div>
    )
  }

  onBlurLastName = () => {
    const {lastName} = this.state
    if (lastName === '') {
      this.setState({lastNameError: true})
    }
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value, lastNameError:false})
  }

  renderLastNameForm = () => {
    const {lastName, lastNameError} = this.state
    const errorMsg = <p className="error-msg">*Required</p>
    const errorClass = lastNameError ? 'error' : ''
    return (
      <div className="input-container">
        <label className="input-label" htmlFor="LastName">
          LAST NAME
        </label>
        <input
          className={`input-box ${errorClass}`}
          type="text"
          id="LastName"
          placeholder="Last Name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
          value={lastName}
        />
        {lastNameError && errorMsg}
      </div>
    )
  }

  getTheErrorMsg = () => {
    const {firstName, lastName} = this.state
    if (firstName === '' && lastName === '') {
      this.setState({firstNameError: true, lastNameError: true})
    } else if (firstName === '') {
      this.setState({firstNameError: true})
    } else if (lastName === '') {
      this.setState({lastNameError: true})
    }
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {isSubmitSucces} = this.state
    if (isSubmitSucces) {
      this.setState({isSubmitSucces: false})
    } else {
      const {firstName, lastName} = this.state
      if (firstName !== '' && lastName !== '') {
        this.setState({isSubmitSucces: true, firstName: '', lastName: ''})
      } else {
        this.getTheErrorMsg()
      }
    }
  }

  renderSuccesForm = () => (
    <div className="success-container">
      <img
        className="success-icon"
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
      />
      <p className="success">Submitted Successfully</p>
    </div>
  )

  render() {
    const {isSubmitSucces} = this.state
    const buttonText = isSubmitSucces ? 'Submit Another Response' : 'Submit'
    return (
      <div className="registrationform-bg-container">
        <h1 className="registrationform-main-heading">Registration</h1>
        <form className="registration-form" onSubmit={this.onSubmitForm}>
          {isSubmitSucces ? (
            this.renderSuccesForm()
          ) : (
            <>
              {this.renderFirstNameForm()} {this.renderLastNameForm()}
            </>
          )}
          <button className="form-btn" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    )
  }
}

export default RegistrationForm
