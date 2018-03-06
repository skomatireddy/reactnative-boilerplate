import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { createStructuredSelector } from 'reselect';

// import ArtistsScreen  from '../../screens/ArtistsScreen/Artists';

import injectReducer from '../../utils/injectReducer';
import injectSaga from '../../utils/injectSaga';

import reducer from './reducer';
import saga from './saga';

import {
  login,
  getUserObjectFromToken,
} from './actions';

class Authentication extends React.PureComponent {
  constructor(props) {
    super(props);
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent);
    this.getUserObject();
    if (typeof global.self === 'undefined') {
      global.self = global;
    }
  }

  componentWillMount() {
    if (!this.props.isLoggedIn) {
      return this.props.onNotLoggedIn();
    }
    return '';
  }

  componentDidMount() {
    Icon.getImageSource('align-justify', 26).then((menu) => {
      this.props.navigator.setButtons({
        left: [
          { id: 'navSideDrawer', icon: menu },
        ],
      });
    });
  }

  onNavigatorEvent = (event) => {
    if (event.type === 'NavBarButtonPress') {
      if (event.id === 'navSideDrawer') {
        this.props.navigator.toggleDrawer({
          side: 'left',
        });
      }
    }
    if (event.type === 'DeepLink') {
      const parts = event.link; // Link parts
      // const payload = event.payload; // (optional) The payload
      console.log('auth parts for artists screen nav', parts);
      if (parts === 'swift-alerts-mobile.Artists') {
        this.props.navigator.push({
          title: 'Your Artists',
          screen: 'swift-alerts-mobile.Artists',
          animated: true,
          animationType: 'fade'
        });
      }
    }
    if (event.type === 'DeepLink') {
      const parts = event.link; // Link parts
      // const payload = event.payload; // (optional) The payload
      console.log('auth parts for artists screen nav', parts);
      if (parts === 'swift-alerts-mobile.Settings') {
        this.props.navigator.push({
          title: 'Your Settings',
          screen: 'swift-alerts-mobile.Settings',
          animated: true,
          animationType: 'fade'
        });
      }
    }
  };

  getUserObject = () => {
    this.props.onGetUserObjectFromToken();
  };


  render() {
    // if (this.props.followedArtists) {
    //   this.props.navigator.push({
    //     title: 'Your Artists',
    //     screen: 'swift-alerts-mobile.Artists',
    //     animated: true,
    //     animationType: 'fade',
    //   });
    // }
    return (
      <View>
        <Text>Home Authentication</Text>
      </View>);
  }
}


Authentication.propTypes = {
  navigator: PropTypes.object,
  isLoggedIn: PropTypes.bool,
  // followedArtists: PropTypes.object,
  onGetUserObjectFromToken: PropTypes.func,
  onNotLoggedIn: PropTypes.func
};

export function mapDispatchToProps(dispatch) {
  return {
    onNotLoggedIn: (evt) => dispatch(login(evt)),
    onGetUserObjectFromToken: (evt) => dispatch(getUserObjectFromToken(evt)),
  };
}

export function mapStateToProps(state) {
  return {
    fbData: state.auth.token,
    followedArtists: state.auth.userObject,
  };
}


const withConnect = connect(mapStateToProps, mapDispatchToProps);

// const withReducer = injectReducer({ key: 'auth', reducer });
const withSaga = injectSaga({ key: 'auth', saga });

export default compose(
  withSaga,
  withConnect,
)(Authentication);
