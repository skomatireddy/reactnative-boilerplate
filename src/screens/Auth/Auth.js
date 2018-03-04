import React from 'react';
import { View, Text } from 'react-native'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
// import { createStructuredSelector } from 'reselect';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';

import reducer from './reducer';
import saga from './saga';

import {
  login,
  getUserObjectFromToken,
} from './actions';
import Icon from 'react-native-vector-icons/FontAwesome';
import { makeSelectUserToken,
  makeSelectIsLoggedIn,
  makeSelectUserObject,
} from './selectors';

class Authentication extends React.PureComponent {

  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    if (typeof global.self === 'undefined') {
      global.self = global;
    }
  }

  onNavigatorEvent = (event) => {
    if(event.type === 'NavBarButtonPress'){
      if(event.id === "navSideDrawer") {
        this.props.navigator.toggleDrawer({
          side: "left"
        })
      }
    }
  };

  componentWillMount() {
    if (!this.props.isLoggedIn) {
      return this.props.onNotLoggedIn();
    }
    return '';
  }

  componentDidMount() {
    Icon.getImageSource('align-justify', 26).then((menu) => {
      debugger;
        this.props.navigator.setButtons({
          left: [
            { id: 'navSideDrawer', icon: menu }
          ]
        });
    });

  }

  getUserObject = () => {
    this.props.onGetUserObjectFromToken();
  };


  render() {
    console.log('props', this.props);
    if(this.props.fbData) {
      return (<View>
        <Text>Authentication Component</Text>
      </View>);
    }
    return null;
  }
}


Authentication.propTypes = {
  onNotLoggedIn: PropTypes.func,
  userToken: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  onGetUserObjectFromToken: PropTypes.func,
  onShowModal: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    onNotLoggedIn: (evt) => dispatch(login(evt)),
    onGetUserObjectFromToken: (evt) => dispatch(getUserObjectFromToken(evt))
  };
}

export function mapStateToProps(state) {
  return {
    fbData: state.auth.token
  };
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'auth', reducer });
const withSaga = injectSaga({ key: 'auth', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Authentication);
