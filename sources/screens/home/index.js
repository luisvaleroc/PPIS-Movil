import React, {Component} from 'react';

class Home extends Component {

    render() {
      const {
        navigation,
        hasPermission,
        HIGH_DAY,
        LOW_DAY,
        MIDDLE_DAY,
      } = this.props;
      return (
        <Layout
          onScroll={this.setCurrentReadOffset}
          handleLoadMore={this.handleLoadMore}
          onEndReachedThreshold={0}
          setCurrentReadOffset={this.setCurrentReadOffset}
          header={
              {
                  title: 'Prospectos',
                  left: Layout.renderButton('menu', () => navigation.dispatch(DrawerActions.toggleDrawer())),
              }}
        >
          <Text>Que honda funciona!</Text>
        </Layout>
      );
    }
  }
  
  export default Home;