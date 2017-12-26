import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import _isEqual from 'lodash/isEqual';
import registerAction from './redux/actions/registerAction';

class LogInPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: '',
      pass: '',
      err: false,
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const { user, pass } = this.state;
    const userInput = { user, pass };
    const userData = {
      user: this.state.user,
      isRegistered: true,
    };
    const loggedData = {
      user: this.props.app.userLogged,
      pass: this.props.app.passLogged,
    };
    if (_isEqual(userInput, loggedData)) {
      this.setState({ err: false });
      this.props.registeredSuccess(userData);
    } else {
      this.setState({ err: true });
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  render() {
    if (this.props.app.isRegistered) {
      return <Redirect to={'/'} />
    }

    return (
      <React.Fragment>
        <div className="reg_title">Please, Log In to enter the site</div>
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
              className="main_btn"
              value="Log In"
              disabled={this.state.disabled}
            />
          </form>
        </div>
        {this.state.err &&
        <span className="hint">
          Wrong login or pass
        </span>
        }
        <span className="hint">
          login: admin <br/>
          pass: 123123
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

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);
