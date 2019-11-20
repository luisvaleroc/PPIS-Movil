

import React, { Component } from 'react';
import { Image } from 'react-native';
import { connect } from 'react-redux';
import { Container, Content, Text, List, ListItem } from 'native-base';
import { LinearGradient, Notifications, Constants } from 'expo';
import decode from 'jwt-decode';
import * as actions from '../store/general/actions';
import logo from '../../assets/icon.png';
import UserService from '../services/users';
import { logOut, getTokenData } from '../security';


class SideBar extends Component {
  componentWillMount() {
    this.props.loadPermissions();
  }

  labelTest = (releaseChannel) => {
    if (releaseChannel === 'default') return 'QA';
    if (releaseChannel === 'staging') return 'staging';
    return '';
  }

  logOut = async () => {
    const authenticated = await getTokenData();
    const userService = new UserService();
    const userid = decode(authenticated).id;

    userService.logout(userid).then(() => {
      Notifications.dismissAllNotificationsAsync();
      Notifications.setBadgeNumberAsync(1);
      Notifications.setBadgeNumberAsync(0);

      logOut().then(() => {
        this.props.navigation.navigate('Loading');
      });
    });
  };

  viewHasntPermission = (route, evaluatingRoute, permission) => {
    if (route === evaluatingRoute) {
      if (this.props.hasPermission(permission)) {
        return false;
      }
      return true;
    }
    return false;
  }

  renderListItems = itemsList => itemsList.map((value) => {
    return (
      <ListItem
        key={value.name}
        button
        onPress={() => this.props.navigation.navigate(value.route)}
        style={listItemStyle}
      >
        <Text>{value.name}</Text>
      </ListItem>);
  });

  render() {
    const routesArray = [
      { name: 'Home', route: 'Home' },
    ];
    return (
      <Container>
        <Content>
          <LinearGradient
            colors={['#ffffff', '#ffffaa']}
            style={{
              width: '100%', alignItems: 'center', paddingTop: 5,
            }}
            start={[0, 0]}
          >
            <Text>{'\n'}</Text>
            <Image
              square
              style={{ height: 95, width: 100 }}
              source={logo}
            />
            <Text>{'\n'}</Text>
            <Text>{this.labelTest(Constants.manifest.releaseChannel)}</Text>
          </LinearGradient>
          <List>
            {this.renderListItems(routesArray)}
            <ListItem
              button
              onPress={this.logOut}
              style={listItemStyle}
            >
              <Text>Cerrar sesión</Text>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}

const listItemStyle = {
  borderBottomWidth: 1,
  borderBottomColor: '#f2f2f2',
};

export default SideBar;