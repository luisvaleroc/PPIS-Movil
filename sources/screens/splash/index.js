
import React, { Component } from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';

import { isAuthenticated } from '../../security';

class Splash 
extends Component {
  constructor(props) {
    super(props);
    this.auth();
  }

    auth = async () => {
      //const authenticated = await isAuthenticated();
      const authenticated = true;
      const { navigation } = this.props;
      if (authenticated) {
        navigation.navigate('Home');
      } else {
        navigation.navigate('Login');
      }
    }

    render() {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
          <StatusBar barStyle="default" />
        </View>
      );
    }
}

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default Loading;
splash 