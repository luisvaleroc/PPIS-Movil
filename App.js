import React from 'react';
import { AppLoading } from 'expo';
import { Container, Text } from 'native-base';
import * as Font from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator, createSwitchNavigator, createDrawerNavigator, NavigationActions } from 'react-navigation';

const AppSwitchNavigator = createSwitchNavigator({
  Home
}, { initialRouteName: 'Loading' });

const AppSwitchNavigator = createSwitchNavigator({
  Home
}, { initialRouteName: 'Loading' });
const DrawerStack = createDrawerNavigator({
  //menudrawell
}, {
  headerMode: 'float',
  drawerPosition: 'left',
  contentComponent: props => <SideBar {...props} />,
});


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
    };
  }


  componentWillMount = async () => {
    const AccesToken = await getTokenData();
    initInterceptor(() => {
      this.navigatorRef.dispatch(NavigationActions.navigate({ routeName: 'Login' }));
    });

    if (AccesToken) {
      setAuthorizationHeader(AccesToken.access_token);
    }
  }
  componentDidMount() {
    this.notificationSubscription = Notifications.addListener(this.handleNotification);
  }


  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    });
    this.setState({ isReady: true });

    his.notificationSubscription = Notifications.addListener(this.handleNotification);

  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }

    return (
      <Container>
        <Text>Open up App.js to start working on your app!</Text>
      </Container>
    );
  }
}
