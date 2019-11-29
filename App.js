import React, {Component} from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import {  createSwitchNavigator, NavigationActions } from 'react-navigation';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { Root, Toast } from 'native-base';
import { Provider } from 'react-redux';
import Splash from './sources/screens/splash';
import Home from './sources/screens/home';
import SideBar from './sources/screens/sidebar';
import { createStackNavigator } from 'react-navigation-stack';
const homeStack = createStackNavigator({Home},{headerMode:'none'})
const DrawerStack = createDrawerNavigator({
  homeStack,
}, {
  headerMode: 'float',
  drawerPosition: 'left',
  contentComponent: props => <SideBar {...props} />,
  
});
const AppSwitchNavigator = createSwitchNavigator({
  Splash,
  Home,
  DrawerStack,
}, { initialRouteName: 'Splash' });

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }


  componentWillMount = async () => {
    const AccesToken = await getTokenData();
    initInterceptor(() => {
      this.navigatorRef.dispatch(NavigationActions.navigate({ routeName: 'Home' }));
    });

    if (AccesToken) {
      setAuthorizationHeader(AccesToken.access_token);
    }
  }
  


  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });

    this.notificationSubscription = Notifications.addListener(this.handleNotification);

  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Root>
        <Provider store={configureStore()}>
          <AppSwitchNavigator ref={(navigatorRef) => { this.navigatorRef = navigatorRef; }} />
        </Provider>
      </Root>
    );
  }
}
