import React, { Component } from 'react';
import { StatusBar } from 'react-native';
import { isEmpty } from 'lodash';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Text } from 'native-base';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Conditional from '../common/components/Conditional';

class Layout extends Component {
  static renderButton = (icon, onPress = () => {}, text = '') => (
    <Button transparent onPress={onPress}>
      {!isEmpty(text) && <Text>{text}</Text>}
      <Icon name={icon} style={styles.leftIcon} />
    </Button>
  );

  render() {
    const {
      header, children,
    } = this.props;
    return (
      <Container>
        <Header style={styles.header}>
          <StatusBar barStyle="light-content" />
          <Conditional if={!isEmpty(header.left)}>
            <Left>
              {header.left}
            </Left>
          </Conditional>
          <Body>
            <Title style={{ ...styles.title, fontSize: header.title.length < 15 ? 20 : 13 }}>{header.title}</Title>
          </Body>
          <Conditional if={!isEmpty(header.right)}>
            <Right>
              {header.right}
            </Right>
          </Conditional>
        </Header>
        {children}
      </Container>
    );
  }
}

const styles = {
  header: {
    backgroundColor: '#FFC300',
    paddingTop: '5%',
    paddingBottom: '10%',
  },
  title: {
    color: 'white',
  },
  leftIcon: {
    color: 'white',
  },
};

Layout.propTypes = {
  header: PropTypes.shape({
    title: PropTypes.string,
    left: PropTypes.element,
    right: PropTypes.element,
  }),
};

Layout.defaultProps = {
  header: {
    title: 'Yout Title',
    left: null,
    right: null,
  },
};

const mapProps = ({ generalData }) => (generalData);

export default connect(mapProps)(Layout);