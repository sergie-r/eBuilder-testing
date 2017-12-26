import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Link } from 'react-router-dom';
import registerAction from './redux/actions/registerAction';

class RegistrationPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      disabled: true,
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const userData = {
      user: this.state.user,
      isRegistered: true,
    };
    this.props.registeredSuccess(userData);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (this.state.user.length >= 3 && this.state.pass.length >= 3) {
      this.setState({disabled: false});
    } else {
      this.setState({disabled: true});
    }
  }

  render() {
    if (this.props.app.isRegistered) {
      return <Redirect to={'/'} />
    }

    return (
      <React.Fragment>
        <div className="reg_title">Please, Register or <Link className="log_in_link" to={'/log-in'}>Sign In</Link> to enter the site</div>
        <div className="reg_form_wr">
          <form onSubmit={e => this.onSubmit(e)}>
            <div className="input_field_wr">
              <label>User Name</label>
              <input
                type="text"
                className="input_field"
                name="user"
                value={this.state.user}
                onChange={e => this.onChange(e)}
              />
            </div>
            <div className="input_field_wr">
              <label>Password</label>
              <input
                type="password"
                className="input_field"
                name="pass"
                value={this.state.pass}
                onChange={e => this.onChange(e)}
              />
            </div>
            <input
              type="submit"
              className="submit_btn"
              value="Register"
              disabled={this.state.disabled}
            />
          </form>
        </div>
        <span className="hint">
          Each field must contain at least 3 characters
        </span>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  app: state,
});

const mapDispatchToProps = dispatch => ({
  registeredSuccess: userData => dispatch(registerAction.registeredSuccess(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationPage);
