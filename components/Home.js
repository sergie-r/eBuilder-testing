import React, { Component } from 'react';
import { connect } from 'react-redux';
import Slider from './Slider';
import registerAction from './redux/actions/registerAction';

class Home extends Component {
  logOut() {
    const userData = {
      user: '',
      isRegistered: false,
    };
    this.props.registeredSuccess(userData);
    this.props.history.push('/log-in');
  }

  componentDidMount() {
    if (!this.props.app.isRegistered) {
      this.props.history.push('/register');
    }
  }

  render() {
    return (
      <div>
        <div className="header">
          {this.props.app.user}, welcome to our site!
        </div>
        <Slider />
        <button
          type="button"
          className="main_btn"
          onClick={() => this.logOut()}
        >Log out</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  app: state,
});

const mapDispatchToProps = dispatch => ({
  registeredSuccess: userData => dispatch(registerAction.registeredSuccess(userData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
