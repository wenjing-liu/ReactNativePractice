/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class ReactNativePractice extends Component {
  render() {
    return (
      <Text style={styles.base} />
      <View style={styles.background}/>
      <View style={[styles.base, styles.background]}/>
      <View style={[styles.base, this.state.active && styles.active]} />
      <View style={[styles.base, {
        width: this.state.width,
        height: this.state.width * this.state.aspectRatio
      }]} />
      <Image source={require('./my-icon.png')}/>
      <Image source={{uri:'app_icon'}}  style={{width: 40, height: 40}} />
      <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}} style={{width: 400, height: 400}}/>

    );
  }
}

var styles = StyleSheet.create({
  base: {
    width: 38,
    height: 38,
  },
  background: {
    backgroundColor: '#222222',
  },
  active: {
    borderWidth: 2,
    borderColor: '#00ff00',
  }
});


var List = React.createClass({
  propTypes: {
    style: View.propTypes.style,
    elementStyle: View.propTypes.style,
  },
  render: function(){
    return (
      <View style={this.props.style}>
        {elements.map((element) => <View style={[styles.element, this.props.elementStyle]}/>)}
      </View>
    );
  }
});

<List style={styles.list} elementStyle={styles.listElement}/>

class Playground exntends React.Component{
  constructor(props: any){
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }
  render(): ReactElement{
    return (
      <Animated.Image
        source={{uri:'http://i.imgur.com/XMKOH81.jpg'}}
        style={{
          flex: 1,
          transform: [
            {scale: this.state.bounceValue},
          ]
        }}
      />
    );
  }

  componentDidMount(){
    this.state.bounceValue.setValue(1.5);
    Animated.spring(
      this.state.bounceValue,
      {
        toValue: 0.8,
        friction: 1,
      }
    ).start();
  }
}


AppRegistry.registerComponent('ReactNativePractice', () => ReactNativePractice);
