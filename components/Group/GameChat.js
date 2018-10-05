import React, { Component } from 'react';
import { Text, View, Button, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { List, ListItem } from 'react-native-elements';
const list = [
  {
    title: "WHY IS PUBG DYING?",
    img_url: "https://png.icons8.com/small/1600/filled-chat.png"
  },
  {
    title: "Need Duo Partner!",
    img_url: "https://png.icons8.com/small/1600/filled-chat.png"
  },
  {
    title: "Need Squad Members",
    img_url: "https://png.icons8.com/small/1600/filled-chat.png"
  },
  {
    title: "Zombies Team!",
    img_url: "https://png.icons8.com/small/1600/filled-chat.png"
  },
];

class GameChat extends Component {
  state = {
      currentRoomID: '',
      list: [
        {
          title: "WHY IS PUBG DYING?",
          img_url: "https://png.icons8.com/small/1600/filled-chat.png",
          chatroomID: 17845362
        },
        {
          title: "Need Duo Partner!",
          img_url: "https://png.icons8.com/small/1600/filled-chat.png",
          chatroomID: 17845379
        },
        {
          title: "Need Squad Members",
          img_url: "https://png.icons8.com/small/1600/filled-chat.png",
          chatroomID: 17845410
        },
        {
          title: "Zombies Team!",
          img_url: "https://png.icons8.com/small/1600/filled-chat.png",
          chatroomID: 17845437
        },
      ]
  }

  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', 'A Nested Details Screen'),
      headerRight: 
        <Ionicons name='md-add' size={35} style = {{marginRight: 10, justifyContent: 'center', alignItems: 'center'}}/>
    };
  };


  selectGroup = (gameTitle, img_url, ID) => () => {
      this.setState({
          currentRoomID: ID
      },
      () => this.props.navigation.navigate('Game', { title: gameTitle, img_url, CHAT_ROOM_ID: this.state.currentRoomID })
      )
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <List containerStyle={{ marginBottom: 20 }}>
          {
            this.state.list.map((l) => (
              <ListItem
                onPress={this.selectGroup(l.title, l.img_url, l.chatroomID)}
                roundAvatar
                avatar={{ uri: l.img_url }}
                key={l.title}
                title={l.title}
              />
            ))
          }
        </List>
      </View>
    );
  }
}

export default GameChat;