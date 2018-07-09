import Icon from 'react-native-vector-icons/EvilIcons'
import {OffCanvas3D} from 'react-native-off-canvas-menu'

this.state = {
    menuOpen: false
  };

  handleMenu() {
    const {menuOpen} = this.state
    this.setState({
      menuOpen: !menuOpen
    })
  }

render() {
    return (
      <View style={{flex: 1}}>
        <OffCanvas3D
        active={this.state.menuOpen}
        onMenuPress={this.handleMenu.bind(this)}
        backgroundColor={'#222222'}
        menuTextStyles={{color: 'white'}}
        handleBackPress={true}
        menuItems={[
          {
            title: 'Menu 1',
            icon: <Icon name="camera" size={35} color='#ffffff' />,
            renderScene: <MyScene/>
          },
          {
            title: 'Menu 2',
            icon: <Icon name="bell" size={35} color='#ffffff' />,
            renderScene: <AnotherScene/>
          }
        ]}/>
      </View>
    )
  }